---
layout: post
status: publish
published: true
title: Achieving focus and curiosity with SelfControl for Mac
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1922
wordpress_url: http://www.mysticcoders.com/?p=1922
date: '2013-11-26 11:53:10 +0000'
date_gmt: '2013-11-26 18:53:10 +0000'
tags: []
comments: true
---
If we spend any time on the tubes, we know that the internet is a large and wonderful place.  It has allowed us to communicate and shrink the world, and learn whatever we wish to learn along the way.  This could be how to fold a fitted sheet, learn the meaning behind string theory, or watch some stars spoof an already disturbingly odd music video (cheers Kanye).  More and more the useful and useless stuff comes via known suspects: Facebook, Reddit, Twitter, etc.  \n
So if you'd like to give yourself a timeout, because you have no self control (I don't, it's cool).  Use <a href="http://selfcontrolapp.com/">SelfControl.app</a> and give yourself freedom from whatever sites are wasting your time while you're trying to get actual work done.  Edit the blacklist, and add the half of the internet that is useless, which usually comes from the above sites first.  After starting, those websites will now refuse to load.\n
Perfect.\n
Curiosity though, always gets the better of me.  And while their <a href="https://github.com/slambert/selfcontrol/wiki/FAQ">FAQ</a> states that once SelfControl starts, it can't be stopped for the duration ... that's simply not true.  Since we're on a Mac, and we've got a BSD backend, there had to be a firewall involved.  So if you'd like to see a list of all the IP addresses (the blacklist sites) that SelfControl is blocking:
<code>
% sudo ipfw list
</code>\n
Take a look at the line that says "count ip from any to any // BEGIN SELFCONTROL BLOCK" and ends with "count ip from any to any // END SELFCONTROL BLOCK".  All of these IP addresses are what you have asked to block and with a flick of the wrist, this can all be undone.  For each IP address within the block, there is a 5-digit identifier number, e.g. 01518.  Armed with this simply type:
<code>
% sudo ipfw delete /insert number here/
</code>\n
Browse what you want yet again.  Waste all the time in the world.  I apologize in advance.\n
