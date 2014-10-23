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
categories:
- Development
tags: []
comments: []
---
<p>Something that just struck me as handy, was <a href="http:&#47;&#47;growl.info">Growl<&#47;a> notifications for certain steps in the ant build process.  If you're doing something else, its always nice to see "Build completed".  I could go into a long process on how to create an ant plugin, integrate it with Growls' Java bindings, and have a very tightly integrated plugin.  But I won't.  Just install growlnotify from the Growl dmg, and use ant's exec command with "Mac OS X" as an attribute, so the Windows folks won't get unhappy error messages.</p>
<p>Here's the little snippet of ant code:</p>
<pre lang="XML" colla="+">
<exec executable="&#47;usr&#47;local&#47;bin&#47;growlnotify" os="Mac OS X" logError="true"><br />
<arg line="-m 'Build has been completed'"&#47;><br />
<&#47;exec><br />
<&#47;pre></p>
<p>There seems to be a similar framework out there taking its inspiration from <a href="http:&#47;&#47;growl.info">Growl<&#47;a>, called <a href="http:&#47;&#47;www.k23productions.com&#47;haiku&#47;snarl.html">Snarl<&#47;a>.</p>
