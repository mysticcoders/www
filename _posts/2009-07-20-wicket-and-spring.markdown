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
excerpt: Wicket makes it very easy to integrate directly with the <a href="http://springframework.org"
  target="_blank">Spring Framework</a>.
wordpress_id: 1711
wordpress_url: http://wicketbyexample.com/?p=34
date: '2009-07-20 00:25:43 +0000'
date_gmt: '2009-07-20 07:25:43 +0000'
tags: []
---
<p>Wicket makes it very easy to integrate directly with the <a href="http://springframework.org" target="_blank">Spring Framework</a>.<a id="more"></a><a id="more-1711"></a></p>
<p>In any Component (Page, Panel, etc) to include a Spring bean you would do:</p>
<pre lang="java" colla="+">
    @SpringBean
    private MyBean myBean;
</pre>
<p>In your application-specific Application class you would do the following:</p>
<pre lang="java" colla="+">
import org.apache.wicket.spring.injection.annot.SpringComponentInjector;

...

   @Override
    protected void init {
        addComponentInstantiationListener(new SpringComponentInjector(this));
        ...
    }
</pre>
<p>If you're using <a href="http://maven.apache.org" target="_blank">Maven</a> for your build management, you would pull in these dependencies assuming wicket 1.3:</p>
<pre lang="xml" colla="+">
        <dependency>
            <groupId>org.apache.wicket</groupId>
            <artifactId>wicket-spring</artifactId>
            <version>${wicket.version}</version>
        </dependency>

        <dependency>
            <groupId>org.apache.wicket</groupId>
            <artifactId>wicket-spring-annot</artifactId>
            <version>${wicket.version}</version>
        </dependency>
</pre>
