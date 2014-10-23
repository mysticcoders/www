---
layout: post
status: publish
published: true
title: Growl over SSH with multiple users without conflicts
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: "<p>In our previous post, we showed you how to use socat, ssh, and some fancy
  footwork to pipe a UDP-based request coming from <a href=\"http:&#47;&#47;search.cpan.org&#47;~nmcfarl&#47;Net-Growl-0.99&#47;lib&#47;Net&#47;Growl.pm\"
  title=\"Net::Growl\" target=\"_blank\">Net::Growl<&#47;a>, through a TCP-based reverse-proxy
  ala SSH, and back to the Mac as a UDP-request straight to <a href=\"http:&#47;&#47;growl.info\"
  title=\"Growl\" target=\"_blank\">Growl<&#47;a>.<&#47;p>\r\n<p>What happens if you've
  got more than one person wanting to do the same thing from that same shell server?
  Aside from everyone agreeing on a few ports they'd like to reserve for their Growl
  activities, here's the skinny.<&#47;p>\r\n"
wordpress_id: 771
wordpress_url: http://www.mysticcoders.com/blog/2009/04/15/growl-over-ssh-with-multiple-users-without-conflicts/
date: '2009-04-16 08:30:51 +0000'
date_gmt: '2009-04-16 15:30:51 +0000'
categories:
- Development
tags:
- Technology
- Development
comments: []
---
<p>In our previous post, we showed you how to use socat, ssh, and some fancy footwork to pipe a UDP-based request coming from <a href="http:&#47;&#47;search.cpan.org&#47;~nmcfarl&#47;Net-Growl-0.99&#47;lib&#47;Net&#47;Growl.pm" title="Net::Growl" target="_blank">Net::Growl<&#47;a>, through a TCP-based reverse-proxy ala SSH, and back to the Mac as a UDP-request straight to <a href="http:&#47;&#47;growl.info" title="Growl" target="_blank">Growl<&#47;a>.<&#47;p></p>
<p>What happens if you've got more than one person wanting to do the same thing from that same shell server? Aside from everyone agreeing on a few ports they'd like to reserve for their Growl activities, here's the skinny.<&#47;p><br />
<a id="more"></a><a id="more-771"></a></p>
<h2>The problem<&#47;h2></p>
<p>When we first wanted to do this, the only technology hurdle, was that Net::Growl in its current incarnation does not support passing a unique UDP port in the register and notify calls. Not a big deal, here's what you do to fix:<&#47;p></p>
<ol>
<li>Download <a href="http:&#47;&#47;search.cpan.org&#47;~nmcfarl&#47;Net-Growl-0.99&#47;lib&#47;Net&#47;Growl.pm" title="Net::Growl" target="_blank">Net::Growl<&#47;a> distribution to your linux machine<&#47;li>
<li>Apply this <a href="http:&#47;&#47;www.mysticcoders.com&#47;tools&#47;downloads&#47;net-growl.patch" title="Net::Growl patch to support UDP" target="_blank">patch<&#47;a> to the distribution<&#47;li>
<li>Rebuild it via: perl Makefile.PL, make, sudo make install<&#47;li><br />
<&#47;ol></p>
<p>If you're using our super fancy <a href="http:&#47;&#47;www.mysticcoders.com&#47;apps&#47;growl-notify&#47;" target="_blank">growl-net-notify.pl<&#47;a> script for <a href="http:&#47;&#47;weechat.flashtux.org" title="Weechat" target="_blank">Weechat<&#47;a>, it is already set up to pass a different UDP port by changing the settings in the &#47;growl setup call.<&#47;p></p>
<h2>Scenarios<&#47;h2></p>
<p>For the TCP side of the equation, you'll each have to pick your own TCP port (above 1024 of course) to reverse-proxy with. In my previous example I chose 9999, so you can have others choose 9900, 9901, 9902, whatever flows off the tongue.<&#47;p></p>
<p>On the local side, socat and your ssh reverse-proxy will change, but using UDP 9887 will not. Growl is listening there.<&#47;p></p>
<p>On the linux side, where weechat + screen is running, we'll use whatever our agreed upon TCP port was, and pick our own UDP port to pass messages to from Weechat. This is easily modified from growl-net-notify using &#47;growl setup [host] [pass] [port] where port is whatever your agreed Growl port is going to be. And setup socat to use your agreed upon TCP port, and agreed upon UDP port and do a &#47;growl test hello, world!<&#47;p></p>
<h2>Examples<&#47;h2></p>
<p>A lot of times reading manuals, I skim through to read the examples, in man pages its usually near the bottom. I need to see the commands in action. So here is an example with a situation you're likely to run into.<&#47;p></p>
<p>2 people using the same host for IRC. For the sake of example, we'll use the names: Steve and Andrew.<&#47;p></p>
<p>Steve will use: TCP 9900 and UDP 9889<&#47;p></p>
<p>On the Mac side the commands he'll use:<&#47;p></p>
<pre>
% socat TCP-LISTEN:9900,reuseaddr,fork UDP:127.0.0.1:9887 &amp;<br />
% ssh myserver -R 9900:127.0.0.1:9900<br />
<&#47;pre></p>
<p>On the Linux side the commands he'll use:<&#47;p></p>
<pre>socat UDP-LISTEN:9889,reuseaddr,fork TCP:127.0.0.1:9900 &amp;<&#47;pre></p>
<p>And from within Weechat's growl<&#47;p></p>
<pre>&#47;growl setup localhost mypass 9889<&#47;pre></p>
<p>Andrew will use the defaults: TCP 9999 and UDP 9887<&#47;p></p>
<pre>socat TCP-LISTEN:9999,reuseaddr,fork UDP:127.0.0.1:9887 &amp;<br />
ssh myserver -R 9999:127.0.0.1:9999<br />
<&#47;pre></p>
<p>On the Linux side the commands he'll use:<&#47;p></p>
<pre>socat UDP-LISTEN:9887,reuseaddr,fork TCP:127.0.0.1:9999 &amp;<&#47;pre></p>
<p>And from within Weechat's growl<&#47;p></p>
<pre>&#47;growl setup localhost mypass 9887<&#47;pre></p>
<p>It's that simple.</p>
