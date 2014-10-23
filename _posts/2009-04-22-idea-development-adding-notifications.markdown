---
layout: post
status: publish
published: true
title: 'IDEA Development: Adding notifications'
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: <p>Our initial plugin for IDEA that talked to <a href="http:&#47;&#47;www.mysticpaste.com"
  target="_blank">MysticPaste.com<&#47;a> was fairly simple, offered no feedback to
  the user that anything happened. I spent some time trying to find out a method of
  achieving unobtrusive notification that the paste was successful. On initial glance
  at the API, nothing jumped out except for <em>Messages<&#47;em>, and <em>StatusBar<&#47;em>.<&#47;p>
wordpress_id: 784
wordpress_url: http://www.mysticcoders.com/blog/2009/04/21/idea-development-adding-notifications/
date: '2009-04-22 09:30:23 +0000'
date_gmt: '2009-04-22 16:30:23 +0000'
categories:
- Java
tags:
- Java
- Development
comments: []
---
<p>Our initial plugin for IDEA that talked to <a href="http:&#47;&#47;www.mysticpaste.com" target="_blank">MysticPaste.com<&#47;a> was fairly simple, offered no feedback to the user that anything happened. I spent some time trying to find out a method of achieving unobtrusive notification that the paste was successful. On initial glance at the API, nothing jumped out except for <em>Messages<&#47;em>, and <em>StatusBar<&#47;em>.<&#47;p><a id="more"></a><a id="more-784"></a>
<p>First crack was using <em>Messages<&#47;em>:<&#47;p></p>
<pre lang="java" colla="+">
    Messages.showInfoMessage("Paste successful!","URL automatically copied to your clipboard");<br />
<&#47;pre></p>
<p>It meets the standard of showing feedback to the end-user, but its definitely obtrusive. The user is forced to click on the OK button, its less of a status and more of a confirmation.<&#47;p></p>
<p>Second crack was using StatusBar. Only thing found in Google is for version 5.0 of the plugin API, and it only has one method, setInfo(String s). Doesn't look very promising. Introspection though, proves that nothing is as it seems. Through some sleuth googling, downloading some plugins that showed the notifications we like, and googling more, a solution was found.<&#47;p></p>
<h2>Adding a Project Component<&#47;h2></p>
<p>There's only one way to get at a <em>StatusBar<&#47;em> instance, and that's through the <em>WindowManager<&#47;em>. And there isn't a global <em>StatusBar<&#47;em>, there's one per Project. So where we got by without a <em>ProjectComponent<&#47;em> previously, we need one now. The following snippet gives us a <em>StatusBar<&#47;em> object:<&#47;p></p>
<pre lang="java" colla="+">
    StatusBar statusBar = WindowManager.getInstance().getStatusBar(project);<br />
<&#47;pre></p>
<p>And from that, we can call fireNotificationPopup with the proper parameters, to show our message. If you happen to find the JavaDoc, congratulations, initial searches came up empty on this method, but it works great. Here's the entire method for the notification, which we add to the event thread so Swing can fire and show it whenever it makes sense:<&#47;p></p>
<pre lang="java" colla="+">
    private Project project;</p>
<p>    public MysticPasteIndicationComponent(Project inProject) {<br />
        project = inProject;<br />
    }</p>
<p>    ...</p>
<p>    protected void updateWithStatus(final String statusMessage) {</p>
<p>        &#47;**<br />
         * Don't make Swing angry.  You won't like it when its angry<br />
         *<br />
         *&#47;<br />
        ApplicationManager.getApplication().invokeLater(<br />
                new Runnable() {<br />
                    public void run() {<br />
                        JTextArea area = new JTextArea();<br />
                        area.setOpaque(false);<br />
                        area.setEditable(false);<br />
                        StringBuffer notification = new StringBuffer(statusMessage);<br />
                        area.setText(notification.toString());<br />
                        StatusBar statusBar = WindowManager.getInstance().getStatusBar(project);<br />
                        if (statusBar != null)</p>
<p>                        {<br />
                            statusBar.fireNotificationPopup(area, LightColors.GREEN);<br />
                        }<br />
                    }</p>
<p>                }<br />
        );</p>
<p>    }<br />
<&#47;pre></p>
<p>And now all we need is to call this after the paste was successful. So similar to how we grabbed the <em>Editor<&#47;em>, we'll again pull out our <em>DataContext<&#47;em> object bag of tricks, and find our <em>ProjectComponent<&#47;em> instance, and fire off our status update as you can see here:<&#47;p></p>
<pre lang="java" colla="+">
    Project project = DataKeys.PROJECT.getData(context);<br />
    MysticPasteIndicationComponent mpiComponent = project.getComponent(MysticPasteIndicationComponent.class);<br />
    mpiComponent.updateWithStatus("Paste successful!nnURL automatically copied to your clipboard");<br />
<&#47;pre></p>
<p>That's it. And we promise, no animals were hurt during this exercise. And DO try this at home.<&#47;p></p>
