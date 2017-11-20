---
layout: post
status: publish
published: true
title: Getting Word Count in Java Resource Bundle .properties files
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 37
wordpress_url: http://www.mysticcoders.com/wordpress/2006/04/20/getting-word-count-in-java-resource-bundle-properties-files/
date: '2006-04-20 18:57:46 +0000'
date_gmt: '2006-04-21 01:57:46 +0000'
tags: []
comments: true
---
With a little help from freenode folks in ##java and #awk .. I've got a one liner which will give you a word count for your resource bundle files:

```
grep -vE '^#' YourResourceBundle.properties | cut -d = -f 2 | wc -w
```

whew.

