---
layout: post
status: publish
published: true
title: 'CGSResolveShmemReference : offset exceeds bounds'
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 34
wordpress_url: http://www.mysticcoders.com/wordpress/2006/01/31/cgsresolveshmemreference-offset-exceeds-bounds/
date: '2006-01-31 14:10:29 +0000'
date_gmt: '2006-01-31 21:10:29 +0000'
categories:
- Apple Mac
tags: []
comments: []
---
After working on my machine for quite a bit today, I started getting crashes in certain programs, and I haven't seen this pre-10.4.4.  The following was seen in Console.app:

CGSResolveShmemReference : offset exceeds bounds

And it did so for several apps, Firefox, GLterm, iSync (wouldn't even run).  A simple logout and login seems to have fixed it.  Nothing new as far as fixes from Software Update, so we'll just see if this keeps up, grrr.

