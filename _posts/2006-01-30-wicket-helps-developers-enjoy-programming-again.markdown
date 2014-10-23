---
layout: post
status: publish
published: true
title: Wicket helps developers enjoy programming again
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 32
wordpress_url: http://www.mysticcoders.com/wordpress/2006/01/30/wicket-helps-developers-enjoy-programming-again/
date: '2006-01-30 12:02:59 +0000'
date_gmt: '2006-01-30 19:02:59 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 2
  author: Bram Smeets
  author_email: bram@jteam.nl
  author_url: http://www.jteam.nl
  date: '2006-01-31 01:02:01 +0000'
  date_gmt: '2006-01-31 08:02:01 +0000'
  content: |-
    I agree with Wicket being a very simple, easy-to-understand framework and my first few trials have been very successful.

    However, I have a question that maybe someone can answer. I'm considering using Wicket for a project with high demands in terms of performance and scalability. How does Wicket's session requirements scale up. Did anyone use Wicket for a large scale project in production?
    Any good (or bad) experiences?
- id: 3
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2006-01-31 15:50:55 +0000'
  date_gmt: '2006-01-31 22:50:55 +0000'
  content: |-
    Wicket will definitely utilize more of the session, and thereby using more RAM on the machines running it.  And RAM is pretty cheap these days :)  Might join up on ##wicket on irc.freenode.net where a lot of the core developers are.

    Cheers!
- id: 4
  author: Jonathan Locke
  author_email: jonl@muppetlabs.com
  author_url: http://wicket.sf.net
  date: '2006-02-01 18:34:26 +0000'
  date_gmt: '2006-02-02 01:34:26 +0000'
  content: |-
    Using bookmarkable pages as much as possible is one part of the answer.  But we have other things that can help.  I made some comments on this a while ago here:

    http://www.theserverside.com/news/thread.tss?thread_id=35899#182653

    Some of this is a little out of date.  We now have IPageMapEntry and PageState is gone.  But in general, my comments are on target.  There are also several comments on my blog on this topic, including a sun RFE that we'd like people to vote for to support session scalability via "static anonymous classes".

    http://jroller.com/page/JonathanLocke?entry=wicket_refactorings
    http://jroller.com/page/JonathanLocke?entry=vote_for_pedro_or_at
    http://jroller.com/page/JonathanLocke?entry=further_reducing_wicket_state_2

    When you're done reading these comments, you might want to ask any lingering questions on the wicket-user mailing list.
---
After using several of the web frameworks that are prevalant in the java world, I do believe I've finally found a virtual nirvana.&Acirc;&nbsp; Here at Mystic, we're doing lots of development with <a title="Wicket" href="http://wicket.sf.net">Wicket</a>,&Acirc;&nbsp;  a java web application framework that <em>"takes simplicity, separation of 				concerns and ease of development to a whole new level."</em>

So what does that mean to you and I?&Acirc;&nbsp; Web application development without the need for the seemingly unnecessary XML config files that are like plagues in my WEB-INF directories.&Acirc;&nbsp; So if you haven't, download it today .. while the website may not be as fancy as Ruby on Rails, there are some very smart people behind the development of this framework.&Acirc;&nbsp; Another plus, is that there isn't any crazy evangelism happening, similar to what you'd get from DHH or HLS, or .. you ever notice how the most vocal use their 3-letter acronym for name?

