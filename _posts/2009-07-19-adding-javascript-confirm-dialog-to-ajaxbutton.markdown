---
layout: post
status: publish
published: true
title: Adding Javascript confirm dialog to AjaxButton
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 3
wordpress_url: http://wicketbyexample.com/?p=3
date: '2009-07-19 20:17:01 +0000'
date_gmt: '2009-07-20 03:17:01 +0000'
tags: []
comments: true
---
<p>If you have an AJAX button in your form, a nice way of adding javascript is to use an IAjaxCallDecorator<a id="more"></a><a id="more-3"></a></p>
<pre lang="java" colla="+">
form.add(new AjaxButton("removeButton") {

    @Override
    protected IAjaxCallDecorator getAjaxCallDecorator() {
        return new AjaxPreprocessingCallDecorator(super.getAjaxCallDecorator()) {
        private static final long serialVersionUID = 1L;

            @Override
            public CharSequence preDecorateScript(CharSequence script) {
                return "if(!confirm('Are you sure you want to delete this?')) return false;" + script;
            }
        };
    }
}
</pre>
