---
layout: post
status: publish
published: true
title: Using growl with ant for build notifications
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 36
wordpress_url: http://www.mysticcoders.com/wordpress/2006/03/25/using-growl-with-ant-for-build-notifications/
date: '2006-03-25 18:20:54 +0000'
date_gmt: '2006-03-26 01:20:54 +0000'
tags: []
comments: true
---
Something that just struck me as handy, was <a href="http://growl.info">Growl</a> notifications for certain steps in the ant build process.  If you're doing something else, its always nice to see "Build completed".  I could go into a long process on how to create an ant plugin, integrate it with Growls' Java bindings, and have a very tightly integrated plugin.  But I won't.  Just install growlnotify from the Growl dmg, and use ant's exec command with "Mac OS X" as an attribute, so the Windows folks won't get unhappy error messages.

Here's the little snippet of ant code:

{% highlight xml %}
<exec executable="/usr/local/bin/growlnotify" os="Mac OS X" logError="true">
<arg line="-m 'Build has been completed'"/>
</exec>
{% endhighlight %}

There seems to be a similar framework out there taking its inspiration from <a href="http://growl.info">Growl</a>, called <a href="http://www.k23productions.com/haiku/snarl.html">Snarl</a>.

