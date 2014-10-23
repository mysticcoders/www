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
excerpt: If you have an AJAX button in your form, a nice way of adding javascript
  is to use an IAjaxCallDecorator
wordpress_id: 3
wordpress_url: http://wicketbyexample.com/?p=3
date: '2009-07-19 20:17:01 +0000'
date_gmt: '2009-07-20 03:17:01 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3455
  author: 'Onglets Dynamiques : Etape 7 &#8211; Corrections | NooCodeCommit'
  author_email: ''
  author_url: http://www.noocodecommit.com/blog/nicogiard/wicket/onglets-dynamiques-etape-7-corrections
  date: '2009-07-27 00:58:22 +0000'
  date_gmt: '2009-07-27 07:58:22 +0000'
  content: "[...] En effet, dans cette &Atilde;&copy;tape j&#8217;ai opt&Atilde;&copy;
    pour cr&Atilde;&copy;er ma propre classe OngletAjaxLink pour avoir la main sur
    la d&Atilde;&copy;claration de l&#8217;&Atilde;&copy;vennement onclick. C&#8217;&Atilde;&copy;tait
    avant que je d&Atilde;&copy;couvre l&#8217;article Adding Javascript confirm dialog
    to AjaxButton. [...]"
- id: 3456
  author: Steve
  author_email: sm@homeaway.com
  author_url: ''
  date: '2010-11-06 12:32:10 +0000'
  date_gmt: '2010-11-06 19:32:10 +0000'
  content: |-
    Thanks for the help. Alternatively, you could do the following:

            _form.add(new AjaxButton("refund-button", _form) {
                @Override
                protected String getOnClickScript() {
                    return "if (!confirm('"+getString("refund.confirmation", null)+"')) return false;";
                }
                ...
- id: 3764
  author: siva
  author_email: siva.krt88@gmail.com
  author_url: ''
  date: '2012-11-06 06:59:59 +0000'
  date_gmt: '2012-11-06 13:59:59 +0000'
  content: "very helpful\r\n\r\n--thank you so much"
---
<p>If you have an AJAX button in your form, a nice way of adding javascript is to use an IAjaxCallDecorator<a id="more"></a><a id="more-3"></a></p>
<pre lang="java" colla="+">
form.add(new AjaxButton("removeButton") {</p>
<p>    @Override<br />
    protected IAjaxCallDecorator getAjaxCallDecorator() {<br />
        return new AjaxPreprocessingCallDecorator(super.getAjaxCallDecorator()) {<br />
        private static final long serialVersionUID = 1L;</p>
<p>            @Override<br />
            public CharSequence preDecorateScript(CharSequence script) {<br />
                return "if(!confirm('Are you sure you want to delete this?')) return false;" + script;<br />
            }<br />
        };<br />
    }<br />
}<br />
<&#47;pre></p>
