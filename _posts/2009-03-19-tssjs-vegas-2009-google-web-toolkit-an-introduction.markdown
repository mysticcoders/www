---
layout: post
status: publish
published: true
title: 'TSSJS Vegas 2009 - Google Web Toolkit: An Introduction'
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 554
wordpress_url: http://www.mysticcoders.com/blog/2009/03/19/tssjs-vegas-2009-google-web-toolkit-an-introduction/
date: '2009-03-19 10:00:58 +0000'
date_gmt: '2009-03-19 17:00:58 +0000'
categories:
- Java
tags:
- Java
comments: []
---
<p>David Geary's talk on <a href="http:&#47;&#47;code.google.com&#47;webtoolkit&#47;" title="GWT" target="_blank">Google Web Toolkit<&#47;a> was one of the highlights of the day. Oddly enough they held it in the <em>polar room<&#47;em> and kept it at a brisk 30 below! Aside from feeling like we were stuck in the North Pole, the presentation was informative and engaging, and David's dry humor left us chuckling (the only warmth we could generate in that room). Have I mentioned that the room was cold?<&#47;p></p>
<p>If you've never heard of GWT, it's yet another framework. This time it's from <a href="http:&#47;&#47;google.com" title="Google" target="_blank">Google<&#47;a> and powers several but definitely not all of their client facing applications. It's basic premise is that "Ajax is hard", and so it does what it must to abstract things away like Javascript and offers awesome productivity boosts by allowing you to code Ajax-based applications almost entirely using Java. And the *really* cool thing is, you can debug your application, by stepping through Java code instead of using something like <a href="http:&#47;&#47;getfirebug.com&#47;" title="Firebug" target="_blank">Firebug<&#47;a> for Javascript. The team has come up with a lot of really innovative new solutions, to old problems. It also allows the programmer that is familiar with idioms like AWT, Swing, and SWT to understand much more rapidly the constructs needed to build a GWT app.<&#47;p></p>
<p><strong>The five top features that GWT provides:<&#47;strong><&#47;p></p>
<ul>
<li>Application generator for quickstart<&#47;li>
<li>Convention over configuration<&#47;li>
<li>Instant turnaround after changes<&#47;li>
<li>Non-Ajax Ajax<&#47;li>
<li>Awesome productivity<&#47;li><br />
<&#47;ul></p>
<p>As GWT is heavily based on the idea that you want most of your interactions with the client to be Ajax based, they have different requirements for the client and server-side portions of code. Everything you code, if its a simple app without the need for external Javascript, will be in Java. The client-side code uses a subset of the Java packages, and allows you to run your app in Hosted mode, or Web mode. In Hosted mode the app runs via the JVM and can be stepped through using the debugger, and in Web mode it compiles your Java code to Javascript for work in a normal browser.<&#47;p></p>
<p>David is obviously a well seasoned presenter and made the process of learning more about GWT engaging. His session was chock full of demo's and actually wrote code during the presentation to show how easy the creation could be. I think given the right circumstances, and a client willing to think outside the box, GWT is something you should add to your skill-set.<&#47;p></p>
<p><strong>Be sure to check out our talk on <a href="http:&#47;&#47;wicket.apache.org&#47;" title="Apache Wicket" target="_blank">Apache Wicket<&#47;a> on Friday at 3pm in Breakout Room 1 - If you liked <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket&#47;" title="5 Days of Wicket" target="_top">5 Days of Wicket<&#47;a>, you&acirc;&euro;&trade;ll love this in-depth hour and drop us a line if your company needs training in wicket: <a href="mailto:trainings@mysticcoders.com">trainings@mysticcoders.com<&#47;a><br &#47;><&#47;strong><&#47;p></p>
