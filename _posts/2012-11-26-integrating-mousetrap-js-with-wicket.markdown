---
layout: post
status: publish
published: true
title: Integrating mousetrap.js with Wicket
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1854
wordpress_url: http://www.mysticcoders.com/?p=1854
date: '2012-11-26 12:58:35 +0000'
date_gmt: '2012-11-26 19:58:35 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3776
  author: James Selvakumar
  author_email: james.eliyezar@gmail.com
  author_url: ''
  date: '2014-10-09 20:41:00 +0000'
  date_gmt: '2014-10-10 03:41:00 +0000'
  content: Thank you very much for this project. I'm trying to use it as explained
    in the post but some how the "renderHead" method in Mousetrap class is never executed
    and as a result mousetrap js files are not added to head. Appreciate if you can
    help.
- id: 3777
  author: Andrew Lombardi
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com/
  date: '2014-10-16 10:28:00 +0000'
  date_gmt: '2014-10-16 17:28:00 +0000'
  content: James, what version of Wicket are you using?  I believe the library integration
    here is probably using the Wicket 6.x branch.  And if you have a test project
    you can share, it's more likely I can see what you're seeing.
---
<p>Over the weekend, I came across a neat library <a href="http:&#47;&#47;craig.is&#47;killing&#47;mice">mousetrap.js<&#47;a> used to add key commands to your web application.  It can be used in any browser including:</p>
<ul>
<li>Internet Explorer 6+ (wow)<&#47;li>
<li>Chrome<&#47;li>
<li>Safari<&#47;li>
<li>Firefox<&#47;li>
<li>Opera (yay <a href="http:&#47;&#47;www.theatlantic.com&#47;technology&#47;archive&#47;2012&#47;11&#47;why-is-belarus-the-only-country-where-opera-is-the-most-popular-browser&#47;265406&#47;" target="_blank" rel="nofollow">Belarus!<&#47;a>)<&#47;li><br />
<&#47;ul></p>
<p>Basically the way it works, is </p>
<ol>
<li>add the Javascript library to the page<&#47;li>
<li>start binding commands<&#47;li><br />
<&#47;ol></p>
<p>[javascript]<br />
Mousetrap.bind('command+k', function(e) {<br />
  _someFunctionality();<br />
});<br />
[&#47;javascript]</p>
<p>Here's an example of usage in the <a href="http:&#47;&#47;mysticpaste.com">Mystic Paste<&#47;a> code.  We're adding an <a href="http:&#47;&#47;ci.apache.org&#47;projects&#47;wicket&#47;apidocs&#47;6.0.x&#47;org&#47;apache&#47;wicket&#47;ajax&#47;AbstractDefaultAjaxBehavior.html">AbstractDefaultAjaxBehavior<&#47;a> that we're passing to <a href="https:&#47;&#47;github.com&#47;kinabalu&#47;wicket-mousetrap&#47;blob&#47;master&#47;src&#47;main&#47;java&#47;com&#47;mysticcoders&#47;wicket&#47;mousetrap&#47;Mousetrap.java">Mousetrap<&#47;a> and binding the key combination of pressing an 'n' to move the user to the New Paste page.  Within the pastebin, we have the following key commands right now:</p>
<ul>
<li>n - new paste<&#47;li>
<li>h - history page
<ul>
<li>left arrow - previous page<&#47;li>
<li>right arrow - next page<&#47;li>
<li>shift+left arrow - first page<&#47;li>
<li>shift+right arrow - last page<&#47;li><br />
   <&#47;ul><br />
<&#47;li><br />
<&#47;ul></p>
<p>And here's a snippet of usage:<br />
[java]<br />
final AbstractDefaultAjaxBehavior historyNav = new AbstractDefaultAjaxBehavior() {<br />
    @Override<br />
    protected void respond(AjaxRequestTarget target) {<br />
        throw new RestartResponseException(HistoryPage.class);<br />
    }<br />
};<br />
add(historyNav);</p>
<p>mousetrap.addBind(new KeyBinding().addKeyCombo("h"), historyNav);<br />
[&#47;java]</p>
<p>We've also done the work of setting up a Maven repository for the library to easily add it to your Wicket code:</p>
<p>[xml]<br />
    <repository><br />
        <id>mystic-mvn-repo<&#47;id><br />
        <name>Mystic Github Maven Repository<&#47;name><br />
        <url>https:&#47;&#47;raw.github.com&#47;kinabalu&#47;mystic-mvn-repo&#47;master&#47;snapshots<&#47;url><br />
    <&#47;repository><br />
    ...<br />
    <dependency><br />
        <groupId>com.mysticcoders<&#47;groupId><br />
        <artifactId>wicket-mousetrap<&#47;artifactId><br />
        <version>0.1-SNAPSHOT<&#47;version><br />
    <&#47;dependency><br />
[&#47;xml]</p>
<p>If you'd like to grab it manually to integrate with your code, or just peruse the source you can find it on <a href="https:&#47;&#47;github.com&#47;kinabalu&#47;wicket-mousetrap">Github wicket-mousetrap<&#47;a>.</p>
