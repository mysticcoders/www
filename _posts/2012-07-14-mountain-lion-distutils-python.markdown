---
layout: post
status: publish
published: true
title: Mountain Lion GM, distutils, and Python
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1823
wordpress_url: http://www.mysticcoders.com/?p=1823
date: '2012-07-14 23:50:05 +0000'
date_gmt: '2012-07-15 06:50:05 +0000'
categories:
- Development
tags: []
comments:
- id: 3756
  author: Jerzyk
  author_email: jh@jerzyyk.com
  author_url: http://Website
  date: '2012-07-26 12:03:20 +0000'
  date_gmt: '2012-07-26 19:03:20 +0000'
  content: "If you upgrade to Xcode 4.4, then \"Command Line Tools\" can be installed
    from the Xcode Preferences panel (Downloads tab).\r\n\r\nThis helps, as by default
    OS X  10.8 do not install any .py files - only .pyo and .pyc."
---
<p>Since installing the GM of a new cat, there have been relatively few issues.  Thankfully.</p>
<p>One that recently came up, was attempting to run nosetests in a virtualenv using Python.  The oddest error showed after running nose, pip, etc</p>
<p><code><br />
Traceback (most recent call last):<br />
  File "~&#47;.env&#47;virtualenv&#47;bin&#47;pip", line 5, in <module><br />
    from pkg_resources import load_entry_point<br />
  File "~&#47;.env&#47;mailup&#47;lib&#47;python2.7&#47;site-packages&#47;setuptools-0.6c11-py2.7.egg&#47;pkg_resources.py", line 698, in <module><br />
  File "~&#47;.env&#47;mailup&#47;lib&#47;python2.7&#47;site-packages&#47;setuptools-0.6c11-py2.7.egg&#47;pkg_resources.py", line 701, in Environment<br />
  File "~&#47;.env&#47;mailup&#47;lib&#47;python2.7&#47;site-packages&#47;setuptools-0.6c11-py2.7.egg&#47;pkg_resources.py", line 96, in get_supported_platform<br />
  File "~&#47;.env&#47;mailup&#47;lib&#47;python2.7&#47;site-packages&#47;setuptools-0.6c11-py2.7.egg&#47;pkg_resources.py", line 221, in get_build_platform<br />
  File "~&#47;.env&#47;mailup&#47;lib&#47;python2.7&#47;distutils&#47;__init__.py", line 16, in <module><br />
    exec(open(os.path.join(distutils_path, '__init__.py')).read())<br />
IOError: [Errno 2] No such file or directory: '&#47;System&#47;Library&#47;Frameworks&#47;Python.framework&#47;Versions&#47;2.7&#47;lib&#47;python2.7&#47;distutils&#47;__init__.py'<br />
<&#47;code></p>
<p>Further inspection revealed that the Python lib folder didn't include any source files.  And the easiest way to fix this, was to go to the <a href="http:&#47;&#47;developer.apple.com">Apple developer site<&#47;a> and install the "Command Line Tools for Xcode 4.5 Developer Preview 2 (OS X Mountain Lion)".  </p>
<p>Problem solved.</p>
