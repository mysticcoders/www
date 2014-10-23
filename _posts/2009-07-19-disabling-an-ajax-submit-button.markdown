---
layout: post
status: publish
published: true
title: Disabling an AJAX submit button
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: A long running process that you'd like to show some indicator of progress
  or similar, usually means an indicator of some kind.  Here we use an IndicatingAjaxButton
  to show some progress near the clicked submit button, and we use an IAjaxCallDecorator
  to disable the submit button so we don't get multiple clicks
wordpress_id: 10
wordpress_url: http://wicketbyexample.com/?p=10
date: '2009-07-19 20:42:40 +0000'
date_gmt: '2009-07-20 03:42:40 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3457
  author: Delli
  author_email: dellik2004@gmail.com
  author_url: ''
  date: '2010-05-25 00:37:30 +0000'
  date_gmt: '2010-05-25 07:37:30 +0000'
  content: |-
    Hi,

    Thanks lot for post, and this is working perfectly in IE not in Mozila, the button is not disabled in Mozila where as its disabling in IE. could you please reply me, this is urjent.

    thanks in advance
- id: 3458
  author: Lalit
  author_email: lalit.pangha@gmail.com
  author_url: ''
  date: '2011-07-30 01:48:16 +0000'
  date_gmt: '2011-07-30 08:48:16 +0000'
  content: |-
    Thanks for sample code, it worked perfectly..
    Nice use of IAjazDecorator..
---
A long running process that you'd like to show some indicator of progress or similar, usually means an indicator of some kind.  Here we use an IndicatingAjaxButton to show some progress near the clicked submit button, and we use an IAjaxCallDecorator to disable the submit button so we don't get multiple clicks<a id="more"></a><a id="more-10"></a>

<pre lang="java" colla="+">
form.add(new IndicatingAjaxButton("submit", form) {

    @Override<br />
    protected IAjaxCallDecorator getAjaxCallDecorator() {<br />
        return new AjaxPostprocessingCallDecorator(super.getAjaxCallDecorator()) {<br />
            private static final long serialVersionUID = 1L;

            @Override<br />
            public CharSequence postDecorateScript(CharSequence script) {<br />
                return script + "this.disabled = true;";<br />
            }<br />
        };<br />
    }<br />
}<br />
</pre>

