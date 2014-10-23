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
<div style="float: right;"><img src="http://www.mysticcoders.com/wp-content/uploads/2011/07/google-plus.png" border="0"></div>

There is a bit of discussion over on the new favorite social network <a href="http://plus.google.com" target="_blank">Google+</a>.  Some enterprising folks are copying Google's short URL for accessing Google which appends a plus sign following the domain like so: <a href="http://mysticcoders.com/+">mysticcoders.com/+</a>.  In this short article we'll show you several methods of achieving this on your Wordpress blog from cleanest, to not.

<h2>Full privileges to web root</h2><br />
The most effective means of redirection is to edit the <code>.htaccess</code> file in the web root:

<code><br />
Redirect /+ https://plus.google.com/[your-plus-id]/<br />
</code>

<h2>No administrative rights to create .htaccess files</h2><br />
If you do not have access to edit the <code>.htaccess</code> file on your host.

<ol>
<li>Create a directory named <code>+</code> in the root</li>
<li>Edit and save a new file named index.php and insert the following block of code:</li><br />
</ol>

<code><?php<br />
header('Location: https://plus.google.com/[your-plus-id]/');<br />
?><br />
</code>

<h2>Avoid using a PHP script</h2><br />
If for some strange reason you'd like to avoid using PHP for any reason at all, you can follow the same steps from the second method, but instead create a file named <code>index.html</code> in the <code>+</code> directory with the contents:

<code><br />
<html><br />
    <head><br />
        <meta http-equiv="Refresh" content="0; url=https://plus.google.com/[your-plus-id]/" /><br />
    </head><br />
<body><br />
<a href="https://plus.google.com/[your-plus-id]/">Click here to access the Google+ profile</a>.<br />
</body><br />
</html><br />
</code>

NOTE: If you're using <a href="http://tumblr.com">Tumblr</a> see this great blog post about how to <a href="http://nikf.org/post/7538019123/google-redirects-and-tumblr">implement the redirection from their interface.</a>

For updates from <a href="https://plus.google.com/107753428759636856492/posts/WWmDC7B4tbE">MG Siegler's original post</a>.

