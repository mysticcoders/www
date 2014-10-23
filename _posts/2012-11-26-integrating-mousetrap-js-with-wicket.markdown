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
tags: []
comments: true
---
Over the weekend, I came across a neat library <a href="http://craig.is/killing/mice">mousetrap.js</a> used to add key commands to your web application.  It can be used in any browser including:


* Internet Explorer 6+ (wow)
* Chrome
* Safari
* Firefox
* Opera (yay <a href="http://www.theatlantic.com/technology/archive/2012/11/why-is-belarus-the-only-country-where-opera-is-the-most-popular-browser/265406/" target="_blank" rel="nofollow">Belarus!</a>)</li><br />

Basically the way it works, is 


1. add the Javascript library to the page
2. start binding commands

[javascript]<br />
Mousetrap.bind('command+k', function(e) {<br />
  _someFunctionality();<br />
});<br />
[/javascript]

Here's an example of usage in the <a href="http://mysticpaste.com">Mystic Paste</a> code.  We're adding an <a href="http://ci.apache.org/projects/wicket/apidocs/6.0.x/org/apache/wicket/ajax/AbstractDefaultAjaxBehavior.html">AbstractDefaultAjaxBehavior</a> that we're passing to <a href="https://github.com/kinabalu/wicket-mousetrap/blob/master/src/main/java/com/mysticcoders/wicket/mousetrap/Mousetrap.java">Mousetrap</a> and binding the key combination of pressing an 'n' to move the user to the New Paste page.  Within the pastebin, we have the following key commands right now:

<ul>
<li>n - new paste</li>
<li>h - history page
<ul>
<li>left arrow - previous page</li>
<li>right arrow - next page</li>
<li>shift+left arrow - first page</li>
<li>shift+right arrow - last page</li><br />
   </ul><br />
</li><br />
</ul>

And here's a snippet of usage:<br />
```
final AbstractDefaultAjaxBehavior historyNav = new AbstractDefaultAjaxBehavior() {
    @Override
    protected void respond(AjaxRequestTarget target) {
        throw new RestartResponseException(HistoryPage.class);
    }
};
add(historyNav);

mousetrap.addBind(new KeyBinding().addKeyCombo("h"), historyNav);
```

We've also done the work of setting up a Maven repository for the library to easily add it to your Wicket code:

[xml]<br />
    <repository><br />
        <id>mystic-mvn-repo</id><br />
        <name>Mystic Github Maven Repository</name><br />
        <url>https://raw.github.com/kinabalu/mystic-mvn-repo/master/snapshots</url><br />
    </repository><br />
    ...<br />
    <dependency><br />
        <groupId>com.mysticcoders</groupId><br />
        <artifactId>wicket-mousetrap</artifactId><br />
        <version>0.1-SNAPSHOT</version><br />
    </dependency><br />
[/xml]

If you'd like to grab it manually to integrate with your code, or just peruse the source you can find it on <a href="https://github.com/kinabalu/wicket-mousetrap">Github wicket-mousetrap</a>.

