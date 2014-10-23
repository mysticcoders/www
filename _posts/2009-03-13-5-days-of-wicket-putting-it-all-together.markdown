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
categories:
- Apache Wicket
tags: []
comments:
- id: 283
  author: mystic blog &raquo; 5 Days of Wicket!
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/09/5-days-of-wicket/
  date: '2009-03-13 09:36:55 +0000'
  date_gmt: '2009-03-13 16:36:55 +0000'
  content: "[...] Day 5 - Putting it all together [...]"
- id: 327
  author: Teddy Clermont
  author_email: teddy.clermont@dkib.com
  author_url: ''
  date: '2009-03-20 11:57:29 +0000'
  date_gmt: '2009-03-20 18:57:29 +0000'
  content: "Hello, very nice article. I am having problem downloading the source as
    I am being ask for a username &#47; password using subversion client. Can you
    tell me how to get code. \r\nThanks"
- id: 508
  author: Peter
  author_email: peter.lagerhem@emblacom.com
  author_url: ''
  date: '2009-07-07 04:45:35 +0000'
  date_gmt: '2009-07-07 11:45:35 +0000'
  content: "There is no subversion repository support at kenai for this particular
    project.\r\n\r\nIf you're on Windows, use cygwin and \"hg\" (Mercurial) to get
    a clone of the code, like so:\r\n\r\n$ hg clone https:&#47;&#47;kenai.com&#47;hg&#47;mystic-apps~mystic-apps\r\n\r\nEnjoy!"
- id: 2196
  author: blog.eunaki.com &raquo; Blog Archive &raquo; 5 days of Apache Wicket
  author_email: ''
  author_url: http://blog.eunaki.com/2009/10/28/5-days-of-apache-wicket/
  date: '2009-10-28 16:03:14 +0000'
  date_gmt: '2009-10-28 23:03:14 +0000'
  content: "[...] Day 5 &acirc;&euro;&ldquo; Putting it all together [...]"
- id: 3166
  author: Erik
  author_email: erik.aasgard@gmail.com
  author_url: ''
  date: '2010-04-16 14:53:44 +0000'
  date_gmt: '2010-04-16 21:53:44 +0000'
  content: "Hey.\r\n\r\nThanks a lot for this tutorial series, it has helped me a
    great deal. I've created my own project following the steps in this tutorial and
    by looking at your github repository.\r\n\r\nEverything builds fine and I get
    no errors when I run mvn tomcat:run and so on, but when I try to submit the PasteForm
    my pasteService object is null. I have verified that I have\r\n\"@SpringBean\r\nPasteService
    pasteService;\". My applicationContext.xml is also the same as the one you've
    made.\r\n\r\nAny help is greatly appreciated."
- id: 3167
  author: Erik
  author_email: erik.aasgard@gmail.com
  author_url: ''
  date: '2010-04-16 14:55:03 +0000'
  date_gmt: '2010-04-16 21:55:03 +0000'
  content: "Follow-up:\r\n\r\nThe NullPointerException occurs when trying to save
    the PasteItem object in the PasteForm#onSubmit() method. \r\n\r\n\"pasteService.createItem(pasteItem);\""
- id: 3168
  author: Erik
  author_email: erik.aasgard@gmail.com
  author_url: ''
  date: '2010-04-16 15:07:10 +0000'
  date_gmt: '2010-04-16 22:07:10 +0000'
  content: "Yikes! Three comments in ~ 10 minutes.\r\n\r\nFigured it out, I had of
    course remembered to do everything except adding the component instantiation listener
    for Spring ;-) Sorry!"
- id: 3211
  author: Will
  author_email: wdmartinez79@gmail.com
  author_url: ''
  date: '2010-06-25 20:02:31 +0000'
  date_gmt: '2010-06-26 03:02:31 +0000'
  content: "Hi, I'm having trouble running your example, I got this error\r\norg.springframework.beans.factory.BeanCreationException:
    Error creating bean with name 'pasteService' defined in class path resource [com&#47;mysticcoders&#47;mysticpaste&#47;spring&#47;applicationContext.xml]:
    Cannot resolve reference to bean 'pasteItemDao' while setting bean property 'itemDao';
    nested exception is org.springframework.beans.factory.BeanCreationException: Error
    creating bean with name 'pasteItemDao' defined in class path resource [com&#47;mysticcoders&#47;mysticpaste&#47;spring&#47;applicationContext.xml]:
    Cannot resolve reference to bean 'sessionFactory' while setting bean property
    'sessionFactory'; nested exception is org.springframework.beans.factory.BeanCreationException:
    Error creating bean with name 'sessionFactory' defined in class path resource
    [com&#47;mysticcoders&#47;mysticpaste&#47;spring&#47;applicationContext.xml]:
    Invocation of init method failed; nested exception is java.lang.NoClassDefFoundError:
    javassist&#47;util&#47;proxy&#47;MethodFilter\r\n        at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:275)\r\n
    \       at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:104)\r\n
    \       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1245)\r\n
    \       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1010)\r\n
    \       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:472)\r\n
    \       at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory$1.run(AbstractAutowireCapableBeanFactory.java:409)\r\n
    \       at java.security.AccessController.doPrivileged(Native Method)\r\n\r\nIf
    someone can help, I will apreciate it a lot"
- id: 3223
  author: Maxat Yermukhanov
  author_email: maksat.ermuhanov@gmail.com
  author_url: ''
  date: '2010-09-14 19:56:06 +0000'
  date_gmt: '2010-09-15 02:56:06 +0000'
  content: Hi, i had the same problem. You need to choose profile as DEV. It will
    work.
- id: 3259
  author: Wicket &#8211; useful links &laquo; Tomasz Dziurko
  author_email: ''
  author_url: http://tomaszdziurko.pl/2010/02/wicket-useful-links/
  date: '2010-11-08 14:22:57 +0000'
  date_gmt: '2010-11-08 21:22:57 +0000'
  content: "[...] Interesting 5-part tutorial by Mystic Coders [...]"
- id: 3263
  author: Wicket &acirc;&euro;&ldquo; &aelig;&oelig;&permil;&ccedil;&rdquo;&uml;&ccedil;&scaron;&bdquo;&eacute;&ldquo;&frac34;&aelig;Ž&yen;
    | X&aelig;&ndash;&Dagger;&aelig;&iexcl;&pound;
  author_email: ''
  author_url: ''
  date: '2010-11-11 22:03:16 +0000'
  date_gmt: '2010-11-12 05:03:16 +0000'
  content: "[...] Interesting 5-part tutorial by Mystic Coders [...]"
---
<p>Here we are, the last day of our <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a> series. &Acirc;&nbsp;While there was only one day that focused on <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a>, we've laid the groundwork needed to get a J2EE project that uses a web framework off the ground. &Acirc;&nbsp;And step-by-step, if you follow along with the team on all 4 days preceding, you will have a greater understanding of how everything is put together, and why.</p>
<p>And as you can see, the actual work that went into the front-end of <em>MysticPaste<&#47;em>, didn't take very long at all. &Acirc;&nbsp;And as good community citizens, we've made the finished product and source code available.</p>
<p><a href="http:&#47;&#47;www.mysticpaste.com" target="_blank">MysticPaste.com<&#47;a> - our implemented pastebin based on the code examples and tutorials shown throughout this series</p>
<p><a href="http:&#47;&#47;kenai.com&#47;projects&#47;mystic-apps" target="_blank">MysticPaste Source<&#47;a> - the source code for the pastebin, open source.</p>
<p><a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket-day-1&#47;"><strong>On Day 1<&#47;strong><&#47;a>, we learned the many steps it takes to put together a project that can be worked on in a team environment. &Acirc;&nbsp;We've enjoyed your comments on different methodologies, and some we will definitely take into account. &Acirc;&nbsp;The biggest thing to take away from that day, is to understand the underpinnings of why things are where they are in a project, and how adherence to the fairly accepted <a href="http:&#47;&#47;maven.apache.org" target="_blank">Maven<&#47;a> standard structure can make life much much easier.</p>
<p><a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;10&#47;5-days-of-wicket-writing-the-tests&#47;"><strong>On Day 2<&#47;strong><&#47;a>, we ran through some basics on Mocks, and with a bit of upfront design on interfaces, a testing harness is available for building out the backend. &Acirc;&nbsp;We also learned how to take <a href="http:&#47;&#47;www.unitils.org&#47;" target="_blank">Unitils<&#47;a> and extend our tests passed just a functional unit, and move through many layers of the built system, and ensure we go a bit beyond just code coverage.</p>
<p><a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;11&#47;5-days-of-wicket-day-designing-the-backend&#47;" target="_blank"><strong>On Day 3<&#47;strong><&#47;a>, with unit tests in place, we felt safe writing some implementations so we moved the codebase from failing tests due to no implementation, to working tests. &Acirc;&nbsp;We learned a bit about designing your domain model based on requirements and design discussions, and molding the service and persistence layer to support your business goals.</p>
<p><a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;12&#47;5-days-of-wicket-the-ui&#47;"><strong>On Day 4<&#47;strong><&#47;a>, we got to the most exciting part of our journey, <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a>. &Acirc;&nbsp;The article walked you through some of the basics of putting a page together using markup inheritance, and amazingly enough, how this simple act removes the need for technology so common in the MVC world to support this. &Acirc;&nbsp;Best of all, because its all in Java, ultimately you can actually use your IDE and refactor or debug as needed. &Acirc;&nbsp;Each of the most basic components with forms, and display, and the wicket-based tags that act as extensions to your HTML pages, were reviewed with links off to the Javadoc for further discovery. &Acirc;&nbsp;One of the many reasons to love Wicket, is the clear separation of functional concerns, no code in your template pages, it's just HTML.</p>
<p>If you're like the members of the <a href="http:&#47;&#47;www.mysticcoders.com">Mystic<&#47;a> team, you will CRAVE more. &Acirc;&nbsp;More information, more discovery into how we can fully integrate <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a> as a tool in our arsenal. &Acirc;&nbsp;Aside from downloading the distribution and following along with our tutorial, here are some options ahead:</p>
<ol>
<li><strong>TSSJS &#47; LV<&#47;strong> - <a href="http:&#47;&#47;javasymposium.techtarget.com&#47;html&#47;frameworks.html#ALombardiWicket" target="_blank">Architecting Applications using Apache Wicket<&#47;a> - A talk at the symposium by Andrew Lombardi about Apache Wicket.<&#47;li>
<li><strong>Apache Wicket Training<&#47;strong> - Mystic is available for corporate trainings, and is in process of putting together a schedule for different technologies to learn about in 2009. &Acirc;&nbsp;If you'd like to have us come to your business, have your manager contact us at: <a href="mailto:tr&#97;&#105;&#110;&#105;&#110;&#103;s&#64;m&#121;&#115;&#116;&#105;&#99;&#99;&#111;&#100;&#101;&#114;&#115;&#46;co&#109;">&#116;&#114;&#97;&#105;n&#105;&#110;&#103;&#115;&#64;&#109;&#121;&#115;&#116;&#105;c&#99;&#111;d&#101;rs&#46;&#99;&#111;m<&#47;a><br />
<&#47;li><br />
<&#47;ol></p>
<h3>What's next?<&#47;h3><br />
With the concepts in these articles, we've laid the groundwork for many more short articles on interesting technology in the future. &Acirc;&nbsp;There is definitely a lot of new and interesting items we can add to <a href="http:&#47;&#47;www.mysticpaste.com" target="_blank">MysticPaste<&#47;a> without overcomplicating the streamlined interface, such as:</p>
<ul>
<li>Syntax Highlighting<&#47;li>
<li>Embedding AJAX where it makes sense<&#47;li>
<li>Remote Interface to the API for pasting from IDE's<&#47;li>
<li>IRC-based bot integration<&#47;li>
<li>Thoughts?  What other things would you like to see us cover on the blog?  Drop us a line at: <a href="mailto:&#116;&#97;&#108;&#107;&#64;mys&#116;&#105;cc&#111;&#100;&#101;&#114;&#115;&#46;&#99;&#111;&#109;">&#116;&#97;l&#107;&#64;&#109;&#121;&#115;&#116;&#105;&#99;c&#111;der&#115;&#46;&#99;&#111;&#109;<&#47;a><&#47;li><br />
<&#47;ul></p>
