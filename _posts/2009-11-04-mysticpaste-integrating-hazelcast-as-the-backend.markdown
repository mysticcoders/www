---
layout: post
status: publish
published: true
title: MysticPaste - Integrating Hazelcast as the backend
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1221
wordpress_url: http://www.mysticcoders.com/?p=1221
date: '2009-11-04 08:30:09 +0000'
date_gmt: '2009-11-04 15:30:09 +0000'
tags: []
comments: true
---
<p>After meeting <a href="http://www.jroller.com/talipozturk/" target="_blank">Talip Ozturk</a> at <a href="http://www.java2days.com" target="_blank">Java2Days</a> in Sofia back in October, I was inspired to take <a href="http://www.hazelcast.com/" target="_blank">Hazelcast</a> out for a test drive.  What better way to do this, than to throw it head first into our little pet project <a href="http://www.mysticpaste.com" target="_blank">pastebin</a>!  After perusing the well put together documentation on the project's website, I set out modifying the codebase to additionally support Hazelcast as a storage mechanism.</p>
<p>I aim to keep this short and sweet, find the latest code to <a href="http://kenai.com/projects/mystic-apps/sources" target="_blank">download including Hazelcast</a>.  We'll go over:</p>
<ol>
<li>How to get access to a Map of your own</li>
<li>The hazelcast.xml file for configuration</li>
<li>Adding listeners for CRUD events</li>
<li>Rebuilding our pastes if container dies</li>
</ol>
<h2>A map of your very own</h2>
<p>Our super clustered highly scalable data distribution platform has a lot of really cool features, and for now ... we just need a Map.  The nice thing about Hazelcast is getting a cluster together is a fairly short bit of Java code, and away we go.  The hazelcast core jar comes with a great command line tool for testing things and can be run like this:</p>
<pre lang="bash" colla="+">
java -Djava.net.preferIPv4Stack=true -cp hazelcast-1.7.1.jar com.hazelcast.examples.TestApp
</pre>
<p>Hazelcast uses namespaces to differentiate datasets, for our purposes we just need one namespace and we're calling it "default".  Here's the code that grabs a Map from the Hazelcast cluster:</p>
<pre lang="java" colla="+">
        IMap map = Hazelcast.getMap(namespace);
</pre>
<p>When we save a paste, if its public we save only the long id, and if its private we also save the unique key which points back to the paste id for lookup purposes:</p>
<pre lang="java" colla="+">
        IMap map = Hazelcast.getMap(namespace);

        item.setId(((MysticPasteHazelcastApplication) Application.get()).nextId());

        map.put(item.getId(), item);

        if(item.isPrivate()) {
            map.put(item.getPrivateToken(), item.getId());
        } else {
            List<Long> indexList = ((MysticPasteHazelcastApplication) Application.get()).getIndexList();
            indexList.add(item.getId());
        }
</pre>
<p>Grabbing a history of pastes utilizes our generated indexList which is a CopyOnWriteArrayList so special fun is taken to sort and reverse the list, and splice it for the return to our DataProvider:</p>
<pre lang="java" colla="+">
        List<Long> list = ((MysticPasteHazelcastApplication) Application.get()).getIndexList();

        if(list == null) return Collections.EMPTY_LIST;

        // CopyOnWriteArrayList doesn't give us the ability to sort and reverse, so we put in a regular ArrayList for the "find"
        List<Long> unsafeList = new ArrayList<Long>(list);
        Collections.sort(unsafeList);
        Collections.reverse(unsafeList);

        List<Long> pageIds = unsafeList.subList(startIndex, (unsafeList.size() < (startIndex + count) ? unsafeList.size() : (startIndex + count)));
        List<PasteItem> pagedList = new ArrayList<PasteItem>();

        for (Long pasteItemId : pageIds) {
            pagedList.add((PasteItem) map.get(pasteItemId));
        }
</pre>
<p>So you can see, we're dealing with very simple conventions to save our data, denormalized to work with the key/value storage mechanism.  Fun, right?  </p>
<h2>Yes, ma there's an xml config file</h2>
<p>While I don't love configuration done in XML, this one is simple enough.  You can read up on some of the options available to you on the <a href="http://code.google.com/docreader/#p=hazelcast&s=hazelcast&t=Config" target="_blank">Hazelcast wiki</a>.</p>
<h2>Is anyone listening to this?</h2>
<p>In order to provide the paged history functionality available in the pastebin, we have to keep all id's in an application scoped list.  And Hazelcast doesn't disappoint in allowing you a really clean and simple method of achieving this with it's <a href="http://code.google.com/docreader/#p=hazelcast&s=hazelcast&t=Events" target="_blank">Distributed Events</a>.  Here's how we achieve what we want with the pastebin:</p>
<pre lang="java" colla="+">
        IMap map = Hazelcast.getMap(namespace);

        map.addEntryListener(new EntryListener() {

            public void entryAdded(EntryEvent entryEvent) {
                if (entryEvent.getValue() instanceof PasteItem) {
                    PasteItem pasteItem = (PasteItem) entryEvent.getValue();

                    if (!pasteItem.isPrivate()) {
                        indexList.add(pasteItem.getId());
                    }
                }
            }

            public void entryRemoved(EntryEvent entryEvent) {}
            public void entryUpdated(EntryEvent entryEvent) {}
            public void entryEvicted(EntryEvent entryEvent) {}
        }, true);
</pre>
<p>As you can see, we are notified whenever an entry gets added, and we proceed to add it to our growing application scoped list if it's a public paste.  We put this block of code in a constructor or init() block of our extended WicketApplication.</p>
<h2>We can rebuild it, we have the technology</h2>
<p>So now we have a nice cluster setup, we've got pastes being saved and our list being populated so the history page works.  What if the container dies?  We still have our cluster in place, so the paste data is "backed up" and can get reattached, but our application scoped list of paste id's, will be empty.  We solve this by iterating over the existing Map, and rebuilding our list upon the start of the Application:</p>
<pre lang="java" colla="+">
        List<Long> initialIndexList = new ArrayList<Long>();

        if (lastIdentifier.longValue() == 0L && indexList.size() == 0) {
            // rebuild our index list and lastIdentifier
            Set keys = map.keySet();
            for (Object key : keys) {
                if (key instanceof Long) {
                    Object keyValue = map.get(key);
                    if (keyValue instanceof PasteItem) {
                        PasteItem pasteItem = (PasteItem) keyValue;
                        if (lastIdentifier.longValue() < pasteItem.getId()) {
                            lastIdentifier = new AtomicLong(pasteItem.getId());
                        }
                        initialIndexList.add(pasteItem.getId());
                    }
                }
            }

            Collections.sort(initialIndexList);
            indexList = new CopyOnWriteArrayList<Long>(initialIndexList);
        }
</pre>
<h2>Next steps</h2>
<p>The rest of the code <a href="http://kenai.com/projects/mystic-apps/sources" target="_blank">can be reviewed</a>, and of course run using the Maven build tool.  One thing that would probably make it into a production version that hasn't been discussed here is persistence upon cluster failing - if the whole thing dies, we need to store this in a more permanent location.  See the <a href="http://code.google.com/docreader/#p=hazelcast&s=hazelcast&t=MapPersistence" target="_blank">Persistence page on the Hazelcast wiki</a>.</p>
<p>Here at Mystic we certainly like seeing new tools that can make our jobs easier, and it certainly looks like <a href="http://www.hazelcast.com">Hazelcast</a> fits that nicely.</p>
