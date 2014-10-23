---
layout: post
status: publish
published: true
title: Redirecting to your Google+ profile from Wordpress
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1572
wordpress_url: http://www.mysticcoders.com/?p=1572
date: '2011-07-12 14:34:05 +0000'
date_gmt: '2011-07-12 21:34:05 +0000'
categories:
- Development
tags: []
comments: []
---
<div style="float: right;"><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2011&#47;07&#47;google-plus.png" border="0"><&#47;div></p>
<p>There is a bit of discussion over on the new favorite social network <a href="http:&#47;&#47;plus.google.com" target="_blank">Google+<&#47;a>.  Some enterprising folks are copying Google's short URL for accessing Google which appends a plus sign following the domain like so: <a href="http:&#47;&#47;mysticcoders.com&#47;+">mysticcoders.com&#47;+<&#47;a>.  In this short article we'll show you several methods of achieving this on your Wordpress blog from cleanest, to not.</p>
<h2>Full privileges to web root<&#47;h2><br />
The most effective means of redirection is to edit the <code>.htaccess<&#47;code> file in the web root:</p>
<p><code><br />
Redirect &#47;+ https:&#47;&#47;plus.google.com&#47;[your-plus-id]&#47;<br />
<&#47;code></p>
<h2>No administrative rights to create .htaccess files<&#47;h2><br />
If you do not have access to edit the <code>.htaccess<&#47;code> file on your host.</p>
<ol>
<li>Create a directory named <code>+<&#47;code> in the root<&#47;li>
<li>Edit and save a new file named index.php and insert the following block of code:<&#47;li><br />
<&#47;ol></p>
<p><code><?php<br />
header('Location: https:&#47;&#47;plus.google.com&#47;[your-plus-id]&#47;');<br />
?><br />
<&#47;code></p>
<h2>Avoid using a PHP script<&#47;h2><br />
If for some strange reason you'd like to avoid using PHP for any reason at all, you can follow the same steps from the second method, but instead create a file named <code>index.html<&#47;code> in the <code>+<&#47;code> directory with the contents:</p>
<p><code><br />
<html><br />
    <head><br />
        <meta http-equiv="Refresh" content="0; url=https:&#47;&#47;plus.google.com&#47;[your-plus-id]&#47;" &#47;><br />
    <&#47;head><br />
<body><br />
<a href="https:&#47;&#47;plus.google.com&#47;[your-plus-id]&#47;">Click here to access the Google+ profile<&#47;a>.<br />
<&#47;body><br />
<&#47;html><br />
<&#47;code></p>
<p>NOTE: If you're using <a href="http:&#47;&#47;tumblr.com">Tumblr<&#47;a> see this great blog post about how to <a href="http:&#47;&#47;nikf.org&#47;post&#47;7538019123&#47;google-redirects-and-tumblr">implement the redirection from their interface.<&#47;a></p>
<p>For updates from <a href="https:&#47;&#47;plus.google.com&#47;107753428759636856492&#47;posts&#47;WWmDC7B4tbE">MG Siegler's original post<&#47;a>.</p>
