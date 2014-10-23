---
layout: post
status: publish
published: true
title: Add Javascript or CSS using a Resource
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: 'A quick howto <small>(via <a href="http:&#47;&#47;cwiki.apache.org&#47;WICKET&#47;adding-javascript-or-css-using-a-resource.html"
  target="_blank">wicket wiki<&#47;a>)<&#47;small> on adding Javascript or CSS to
  your pages, and having them compressed during the "deployment" cycle automatically
  by Wicket. So to start with, we need to copy or Javascript or CSS file somewhere
  in our package hierarchy that we can reference in our Page. For simplicity, we can
  copy it right next to the HTML file like so:'
wordpress_id: 38
wordpress_url: http://wicketbyexample.com/?p=38
date: '2009-07-20 00:41:26 +0000'
date_gmt: '2009-07-20 07:41:26 +0000'
categories:
- Apache Wicket
tags: []
comments: []
---
<p>A quick howto <small>(via <a href="http:&#47;&#47;cwiki.apache.org&#47;WICKET&#47;adding-javascript-or-css-using-a-resource.html" target="_blank">wicket wiki<&#47;a>)<&#47;small> on adding Javascript or CSS to your pages, and having them compressed during the "deployment" cycle automatically by Wicket. So to start with, we need to copy or Javascript or CSS file somewhere in our package hierarchy that we can reference in our Page. For simplicity, we can copy it right next to the HTML file like so:<a id="more"></a><a id="more-38"></a></p>
<pre>
MyPage.java<br />
MyPage.html<br />
MyPage.js<br />
MyPage.css<br />
<&#47;pre></p>
<p>Then in our Page, we need to reference these items based on the path of our Java file, like so:</p>
<pre lang="java" colla="+">
private static final CompressedResourceReference MYPAGE_JS = new CompressedResourceReference(MyPage.class, "MyPage.js");</p>
<p>private static final CompressedResourceReference MYPAGE_CSS = new CompressedResourceReference(MyPage.class, "MyPage.css");<br />
<&#47;pre></p>
<p>This code gives us a ResourceReference that we can add to our page, most use cases to the HTML head element block. To do that in your page:</p>
<pre lang="java" colla="+">
add(HeaderContributor.forJavaScript( MYPAGE_JS ));</p>
<p>add(HeaderContributor.forCss( MYPAGE_CSS ));<br />
<&#47;pre></p>
<p>In Wicket 1.4 HeaderContributor.forJavaScript() and HeaderContributor.forCss() are deprecated, you can use the code below:</p>
<pre lang="java" colla="+">
add(JavascriptPackageResource.getHeaderContribution(MYPAGE_JS));</p>
<p>add(CSSPackageResource.getHeaderContribution(MYPAGE_CSS));<br />
<&#47;pre></p>
