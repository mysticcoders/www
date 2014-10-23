---
layout: post
status: publish
published: true
title: IRC notifications over SSH using socat and growl
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: "<p>Here at Mystic, we do a lot of remote work using <a href=\"http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Internet_Relay_Chat\"
  target=\"_blank\">IRC<&#47;a>. And due to the heavy use of best of breed tools under
  OSX and Linux, we find ourselves working in a shell a lot of the day, along with
  our IDE. We like to keep in the Flow state for as much of the time working as possible,
  so we turn off things like email notifications, twitter popups, and other such annoyances.<&#47;p>
  \r\n"
wordpress_id: 756
wordpress_url: http://www.mysticcoders.com/blog/2009/04/15/irc-notifications-over-ssh-using-socat-and-growl/
date: '2009-04-15 09:30:18 +0000'
date_gmt: '2009-04-15 16:30:18 +0000'
categories:
- Development
tags:
- Technology
- Development
comments:
- id: 2194
  author: Jimmy
  author_email: rochasmaster@hotmail.com
  author_url: ''
  date: '2009-10-25 15:57:21 +0000'
  date_gmt: '2009-10-25 22:57:21 +0000'
  content: This is seriously awesome, i did not know that growl can accept network
    notifications, i will test this with irssi later, thanks! :D
- id: 3750
  author: Stephen
  author_email: saghaulor@gmail.com
  author_url: ''
  date: '2012-06-20 23:43:36 +0000'
  date_gmt: '2012-06-21 06:43:36 +0000'
  content: "How can this work with the newest version of growl using gntp? Also, perhaps
    this could be used instead of growl notify? \r\n\r\nhttps:&#47;&#47;github.com&#47;sorin-ionescu&#47;weechat-growl\r\n\r\nSome
    help would be much appreciated."
- id: 3765
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2012-11-07 09:17:32 +0000'
  date_gmt: '2012-11-07 16:17:32 +0000'
  content: "Stephen, the reason growl notify was used, is because the script was all
    bash-shell based.  If someone wanted to tackle writing a simple python app that
    would ferry requests from weechat over the wire with socat using gntp instead
    of growl notify, I'm sure it would work just fine.\r\n\r\nI'd be interested to
    see one that used message center as well, for an alternative that seems more future
    proof."
---
<p>Here at Mystic, we do a lot of remote work using <a href="http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Internet_Relay_Chat" target="_blank">IRC<&#47;a>. And due to the heavy use of best of breed tools under OSX and Linux, we find ourselves working in a shell a lot of the day, along with our IDE. We like to keep in the Flow state for as much of the time working as possible, so we turn off things like email notifications, twitter popups, and other such annoyances.<&#47;p><br />
<a id="more"></a><a id="more-756"></a></p>
<p>Since our communication is important, but we don't want it to be distracting, going back and forth to an IRC window became, tedious. After searching high and low, we have what appears to be a pretty nice solution to the problem at hand. It uses SSH tunneling, <a href="http:&#47;&#47;www.dest-unreach.org&#47;socat&#47;doc&#47;socat.html" target="_blank">socat<&#47;a>, <a href="http:&#47;&#47;growl.info" target="_blank">Growl<&#47;a> for notifications, <a href="http:&#47;&#47;www.gnu.org&#47;software&#47;screen&#47;" target="_blank">screen<&#47;a> for staying online, and <a href="http:&#47;&#47;weechat.flashtux.org" target="_blank">Weechat<&#47;a> as the irc client. Any client that uses <a href="http:&#47;&#47;search.cpan.org&#47;~nmcfarl&#47;Net-Growl-0.99&#47;" target="_blank">Net::Growl<&#47;a> should perform adequately, Weechat isn't a requirement, just the console-based irc client we prefer.<&#47;p></p>
<h2>Initial setup<&#47;h2><br &#47;><br />
A couple of required items before we begin:<&#47;p></p>
<ul>
<li>A Mac with Growl installed (the basics would have to be adapted for growl-like notifiers in linux and windows)<&#47;li>
<li>An unix-based outside shell account with ssh access and Weechat (or irssi) installed<&#47;li><br />
<&#47;ul></p>
<h2>Setting up the Mac side<&#47;h2></p>
<h3>Growl<&#47;h3><br &#47;><br />
If you don't have Growl already installed on your Mac, <a href="http:&#47;&#47;growl.info" target="_blank">Get it!<&#47;a> Open System Preferences and select Growl from under the "Other" panel. After Growl's preference pane comes up, select the Network tab.<br />
<&#47;p><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;04&#47;picture-1.png" width="480" height="403" alt="Growl Network Tab" &#47;><&#47;p></p>
<p>What you'll need checked here, is "Listen for incoming notifications" and "Allow remote application registration" along with entering in your super-secret password.<&#47;p></p>
<h3>socat on the Mac<&#47;h3><br &#47;><br />
First thing we're going to assume, is that you have <a href="http:&#47;&#47;www.macports.org&#47;" target="_blank">MacPorts<&#47;a> installed. Ready? If it's not already installed (it probably won't be), open up Terminal and execute:<&#47;p></p>
<pre>sudo port install socat<&#47;pre></p>
<p>Follow along the prompts to get that installed. And with that Terminal open, assuming you'll be using TCP port 9999 to reverse-proxy the Growl data, execute:<&#47;p></p>
<pre>socat TCP-LISTEN:9999,reuseaddr,fork UDP:127.0.0.1:9887 &amp;<&#47;pre></p>
<p>What this does, is setup a forward so that any packets hitting TCP port 9999 will proxy to UDP port 9887 (the magic Growl UDP port). I would suggest, that you setup this command as an alias in your ~&#47;.bashrc or similar for your shell.<&#47;p></p>
<p>Now we'll setup our reverse-proxy with SSH and our shell that we run Weechat on:<&#47;p></p>
<pre>ssh myserver -R 9999:127.0.0.1:9999<&#47;pre></p>
<p>What this command says is, setup a reverse proxy with myserver so all traffic on TCP port 9999 is transmitted and received over our secure SSH connection. We're also assuming with this command, that you've set up SSH certificate authentication, which is really handy for logging into any unix-based servers with SSH.<&#47;p></p>
<h2>Setting up the Linux side<&#47;h2></p>
<h3>socat on Linux<&#47;h3><br &#47;><&#47;p></p>
<p>Since there are many many flavors of Linux, I'll tailor the discussion assuming whatever distro you're using, it has apt-get or similar. As with the Mac, we do a simple<&#47;p></p>
<pre>apt-get install socat<&#47;pre></p>
<p>Follow along the prompts to get that installed. And now we'll setup socat to proxy in the opposite direction<&#47;p></p>
<pre>socat UDP-LISTEN:9887,reuseaddr,fork TCP:127.0.0.1:9999 &amp;<&#47;pre></p>
<p>And this will listen for UDP connections on 9887 and proxy those through TCP 9999. If you're really astute, you'll realize, that we've just completed the networking end-to-end. And again, I would set the above socat command up in a .bashrc or similar.<&#47;p></p>
<h2>Weechat Setup<&#47;h2></p>
<p>When we run Weechat, we like to always be on, which is the biggest reason for having it running in a Linux shell. To that end, we have screen running on the server with Weechat always-on. This is quite simple, after logging into your linux shell:<&#47;p></p>
<pre>
% screen<br />
% weechat-curses<br />
<&#47;pre><br />
<&#47;p></p>
<p>When we're not on the shell or in irc, we detach from that screen session using Ctrl-A + D and exit. Our IRC session is always running, and we can get back to it with:<&#47;p></p>
<pre>screen -r<&#47;pre></p>
<p>If you have multiple screens, or accidentally killed your shell without properly detaching, we're going to assume that you can <strong>man screen<&#47;strong> and read.<&#47;p></p>
<p>We took many clues and a lot of sample code from <a href="http:&#47;&#47;weechat.flashtux.org&#47;scripts&#47;growl-notify.pl" target="_blank">growl-notify<&#47;a>, modified it heavily and made changes to support Net::Growl. So the next step is to head over <a href="&#47;apps&#47;growl-notify&#47;">here and download growl-net-notify.pl<&#47;a> into your ~&#47;.weechat&#47;perl or ~&#47;.weechat&#47;perl&#47;autoload directory.<&#47;p></p>
<p><strong>[EDIT] <&#47;strong>Now wait a minute, maybe you're not groking what Net::Growl is, and the other dependency, <a href="http:&#47;&#47;search.cpan.org&#47;~bingos&#47;Parse-IRC-1.12&#47;lib&#47;Parse&#47;IRC.pm" target="_blank">Parse::IRC<&#47;a>.  No problem, just make sure you have perl installed, and type:</p>
<pre>
% cpan -i Net::Growl<br />
% cpan -i Parse::IRC<br />
<&#47;pre></p>
<p>If this is your first time using cpan, you'll have a bunch of questions to answer, most of the defaults in here are okay.<&#47;p></p>
<p>After you've loaded the script, you'll need to run the setup:<&#47;p></p>
<pre>&#47;growl setup [host] [password] [port]<&#47;pre></p>
<p>You'll have to enter <em>at least<&#47;em> <strong>host<&#47;strong> and <strong>password<&#47;strong>, <strong>port<&#47;strong> is already the default 9887. To test that it works, use the <strong>&#47;growl test [message]<&#47;strong> command.<&#47;p></p>
<p>Let us know either on IRC or via our <a href="&#47;contact">Contact page<&#47;a> if everything worked out, if you have any questions or feature requests.<&#47;p></p>
<p>Have fun! And get back to working in Flow!<&#47;p></p>
<p>A big thanks goes out to:<&#47;p></p>
<p>Conky on irc.freenode.net #basementcoders - the socat over ssh underpinnings originated with him<br &#47;><br />
sf11 and jgenender on irc.freenode.net - early testing on the script was a great help<&#47;p></p>
