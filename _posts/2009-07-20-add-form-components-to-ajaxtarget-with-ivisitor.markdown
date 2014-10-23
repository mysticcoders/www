---
layout: post
status: publish
published: true
title: Add Form Component&#039;s to AjaxTarget with IVisitor
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: |
  When writing AJAX-specific code for Wicket, in order to make any updates to a component, it needs to be added to the AjaxTarget.  If you've got a particularly large form, this can get tedious, so use an IVisitor instead!
wordpress_id: 1713
wordpress_url: http://wicketbyexample.com/?p=45
date: '2009-07-20 07:50:16 +0000'
date_gmt: '2009-07-20 14:50:16 +0000'
categories:
- Apache Wicket
tags: []
comments: []
---
<p>When writing AJAX-specific code for Wicket, in order to make any updates to a component, it needs to be added to the AjaxTarget.  If you've got a particularly large form, this can get tedious, so use an IVisitor instead!<br />
<a id="more"></a><a id="more-1713"></a></p>
<pre lang="java" colla="+">
@Override<br />
protected void onSubmit(final AjaxRequestTarget target, Form form) {<br />
    form.visitFormComponents(new FormComponent.IVisitor() {<br />
        public Object formComponent(IFormVisitorParticipant<br />
                formComponent) {<br />
            final FormComponent fc = (FormComponent)formComponent;<br />
            target.addComponent(fc);<br />
            return Component.IVisitor.CONTINUE_TRAVERSAL;<br />
        }<br />
    });<br />
    ...<br />
<&#47;pre></p>
<p>And as always, for each component you access via AJAX, you'll need to:</p>
<pre lang="java" colla="+">
   component.setOutputMarkupId(true);<br />
<&#47;pre></p>
