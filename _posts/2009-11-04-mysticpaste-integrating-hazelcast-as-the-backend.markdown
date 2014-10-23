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
categories:
- Apache Wicket
tags: []
comments: []
---
<p>After meeting <a href="http:&#47;&#47;www.jroller.com&#47;talipozturk&#47;" target="_blank">Talip Ozturk<&#47;a> at <a href="http:&#47;&#47;www.java2days.com" target="_blank">Java2Days<&#47;a> in Sofia back in October, I was inspired to take <a href="http:&#47;&#47;www.hazelcast.com&#47;" target="_blank">Hazelcast<&#47;a> out for a test drive.  What better way to do this, than to throw it head first into our little pet project <a href="http:&#47;&#47;www.mysticpaste.com" target="_blank">pastebin<&#47;a>!  After perusing the well put together documentation on the project's website, I set out modifying the codebase to additionally support Hazelcast as a storage mechanism.</p>
<p>I aim to keep this short and sweet, find the latest code to <a href="http:&#47;&#47;kenai.com&#47;projects&#47;mystic-apps&#47;sources" target="_blank">download including Hazelcast<&#47;a>.  We'll go over:</p>
<ol>
<li>How to get access to a Map of your own<&#47;li>
<li>The hazelcast.xml file for configuration<&#47;li>
<li>Adding listeners for CRUD events<&#47;li>
<li>Rebuilding our pastes if container dies<&#47;li><br />
<&#47;ol></p>
<h2>A map of your very own<&#47;h2><br />
Our super clustered highly scalable data distribution platform has a lot of really cool features, and for now ... we just need a Map.  The nice thing about Hazelcast is getting a cluster together is a fairly short bit of Java code, and away we go.  The hazelcast core jar comes with a great command line tool for testing things and can be run like this:</p>
<pre lang="bash" colla="+">
java -Djava.net.preferIPv4Stack=true -cp hazelcast-1.7.1.jar com.hazelcast.examples.TestApp<br />
<&#47;pre></p>
<p>Hazelcast uses namespaces to differentiate datasets, for our purposes we just need one namespace and we're calling it "default".  Here's the code that grabs a Map from the Hazelcast cluster:</p>
<pre lang="java" colla="+">
        IMap map = Hazelcast.getMap(namespace);<br />
<&#47;pre></p>
<p>When we save a paste, if its public we save only the long id, and if its private we also save the unique key which points back to the paste id for lookup purposes:</p>
<pre lang="java" colla="+">
        IMap map = Hazelcast.getMap(namespace);</p>
<p>        item.setId(((MysticPasteHazelcastApplication) Application.get()).nextId());</p>
<p>        map.put(item.getId(), item);</p>
<p>        if(item.isPrivate()) {<br />
            map.put(item.getPrivateToken(), item.getId());<br />
        } else {<br />
            List<Long> indexList = ((MysticPasteHazelcastApplication) Application.get()).getIndexList();<br />
            indexList.add(item.getId());<br />
        }<br />
<&#47;pre></p>
<p>Grabbing a history of pastes utilizes our generated indexList which is a CopyOnWriteArrayList so special fun is taken to sort and reverse the list, and splice it for the return to our DataProvider:</p>
<pre lang="java" colla="+">
        List<Long> list = ((MysticPasteHazelcastApplication) Application.get()).getIndexList();</p>
<p>        if(list == null) return Collections.EMPTY_LIST;</p>
<p>        &#47;&#47; CopyOnWriteArrayList doesn't give us the ability to sort and reverse, so we put in a regular ArrayList for the "find"<br />
        List<Long> unsafeList = new ArrayList<Long>(list);<br />
        Collections.sort(unsafeList);<br />
        Collections.reverse(unsafeList);</p>
<p>        List<Long> pageIds = unsafeList.subList(startIndex, (unsafeList.size() < (startIndex + count) ? unsafeList.size() : (startIndex + count)));<br />
        List<PasteItem> pagedList = new ArrayList<PasteItem>();</p>
<p>        for (Long pasteItemId : pageIds) {<br />
            pagedList.add((PasteItem) map.get(pasteItemId));<br />
        }<br />
<&#47;pre></p>
<p>So you can see, we're dealing with very simple conventions to save our data, denormalized to work with the key&#47;value storage mechanism.  Fun, right?  </p>
<h2>Yes, ma there's an xml config file<&#47;h2><br />
While I don't love configuration done in XML, this one is simple enough.  You can read up on some of the options available to you on the <a href="http:&#47;&#47;code.google.com&#47;docreader&#47;#p=hazelcast&s=hazelcast&t=Config" target="_blank">Hazelcast wiki<&#47;a>.</p>
<h2>Is anyone listening to this?<&#47;h2><br />
In order to provide the paged history functionality available in the pastebin, we have to keep all id's in an application scoped list.  And Hazelcast doesn't disappoint in allowing you a really clean and simple method of achieving this with it's <a href="http:&#47;&#47;code.google.com&#47;docreader&#47;#p=hazelcast&s=hazelcast&t=Events" target="_blank">Distributed Events<&#47;a>.  Here's how we achieve what we want with the pastebin:</p>
<pre lang="java" colla="+">
        IMap map = Hazelcast.getMap(namespace);</p>
<p>        map.addEntryListener(new EntryListener() {</p>
<p>            public void entryAdded(EntryEvent entryEvent) {<br />
                if (entryEvent.getValue() instanceof PasteItem) {<br />
                    PasteItem pasteItem = (PasteItem) entryEvent.getValue();</p>
<p>                    if (!pasteItem.isPrivate()) {<br />
                        indexList.add(pasteItem.getId());<br />
                    }<br />
                }<br />
            }</p>
<p>            public void entryRemoved(EntryEvent entryEvent) {}<br />
            public void entryUpdated(EntryEvent entryEvent) {}<br />
            public void entryEvicted(EntryEvent entryEvent) {}<br />
        }, true);<br />
<&#47;pre></p>
<p>As you can see, we are notified whenever an entry gets added, and we proceed to add it to our growing application scoped list if it's a public paste.  We put this block of code in a constructor or init() block of our extended WicketApplication.</p>
<h2>We can rebuild it, we have the technology<&#47;h2><br />
So now we have a nice cluster setup, we've got pastes being saved and our list being populated so the history page works.  What if the container dies?  We still have our cluster in place, so the paste data is "backed up" and can get reattached, but our application scoped list of paste id's, will be empty.  We solve this by iterating over the existing Map, and rebuilding our list upon the start of the Application:</p>
<pre lang="java" colla="+">
        List<Long> initialIndexList = new ArrayList<Long>();</p>
<p>        if (lastIdentifier.longValue() == 0L && indexList.size() == 0) {<br />
            &#47;&#47; rebuild our index list and lastIdentifier<br />
            Set keys = map.keySet();<br />
            for (Object key : keys) {<br />
                if (key instanceof Long) {<br />
                    Object keyValue = map.get(key);<br />
                    if (keyValue instanceof PasteItem) {<br />
                        PasteItem pasteItem = (PasteItem) keyValue;<br />
                        if (lastIdentifier.longValue() < pasteItem.getId()) {<br />
                            lastIdentifier = new AtomicLong(pasteItem.getId());<br />
                        }<br />
                        initialIndexList.add(pasteItem.getId());<br />
                    }<br />
                }<br />
            }</p>
<p>            Collections.sort(initialIndexList);<br />
            indexList = new CopyOnWriteArrayList<Long>(initialIndexList);<br />
        }<br />
<&#47;pre></p>
<h2>Next steps<&#47;h2><br />
The rest of the code <a href="http:&#47;&#47;kenai.com&#47;projects&#47;mystic-apps&#47;sources" target="_blank">can be reviewed<&#47;a>, and of course run using the Maven build tool.  One thing that would probably make it into a production version that hasn't been discussed here is persistence upon cluster failing - if the whole thing dies, we need to store this in a more permanent location.  See the <a href="http:&#47;&#47;code.google.com&#47;docreader&#47;#p=hazelcast&s=hazelcast&t=MapPersistence" target="_blank">Persistence page on the Hazelcast wiki<&#47;a>.</p>
<p>Here at Mystic we certainly like seeing new tools that can make our jobs easier, and it certainly looks like <a href="http:&#47;&#47;www.hazelcast.com">Hazelcast<&#47;a> fits that nicely.</p>
