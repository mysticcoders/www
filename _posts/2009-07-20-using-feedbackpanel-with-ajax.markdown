---
layout: post
status: publish
published: true
title: Using FeedbackPanel with AJAX
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: 'If you''d like to have your FeedbackPanel update with errors in the event
  of a problem with your form, just adding the FeedbackPanel won''t do you any good.  Just
  as with any other AJAX-updating component in Wicket, you''ll need to add it to the
  AjaxRequestTarget, only difference is, you''ll have to do this while overriding
  onError like so:'
wordpress_id: 1714
wordpress_url: http://wicketbyexample.com/?p=49
date: '2009-07-20 07:58:37 +0000'
date_gmt: '2009-07-20 14:58:37 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3747
  author: Jordan
  author_email: wontsay@wontsay.com
  author_url: http://nothing
  date: '2012-04-09 11:37:27 +0000'
  date_gmt: '2012-04-09 18:37:27 +0000'
  content: Thanks for posting this. You can find relief that it has helped someone!
    Even if it was 3 years later :D
- id: 3748
  author: Robert
  author_email: none@none.com
  author_url: ''
  date: '2012-05-14 12:52:02 +0000'
  date_gmt: '2012-05-14 19:52:02 +0000'
  content: This solved my problem as well.  Thank you very much.
---
<p>If you'd like to have your FeedbackPanel update with errors in the event of a problem with your form, just adding the FeedbackPanel won't do you any good.  Just as with any other AJAX-updating component in Wicket, you'll need to add it to the AjaxRequestTarget, only difference is, you'll have to do this while overriding onError like so:<a id="more"></a><a id="more-1714"></a></p>
<pre lang="java" colla="+">
final FeedbackPanel feedbackPanel = new FeedbackPanel("feedbackPanel");<br />
feedbackPanel.setOutputMarkupId(true);<br />
form.add(feedbackPanel);<br />
form.add(new AjaxButton("submit") {<br />
    @Override<br />
    protected void onError(final AjaxRequestTarget target, final Form form) {<br />
        target.addComponent(feedbackPanel);<br />
    }<br />
});<br />
<&#47;pre></p>
