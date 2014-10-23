---
layout: post
status: publish
published: true
title: A clueful way to save your work
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 116
wordpress_url: http://www.mysticcoders.com/blog/2008/11/23/a-clueful-way-to-save-your-work/
date: '2008-11-23 03:07:11 +0000'
date_gmt: '2008-11-23 10:07:11 +0000'
categories:
- Apple Mac
tags:
- tip
- unix
comments: []
---
So, last night in haste I wrote a pensive rm -rf command which, if my previous find statement was correct, should have worked fine.

Well, it didn't.

There I was, with an empty directory, cursing every expletive I could think of. I broke down, and bought <a title="FileSalvage" href="http://subrosasoft.com/OSXSoftware/index.php?main_page=product_info&amp;products_id=1">FileSalvage</a>, making sure I had booted into the external drive, leaving the offending drive in a pristine condition. After $79.99 and a download and install behind me, the program is scanning for my long lost files.

It was going to take a while, so I left the office in a somewhat sour but hopeful mood. Then I remembered... <a title="DropBox" href="http://www.getdropbox.com/">DropBox</a>.

The night before my heinous misuse of the rm command, I had decided to symlink the directory to <a title="DropBox" href="http://www.getdropbox.com/">DropBox's</a> folder, and let it pick everything up. A quick visit to the website confirmed, files were removed, lots of them. And then the "Recover Files" option. Sweet victory.

After a quick reboot of the host machine, <a title="DropBox" href="http://www.getdropbox.com/">DropBox</a> dutifully put everything back, erasing the history of my fumbled find statement.

For you unix folks, here's the command for symlinking outside of the main folder:

<blockquote>ln -s /source/path/to/directory/or/file /destination/path/to/dropbox/folder</blockquote>

