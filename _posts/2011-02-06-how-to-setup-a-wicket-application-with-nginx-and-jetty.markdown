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
  content: "Start from v.1.12 ngix include commands to resolve issue with cookies:\r\nproxy_cookie_domain\r\nproxy_cookie_path\r\nhttp:&#47;&#47;nginx.org&#47;en&#47;docs&#47;http&#47;ngx_http_proxy_module.html#proxy_cookie_domain\r\nhttp:&#47;&#47;nginx.org&#47;en&#47;docs&#47;http&#47;ngx_http_proxy_module.html#proxy_cookie_path\r\n\r\nExample
    of my config that fine works:\r\nserver {\r\n        listen 80;\r\n        server_name
    smartrss.ru;\r\n        location &#47; {\r\n                proxy_pass              http:&#47;&#47;localhost:8080&#47;userui&#47;;\r\n
    \               proxy_pass_header Set-Cookie;\r\n                proxy_pass_header
    X-Forwarded-For;\r\n                proxy_set_header        X-Real-IP $remote_addr;\r\n
    \               proxy_cookie_domain localhost smartrss.ru;\r\n                proxy_cookie_path
    \  &#47;userui&#47; &#47;;\r\n        }\r\n}"
---
<p>Our signature sample is our <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket&#47;">"5 Days Of Wicket"<&#47;a> tutorial app <a href="http:&#47;&#47;mysticpaste.com">MysticPaste.com<&#47;a>.  And recently I decided to migrate the app from being proxied by <a href="http:&#47;&#47;httpd.apache.org&#47;" target="_blank">Apache<&#47;a> to <a href="http:&#47;&#47;nginx.org">nginx<&#47;a>. </p>
<p>We have always backed the pastebin with <a href="http:&#47;&#47;jetty.codehaus.org" target="_blank">Jetty<&#47;a> and this hasn't changed.  Without further adieu here is our config for nginx:</p>
<pre lang="xml" colla="+">
server {<br />
  listen  80;<br />
  server_name mysticpaste.com www.mysticpaste.com;</p>
<p>  access_log  &#47;var&#47;log&#47;nginx&#47;mysticpaste.com.access.log;</p>
<p>  location &#47; {<br />
    proxy_pass  http:&#47;&#47;127.0.0.1:8081&#47;mysticpaste&#47;;<br />
    proxy_pass_header Set-Cookie;<br />
    proxy_pass_header X-Forwarded-For;<br />
    proxy_pass_header Host;<br />
  }</p>
<p>}<br />
<&#47;pre></p>
<p>So far so good.  The app does essentially what we want, hosts in Jetty under the context path &#47;mysticpaste while offering it up on the root path via nginx and our users.  Under this configuration you'll see a slight problem however, in that the cookie path isn't being properly set due to the proxy.  In Apache we would just use <a href="http:&#47;&#47;httpd.apache.org&#47;docs&#47;current&#47;mod&#47;mod_proxy.html#proxypassreversecookiepath" target="_blank">ProxyPassReverseCookiePath<&#47;a>, but this doesn't appear to be an option in nginx anywhere I could find.</p>
<p>Next best thing, add a context-param to our web.xml and change the SessionPath that Jetty uses to be root instead of &#47;mysticpaste.</p>
<pre lang="xml" colla="+">
    <context-param></p>
<param-name>org.mortbay.jetty.servlet.SessionPath<&#47;param-name></p>
<param-value>&#47;<&#47;param-value><br />
    <&#47;context-param><br />
<&#47;pre></p>
<p>All works as it did with Apache, and you get some nginx goodness mixed in.</p>
