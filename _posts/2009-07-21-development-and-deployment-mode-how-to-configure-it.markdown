---
layout: post
status: publish
published: true
title: Development and Deployment Mode- How to configure it
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: There are four supplied methods in the <a href="http://wicket.apache.org"
  target="_blank">Wicket</a> framework for changing your configuration from development
  to deployment and vice-versa.  The two possible values for this configuration parameter
  is "development" or "deployment".
wordpress_id: 55
wordpress_url: http://wicketbyexample.com/?p=55
date: '2009-07-21 13:52:39 +0000'
date_gmt: '2009-07-21 20:52:39 +0000'
tags: []
---
<p>There are four supplied methods in the <a href="http://wicket.apache.org" target="_blank">Wicket</a> framework for changing your configuration from development to deployment and vice-versa.  The two possible values for this configuration parameter is "development" or "deployment".<a id="more"></a><a id="more-55"></a></p>
<p>Method one, context-param in web.xml:</p>
<pre lang="xml" colla="+">
    <context-param>
        <param-name>configuration</param-name>
        <param-value>development</param-value>
    </context-param>
</pre>
<p>An init-param in the WicketFilter in your web.xml:</p>
<pre lang="xml" colla="+">
    <filter>
        <filter-name>wicketFilter</filter-name>
        <filter-class>org.apache.wicket.protocol.http.WicketFilter</filter-class>
        <init-param>
            <param-name>configuration</param-name>
            <param-value>development</param-value>
        </init-param>
        ...
</pre>
<p>A command-line parameter wicket.configuration:</p>
<pre lang="bash" colla="+">
    java ... -Dwicket.configuration=development
</pre>
<p>Overriding Application.getConfigurationType() in your Application class:</p>
<pre lang="java" colla="+">
    @Override
    public String getConfigurationType() {
        return Application.DEVELOPMENT;
    }
</pre>
<p>In our environments, to reduce headache, we have the configuration in web.xml point to "deployment", and in our Jetty Start class, we pass the command-line parameter locally to make it run in "development" mode.</p>
