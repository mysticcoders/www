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
wordpress_id: 1713
wordpress_url: http://wicketbyexample.com/?p=45
date: '2009-07-20 07:50:16 +0000'
date_gmt: '2009-07-20 14:50:16 +0000'
tags: []
comments: true
---
When writing AJAX-specific code for Wicket, in order to make any updates to a component, it needs to be added to the AjaxTarget.  If you've got a particularly large form, this can get tedious, so use an IVisitor instead!
<a id="more"></a><a id="more-1713"></a>\n
<pre lang="java" colla="+">
@Override
protected void onSubmit(final AjaxRequestTarget target, Form form) {
    form.visitFormComponents(new FormComponent.IVisitor() {
        public Object formComponent(IFormVisitorParticipant
                formComponent) {
            final FormComponent fc = (FormComponent)formComponent;
            target.addComponent(fc);
            return Component.IVisitor.CONTINUE_TRAVERSAL;
        }
    });
    ...
</pre>
And as always, for each component you access via AJAX, you'll need to:\n
<pre lang="java" colla="+">
   component.setOutputMarkupId(true);
</pre>
