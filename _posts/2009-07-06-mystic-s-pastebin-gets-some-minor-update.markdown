---
layout: post
status: publish
published: true
title: Mystic's Pastebin gets some minor updates
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 999
wordpress_url: http://www.mysticcoders.com/?p=999
date: '2009-07-06 08:30:20 +0000'
date_gmt: '2009-07-06 15:30:20 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 509
  author: Peter
  author_email: peter.lagerhem@emblacom.com
  author_url: ''
  date: '2009-07-07 04:57:54 +0000'
  date_gmt: '2009-07-07 11:57:54 +0000'
  content: "First: fantastic job, guys! I'm rolling our first Wicket project internally
    at our company and have struggled with a lot of minor things. Your work with MysticPaste
    and this tutorial is awsome. Now, I can go back and compare, and pick up a tip
    or two from your work. Cudos!\r\n\r\nI noticed the currently checked in code seem
    to be broken, in that if running the tests, it chokes on missing \"twitter.username\"
    from the configuration.\r\n\r\nI use MyEclipse and have run \"mvn eclipse:eclipse\"
    to setup it up for eclipse. I then later found that in order to have the config
    right, I had to do a \"mvn:clean deploy -P DEV\". \r\n\r\nBtw, your tutorial briefly
    mentions \"-P PROD\" where \"PROD\" isn't a filters-PROD.properties file.\r\n\r\nSo,
    are these inconsistencies simply not checked into the repo, or do I have to do
    anything else to get it up and running?\r\n\r\nAlso, there's no sql script to
    set up the database, so I wonder if it will automagically be created by hibernate?\r\n\r\nCheers,\r\n\r\n&#47;Peter"
- id: 510
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2009-07-07 09:03:02 +0000'
  date_gmt: '2009-07-07 16:03:02 +0000'
  content: |-
    Congratulations on rolling out a new project with Apache Wicket!  It's definitely a worthwhile endeavor and a whole lot of fun.  Glad the tutorials and the pastebin are providing some benefits to the process.

    I haven't run the tests since last week, so I'm not surprised they broke.  You can add an application-override.properties file with "twitter.username" and "twitter.password" entries to get it running.

    The tutorial is probably using some intention to create PROD filter, and we only push it from LOCAL to DEV.  You can safely ignore that, or add that filter as well.  Another possibility you can see from using the tool, is to just use Spring's PropertyPlaceholder's and let Spring do the replacing with a supplemental properties file.

    There's a maven plugin for setting up the hibernate database, and the configuration as written should auto-create the tables.
- id: 570
  author: fatjoez
  author_email: fatjoez@gmail.com
  author_url: ''
  date: '2009-08-09 02:29:10 +0000'
  date_gmt: '2009-08-09 09:29:10 +0000'
  content: "fantastic work\r\n\r\nbut definately please add a delete function &amp;
    also if possible a timeout you can set by default (hopefully it'll remember settings
    via a cookie)"
- id: 572
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2009-08-09 21:05:11 +0000'
  date_gmt: '2009-08-10 04:05:11 +0000'
  content: great suggestions.  i'll add them to the wishlist and see when we can get
    some time to add them.  we always take patches if you're so inclined :P
---
<p>With our pastebin <a href="http:&#47;&#47;mysticpaste.com">MysticPaste.com<&#47;a>, one of the biggest roadblocks to a clean-looking UI, is keeping it uncluttered while offering the functionality needed.  Apple and a majority of the software released for their operating system seems to "get it".  Sensible defaults and all that are important in keeping it simple.<br />
<br &#47;><br &#47;><br />
At Mystic we've used our little pastebin experiment to teach on building code with <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a>.  We plan to continue this tradition in the near future talking about some of the new items in <a href="http:&#47;&#47;mysticpaste.com">MysticPaste.com<&#47;a>'s feature list:</p>
<ul>
<li>Raw Text (for copy and paste)<&#47;li>
<li>Using the JavaScript-based <a href="http:&#47;&#47;alexgorbatchev.com&#47;wiki&#47;" target="_blank">SyntaxHighlighter<&#47;a> and tossing JaSHi.  Show me a Java-based syntax highlighter with as clean an interface and respectable highlighting, and I'd prefer it.  Searches returned nothing though.<&#47;li>
<li>Send to Twitter - follow us <a href="http:&#47;&#47;www.twitter.com&#47;mysticpaste">@mysticpaste<&#47;a> and let more people know about your paste and get solutions<&#47;li>
<li>Comments - each paste can have any number of comments attached to it.  the owner of a paste could comment on what problem he's encountering, and get multiple comments about solutions.  Email address is never shared anywhere.<&#47;li>
<li>Line Number Highlighting - if you'd like to highlight certain lines in your paste just add another parameter, comma-separated, with the line numbers (e.g. &#47;view&#47;10&#47;4,5,10 or &#47;view&#47;10&#47;4-10,15-20)<&#47;li>
<li>Abuse Reporting - it happens all the time, spam fills a pastebin, we've added a few measures to combat this nuisance along with a "Report Abuse" function which takes the paste out of the history<&#47;li>
<li>Code Refactoring - nothing to do with the UI, but there have been a few changes and enhancements under the hood.<&#47;li><br />
<&#47;ul><br />
<br &#47;><br &#47;><br />
With all of that in mind, we think those are pretty great updates to an already fantastic tool.  What would you like to see in the pastebin next?  image support?  diff support?  durations to keep a post?  something else?</p>
