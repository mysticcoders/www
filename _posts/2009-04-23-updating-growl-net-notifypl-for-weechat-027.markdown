---
layout: post
status: publish
published: true
title: Updating growl-net-notify.pl for Weechat 0.2.7
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: <p>Humans love shiny. And there's nothing more shiny to a programmer than
  a brand new version of a tool used every day. Here at <a href="http:&#47;&#47;www.mysticcoders.com">Mystic<&#47;a>
  we use IRC as our primary mode of communication and project collaboration, and several
  of us have chosen <a href="http:&#47;&#47;weechat.flashtux.org" title="Weechat"
  target="_blank">Weechat<&#47;a>. Recently we wrote about receiving <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;04&#47;15&#47;irc-notifications-over-ssh-using-socat-and-growl&#47;"
  title="IRC Notifications over SSH using socat and growl" target="_top">irc notifications
  from Weechat over ssh<&#47;a>, and the plugin written was for the current stable
  version of <a href="http:&#47;&#47;weechat.flashtux.org&#47;download.php" title="Weechat
  0.2.6 download" target="_blank">Weechat 0.2.6<&#47;a>. The development version of
  Weechat is a complete rewrite, and breaks plugin compatibility. If we rewrote <a
  href="http:&#47;&#47;www.mysticcoders.com&#47;apps&#47;growl-notify&#47;" title="growl-net-notify
  plugin" target="_blank">growl-net-notify.pl<&#47;a> for this new version, the choice
  was to manage two separate source files, or find some way to make one work for both.
  I chose the latter method because programmers as I've always said, are smart lazy
  people, we'll do whatever we can to automate something.<&#47;p>
wordpress_id: 798
wordpress_url: http://www.mysticcoders.com/blog/2009/04/21/updating-growl-net-notifypl-for-weechat-027/
date: '2009-04-23 09:00:17 +0000'
date_gmt: '2009-04-23 16:00:17 +0000'
categories:
- Development
tags:
- Development
comments: []
---
<p>Humans love shiny. And there's nothing more shiny to a programmer than a brand new version of a tool used every day. Here at <a href="http:&#47;&#47;www.mysticcoders.com">Mystic<&#47;a> we use IRC as our primary mode of communication and project collaboration, and several of us have chosen <a href="http:&#47;&#47;weechat.flashtux.org" title="Weechat" target="_blank">Weechat<&#47;a>. Recently we wrote about receiving <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;04&#47;15&#47;irc-notifications-over-ssh-using-socat-and-growl&#47;" title="IRC Notifications over SSH using socat and growl" target="_top">irc notifications from Weechat over ssh<&#47;a>, and the plugin written was for the current stable version of <a href="http:&#47;&#47;weechat.flashtux.org&#47;download.php" title="Weechat 0.2.6 download" target="_blank">Weechat 0.2.6<&#47;a>. The development version of Weechat is a complete rewrite, and breaks plugin compatibility. If we rewrote <a href="http:&#47;&#47;www.mysticcoders.com&#47;apps&#47;growl-notify&#47;" title="growl-net-notify plugin" target="_blank">growl-net-notify.pl<&#47;a> for this new version, the choice was to manage two separate source files, or find some way to make one work for both. I chose the latter method because programmers as I've always said, are smart lazy people, we'll do whatever we can to automate something.<&#47;p><a id="more"></a><a id="more-798"></a></p>
<h2>Identifying Weechat version<&#47;h2></p>
<p>First step in combining the version code is identifying which version we're running under. Since I don't want to cause any errors in either version when the plugin is loaded, I decided to use Perl's <em>exists<&#47;em> method which can be used to check existence of a subroutine:<&#47;p></p>
<pre>if(exists &amp;weechat::info_get)<&#47;pre></p>
<p>With this in hand, we can perform the setup commands for 0.2.6 and 0.2.7 independent of each other, and preset the <em>$weechat_version<&#47;em> variable so we can key off of it in other portions of the code.<&#47;p></p>
<h2>Changes in 0.2.7<&#47;h2></p>
<p>Notifications to the user are prevalent throughout our code, we have several easy commands so the user can easily setup their network settings and parameters that are important. So we use <em>weechat::print<&#47;em> a lot, and it has changed in 0.2.7.<&#47;p></p>
<p>The previous version gave you a single parameter for <em>weechat::print<&#47;em>, and output to whatever your active buffer was. The new version forces you to specify a buffer, and allows you to pass in an empty string to denote the main buffer.<&#47;p></p>
<p><em>weechat::print(message)<&#47;em> becomes <em>weechat::print(buffer, message)<&#47;em></p>
<p>The developers have standardized on different naming conventions for 0.2.7, and a lot of action oriented items are hook's. So instead of <em>weechat::add_command_handler<&#47;em>, you would write <em>weechat::hook_command<&#47;em>. There were some subtle parameter changes as well, and since 0.2.7 is not final, this still might change.<&#47;p></p>
<p><em>weechat::register<&#47;em> has also seen some minor changes, including parameters for author, and license type.<br &#47;><&#47;p></p>
<p>Purely cosmetic changes it seems, <em>weechat::get_plugin_config<&#47;em> becomes <em>weechat::config_get_plugin<&#47;em>, and <em>weechat::set_plugin_config<&#47;em> becomes <em>weechat::config_set_plugin<&#47;em>.<&#47;p></p>
<p>The status constants have also changed, so <em>weechat::PLUGIN_RC_OK<&#47;em> becomes <em>weechat::WEECHAT_RC_OK<&#47;em>, and <em>weechat::PLUGIN_RC_KO<&#47;em> becomes <em>weechat::WEECHAT_RC_ERROR<&#47;em>.<&#47;p></p>
<h2>Message Handling<&#47;h2></p>
<p>The majority of the work done in upgrading for 0.2.7 came at the hands of the public message highlights, and the private message highlights. In the previous version, we used <a href="http:&#47;&#47;search.cpan.org&#47;~bingos&#47;Parse-IRC-1.12&#47;" title="Parse::IRC" target="_blank">Parse::IRC<&#47;a> to pull out the pieces of the IRC message that were important to us to show in our notification. In 0.2.7, they've simplified things for us greatly.<&#47;p></p>
<p><em>weechat::hook_print<&#47;em> allows us to watch each message, check if our nick has been highlighted, and process accordingly. We're passed in a nice array which gives us if we're highlighted, who said it, and the message.<&#47;p></p>
<p><em>weechat::hook_signal<&#47;em> allows us to watch private messages, and gives us a string separated by a tab with the nick that is private messaging, and the message. We might have liked it if we got a nice fancy array passed in just like hook_print gives us, but this works out just fine.<&#47;p></p>
<p>Because we were writing this for both 0.2.6 and 0.2.7, I wanted to get rid of the dependency on Parse::IRC and put a little bit of Perl regex magic to work. Together armed with <a href="http:&#47;&#47;www.regextester.com" title="RegexTester.com" target="_blank">RegexTester.com<&#47;a>, I was able to pull out the data needed in these legacy methods and achieve detachment from needing Parse::IRC.<&#47;p></p>
<p>Now I'm sure there are some Perl-style tricks that I'm not doing here, and the code definitely fails because it is readable :). And of course, after talking with FlashCode on #weechat, he suggested we continue development only on 0.2.7, so the version in source control has two versions now. Feel free to look at older commits to see the combined version, it was definitely fun to figure out how to write it.<br &#47;><&#47;p></p>
<p>If you'd just like to use this plugin for your <a href="http:&#47;&#47;growl.info" title="Growl" target="_blank">Growl<&#47;a> notification over SSH needs:<&#47;p></p>
<p><a href="http:&#47;&#47;www.mysticcoders.com&#47;apps&#47;growl-notify&#47;" title="growl-net-notify plugin" target="_blank">Download the plugin<&#47;a><&#47;p></p>
<p>If you're also interested in reviewing the source:<&#47;p></p>
<p><a href="http:&#47;&#47;github.com&#47;kinabalu&#47;weechat-plugins&#47;tree&#47;master" title="GitHub Repository for Weechat Plugin" target="_blank">GitHub repository here<&#47;a><&#47;p></p>
