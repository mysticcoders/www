---
layout: post
status: publish
published: true
title: Wicket and Spring
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: Wicket makes it very easy to integrate directly with the <a href="http:&#47;&#47;springframework.org"
  target="_blank">Spring Framework<&#47;a>.
wordpress_id: 1711
wordpress_url: http://wicketbyexample.com/?p=34
date: '2009-07-20 00:25:43 +0000'
date_gmt: '2009-07-20 07:25:43 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3464
  author: David
  author_email: david@davidwbrown.name
  author_url: http://www.davidwbrown.name
  date: '2009-08-04 18:03:02 +0000'
  date_gmt: '2009-08-05 01:03:02 +0000'
  content: |-
    Builds, tests and runs but when I click on the page link that uses the bean defined I get:

    org.springframework.beans.factory.NoSuchBeanDefinitionException: No bean named 'masterDao' is defined
- id: 3465
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2009-08-04 19:33:20 +0000'
  date_gmt: '2009-08-05 02:33:20 +0000'
  content: |-
    David,

    Can you provide your applicationContext.xml, web.xml, and any related code that might make sense here.  The example you've commented on does not include a masterDao, so we'd need some context to help out.

    Cheers!
- id: 3466
  author: Frank B
  author_email: frank.bolviken@gmail.com
  author_url: ''
  date: '2010-05-09 11:12:24 +0000'
  date_gmt: '2010-05-09 18:12:24 +0000'
  content: How about some guide for what to put inside the web.xml and applicationContext.xml?
- id: 3467
  author: Zlatan Kadragi&Auml;&Dagger;
  author_email: aurelije@gmail.com
  author_url: http://aurelije.blogspot.com
  date: '2010-08-28 02:28:43 +0000'
  date_gmt: '2010-08-28 09:28:43 +0000'
  content: |-
    Just to add my Maven experience using wicket 1.4..10 and Spring 3.0.4

    pom.xml file should look like this:


                org.springframework
                spring-core
                ${spring.version}



                org.springframework
                spring-web
                ${spring.version}



                org.springframework
                spring-jdbc
                ${spring.version}


    and so on.
- id: 3468
  author: Zlatan Kadragi&Auml;&Dagger;
  author_email: aurelije@gmail.com
  author_url: http://aurelije.blogspot.com
  date: '2010-08-28 02:33:12 +0000'
  date_gmt: '2010-08-28 09:33:12 +0000'
  content: |-
    And this:

                org.apache.wicket
                wicket-spring
                ${wicket.version}


    wicket-spring-annot is not needed
---
<p>Wicket makes it very easy to integrate directly with the <a href="http:&#47;&#47;springframework.org" target="_blank">Spring Framework<&#47;a>.<a id="more"></a><a id="more-1711"></a></p>
<p>In any Component (Page, Panel, etc) to include a Spring bean you would do:</p>
<pre lang="java" colla="+">
    @SpringBean<br />
    private MyBean myBean;<br />
<&#47;pre></p>
<p>In your application-specific Application class you would do the following:</p>
<pre lang="java" colla="+">
import org.apache.wicket.spring.injection.annot.SpringComponentInjector;</p>
<p>...</p>
<p>   @Override<br />
    protected void init {<br />
        addComponentInstantiationListener(new SpringComponentInjector(this));<br />
        ...<br />
    }<br />
<&#47;pre></p>
<p>If you're using <a href="http:&#47;&#47;maven.apache.org" target="_blank">Maven<&#47;a> for your build management, you would pull in these dependencies assuming wicket 1.3:</p>
<pre lang="xml" colla="+">
        <dependency><br />
            <groupId>org.apache.wicket<&#47;groupId><br />
            <artifactId>wicket-spring<&#47;artifactId><br />
            <version>${wicket.version}<&#47;version><br />
        <&#47;dependency></p>
<p>        <dependency><br />
            <groupId>org.apache.wicket<&#47;groupId><br />
            <artifactId>wicket-spring-annot<&#47;artifactId><br />
            <version>${wicket.version}<&#47;version><br />
        <&#47;dependency><br />
<&#47;pre></p>
