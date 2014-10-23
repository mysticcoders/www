---
layout: post
status: publish
published: true
title: How to setup a Wicket application with nginx and Jetty
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1529
wordpress_url: http://www.mysticcoders.com/?p=1529
date: '2011-02-06 22:46:54 +0000'
date_gmt: '2011-02-07 05:46:54 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3751
  author: leonid.vygovskiy
  author_email: leonidv@list.ru
  author_url: http://vygovskiy.com
  date: '2012-07-08 07:11:03 +0000'
  date_gmt: '2012-07-08 14:11:03 +0000'
  content: "Start from v.1.12 ngix include commands to resolve issue with cookies:\r\nproxy_cookie_domain\r\nproxy_cookie_path\r\nhttp://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_domain\r\nhttp://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cookie_path\r\n\r\nExample
    of my config that fine works:\r\nserver {\r\n        listen 80;\r\n        server_name
    smartrss.ru;\r\n        location / {\r\n                proxy_pass              http://localhost:8080/userui/;\r\n
    \               proxy_pass_header Set-Cookie;\r\n                proxy_pass_header
    X-Forwarded-For;\r\n                proxy_set_header        X-Real-IP $remote_addr;\r\n
    \               proxy_cookie_domain localhost smartrss.ru;\r\n                proxy_cookie_path
    \  /userui/ /;\r\n        }\r\n}"
---
Our signature sample is our <a href="http://www.mysticcoders.com/blog/2009/03/09/5-days-of-wicket/">"5 Days Of Wicket"</a> tutorial app <a href="http://mysticpaste.com">MysticPaste.com</a>.  And recently I decided to migrate the app from being proxied by <a href="http://httpd.apache.org/" target="_blank">Apache</a> to <a href="http://nginx.org">nginx</a>. 

We have always backed the pastebin with <a href="http://jetty.codehaus.org" target="_blank">Jetty</a> and this hasn't changed.  Without further adieu here is our config for nginx:

<pre lang="xml" colla="+">
server {<br />
  listen  80;<br />
  server_name mysticpaste.com www.mysticpaste.com;

  access_log  /var/log/nginx/mysticpaste.com.access.log;

  location / {<br />
    proxy_pass  http://127.0.0.1:8081/mysticpaste/;<br />
    proxy_pass_header Set-Cookie;<br />
    proxy_pass_header X-Forwarded-For;<br />
    proxy_pass_header Host;<br />
  }

}<br />
</pre>

So far so good.  The app does essentially what we want, hosts in Jetty under the context path /mysticpaste while offering it up on the root path via nginx and our users.  Under this configuration you'll see a slight problem however, in that the cookie path isn't being properly set due to the proxy.  In Apache we would just use <a href="http://httpd.apache.org/docs/current/mod/mod_proxy.html#proxypassreversecookiepath" target="_blank">ProxyPassReverseCookiePath</a>, but this doesn't appear to be an option in nginx anywhere I could find.

Next best thing, add a context-param to our web.xml and change the SessionPath that Jetty uses to be root instead of /mysticpaste.

<pre lang="xml" colla="+">
    <context-param>

<param-name>org.mortbay.jetty.servlet.SessionPath</param-name>

<param-value>/</param-value><br />
    </context-param><br />
</pre>

All works as it did with Apache, and you get some nginx goodness mixed in.

