---
layout: post
status: publish
published: true
title: Hide Wicket components and use Ajax to unhide later
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 96
wordpress_url: http://www.mysticcoders.com/blog/2008/09/14/hide-wicket-components-and-use-ajax-to-unhide-later/
date: '2008-09-14 22:55:03 +0000'
date_gmt: '2008-09-15 05:55:03 +0000'
categories:
- Apache Wicket
tags:
- Apache Wicket
- Java
- Web
comments:
- id: 3173
  author: Clint Checketts
  author_email: checketts@gmail.com
  author_url: ''
  date: '2010-05-04 13:29:00 +0000'
  date_gmt: '2010-05-04 20:29:00 +0000'
  content: Thanks for this post, you solved my Wicket problem perfectly.  I had been
    stumped as to why my component was disappearing fine, but wouldn't reappear.
- id: 3321
  author: Rusty Shackleford
  author_email: "...@gmail.com"
  author_url: ''
  date: '2011-01-13 09:48:24 +0000'
  date_gmt: '2011-01-13 16:48:24 +0000'
  content: Thanks for that! I was wondering how to properly hide things
- id: 3355
  author: Josef
  author_email: joe.k@centrum.cz
  author_url: ''
  date: '2011-03-31 04:46:10 +0000'
  date_gmt: '2011-03-31 11:46:10 +0000'
  content: Thanks a lot !!! I spent many hours realizing how to manage it, until I
    read your post.
- id: 3441
  author: Lavinia
  author_email: laviniaplatica@yahoo.com
  author_url: ''
  date: '2011-11-18 14:17:32 +0000'
  date_gmt: '2011-11-18 21:17:32 +0000'
  content: Thanks a lot, it did the trick for me ;)
---
<p>It is probably already well known, if you're doing Ajax, I might not be popping any big secrets here. But I was reading <a href="http:&#47;&#47;www.amazon.com&#47;Wicket-Action-Martijn-Dashorst&#47;dp&#47;1932394982?tag=mycoll-20">Wicket in Action<&#47;a> tonight, and ran across a very helpful tidbit on how to properly hide a component. If you've constructed a component that you'd like to show, upon an action, you need at least a dummy tag in the dom to attach off of. Add this to that component and you can happily .setVisible(false) and unhide it later.<&#47;p></p>
<p><pre lang="java" colla="+">
setOutputMarkupPlaceholderTag(true);<br />
<&#47;pre><br />
<br &#47;><&#47;p></p>
<p>that's it. <a href="http:&#47;&#47;www.amazon.com&#47;Wicket-Action-Martijn-Dashorst&#47;dp&#47;1932394982?tag=mycoll-20">Wicket in Action<&#47;a> is a great read so far, if you're doing any web development, we here at <a href="http:&#47;&#47;www.mysticcoders.com">Mystic<&#47;a> highly recommend picking up a copy.<&#47;p></p>
<p>And if you haven't read Craig's review of Wicket, <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2008&#47;09&#47;09&#47;book-review-wicket-in-action&#47;">what are you waiting for<&#47;a>?<&#47;p></p>
