---
layout: post
status: publish
published: true
title: Find duplicate rows in a database using standard SQL
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 33
wordpress_url: http://www.mysticcoders.com/wordpress/2006/01/31/find-duplicate-rows-in-a-database-using-standard-sql/
date: '2006-01-31 00:15:13 +0000'
date_gmt: '2006-01-31 07:15:13 +0000'
categories:
- Development
tags: []
comments:
- id: 5
  author: Something is going on &raquo; Find duplicate rows in a database using standard
    SQL
  author_email: ''
  author_url: ''
  date: '2006-01-31 01:22:51 +0000'
  date_gmt: '2006-01-31 08:22:51 +0000'
  content: "[...] Via kinabalu:  SELECT field1, count(*) FROM tbl1 GROUP BY field1
    HAVING count(*)>1;&Acirc;&nbsp;   &nbsp; [...]"
- id: 206
  author: Jacek
  author_email: jacek.p.kolodziejczyk@gmail.com
  author_url: ''
  date: '2009-03-04 15:04:23 +0000'
  date_gmt: '2009-03-04 23:04:23 +0000'
  content: "That's right. But if you wanted to do anything with the duplicates, for
    example to delete them, you would have to do another query to find the primary
    keys.\r\n\r\nAssuming that pk is the primary key I select the duplicates (without
    the record being duplicated) by a following query:\r\n\r\nselect tbl1.* from tbl1
    inner join tbl1 tbl1_ on tbl1.field1 = tbl1_.field1 where tbl1.pk > tbl1_.pk\r\n\r\nIf
    I replace \"select tbl1.\" with \"delete\" I can also delete duplicates with just
    this one statement. So if there were 3 records with the same value of field1,
    after running the query only 1 will remain."
- id: 464
  author: Tagz | "mystic blog &Acirc;&raquo; Find duplicate rows in a database using
    standard SQL" | Comments
  author_email: ''
  author_url: ''
  date: '2009-05-16 09:56:22 +0000'
  date_gmt: '2009-05-16 16:56:22 +0000'
  content: "[...]               [upmod] [downmod]     mystic blog &Acirc;&raquo; Find
    duplicate rows in a database using standard SQL  (mysticcoders.com)    1 points
    posted 2 months, 1 week ago by SixSixSix  tags imported sql   saved [...]"
---
Thanks goes to Xgc in #mysql on freenode for showing me this little one-liner.  We needed to add a unique key to one of our tables, and a duplicate was in our midst.  Enter this handy one-liner:

<pre lang="sql" colla="+">
SELECT field1, count(*) FROM tbl1 GROUP BY field1 HAVING count(*) > 1;<br />
</pre>

problem solved, a nice simple list of the duplicated rows in front of you.

