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
excerpt: In <a href="http://wicket.apache.org" target="_blank">Apache Wicket</a>,
  the framework expects the HTML templates to mirror the class-file directory structure.  The
  example below allows you to define a different path for your HTML files.
wordpress_id: 27
wordpress_url: http://wicketbyexample.com/?p=27
date: '2009-07-19 22:53:28 +0000'
date_gmt: '2009-07-20 05:53:28 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3462
  author: Daniele Dellafiore
  author_email: ildella@gmail.com
  author_url: http://danieledellafiore.net
  date: '2010-03-12 11:25:35 +0000'
  date_gmt: '2010-03-12 18:25:35 +0000'
  content: Any idea about how to achieve this also for css or other files stored under
    src/main/resources/com/myapp/... ?
- id: 3463
  author: Jorge
  author_email: jorgebo10@gmail.com
  author_url: ''
  date: '2010-06-03 09:12:36 +0000'
  date_gmt: '2010-06-03 16:12:36 +0000'
  content: "This could help ...\n\nWebApplicationPath paths = new WebApplicationPath(getServletContext());\n\t\tpaths.add(\"\");\n\t\tpaths.add(\"/html\");\n\t\tpaths.add(\"/images\");\n
    \       paths.add(\"/js\");\n        paths.add(\"/styles\");\n      getResourceSettings().setResourceStreamLocator(new
    ResourceStreamLocator(paths));"
---
In <a href="http://wicket.apache.org" target="_blank">Apache Wicket</a>, the framework expects the HTML templates to mirror the class-file directory structure.  The example below allows you to define a different path for your HTML files.<a id="more"></a><a id="more-27"></a>

<pre lang="java" colla="+">
public class PathStripperLocator extends ResourceStreamLocator {

    public PathStripperLocator() {<br />
    }

    public IResourceStream locate(final Class clazz, final String path) {<br />
        IResourceStream located = super.locate(clazz, trimFolders(path));<br />
        if (located != null) {<br />
            return located;<br />
        }<br />
        return super.locate(clazz, path);<br />
    }

    private String trimFolders(String path) {<br />
        return path.substring(path.lastIndexOf("/") + 1);<br />
    }<br />
}<br />
</pre>

<pre lang="java" colla="+">
public class MyApplication extends AuthDataApplication {<br />
    @Override<br />
    protected void init() {<br />
        super.init();<br />
        IResourceSettings resourceSettings = getResourceSettings();<br />
        resourceSettings.addResourceFolder("src/main/webapp"); //this path should be changed<br />
        resourceSettings.setResourceStreamLocator(new PathStripperLocator());<br />
    }<br />
</pre><br />
<small>(via <a href="http://cwiki.apache.org/WICKET/control-where-html-files-are-loaded-from.html">wicket wiki</a>)</small>

