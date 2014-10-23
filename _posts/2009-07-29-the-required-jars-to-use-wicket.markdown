---
layout: post
status: publish
published: true
title: The required jars to use Wicket
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: In Java land, we've become very familiar with jarhell, and the associated
  pain of trying to find every jar required for let's say Hibernate.  The pain involved
  in this process is greatly reduced by the use of something like <a href="http://maven.apache.org"
  target="_blank">Maven</a>, and while the initial learning curve sucks, you get
  into a groove with it.  What about <a href="http://wicket.apache.org" target="_blank">Wicket</a>?
wordpress_id: 69
wordpress_url: http://wicketbyexample.com/?p=69
date: '2009-07-29 09:57:30 +0000'
date_gmt: '2009-07-29 16:57:30 +0000'
categories:
- Apache Wicket
tags: []
comments: []
---
In Java land, we've become very familiar with jarhell, and the associated pain of trying to find every jar required for let's say Hibernate.  The pain involved in this process is greatly reduced by the use of something like <a href="http://maven.apache.org" target="_blank">Maven</a>, and while the initial learning curve sucks, you get into a groove with it.  What about <a href="http://wicket.apache.org" target="_blank">Wicket</a>?<a id="more"></a><a id="more-69"></a>

Here's the dependencies you would need to fulfill, all two of them:

<pre lang="xml" colla="+">
        <dependency><br />
            <groupId>org.apache.wicket</groupId><br />
            <artifactId>wicket</artifactId><br />
            <version>1.3.6</version><br />
        </dependency><br />
        <dependency><br />
            <groupId>org.slf4j</groupId><br />
            <artifactId>slf4j-jcl</artifactId><br />
            <version>1.4.2</version><br />
        </dependency><br />
</pre>

