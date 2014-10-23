---
layout: post
status: publish
published: true
title: Provide access to Spring from Application
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: When developing with <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache
  Wicket<&#47;a>, there are times when you won't be able to use wicket-spring to access
  your bean implementations.  Here is a simple example that you can add to your Wicket
  Application class to make accessing the context easier
wordpress_id: 1712
wordpress_url: http://wicketbyexample.com/?p=43
date: '2009-07-20 01:33:24 +0000'
date_gmt: '2009-07-20 08:33:24 +0000'
categories:
- Apache Wicket
tags: []
comments: []
---
<p>When developing with <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a>, there are times when you won't be able to use wicket-spring to access your bean implementations.  Here is a simple example that you can add to your Wicket Application class to make accessing the context easier<a id="more"></a><a id="more-1712"></a></p>
<pre lang="java" colla="+">
<p>    protected void init() {<br />
        ...<br />
        ServletContext servletContext = super.getServletContext();<br />
        applicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);<br />
        ...<br />
    }</p>
<p>    private ApplicationContext applicationContext;</p>
<p>    public Object getBean(String name) {<br />
        if (name == null) return null;</p>
<p>        return applicationContext.getBean(name);<br />
    }<br />
<&#47;pre></p>
