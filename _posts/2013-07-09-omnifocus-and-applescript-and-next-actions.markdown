---
layout: post
status: publish
published: true
title: OmniFocus and AppleScript and Next Actions
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1907
wordpress_url: http://www.mysticcoders.com/?p=1907
date: '2013-07-09 22:02:29 +0000'
date_gmt: '2013-07-10 05:02:29 +0000'
categories:
- Uncategorized
tags: []
comments:
- id: 3774
  author: jack
  author_email: jsadano@gmail.com
  author_url: ''
  date: '2013-09-10 08:46:00 +0000'
  date_gmt: '2013-09-10 15:46:00 +0000'
  content: this is great. both pieces super helpful.
---
<p>I've recently reignited and cleaned up my <a href="http:&#47;&#47;www.omnigroup.com&#47;products&#47;omnifocus&#47;">OmniFocus<&#47;a> projects and tasks after reading a brilliant article about utilizing GTD contexts in a different way.  Sven Fechner over at Simplicity Bliss discusses <a href="http:&#47;&#47;simplicitybliss.com&#47;2011&#47;06&#47;a-fresh-take-on-contexts&#47;">"A Fresh Take on Contexts"<&#47;a>.  Go ahead and read it, it makes a whole lotta sense.  Our devices have made many of the contexts from GTD parlance unnecessary, as email and much of the office work can all be done in a caf&eacute;.  </p>
<p>One of the gems in that blog post, was an AppleScript you could use to find all the projects that didn't have any Next Actions assigned.  Curt Clifton who works for The Omni Group wrote an AppleScript which does just that and with it you can <a href="http:&#47;&#47;www.curtclifton.net&#47;projects&#47;">Verify Next Actions Exist<&#47;a>.</p>
<p>Installed and brilliant, unless you have removed or have never installed Growl, and instead rely now on Notification Center in Mountain Lion.  Time for you to figure out that (* and *) are comments in AppleScript, and there are 3 places you'll need to find and fix.  Or you could use and install <a href="http:&#47;&#47;collect3.com.au&#47;hiss&#47;">Hiss<&#47;a> which will forward all Growl notifications to Notification Center.  Or... you can use this updated script that utilizes an Automator action to talk to Notification Center in lieu of Growl.</p>
<ol>
<li>Download the <a href="http:&#47;&#47;www.automatedworkflows.com&#47;2012&#47;08&#47;26&#47;display-notification-center-alert-automator-action-1-0-0&#47;">Display Notification Center Alert<&#47;a> automator action from Automated Workflows.  When downloaded unpack it and double click on the .action file<&#47;li>
<li>Create a new workflow in Automator and add the "Display Notification Center Alert" action.<&#47;li>
<li>After dragging the "Display Notification Center Alert" to the right pane, at the bottom add variables by right-clicking and selecting "New Variable" and using the names <em>title<&#47;em>, <em>subtitle<&#47;em>, and <em>message<&#47;em>.<&#47;li>
<li>Drag each variable to the corresponding field in Display Notification Center Alert action<&#47;li>
<li>Save the workflow as Display Notification.workflow.  Place it in <em>~&#47;Library&#47;Workflows.<em><&#47;li>
<li>Download this updated <a href="http:&#47;&#47;mysticweb-bucket.s3.amazonaws.com&#47;scripts&#47;Verify%20NAs.scpt">Verify NAs.scpt<&#47;a> and place in <em>~&#47;Library&#47;Scripts&#47;Applications&#47;OmniFocus<&#47;li><br />
<&#47;ol></p>
<p>After that if you right-click on the toolbar and Customize Toolbar, you'll see a Verify NAs, drag it to your toolbar and close the customize pane.  Click it, and enjoy.</p>
