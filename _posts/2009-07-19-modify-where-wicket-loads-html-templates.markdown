---
layout: post
status: publish
published: true
title: Modify Where Wicket Loads HTML Templates
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 27
wordpress_url: http://wicketbyexample.com/?p=27
date: '2009-07-19 22:53:28 +0000'
date_gmt: '2009-07-20 05:53:28 +0000'
tags: []
comments: true
---
In <a href="http://wicket.apache.org" target="_blank">Apache Wicket</a>, the framework expects the HTML templates to mirror the class-file directory structure.  The example below allows you to define a different path for your HTML files.<a id="more"></a><a id="more-27"></a>\n
<pre lang="java" colla="+">
public class PathStripperLocator extends ResourceStreamLocator {

    public PathStripperLocator() {
    }

    public IResourceStream locate(final Class clazz, final String path) {
        IResourceStream located = super.locate(clazz, trimFolders(path));
        if (located != null) {
            return located;
        }
        return super.locate(clazz, path);
    }

    private String trimFolders(String path) {
        return path.substring(path.lastIndexOf("/") + 1);
    }
}
</pre>
<pre lang="java" colla="+">
public class MyApplication extends AuthDataApplication {
    @Override
    protected void init() {
        super.init();
        IResourceSettings resourceSettings = getResourceSettings();
        resourceSettings.addResourceFolder("src/main/webapp"); //this path should be changed
        resourceSettings.setResourceStreamLocator(new PathStripperLocator());
    }
</pre>
<small>(via <a href="http://cwiki.apache.org/WICKET/control-where-html-files-are-loaded-from.html">wicket wiki</a>)</small>\n
