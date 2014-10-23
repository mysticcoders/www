---
layout: post
status: publish
published: true
title: A Gravatar Image component for Wicket
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1719
wordpress_url: http://wicketbyexample.com/?p=141
date: '2009-11-11 08:35:40 +0000'
date_gmt: '2009-11-11 15:35:40 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3479
  author: MysticPaste.com Gravatar support via the GravatarImage component from WicketByExample.com
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/11/11/mysticpaste-gets-gravatars-in-the-comments/
  date: '2009-11-11 09:37:34 +0000'
  date_gmt: '2009-11-11 16:37:34 +0000'
  content: "[...] you&#8217;d like to see the Wicket code that supports this, check
    it out on WicketByExample.com.   Share [...]"
---
<p>The comment system that was added to <a href="http:&#47;&#47;mysticpaste.com" target="_blank">mysticpaste.com<&#47;a> several months ago was pretty bare, boring.  It consisted of capturing name, email, and the comment of which we show name and comment only.  Since we're avid blog posters and readers, the thought of implementing a custom Wicket component for a <a href="http:&#47;&#47;gravatar.com" target="_blank">Gravatar<&#47;a> immediately came to mind.</p>
<p>First things first, extend our new GravatarImage component from WebComponent.  We don't need the image to hold any nested components, etc:</p>
<pre lang="java" colla="+">
public class GravatarImage extends WebComponent {<br />
<&#47;pre></p>
<p>We also override onComponentTag so we can populate the "src" attribute for our image with the Gravatar generated URL:</p>
<pre lang="java" colla="+">
    protected void onComponentTag(ComponentTag tag) {<br />
        super.onComponentTag(tag);<br />
        checkComponentTag(tag, "img");<br />
        tag.put("src", getDefaultModelObjectAsString());<br />
    }<br />
<&#47;pre></p>
<p>Next we provide our own Model implementation which performs the MD5 magic on our email address to give its special Gravatar URL pointing to our image.</p>
<pre lang="java" colla="+">
    private class GravatarModel extends AbstractReadOnlyModel<string> {<br />
        private static final String GRAVATAR_URL = "http:&#47;&#47;www.gravatar.com&#47;avatar&#47;";</p>
<p>        String email;<br />
        String gravatarKey;<br />
        int hsize;</p>
<p>        public GravatarModel(IModel<string> model, int hsize) {<br />
            email = model.getObject();<br />
            gravatarKey = MD5Util.md5Hex(email);<br />
            this.hsize = hsize;<br />
        }</p>
<p>        public String getObject() {<br />
            StringBuilder sb = new StringBuilder();<br />
            sb.append(GRAVATAR_URL);<br />
            sb.append(gravatarKey);<br />
            sb.append("?s=");<br />
            sb.append(hsize);<br />
            return sb.toString();<br />
        }<br />
    }<br />
<&#47;pre></p>
<p>And that's it!  Just follow the example given in the javadoc and voila!  You should have Gravatar pictures for the entered email address.  To take a look at the full implementation: <a href="http:&#47;&#47;kenai.com&#47;projects&#47;mystic-apps&#47;sources&#47;mystic-apps&#47;content&#47;mysticpaste&#47;src&#47;main&#47;java&#47;com&#47;mysticcoders&#47;mysticpaste&#47;web&#47;components&#47;GravatarImage.java?rev=89" target="_blank">Download GravatarImage.java<&#47;a>.</p>
<h3>Next steps<&#47;h3><br />
A couple of items can be added to this component to make it more "full-featured" to the Gravatar API.  Gravatar supports a default Gravatar image which may be passed, along with a number of flags one of which is implemented "s" or size.</p>
<p>Hope you enjoyed this, and use this in your next project!</p>
