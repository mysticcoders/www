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
tags: []
comments: true
---
Thanks goes to Xgc in #mysql on freenode for showing me this little one-liner.  We needed to add a unique key to one of our tables, and a duplicate was in our midst.  Enter this handy one-liner:

<pre lang="sql" colla="+">
SELECT field1, count(*) FROM tbl1 GROUP BY field1 HAVING count(*) > 1;<br />
</pre>

problem solved, a nice simple list of the duplicated rows in front of you.

