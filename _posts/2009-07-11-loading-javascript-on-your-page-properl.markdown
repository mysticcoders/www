---
layout: post
status: publish
published: true
title: Loading Javascript on your page properly
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: Developing interactivity in your website pages will require you, to build
  a portion of it with javascript.  If that javascript needs to perform its actions
  when the DOM has finished loading, you have several options depending on if you
  are using a javascript library or not.  If you're going the non-library route, you
  can do the following
wordpress_id: 1026
wordpress_url: http://www.mysticcoders.com/?p=1026
date: '2009-07-11 21:15:30 +0000'
date_gmt: '2009-07-12 04:15:30 +0000'
categories:
- Development
tags: []
comments:
- id: 2257
  author: minh tien
  author_email: minhtienhm@gmail.com
  author_url: http://vn.myblog.yahoo.com/minhtienhntk
  date: '2009-11-13 21:50:08 +0000'
  date_gmt: '2009-11-14 04:50:08 +0000'
  content: "window.onload = function() {\r\n      &#47;&#47; do something now that
    the dom is loaded\r\n   }\r\n\r\n\r\nwindow.addEvent('domready', function() {\r\n
    \       &#47;&#47; do something now that the dom is loaded\r\n   }\r\n\r\n$(document).ready(function()
    {\r\n      &#47;&#47; do something now that the dom is loaded\r\n   }\r\n\r\ndocument.observe(\"dom:loaded\",
    function() {\r\n      &#47;&#47; do something now that the dom is loaded\r\n   }"
---
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;07&#47;3367743012_7a668400b0_b.jpg" alt="Javascript " title="Javascript " width="492" height="327" class="alignnone size-full wp-image-1059" &#47;></p>
<p>Developing interactivity in your website pages will require you, to build a portion of it with javascript.  If that javascript needs to perform its actions when the DOM has finished loading, you have several options depending on if you are using a javascript library or not.  If you're going the non-library route, you can do the following:<a id="more"></a><a id="more-1026"></a></p>
<pre lang="javascript" colla="+">
   window.onload = function() {<br />
      &#47;&#47; do something now that the dom is loaded<br />
   }<br />
<&#47;pre></p>
<p>The caveat here, is that based on what gets loaded first, you'll have to ensure that you take into account any other code that needs to be post-DOM loaded.  I would suggest using a library regardless, they make life oh so much more simple.</p>
<p>First example is using <a href="http:&#47;&#47;mootools.net&#47;" target="_blank">mootools<&#47;a>:</p>
<pre lang="javascript" colla="+">
   window.addEvent('domready', function() {<br />
        &#47;&#47; do something now that the dom is loaded<br />
   }<br />
<&#47;pre></p>
<p>Here's an example using <a href="http:&#47;&#47;jquery.com&#47;" target="_blank">jquery<&#47;a>:</p>
<pre lang="javascript" colla="+">
   $(document).ready(function() {<br />
      &#47;&#47; do something now that the dom is loaded<br />
   }<br />
<&#47;pre></p>
<p>And finally here's an example using <a href="http:&#47;&#47;www.prototypejs.org&#47;" target="_blank">prototype<&#47;a>:</p>
<pre lang="javascript" colla="+">
   document.observe("dom:loaded", function() {<br />
      &#47;&#47; do something now that the dom is loaded<br />
   }<br />
<&#47;pre></p>
<p>So go forth, and remember the proper order of operations.  No inlining your javascript folks!</p>
