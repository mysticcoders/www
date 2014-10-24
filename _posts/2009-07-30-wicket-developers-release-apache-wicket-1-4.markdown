---
layout: post
status: publish
published: true
title: Wicket developers release Apache Wicket 1.4
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1716
wordpress_url: http://wicketbyexample.com/?p=74
date: '2009-07-30 20:05:51 +0000'
date_gmt: '2009-07-31 03:05:51 +0000'
tags: []
comments: true
---
<p>The <a href="http://wicket.apache.org" target="_blank">Wicket</a> folks have released the latest incarnation of the framework in <a href="http://wicket.apache.org/apache-wicket-14-takes-type-safety-to-the-next-level.html" target="_blank">Apache Wicket 1.4</a>.  Notable improvements are:</p>
<ul>
<li>Generified IModel interface and implementations increasing type safety in your Wicket applications</li>
<li>Component#getModel() and Component#setModel() have been renamed to getDefaultModel() and setDefaultModel() to better support generified models</li>
<li>The Spring modules have been merged (wicket-spring-annot is now obsolete, all you need is wicket-spring)</li>
<li>Many API's have been altered to better work with Java 5's idioms</li>
<li>Wicket jars are now packaged with metadata that makes them OSGI bundles</li>
</ul>
<p>What are you waiting for?  <a href="http://www.apache.org/dyn/closer.cgi/wicket/1.4.0" target="_blank">Go get it!</a></p>
