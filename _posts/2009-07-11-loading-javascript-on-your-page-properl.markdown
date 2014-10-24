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
tags: []
---
<p><img src="http://www.mysticcoders.com/wp-content/uploads/2009/07/3367743012_7a668400b0_b.jpg" alt="Javascript " title="Javascript " width="492" height="327" class="alignnone size-full wp-image-1059" /></p>
<p>Developing interactivity in your website pages will require you, to build a portion of it with javascript.  If that javascript needs to perform its actions when the DOM has finished loading, you have several options depending on if you are using a javascript library or not.  If you're going the non-library route, you can do the following:<a id="more"></a><a id="more-1026"></a></p>
<pre lang="javascript" colla="+">
   window.onload = function() {
      // do something now that the dom is loaded
   }
</pre>
<p>The caveat here, is that based on what gets loaded first, you'll have to ensure that you take into account any other code that needs to be post-DOM loaded.  I would suggest using a library regardless, they make life oh so much more simple.</p>
<p>First example is using <a href="http://mootools.net/" target="_blank">mootools</a>:</p>
<pre lang="javascript" colla="+">
   window.addEvent('domready', function() {
        // do something now that the dom is loaded
   }
</pre>
<p>Here's an example using <a href="http://jquery.com/" target="_blank">jquery</a>:</p>
<pre lang="javascript" colla="+">
   $(document).ready(function() {
      // do something now that the dom is loaded
   }
</pre>
<p>And finally here's an example using <a href="http://www.prototypejs.org/" target="_blank">prototype</a>:</p>
<pre lang="javascript" colla="+">
   document.observe("dom:loaded", function() {
      // do something now that the dom is loaded
   }
</pre>
<p>So go forth, and remember the proper order of operations.  No inlining your javascript folks!</p>
