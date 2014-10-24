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
wordpress_id: 1712
wordpress_url: http://wicketbyexample.com/?p=43
date: '2009-07-20 01:33:24 +0000'
date_gmt: '2009-07-20 08:33:24 +0000'
tags: []
comments: true
---
<p>When developing with <a href="http://wicket.apache.org" target="_blank">Apache Wicket</a>, there are times when you won't be able to use wicket-spring to access your bean implementations.  Here is a simple example that you can add to your Wicket Application class to make accessing the context easier<a id="more"></a><a id="more-1712"></a></p>
<pre lang="java" colla="+">

    protected void init() {
        ...
        ServletContext servletContext = super.getServletContext();
        applicationContext = WebApplicationContextUtils.getWebApplicationContext(servletContext);
        ...
    }

    private ApplicationContext applicationContext;


    public Object getBean(String name) {
        if (name == null) return null;

        return applicationContext.getBean(name);
    }
</pre>
