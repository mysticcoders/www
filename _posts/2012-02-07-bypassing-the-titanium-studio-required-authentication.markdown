---
layout: post
status: publish
published: true
title: Bypassing the Titanium Studio required authentication
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1810
wordpress_url: http://www.mysticcoders.com/?p=1810
date: '2012-02-07 12:08:21 +0000'
date_gmt: '2012-02-07 19:08:21 +0000'
categories:
- iPhone
tags: []
comments:
- id: 3755
  author: bilal
  author_email: bilalmix@gmail.com
  author_url: ''
  date: '2012-07-23 07:07:43 +0000'
  date_gmt: '2012-07-23 14:07:43 +0000'
  content: it's working  &Oslash;&not;&Oslash;&sup2;&Oslash;&sect;&Ugrave;&fnof; &Oslash;&sect;&Ugrave;&bdquo;&Ugrave;&bdquo;&Ugrave;&Dagger;
    &Oslash;&reg;&Ugrave;&Scaron;&Oslash;&plusmn;&Oslash;&sect;
- id: 3762
  author: Gabriel
  author_email: grlm@montevideo.com.uy
  author_url: ''
  date: '2012-09-13 14:06:35 +0000'
  date_gmt: '2012-09-13 21:06:35 +0000'
  content: thank you! ... works fine!...
- id: 3769
  author: lins
  author_email: 123linslouis@gmail.com
  author_url: ''
  date: '2013-03-06 08:31:00 +0000'
  date_gmt: '2013-03-06 15:31:00 +0000'
  content: wooooooof...You helped me alot...thank you so  much...
---
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2012&#47;02&#47;Screen-Shot-2012-02-07-at-10.59.43-AM.png" border="0" &#47;></p>
<p>A flight is sometimes the perfect time for uninterrupted work.  So as we've been building things with the mobile toolkit <a href="http:&#47;&#47;www.appcelerator.com" target="_blank">Appcelerator Titanium<&#47;a>, I ran it from my trusty key shortcut.  Above is the only thing I saw.  I even warn folks about this when giving talks about how to rapidly develop iOS applications with Titanium.</p>
<p>How do we bypass this?  <em>Please note, that doing this will disable debugging capability within the Titanium Studio, and possibly won't work past the latest versions<&#47;em>.</p>
<p>Follow the instructions for your platform to "<a href="https:&#47;&#47;wiki.appcelerator.org&#47;display&#47;tis&#47;Modifying+Your+Configuration">Find the TitaniumStudio.ini file<&#47;a>"</p>
<p><strong>Add the following at the end of the file<&#47;strong></p>
<pre>
-Dtitanium.bypassAuthentication=true<br />
<&#47;pre></p>
<p>That's it.  When you run it without an internet connection, development bliss.  Peace and quiet.</p>
