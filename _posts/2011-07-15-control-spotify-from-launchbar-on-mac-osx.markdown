---
layout: post
status: publish
published: true
title: Control Spotify from Launchbar on Mac OSX
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1591
wordpress_url: http://www.mysticcoders.com/?p=1591
date: '2011-07-15 17:13:39 +0000'
date_gmt: '2011-07-16 00:13:39 +0000'
categories:
- Technology
tags: []
comments:
- id: 3425
  author: Chris Patti
  author_email: cpatti@gmail.com
  author_url: http://www.feoh.org
  date: '2011-07-25 10:31:04 +0000'
  date_gmt: '2011-07-25 17:31:04 +0000'
  content: "Thanks for linking to the original blog post.\r\n\r\nThese scripts are
    in fact out of date as Spotify now supports true Applescript-ability, so folks
    should go back to the original author's article and use those instead."
---
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2011&#47;07&#47;spotify.jpg" border="0" &#47;></p>
<p><strong>EDIT:<&#47;strong> <em><a href="http:&#47;&#47;www.jacktams.net&#47;2011&#47;07&#47;21&#47;spotify-applescripts-0-5-2&#47;">Follow this link<&#47;a> for the latest scripts which utilize Spotify's more enhanced Applescript support<&#47;em></p>
<p>If you've been following the latest invite craze, the latest one has to be for the European import <a href="http:&#47;&#47;www.spotify.com">Spotify<&#47;a>.  Basically millions of tracks you can play instantly on your computer for free + ads, and for a fee they'll remove the ads, and an additional fee they'll let you stream their catalog from your mobile phone (iPhone or Android).  I don't have any more invites, but I know a lot of folks have had success putting their email in for <a href="https:&#47;&#47;www.spotify.com&#47;us&#47;amanda&#47;">@amanda<&#47;a>.  And of course, <a href="https:&#47;&#47;www.spotify.com&#47;us&#47;download&#47;mac&#47;">visit here to download the Spotify client<&#47;a>.</p>
<p>If you're a user of <a href="http:&#47;&#47;www.obdev.at&#47;products&#47;launchbar&#47;index.html">Launchbar<&#47;a> or Quicksilver, these Applescripts (for Launchbar) placed in <code>~&#47;Library&#47;Application Support&#47;LaunchBar&#47;Actions&#47;Spotify<&#47;code> should help in controlling your music playing without having to constantly open Spotify.   For updates and the original author of these scripts <a href="http:&#47;&#47;www.jacktams.co.uk&#47;2010&#47;04&#47;28&#47;spotify-applescripts-version-0-4-3&#47;">visit this blog article<&#47;a>.  After adding these applescripts activate Launchbar and select the Index menu > Update Index > All Rules.  Or just activate Launchbar and press Cmd-0.</p>
<h2>Spotify - Next Song<&#47;h2></p>
<pre lang="applescript" colla="+">
tell application "System Events"<br />
	set MyList to (name of every process)<br />
end tell</p>
<p>tell application "System Events" to set appList to &Acirc;&not;<br />
	name of application processes whose frontmost is true</p>
<p>set activeApp to item 1 of appList<br />
if (MyList contains "Spotify") is true then<br />
	tell application "Spotify" to activate<br />
	tell application "System Events"<br />
		tell process "Spotify"<br />
			click menu item 3 of menu 1 of menu bar item 6 of menu bar 1<br />
		end tell<br />
	end tell<br />
	tell application "System Events"<br />
		set visible of process "Spotify" to false<br />
	end tell<br />
end if<br />
<&#47;pre></p>
<h2>Spotify - Previous Song<&#47;h2></p>
<pre lang="applescript" colla="+">
tell application "System Events"<br />
	set MyList to (name of every process)<br />
end tell</p>
<p>tell application "System Events" to set appList to &Acirc;&not;<br />
	name of application processes whose frontmost is true</p>
<p>set activeApp to item 1 of appList<br />
if (MyList contains "Spotify") is true then<br />
	tell application "Spotify" to activate<br />
	tell application "System Events"<br />
		tell process "Spotify"<br />
			click menu item 4 of menu 1 of menu bar item 6 of menu bar 1<br />
		end tell<br />
	end tell<br />
	tell application "System Events"<br />
		set visible of process "Spotify" to false<br />
	end tell<br />
end if<br />
<&#47;pre></p>
<h2>Spotify - Play&#47;Pause<&#47;h2></p>
<pre lang="applescript" colla="+">
tell application "System Events"<br />
	set MyList to (name of every process)<br />
end tell</p>
<p>tell application "System Events" to set appList to &Acirc;&not;<br />
	name of application processes whose frontmost is true</p>
<p>set activeApp to item 1 of appList<br />
if (MyList contains "Spotify") is true then<br />
	tell application "Spotify" to activate<br />
	tell application "System Events"<br />
		tell process "Spotify"<br />
			click menu item 1 of menu 1 of menu bar item 6 of menu bar 1<br />
		end tell<br />
	end tell<br />
	tell application "System Events"<br />
		set visible of process "Spotify" to false<br />
	end tell<br />
end if<br />
<&#47;pre></p>
<h2>Searching in Spotify<&#47;h2><br />
Searching is vital to using this new tool for us folks over here in the United States, and our European brethren have been busy with helpers like <a href="http:&#47;&#47;blindrocket.blogspot.com&#47;2009&#47;09&#47;searching-spotify-with-quicksilver.html">searching Spotify with Quicksilver<&#47;a>.  I liked this so much, I've adapted the instructions for Launchbar:</p>
<ol>
<li>Activate Launchbar and select Index > Show Index or Option+Cmd+I<&#47;li>
<li>Browse to Search Templates (UTF-8) and click Add<&#47;li>
<li>Add the following entries:
<ul>
<li>Name: <code>Search Spotify for Album<&#47;code> Detail: <code>spotify:search:album:*<&#47;code><&#47;li>
<li>Name: <code>Search Spotify for Artist<&#47;code> Detail: <code>spotify:search:artist:*<&#47;code><&#47;li>
<li>Name: <code>Search Spotify for Song<&#47;code> Detail: <code>spotify:search:title:*<&#47;code><&#47;li><br />
     <&#47;ul><br />
   <&#47;li></p>
<li>Update Index for Search Templates (UTF-8) or All<&#47;li><br />
<&#47;ol></p>
<h2>If using Spaces<&#47;h2><br />
Some folks have reported that when using Spaces in OSX the Applescripts have switched to that Space.  Simplest thing to do is set the preferences for Spaces so that Spotify shows up on "Every Space".</p>
<p>Enjoy the music!</p>
<p><strong>EDIT:<&#47;strong> <em><a href="http:&#47;&#47;www.jacktams.net&#47;2011&#47;07&#47;21&#47;spotify-applescripts-0-5-2&#47;">Follow this link<&#47;a> for the latest scripts which utilize Spotify's more enhanced Applescript support<&#47;em></p>
