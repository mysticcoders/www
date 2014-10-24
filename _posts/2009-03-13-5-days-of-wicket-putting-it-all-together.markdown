---
layout: post
status: publish
published: true
title: 5 Days of Wicket - Putting it all together
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 443
wordpress_url: http://www.mysticcoders.com/?p=443
date: '2009-03-13 09:00:39 +0000'
date_gmt: '2009-03-13 16:00:39 +0000'
tags: []
---
Here we are, the last day of our <a href="http://wicket.apache.org" target="_blank">Apache Wicket</a> series. Â While there was only one day that focused on <a href="http://wicket.apache.org" target="_blank">Apache Wicket</a>, we've laid the groundwork needed to get a J2EE project that uses a web framework off the ground. Â And step-by-step, if you follow along with the team on all 4 days preceding, you will have a greater understanding of how everything is put together, and why.\n
And as you can see, the actual work that went into the front-end of <em>MysticPaste</em>, didn't take very long at all. Â And as good community citizens, we've made the finished product and source code available.\n
<a href="http://www.mysticpaste.com" target="_blank">MysticPaste.com</a> - our implemented pastebin based on the code examples and tutorials shown throughout this series\n
<a href="http://kenai.com/projects/mystic-apps" target="_blank">MysticPaste Source</a> - the source code for the pastebin, open source.\n
<a href="http://www.mysticcoders.com/blog/2009/03/09/5-days-of-wicket-day-1/"><strong>On Day 1</strong></a>, we learned the many steps it takes to put together a project that can be worked on in a team environment. Â We've enjoyed your comments on different methodologies, and some we will definitely take into account. Â The biggest thing to take away from that day, is to understand the underpinnings of why things are where they are in a project, and how adherence to the fairly accepted <a href="http://maven.apache.org" target="_blank">Maven</a> standard structure can make life much much easier.\n
<a href="http://www.mysticcoders.com/blog/2009/03/10/5-days-of-wicket-writing-the-tests/"><strong>On Day 2</strong></a>, we ran through some basics on Mocks, and with a bit of upfront design on interfaces, a testing harness is available for building out the backend. Â We also learned how to take <a href="http://www.unitils.org/" target="_blank">Unitils</a> and extend our tests passed just a functional unit, and move through many layers of the built system, and ensure we go a bit beyond just code coverage.\n
<a href="http://www.mysticcoders.com/blog/2009/03/11/5-days-of-wicket-day-designing-the-backend/" target="_blank"><strong>On Day 3</strong></a>, with unit tests in place, we felt safe writing some implementations so we moved the codebase from failing tests due to no implementation, to working tests. Â We learned a bit about designing your domain model based on requirements and design discussions, and molding the service and persistence layer to support your business goals.\n
<a href="http://www.mysticcoders.com/blog/2009/03/12/5-days-of-wicket-the-ui/"><strong>On Day 4</strong></a>, we got to the most exciting part of our journey, <a href="http://wicket.apache.org" target="_blank">Apache Wicket</a>. Â The article walked you through some of the basics of putting a page together using markup inheritance, and amazingly enough, how this simple act removes the need for technology so common in the MVC world to support this. Â Best of all, because its all in Java, ultimately you can actually use your IDE and refactor or debug as needed. Â Each of the most basic components with forms, and display, and the wicket-based tags that act as extensions to your HTML pages, were reviewed with links off to the Javadoc for further discovery. Â One of the many reasons to love Wicket, is the clear separation of functional concerns, no code in your template pages, it's just HTML.\n
If you're like the members of the <a href="http://www.mysticcoders.com">Mystic</a> team, you will CRAVE more. Â More information, more discovery into how we can fully integrate <a href="http://wicket.apache.org" target="_blank">Apache Wicket</a> as a tool in our arsenal. Â Aside from downloading the distribution and following along with our tutorial, here are some options ahead:\n
<ol>
<li><strong>TSSJS / LV</strong> - <a href="http://javasymposium.techtarget.com/html/frameworks.html#ALombardiWicket" target="_blank">Architecting Applications using Apache Wicket</a> - A talk at the symposium by Andrew Lombardi about Apache Wicket.</li>
<li><strong>Apache Wicket Training</strong> - Mystic is available for corporate trainings, and is in process of putting together a schedule for different technologies to learn about in 2009. Â If you'd like to have us come to your business, have your manager contact us at: <a href="mailto:tr&#97;&#105;&#110;&#105;&#110;&#103;s&#64;m&#121;&#115;&#116;&#105;&#99;&#99;&#111;&#100;&#101;&#114;&#115;&#46;co&#109;">&#116;&#114;&#97;&#105;n&#105;&#110;&#103;&#115;&#64;&#109;&#121;&#115;&#116;&#105;c&#99;&#111;d&#101;rs&#46;&#99;&#111;m</a>
</li>
</ol>
<h3>What's next?</h3>
With the concepts in these articles, we've laid the groundwork for many more short articles on interesting technology in the future. Â There is definitely a lot of new and interesting items we can add to <a href="http://www.mysticpaste.com" target="_blank">MysticPaste</a> without overcomplicating the streamlined interface, such as:\n
<ul>
<li>Syntax Highlighting</li>
<li>Embedding AJAX where it makes sense</li>
<li>Remote Interface to the API for pasting from IDE's</li>
<li>IRC-based bot integration</li>
<li>Thoughts?  What other things would you like to see us cover on the blog?  Drop us a line at: <a href="mailto:&#116;&#97;&#108;&#107;&#64;mys&#116;&#105;cc&#111;&#100;&#101;&#114;&#115;&#46;&#99;&#111;&#109;">&#116;&#97;l&#107;&#64;&#109;&#121;&#115;&#116;&#105;&#99;c&#111;der&#115;&#46;&#99;&#111;&#109;</a></li>
</ul>
