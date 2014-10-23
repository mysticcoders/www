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
  in this process is greatly reduced by the use of something like <a href="http:&#47;&#47;maven.apache.org"
  target="_blank">Maven<&#47;a>, and while the initial learning curve sucks, you get
  into a groove with it.  What about <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Wicket<&#47;a>?
wordpress_id: 69
wordpress_url: http://wicketbyexample.com/?p=69
date: '2009-07-29 09:57:30 +0000'
date_gmt: '2009-07-29 16:57:30 +0000'
categories:
- Apache Wicket
tags: []
comments: []
---
<p>In Java land, we've become very familiar with jarhell, and the associated pain of trying to find every jar required for let's say Hibernate.  The pain involved in this process is greatly reduced by the use of something like <a href="http:&#47;&#47;maven.apache.org" target="_blank">Maven<&#47;a>, and while the initial learning curve sucks, you get into a groove with it.  What about <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Wicket<&#47;a>?<a id="more"></a><a id="more-69"></a></p>
<p>Here's the dependencies you would need to fulfill, all two of them:</p>
<pre lang="xml" colla="+">
        <dependency><br />
            <groupId>org.apache.wicket<&#47;groupId><br />
            <artifactId>wicket<&#47;artifactId><br />
            <version>1.3.6<&#47;version><br />
        <&#47;dependency><br />
        <dependency><br />
            <groupId>org.slf4j<&#47;groupId><br />
            <artifactId>slf4j-jcl<&#47;artifactId><br />
            <version>1.4.2<&#47;version><br />
        <&#47;dependency><br />
<&#47;pre></p>
