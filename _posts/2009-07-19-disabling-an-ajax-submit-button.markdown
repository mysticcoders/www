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
tags: []
---
<p>A long running process that you'd like to show some indicator of progress or similar, usually means an indicator of some kind.  Here we use an IndicatingAjaxButton to show some progress near the clicked submit button, and we use an IAjaxCallDecorator to disable the submit button so we don't get multiple clicks<a id="more"></a><a id="more-10"></a></p>
<pre lang="java" colla="+">
form.add(new IndicatingAjaxButton("submit", form) {

    @Override
    protected IAjaxCallDecorator getAjaxCallDecorator() {
        return new AjaxPostprocessingCallDecorator(super.getAjaxCallDecorator()) {
            private static final long serialVersionUID = 1L;

            @Override
            public CharSequence postDecorateScript(CharSequence script) {
                return script + "this.disabled = true;";
            }
        };
    }
}
</pre>
