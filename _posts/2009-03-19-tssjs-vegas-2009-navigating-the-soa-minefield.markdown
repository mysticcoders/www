---
layout: post
status: publish
published: true
title: TSSJS Vegas 2009 - Navigating the SOA Minefield
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 559
wordpress_url: http://www.mysticcoders.com/blog/2009/03/19/tssjs-vegas-2009-navigating-the-soa-minefield/
date: '2009-03-19 11:00:16 +0000'
date_gmt: '2009-03-19 18:00:16 +0000'
categories:
- Java
tags:
- Java
- tsss
- tssjs2009
comments: []
---
<p><a href="http:&#47;&#47;javasymposium.techtarget.com&#47;html&#47;soa.html#HKeslerSOA" title="Heath Kesler - Navigating SOA Minefield" target="_blank">Heath Kesler<&#47;a> was the final presentation of the day that I attended, and covered one of the other hot topics these days, <a href="http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Service-oriented_architecture" title="Service-oriented architecture" target="_blank">SOA<&#47;a>. Many enterprises have attached to the ideal of a service oriented architecture, but have found issues during implementation that the core team were unable to overcome. Charly^HHeath put together an informative presentation on some of the challenges that present themselves when designing an SOA-based system and&#47;or picking up the pieces of a five alarm fire.<&#47;p></p>
<p>Navigation is the key here, and Heath talks us through some typical on-site with the client problems that he's been involved with during his professional career. Designing or fixing an existing SOA implementation requires some best practices to be discovered and put into place. The best practices discussed for this session:<&#47;p></p>
<ul>
<li><strong>Using an Enterprise Service Bus (ESB)<&#47;strong><&#47;li>
<li><strong>Asynchronous Processing vs Synchronous Processing<&#47;strong><&#47;li>
<li><strong>Routing<&#47;strong><&#47;li>
<li><strong>Translators &#47; Transformations<&#47;strong><&#47;li><br />
<&#47;ul></p>
<p>The real-world example that was used as a backdrop for fixing existing implementation problems revolved around an existing system that used a 3rd party as the system of record and added a 45 - 90 second delay in processing. And to top it all off, the processing had to be done synchronously because of the original failure in design. Armed with the a bit of left and right-brain thinking, along with a healthy background in designing scalable SOA systems, the process was broken out and modified to allow for an asynchronous method of update and ensuring that the data model was modified to better suit the objectives the company wanted to achieve. Having a customer wait 90 seconds just to create an account on your system was definitely failing their business goals, and through these changes due to it being asynchronous, control was returned to the customer in negligible time.<&#47;p></p>
<p>I have to give big kudos for Heath, this was his first time leading a session, they moved his presentation from Friday to Wednesday, and basically left him no time to practice, and refine. And he pulled through it giving those in the room a great example of some key elements in refactoring an existing SOA implementation to fix and optimize.<&#47;p></p>
<p><strong>Be sure to check out our talk on <a href="http:&#47;&#47;wicket.apache.org&#47;" title="Apache Wicket" target="_blank">Apache Wicket<&#47;a> on Friday at 3pm in Breakout Room 1 - If you liked <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket&#47;" title="5 Days of Wicket" target="_top">5 Days of Wicket<&#47;a>, you&acirc;&euro;&trade;ll love this in-depth hour and drop us a line if your company needs training in wicket: <a href="mailto:trainings@mysticcoders.com">trainings@mysticcoders.com<&#47;a><&#47;strong><br &#47;><&#47;p></p>
