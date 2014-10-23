---
layout: post
status: publish
published: true
title: 5 Days of Wicket - Setting up the project
author:
  display_name: Craig Tataryn
  login: Craig Tataryn
  email: ctataryn@mysticcoders.com
  url: ''
author_login: Craig Tataryn
author_email: ctataryn@mysticcoders.com
excerpt: "<h1>Introduction</h1>\r\nWicket is a Java web application framework which
  allows â€œDesignersâ€\x9D (people good with Dreamweaver) and â€œDevelopersâ€\x9D
  (people good with Java and Databases) to collaborate on a project with minimal chances
  of stepping on each other's toes or wearing each other's hats.\r\n\r\nThe beauty
  of Wicket is that it uses plain xhtml pages as it's templating markup.  This means
  that html pages can be loaded into Dreamweaver (or whatever tool the Designer is
  comfortable with) and they will look very close to the same as they would when rendered
  on the deployment web server."
wordpress_id: 154
wordpress_url: http://www.mysticcoders.com/blog/?p=154
date: '2009-03-09 13:30:50 +0000'
date_gmt: '2009-03-09 20:30:50 +0000'
categories:
- Apache Wicket
tags:
- Apache Wicket
comments:
- id: 247
  author: mystic blog &raquo; 5 Days of Wicket!
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/09/5-days-of-wicket/
  date: '2009-03-09 14:34:38 +0000'
  date_gmt: '2009-03-09 21:34:38 +0000'
  content: "[...] Day 1 - Setting up the Project [...]"
- id: 253
  author: Dave
  author_email: dave@praxis-inc.com
  author_url: ''
  date: '2009-03-10 09:11:28 +0000'
  date_gmt: '2009-03-10 16:11:28 +0000'
  content: "Fantastic article...thank-you! I don't know how many times I have to manually
    set all this stuff up (even tho I'm not using Wicket yet, I plan to, and will
    follow your directory layout exactly). Can't wait to read the rest of the articles
    in the series.\r\n\r\nYou should really create your own Maven archetype to do
    this all for you automatically and make it available (smile).\r\n\r\nDave"
- id: 254
  author: Craig Tataryn
  author_email: ctataryn@mysticcoders.com
  author_url: http://
  date: '2009-03-10 09:34:32 +0000'
  date_gmt: '2009-03-10 16:34:32 +0000'
  content: Thanks Dave, yes I was wanting to do that I just have to find the time
    to!  Plus, then nobody would read the article :P
- id: 257
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2009-03-10 15:02:17 +0000'
  date_gmt: '2009-03-10 22:02:17 +0000'
  content: "One of the points of this article also, was to show you behind the magic.
    \ Archetypes are great if you already know what is going on under the covers,
    and we've just given you a peek under ... I think Craig will probably come back
    and write about creating a Maven archetype, or similar.\r\n\r\nCheers!"
- id: 277
  author: 5 Days of Wicket! | Ajaxonomy
  author_email: ''
  author_url: http://www.ajaxonomy.com/2009/java/5-days-of-wicket
  date: '2009-03-12 16:45:28 +0000'
  date_gmt: '2009-03-12 23:45:28 +0000'
  content: "[...] Day 1 - Setting up the Project [...]"
- id: 279
  author: James Carman
  author_email: james@carmanconsulting.com
  author_url: ''
  date: '2009-03-12 23:44:44 +0000'
  date_gmt: '2009-03-13 06:44:44 +0000'
  content: "Instead of using maven's filtering, you might want to look into using
    Spring's PropertyPlaceholderConfigurer.  Wicketopia's example project has an example
    of what I mean:\r\n\r\nOur spring config file:\r\n\r\nhttps:&#47;&#47;wicketopia.svn.sourceforge.net&#47;svnroot&#47;wicketopia&#47;trunk&#47;example&#47;src&#47;main&#47;resources&#47;META-INF&#47;beans.xml\r\n\r\nOur
    pom.xml file:\r\n\r\nhttps:&#47;&#47;wicketopia.svn.sourceforge.net&#47;svnroot&#47;wicketopia&#47;trunk&#47;example&#47;pom.xml\r\n\r\nThis
    makes it more IDE-friendly in that you don't have to do a Maven build to get your
    properties into your config file.  Your IDE will be able to load the properties
    from the properties file on the classpath.  Then, we use Maven profiles (like
    you do) to switch to a different configuration file when we need to deploy to
    test&#47;prod.  Enjoy!"
- id: 280
  author: Craig Tataryn
  author_email: ctataryn@mysticcoders.com
  author_url: http://
  date: '2009-03-13 06:56:58 +0000'
  date_gmt: '2009-03-13 13:56:58 +0000'
  content: "<a href=\"#comment-279\" rel=\"nofollow\">@James Carman<&#47;a> \r\nGreat
    idea James, in the past when I've needed to build&#47;run from the IDE without
    using Maven I would keep a copy of the .properties file within the resources tree.
    \ \r\n\r\nWhen building from Maven I would use copyFile tasks to overwrite the
    \"ide version\" with the proper config.  \r\n\r\nI like this solution you propose
    way better, simply keep the configuration files in separate directories, and have
    the normal resources task copy them in when appropriate.\r\n\r\nThanks a lot for
    your input!"
- id: 281
  author: mystic blog &raquo; 5 Days of Wicket - Putting it all together
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/13/5-days-of-wicket-putting-it-all-together/
  date: '2009-03-13 09:01:21 +0000'
  date_gmt: '2009-03-13 16:01:21 +0000'
  content: "[...] On Day 1, we learned the many steps it takes to put together a project
    that can be worked on in a team environment. &Acirc;&nbsp;We&#8217;ve enjoyed
    your comments on different methodologies, and some we will definitely take into
    account. &Acirc;&nbsp;The biggest thing to take away from that day, is to understand
    the underpinnings of why things are where they are in a project, and how adherence
    to the fairly accepted Maven standard structure can make life much much easier.
    [...]"
- id: 302
  author: Martin
  author_email: martin@mbs3.org
  author_url: ''
  date: '2009-03-16 07:36:14 +0000'
  date_gmt: '2009-03-16 14:36:14 +0000'
  content: "It seems this post is missing the applicationContext.xml file contents,
    making it NOT an end-to-end example. I'd love to see what's in there.\r\n\r\nPerhaps
    you've included it in the archetype, but you've covered many other files here
    that are in the archetype, too."
- id: 304
  author: Craig Tataryn
  author_email: ctataryn@mysticcoders.com
  author_url: http://
  date: '2009-03-16 09:17:14 +0000'
  date_gmt: '2009-03-16 16:17:14 +0000'
  content: "Hey Martin, as mentioned on Day 5, checkout our source http:&#47;&#47;kenai.com&#47;projects&#47;mystic-apps\r\n\r\nThe
    file you are looking for is here:\r\nhttp:&#47;&#47;is.gd&#47;nz7T\r\n\r\nTake
    care,\r\n\r\nCraig."
- id: 586
  author: irs
  author_email: irshad_valimamod@yahoo.com.br
  author_url: ''
  date: '2009-08-20 16:22:04 +0000'
  date_gmt: '2009-08-20 23:22:04 +0000'
  content: "Thank you for these great tutorial!\r\n\r\nCan you please tell me if I
    use another database instead of Postgres, will I have any problem following the
    tutorial?\r\n\r\nThanks"
- id: 587
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2009-08-20 18:04:14 +0000'
  date_gmt: '2009-08-21 01:04:14 +0000'
  content: There shouldn't be any issue using Postgres instead.  We use Hibernate
    so you'll just have to change the dialect and login details and you should be
    all set.  If you run into anything else, please let us know.
- id: 588
  author: irs
  author_email: irshad_valimamod@yahoo.com.br
  author_url: ''
  date: '2009-08-21 05:27:22 +0000'
  date_gmt: '2009-08-21 12:27:22 +0000'
  content: "Thank you for your reply!\r\n\r\nWill try to run into Derby and will let
    you know the results!\r\n\r\nIrs"
- id: 1313
  author: Rusty Wright
  author_email: rusty.wright@gmail.com
  author_url: ''
  date: '2009-09-03 22:46:40 +0000'
  date_gmt: '2009-09-04 05:46:40 +0000'
  content: "@James Carman; I used to be a big fan of Spring's PropertyPlaceholderConfigurer
    but ever since I started using maven I don't find it as useful as maven's filters,
    using either a filters file as explained here, or by having multiple profiles
    in the pom for the different deployment layers with each profile specifying the
    properties.\r\n\r\nThe biggest gripe I have with the PropertyPlaceholderConfigurer
    \ is that you can only have one PropertyPlaceholderConfigurer bean.  And it's
    not well documented.\r\n\r\nWith maven's filter files you can have as many as
    you like.\r\n\r\nThe other reason I prefer maven's filters is that with them you
    can do a 'mvn package' and then poke around in the target directory and eyeball
    the filtered config files and see what it did.  With Spring's PropertyPlaceholderConfigurer
    you don't find out what's been substituted until the app is started."
- id: 1479
  author: Geezenslaw
  author_email: david@davidwbrown.name
  author_url: http://www.davidwbrown.name
  date: '2009-09-06 07:52:18 +0000'
  date_gmt: '2009-09-06 14:52:18 +0000'
  content: "Great idea. I've read the same from Dashorst. And, I even tried it myself:\r\n*
    I created a completely 100% pure HTML&#47;CSS tabbed&#47;submenu set of web pages
    I borrowed from the: ics-wicket-examples @code.google. Static but worked as designed.\r\n*
    I then migrated bullet #1 over to a 100% Wicket (1.4.1) app which worked great.\r\n*
    Failure: attempts to include anything more than Hello World in the  of one of
    the sub-menus only leads to a StackOverFlow Exception.\r\n* So where is the Love?"
- id: 2169
  author: Craig Tataryn
  author_email: ctataryn@mysticcoders.com
  author_url: http://
  date: '2009-09-24 14:57:49 +0000'
  date_gmt: '2009-09-24 21:57:49 +0000'
  content: '@Geezenslaw : Wicket community is really good at answering these types
    of questions.  The <a href="http:&#47;&#47;wicket.apache.org&#47;community.html#Community-Mailinglists"
    rel="nofollow">mailing list<&#47;a> and ##wicket on freenode IRC are your best
    bet, you''ll get an answer guaranteed.'
- id: 2195
  author: blog.eunaki.com &raquo; Blog Archive &raquo; 5 days of Apache Wicket
  author_email: ''
  author_url: http://blog.eunaki.com/2009/10/28/5-days-of-apache-wicket/
  date: '2009-10-28 16:02:59 +0000'
  date_gmt: '2009-10-28 23:02:59 +0000'
  content: "[...] Day 1 &acirc;&euro;&ldquo; Setting up the Project [...]"
- id: 3106
  author: Joseph Crawford
  author_email: info@josephcrawford.com
  author_url: http://josephcrawford.com/
  date: '2010-01-22 08:02:11 +0000'
  date_gmt: '2010-01-22 15:02:11 +0000'
  content: "This has been a great walk-through so far however I am not following why
    all of the values you stated to use are required.  I will have to do more reading
    on how maven works before I think I will understand all of this.\r\n\r\nThanks
    for writing this series, I look forward to hitting the other parts next."
- id: 3351
  author: gecko
  author_email: xbiton@web.de
  author_url: ''
  date: '2011-03-07 12:38:20 +0000'
  date_gmt: '2011-03-07 19:38:20 +0000'
  content: "well, it is really hard to read this tutorial.  In my opinion it lacks
    of the right use of comma and written style. For no native english speakers, \r\nit
    is really hard to read."
- id: 3772
  author: Uduak Ema-Edison
  author_email: uduakedison@gmail.com
  author_url: ''
  date: '2013-07-12 23:22:00 +0000'
  date_gmt: '2013-07-13 06:22:00 +0000'
  content: Hello! Please could you tell me how to deploy a wicket project on a web
    server? i used Apache Tomcat Server, NetBeans as my IDE, mySQL as my database.
    Thank you.
---
<p><a href="http:&#47;&#47;wicket.apache.org" target="_blank">Wicket<&#47;a> is a Java web application framework which allows &acirc;&euro;&oelig;Designers&acirc;&euro; (people good with Dreamweaver) and &acirc;&euro;&oelig;Developers&acirc;&euro; (people good with Java and Databases) to collaborate on a project with minimal chances of stepping on each other's toes or wearing each other's hats.</p>
<p>The beauty of <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Wicket<&#47;a><a id="more"></a><a id="more-154"></a> is that it uses plain xhtml pages as it's templating markup.&Acirc;&nbsp; This means that html pages can be loaded into Dreamweaver (or whatever tool the Designer is comfortable with) and they will look very close to the same as they would when rendered on the deployment web server.</p>
<h1>Workflow<&#47;h1><br />
The basic workflow involved in creating and maintaining html rendered by Wicket is as follows:</p>
<p><img class="alignnone size-full wp-image-155" src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;02&#47;wicket-sequence-diagram.png" alt="wicket-sequence-diagram" width="457" height="207" &#47;></p>
<ol>
<li>The Designer creates the html for the website and fleshes it out with &acirc;&euro;&oelig;mock&acirc;&euro; sections.&Acirc;&nbsp; For instance in the application we intend to create during our <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket&#47;">Five Days of Wicket<&#47;a> will be a <i><a href="http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Pastebin" target="_blank">pastebin<&#47;a><&#47;i> application called "Mystic Paste".  In our application we'll have an &acirc;&euro;&oelig;Add Code to Mystic Paste&acirc;&euro; page, mock data might include some user created content in the textarea of the page.&Acirc;&nbsp; All css&#47;images, etc... are setup such that if they were to be put on a webserver, everything would work.<&#47;li>
<li>The Developer needs to flesh out the dynamic areas of the webpage, that is, he needs to instruct Wicket where it will need to show information from the server.&Acirc;&nbsp; The developer does this by decorating the designer's html page with special Wicket tags and attributes.&Acirc;&nbsp; Because these tags and attributes are just considered part of another namespace separate from xhtml's, editors like Dreamweaver and browsers will simply ignore them<br />
- It is important to note: The developer will still keep the &acirc;&euro;&oelig;mocked&acirc;&euro; sections of the page intact, this is so the page renders and looks fleshed out on its own.&Acirc;&nbsp; The mocked sections will be replaced by real data when rendered by Wicket.<&#47;li></p>
<li>The Developer hands the file back to the Designer.&Acirc;&nbsp; The Designer is free to make further edits, so long as he&#47;she does not remove or manipulate the Wicket tags and attributes present in the file.&Acirc;&nbsp; If the Designer does need to remove any Wicket tags or attributes, they need to consult the Developer as such an action will &acirc;&euro;&oelig;break&acirc;&euro; the webpage when Wicket renders it.<&#47;li><br />
<&#47;ol></p>
<h2>Example Wicket Page<&#47;h2><br />
Here is an example of a Wicket page.&Acirc;&nbsp; This example was taken from Manning Publishing's book &acirc;&euro;&oelig;Wicket in Action&acirc;&euro;:</p>
<pre><html><br />
<head><br />
   <title>Cheesr - Making cheese taste beta<&#47;title></p>
<link href="style.css" rel="stylesheet" &#47;>
<&#47;head><br />
<body></p>
<div id="container">
<div id="header">...<&#47;div></p>
<div id="contents">
<div id="main">
<div <strong>wicket:id<&#47;strong>="cheeses" class="cheese"></p>
<h3 <strong>wicket:id<&#47;strong>="name">Gouda<&#47;h3></p>
<p <strong>wicket:id<&#47;strong>="description">Gouda is a Dutch...<&#47;p></p>
<p>
               <span <strong>wicket:id<&#47;strong>="price">$1.99<&#47;span><br />
               <a <strong>wicket:id<&#47;strong>="add" href="#">add to cart<&#47;a><br />
            <&#47;p><br />
         <&#47;div><br />
         <strong><wicket:remove><&#47;strong><br />
<!-- this section will be removed by wicket, it's only purpose is to flesh out the page --></p>
<div class="cheese">
<h3>Emmental<&#47;h3></p>
<p>Emmental is a Swiss che...<&#47;p></p>
<p>
                  <span>$2.99<&#47;span><br />
                  <a href="#">add to cart<&#47;a><br />
               <&#47;p><br />
            <&#47;div><br />
         <strong><&#47;wicket:remove><&#47;strong><br />
      <&#47;div></p>
<div id="cart">...<&#47;div><br />
    <&#47;div><br />
<&#47;div><br />
<&#47;body><br />
<&#47;html><&#47;pre><br />
This looks almost 100% like a normal webpage would look, the only difference is the addition of the &acirc;&euro;&oelig;wicket:XXX&acirc;&euro; attributes and tags sprinkled through the document.&Acirc;&nbsp; The parts of the document using the special Wicket namespace modifiers will be replaced&#47;removed in the final markup when Wicket renders the page to the user's browser.&Acirc;&nbsp; Notice the "<wicket:remove>" element?&Acirc;&nbsp; This is where your designer can put a "mocked" version of what that area of the page should look like.&Acirc;&nbsp; You as a developer can take that mocked html and divide it out into a template that is dynamically driven from the backend.</p>
<p>Here is how the final page looks if you were to simply load the page into a web browser (or Dreamweaver) from your hard drive:</p>
<p><img class="alignnone size-full wp-image-156" src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;02&#47;cheesr-wicket.png" alt="cheesr-wicket" width="555" height="319" &#47;></p>
<h2>Preparing for Setup<&#47;h2></p>
<h3>Deviating a bit from the Standard Wicket Convention<&#47;h3><br />
One of the first things a developer notices when starting out with Wicket is the convention where Wicket likes having its html template files live at the same level and in the same packages as it's Java source files.&Acirc;&nbsp; Sure you can jump through hoops to get Wicket to load the html template files from elsewhere but&Acirc;&nbsp;a nice compromise is to simply keep your html template files within the same package directory structure but in a source folder separate from the Java classes.&Acirc;&nbsp; Why?&Acirc;&nbsp; Well quite simply to keep your designers (Dreamweaver folks!) from having to grab Java source files along with the html files they are working on.&Acirc;&nbsp; It will just confuse them and clutter their directories.</p>
<p>You can of course stick with the typical "Java source files along side html" convention if you wish, but I find it much cleaner to separate them during design time, and have Maven combine them only at build time into the target war (which it will gladly do automagically).</p>
<h2>Project Folder Structure<&#47;h2></p>
<pre>.<br />
|-- pom.xml<br />
|-- src<br />
|   `-- main<br />
|       |-- filters<br />
|       |-- java<br />
|       |   `-- com<br />
|       |       `-- mysticcoders<br />
|       |           `-- mysticpaste<br />
|       |               |-- model<br />
|       |               |-- persistence<br />
|       |               |   |-- exception<br />
|       |               |   |-- hibernate<br />
|       |               |-- services<br />
|       |               `-- web<br />
|       |                   |-- ajax<br />
|       |                   |-- pages<br />
|       |                   |-- panels<br />
|       |                   `-- servlet<br />
|       |-- resources<br />
|       |   |-- com<br />
|       |   |   `-- mysticcoders<br />
|       |   |       `-- mysticpaste<br />
|       |   |           |-- spring<br />
|       |   |           `-- web<br />
|       |   |               |-- ajax<br />
|       |   |               |-- pages<br />
|       |   |               `-- panels<br />
|       |   `-- log4j.properties<br />
|       |-- sql<br />
|       `-- webapp<br />
|           |-- WEB-INF<br />
|           |-- images<br />
|           |-- js<br />
|           `-- css<&#47;pre></p>
<ul style="list-style-image:url(http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;02&#47;arrow-bullet.gif);list-style-position: outside;">
<li><strong>src&#47;main<&#47;strong>: maven builds source and resources from this directory to the main deployable target (i.e. our war file)
<ul>
<li><strong>filters<&#47;strong>: we keep a set of "filters" files that maven can use to interpolate variables at build time.  What does this mean?  It means that inside your configuration files, the files you use to setup database connections or file paths, you can insert variable place holders like ${db.host}.  When maven does a build, it looks up the correct filter file to use and looks for the key=value part corresponding to "db.host" and inserts it into the configuration file for you.  This ensures that you are able to configure your application per environment you deploy to (i.e. DEV, QA, PROD, etc...) by having different filter files with the same keys but different values. For more information see <a href="http:&#47;&#47;maven.apache.org&#47;guides&#47;getting-started&#47;index.html#How_do_I_filter_resource_files" target="_blank">Maven's documentation on filtering resource<&#47;a>.<&#47;li>
<li><strong>java&#47;*<&#47;strong>: this folder will contain all of the application's source code.  Everything from the database access code, wicket code and services code for the mysticpaste application (see below).
<ul>
<li><strong>model<&#47;strong>: all "domain" classes, that is, classes that represent the objects in the application.&Acirc;&nbsp; For mysticpaste you'll see classes like "PasteItem" which represents an item pasted to the mysticpaste.<&#47;li>
<li><strong>persistence<&#47;strong>: at this level of the persistence package a list of interfaces will be kept. The interfaces comprise the basic access layer the services layer will use to save, retrieve and update items to&#47;from the paste bin.
<ul>
<li><strong>exception<&#47;strong>: the peristence layer needs to tell the services layer when things have gone wrong.&Acirc;&nbsp; It does this via delcaring and throwing exceptions.<&#47;li>
<li><strong>hibernate<&#47;strong>: such is our case, our persistence interfaces will be implemented via the ORM known as Hibernate.&Acirc;&nbsp; This package will store all of the custom hibernate implementations and hibernate specific classes<&#47;li><br />
<&#47;ul><br />
<&#47;li></p>
<li><strong>services<&#47;strong>: The services layer will be stored here.&Acirc;&nbsp; Both the generic interfaces and their implementation classes.&Acirc;&nbsp; The persistence layer will be injected via spring.<&#47;li>
<li><strong>web<&#47;strong>: this folder is where our Wicket classes will reside and it's split into several category packages which are as follows:
<ul>
<li><strong>ajax<&#47;strong>: mysticpaste uses Ajax to render portions of its UI.&Acirc;&nbsp; The wicket classes which render the xml&#47;html to be injected dynamically into the page are stored here.<&#47;li>
<li><strong>pages<&#47;strong>: standard Wicket page classes which are used throughout the application are stored here<&#47;li>
<li><strong>panels<&#47;strong>: reusable panel classes are stored here.&Acirc;&nbsp; Panels may be included within Wicket pages for sake of templating<&#47;li>
<li><strong>servlet<&#47;strong>: any run of the mill servlet code we need is stored here.&Acirc;&nbsp; A good example might be an ImageUploadServlet<&#47;li><br />
<&#47;ul><br />
<&#47;li><br />
<&#47;ul><br />
<&#47;li><br />
<&#47;ul></p>
<ul>
<li><strong>resources&#47;*<&#47;strong>: the resources folder will hold our non-java based files.&Acirc;&nbsp; Noteably html files and spring confguration files
<ul>
<li><strong>spring<&#47;strong>: Holds any spring configuration files needed to wire the services and persistence layer<&#47;li>
<li><strong>web<&#47;strong>: this folder and all subfolders mirror the packages under src&#47;main&#47;java&#47;...&#47;web and hold the .html files that the Wicket page&#47;panel classes use as their templates.&Acirc;&nbsp; As described above, a "standard" wicket application simply stores the .html files along side their Wicket classes under src&#47;main&#47;java&#47;...&#47;web, however we want to keep these files separate from the Java source so as to keep the directory our designers checkout from version control contianing only the files they need to work on.<&#47;li><br />
<&#47;ul><br />
<&#47;li></p>
<li><strong>sql<&#47;strong>: any sql scripts we need to keep handy for building the mysticpaste database.<&#47;li>
<li><strong>webapp<&#47;strong>: this folder will keep the files which live at the base directory of our war file
<ul>
<li><strong>WEB-INF<&#47;strong>: where you keep your web.xml file<&#47;li>
<li><strong>images<&#47;strong>: any image resource, .gif&#47;.png&#47;.jpg files your webapp will reference<&#47;li>
<li><strong>js<&#47;strong>: javascript files your webapp will reference<&#47;li>
<li><strong>css<&#47;strong>: style sheets your webapp uses<&#47;li><br />
<&#47;ul><br />
<&#47;li><br />
<&#47;ul><br />
<&#47;li></p>
<li><strong>src&#47;test&#47;*<&#47;strong>: All files which reside under this folder are test classes and resources needed to support the tests.&Acirc;&nbsp; Maven will build everything under src&#47;main&#47;java and add it to the class path of the JUnit or TestNG classes you create.
<ul>
<li><strong>java<&#47;strong>: JUnit or TestNG test classes which will be run during a build<&#47;li>
<li><strong>resources<&#47;strong>: resource files which are needed to support the tests<&#47;li><br />
<&#47;ul><br />
<&#47;li><br />
<&#47;ul></p>
<h2>Getting Started<&#47;h2><br />
Since we are using Maven as our build tool we can take advantage of the fact that the fine folks at the Wicket project have created a specialized "<a href="http:&#47;&#47;maven.apache.org&#47;guides&#47;mini&#47;guide-creating-archetypes.html" target="_blank">archetype<&#47;a>"&Acirc;&nbsp; which creates a skeleton web application complete with a folder structure which mimics roughly what we have outlined above and Maven pom.xml file used to build a war.&Acirc;&nbsp; The Wicket contributors have even gone one step further and have created a little web page which will, based off a few drop down options, generate the maven command you need to execute in order to create the boiler plate Wicket project.&Acirc;&nbsp; You can find this web page over on the Apache Wicket site under the "<a href="http:&#47;&#47;wicket.apache.org&#47;quickstart.html" target="_blank">Quick Start<&#47;a>" link.</p>
<p>[caption id="attachment_190" align="alignnone" width="642" caption="Copying the above Maven command creates a Skeleton Wicket Project"]<img class="size-full wp-image-190" src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;02&#47;wicket-archetype1.png" alt="wicket-archetype1" width="642" height="281" &#47;>[&#47;caption]</p>
<p>To be precise, the command I used was:</p>
<pre>mvn archetype:create \<br />
-DarchetypeGroupId=org.apache.wicket \<br />
-DarchetypeArtifactId=wicket-archetype-quickstart \<br />
-DarchetypeVersion=1.3.5 \<br />
-DgroupId=com.mysticcoders \<br />
-DartifactId=mysticpaste<&#47;pre><br />
And I ended up with the following folder structure:</p>
<pre>.<br />
`-- mysticpaste<br />
    |-- pom.xml<br />
    `-- src<br />
        |-- main<br />
        |   |-- java<br />
        |   |   `-- com<br />
        |   |       `-- mysticcoders<br />
        |   |           |-- HomePage.html<br />
        |   |           |-- HomePage.java<br />
        |   |           `-- WicketApplication.java<br />
        |   |-- resources<br />
        |   |   `-- log4j.properties<br />
        |   `-- webapp<br />
        |       `-- WEB-INF<br />
        |           `-- web.xml<br />
        `-- test<br />
            `-- java<br />
                `-- com<br />
                    `-- mysticcoders<br />
                        |-- Start.java<br />
                        `-- TestHomePage.java<&#47;pre><br />
Now obviously we'll have to rearrange a few things, for instance I want my base package to be com.mysticcoders.mysticpaste, but that's easy enough to do once we are in an IDE.&Acirc;&nbsp; For now, let's test this example webapp out and see if it works.&Acirc;&nbsp; To do that switch into the mysticpaste directory (the directory that has pom.xml in it) and type the following:</p>
<pre>mvn jetty:run<&#47;pre><br />
This will start up a Jetty webapp container running on port 8080 (if you have something running there already, use the -Djetty.port=
<portNum> option).&Acirc;&nbsp; Startup a webbrowser and navigate to http:&#47;&#47;localhost:8080&#47;mysticpaste&#47;&Acirc;&nbsp; You should see:</p>
<p><img class="alignnone size-full wp-image-314" title="jetty-quickstart" src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;02&#47;jetty-quickstart.png" alt="jetty-quickstart" width="921" height="492" &#47;></p>
<h2>Your IDE<&#47;h2><br />
Sooner or later you're going to want to crack open your IDE and start hacking away.&Acirc;&nbsp; Maven makes this extremely easy by allowing you to create IDE specific project files based off of the Maven pom.xml file.</p>
<p><strong>Eclipse<&#47;strong><br />
<code>mvn eclipse:eclipse<&#47;code></p>
<p>For eclipse you'll also have to set the M2_REPO classpath variable for the workspace your project resides under.&Acirc;&nbsp; Do this by entering the following command:</p>
<pre>mvn -Declipse.workspace=<your_workspace_location> eclipse:add-maven-repo<&#47;pre><br />
<strong>IntelliJ IDEA<&#47;strong><br />
<code>mvn idea:idea<&#47;code> -OR- in IDEA 7+ simply open the pom.xml file</p>
<p><strong>Netbeans<&#47;strong><br />
Netbeans supports maven out of the box, just "Open Project" and choose the mysticpaste directory that contains the pom.xml file</p>
<p>When generating the project files through Maven, the project is setup such that classpath entries point to your local Maven repository (i.e. ~&#47;.m2&#47;repository, or C:Documents and Settingsyourusername.M2repository on Windows).&Acirc;&nbsp; It also sets up src&#47;main&#47;java, src&#47;main&#47;resources as "source folders".&Acirc;&nbsp; You may add other folders to the source folder list as per your IDE if needed, the only thing you have to remember is if you ever use mvn eclipse:clean followed by mvn eclipse:eclipse again, those other source folders will have to be readded through your IDE.&Acirc;&nbsp; Instead, you should add the source&#47;resource folders directly to your pom.xml, this way they will be maintained.</p>
<h2>Spring<&#47;h2><br />
The Mystic Paste application will use Spring, and really you should too.&Acirc;&nbsp; Unless you have been hiding under a rock or work in a corporate environment so lame as to which technologies newer than 2002 are forbidden you should learn to accept Spring as a defacto standard.&Acirc;&nbsp; Dependency injection for the win!</p>
<p>We add the following to our pom.xml:</p>
<pre><!-- <strong>Note<&#47;strong>: versions have been left off intentionally to future proof this article --><br />
<dependency> <!-- <strong>1<&#47;strong> --><br />
    <groupId>org.apache.wicket<&#47;groupId><br />
    <artifactId>wicket-spring-annot<&#47;artifactId><br />
<&#47;dependency><br />
<dependency> <!-- <strong>2<&#47;strong> --><br />
    <groupId>org.springframework<&#47;groupId><br />
    <artifactId>spring<&#47;artifactId><br />
<&#47;dependency><br />
<dependency> <!-- <strong>3<&#47;strong> --><br />
    <groupId>org.springframework<&#47;groupId><br />
    <artifactId>spring-test<&#47;artifactId><br />
<&#47;dependency><br />
<dependency> <!-- <strong>4<&#47;strong> --><br />
    <groupId>org.springframework<&#47;groupId><br />
    <artifactId>spring-tx<&#47;artifactId><br />
<&#47;dependency><&#47;pre></p>
<ol>
<li><strong>wicket-spring-annot<&#47;strong>: allows us to wire our Wicket application via handy dependency injection annotations (i.e. @SpringBean, see <a href="http:&#47;&#47;cwiki.apache.org&#47;WICKET&#47;spring.html" target="_blank">Wicket documentation<&#47;a> for more detail)<&#47;li>
<li><strong>spring<&#47;strong>: is just the core spring libraries<&#47;li>
<li><strong>spring-test<&#47;strong>: is a set of Spring integration classes for Unit testing<&#47;li>
<li><strong>spring-tx<&#47;strong>: is the Spring Transaction Management api for declarative transactions<&#47;li><br />
<&#47;ol></p>
<h3>web.xml additions for Spring<&#47;h3><br />
In order for Spring to manage our Wicket application we need to setup the Wicket filter with a Spring-aware application factory.&Acirc;&nbsp; This allows us to wire our Wicket Application class in our applicationContext.xml file, which is really handy if you have a services and configuration settings you want to inject into the Wicket Application object so the rest of your application can access them.&Acirc;&nbsp; To do this, we change the original Wicket filter like so:</p>
<pre>    <filter><br />
        <filter-name>wicket.mysticpaste<&#47;filter-name><br />
        <filter-class>org.apache.wicket.protocol.http.WicketFilter<&#47;filter-class><br />
        <init-param><br />
            <!--
<param-name>applicationClassName<&#47;param-name>--></p>
<param-name><strong>applicationFactoryClassName<&#47;strong><&#47;param-name></p>
<param-value><strong>org.apache.wicket.spring.SpringWebApplicationFactory<&#47;strong><&#47;param-value><br />
        <&#47;init-param><br />
    <&#47;filter><&#47;pre><br />
As well, we want our Spring context to be available to our webapp if ever there is a need for one of our pages to access the Spring managed beans directly:</p>
<pre>    <context-param></p>
<param-name>contextConfigLocation<&#47;param-name></p>
<param-value>classpath:com&#47;mysticcoders&#47;mysticpaste&#47;spring&#47;applicationContext.xml<&#47;param-value><br />
    <&#47;context-param></p>
<listener>
<listener-class>
          org.springframework.web.context.ContextLoaderListener<br />
        <&#47;listener-class><br />
    <&#47;listener><&#47;pre></p>
<h2>Hibernate<&#47;h2><br />
Hibernate is our ORM of choice, it will allow us to persist and retrieve our model objects to and from the underlying database, whatever that database may be.</p>
<p>We add the following to our pom.xml:</p>
<pre><!-- <strong>Note<&#47;strong>: versions have been left off intentionally to future proof this article --><br />
<dependency> <!-- <strong>1<&#47;strong> --><br />
    <groupId>org.hibernate<&#47;groupId><br />
    <artifactId>hibernate-annotations<&#47;artifactId><br />
<&#47;dependency><br />
<dependency> <!-- <strong>2<&#47;strong> --><br />
    <groupId>c3p0<&#47;groupId><br />
    <artifactId>c3p0<&#47;artifactId><br />
<&#47;dependency><br />
<dependency> <!-- <strong>3<&#47;strong> --><br />
    <groupId>commons-dbcp<&#47;groupId><br />
    <artifactId>commons-dbcp<&#47;artifactId><br />
<&#47;dependency><br />
<dependency> <!-- <strong>4<&#47;strong> --><br />
    <groupId>javax.transaction<&#47;groupId><br />
    <artifactId>jta<&#47;artifactId><br />
    <version>1.0.1B<&#47;version><br />
<&#47;dependency><&#47;pre></p>
<ol>
<li><strong>hibernate-annotations<&#47;strong>: used so we can annotate our model classes with mapping information, instead of having to create a separate mysticpaste.hbm.xml file.<&#47;li>
<li><strong>c3p0<&#47;strong>: provides a connection pooling library Hibernate can use<&#47;li>
<li><strong>commons-dbcp<&#47;strong>: another connection pooling library, we'll add it as well and decide whether to use it or c3p0 later<&#47;li>
<li><strong>jta<&#47;strong>: this is the Java Transaction API which is needed by Hibernate (Hibernate provides an implementation of the API)<&#47;li><br />
<&#47;ol></p>
<h3>web.xml additions for Hibernate<&#47;h3><br />
To have a Hibernate Session open and ready for our webapplication during a Request Cycle we need to setup a Hibernate filter like so (otherwise, good luck getting lazy loading working!):</p>
<pre>    <filter><br />
       <filter-name>open.hibernate.session.in.view<&#47;filter-name><br />
        <filter-class>org.springframework.orm.hibernate3.support.OpenSessionInViewFilter<&#47;filter-class><br />
    <&#47;filter></p>
<p>    <!-- Important! This filter mapping must come before Wicket's! --><br />
    <filter-mapping><br />
       <filter-name>open.hibernate.session.in.view<&#47;filter-name><br />
       <url-pattern>&#47;*<&#47;url-pattern><br />
    <&#47;filter-mapping><&#47;pre><br />
As the comment states above, make sure this filter-mapping exists *before* your wicket.mysticpaste filter or else it just plain won't work.</p>
<h2>Database<&#47;h2><br />
For the Mystic Paste we decided to use the freely available <a href="http:&#47;&#47;www.postgresql.org&#47;" target="_blank">PostgreSQL<&#47;a>.&Acirc;&nbsp; Adding support for PostgreSQL is very easy, unlike with some of the commercial DBMSes where you have to download and install their JDBC driver into your repository.&Acirc;&nbsp; To add support for Postgres, we simply add the following to our pom.xml:</p>
<pre><!-- <strong>Note<&#47;strong>: versions have been left off intentionally to future proof this article --><br />
<dependency><br />
    <groupId>postgresql<&#47;groupId><br />
    <artifactId>postgresql<&#47;artifactId><br />
<&#47;dependency><&#47;pre></p>
<h2>Servlets<&#47;h2><br />
Regardless of which webapplication framework you choose there are just some times when a plain jane Servlet comes in really handy.&Acirc;&nbsp; If you have a need for Servlets and the Servlet must have access to the Wicket session add the following to your web.xml:</p>
<pre>    <filter><br />
        <filter-name>wicket.session<&#47;filter-name><br />
        <filter-class>org.apache.wicket.protocol.http.servlet.WicketSessionFilter<&#47;filter-class><br />
        <init-param></p>
<param-name>filterName<&#47;param-name></p>
<param-value>wicket.mysticpaste<&#47;param-value><br />
        <&#47;init-param><br />
    <&#47;filter><&#47;pre><br />
And then, <strong><span style="text-decoration: underline;">after<&#47;span> your other filter-mappings<&#47;strong> add the following (assuming you mount your servlet-mappings under &#47;servlet&#47;):</p>
<pre>    <filter-mapping><br />
        <filter-name>wicket.session<&#47;filter-name><br />
        <url-pattern>&#47;servlet&#47;*<&#47;url-pattern><br />
    <&#47;filter-mapping><&#47;pre></p>
<h1>Maven Filters and Profiles<&#47;h1><br />
In order to build our Mystic Paste project for various environments (DEV&#47;QA&#47;PROD) we need to implement both <a href="http:&#47;&#47;maven.apache.org&#47;guides&#47;introduction&#47;introduction-to-profiles.html" target="_blank">Maven profiles<&#47;a> and filters.</p>
<h2>Filters<&#47;h2><br />
Filters allow you to place variables inside your configuration files and have those variables filled in durring build time.&Acirc;&nbsp; This is very handy for setting environment specific things such as database connection information.</p>
<p>Enabling filters is quite easy, we open up the pom.xml file and find the section for <resources> and set the value for the <filtering> element to true as follows:</p>
<pre><resources><br />
    <resource><br />
        <filtering>true<&#47;filtering><br />
        <directory>src&#47;main&#47;resources<&#47;directory><br />
    <&#47;resource><br />
.<br />
.<br />
.<br />
<&#47;resources><&#47;pre><br />
But for filtering to work, we need to specify a filters file.&Acirc;&nbsp; It's not enough to specify only one filter file because we need to specify different filters per environment and we'll do that by using Maven Profiles.</p>
<h2>Profiles<&#47;h2><br />
To setup a profile, create a new set of elements following the <build> section in your pom.xml file. Like so:</p>
<pre>
<properties>
<!-- default env when no profile is specified --><br />
    <env>DEV<&#47;env><br />
<&#47;properties></p>
<profiles>
<profile>
        <id>DEV<&#47;id></p>
<properties>
            <env>DEV<&#47;env><br />
        <&#47;properties><br />
    <&#47;profile></p>
<profile>
        <id>QA<&#47;id></p>
<properties>
            <env>QA<&#47;env><br />
        <&#47;properties><br />
    <&#47;profile></p>
<profile>
        <id>PROD<&#47;id></p>
<properties>
            <env>PROD<&#47;env><br />
        <&#47;properties><br />
    <&#47;profile><br />
<&#47;profiles><&#47;pre><br />
and just above your <resources> tag underneith your <build> tag you would add the following elements:</p>
<pre><build><br />
    <finalName>mysticpaste<&#47;finalName><br />
<strong>    <filters><br />
        <filter>src&#47;main&#47;filters&#47;filters-${env}.properties<&#47;filter><br />
    <&#47;filters><&#47;strong><br />
    <resources><br />
        <resource><br />
            <filtering>true<&#47;filtering><br />
            <directory>src&#47;main&#47;resources<&#47;directory><br />
        <&#47;resource><br />
    <&#47;resources><br />
<&#47;build><&#47;pre><br />
src&#47;main&#47;filters will contain the following files.</p>
<pre>|-- pom.xml<br />
|-- src<br />
|   `-- main<br />
|       |-- filters<br />
|       |   `-- filters-DEV.properties<br />
|       |   `-- filters-QA.properties<br />
|       |   `-- filters-PROD.properties<&#47;pre><br />
filters-DEV.properties</p>
<pre>jdbc.url=jdbc:postgresql:&#47;&#47;localhost:5432&#47;mysticpaste<br />
jdbc.user=mysticpaste<br />
jdbc.password=password<br />
image.upload.path=&#47;tmp&#47;pasetbin&#47;userimages<br />
image.upload.size.limit=4096K<&#47;pre><br />
filters-PROD.properties</p>
<pre>jdbc.url=jdbc:postgresql:&#47;&#47;192.168.2.10:5432&#47;mysticpaste<br />
jdbc.user=mysticpaste<br />
jdbc.password=CrYp71c<br />
image.upload.path=&#47;mysticpaste&#47;userimages<br />
image.upload.size.limit=4096K<&#47;pre><br />
Now within any file under src&#47;main&#47;resources that has variables of the form ${variable.name} will have those variables replaced with the values specified in the proper filters file located under src&#47;main&#47;filters.&Acirc;&nbsp; For instance here is an example of a Spring applicationContext.xml file which will be interpolated with proper variables values at build time:</p>
<p>applicationContext.xml</p>
<pre>    <bean id="photoServiceConfig" class="com.mysticcoders.mysticpaste.services.ImageServiceConfig"></p>
<property name="absoluteFilePath" value="<strong>${image.upload.path}<&#47;strong>"&#47;></p>
<property name="imageSizeLimit" value="<strong>${image.upload.size.limit}<&#47;strong>"&#47;><br />
    <&#47;bean><br />
    <bean id="photoService" class="com.mysticcoders.mysticpaste.services.ImageManagementServiceImpl"><br />
        <constructor-arg ref="photoServiceConfig"&#47;></p>
<property name="photoManagementDao" ref="photoDao"&#47;>
    <&#47;bean><&#47;pre><br />
To determine which filters file will be used depends on the profile chosen when building.  For example, to build to production using the filters-PROD.properties we would execute the following:</p>
<pre>mvn clean deploy -P PROD<&#47;pre><br />
The profile you use with the -P switch must match one of the values of the <ID> element for a profile.</p>
<h1>Conclusion<&#47;h1><br />
Although it's quite easy to get started with the Maven QuickStart project it is sometimes a bit frustrating putting some of the additonal pieces together.&Acirc;&nbsp; Building to several environments, setting up depenencies not included in the QuickStart project and strucuturing your project in an effort to make life easy for yourself as a developer and for your designer.</p>
<p>I hope our Day 1 tutorial leaves you with a good sense of how a Wicket project is setup, now we can move onto coding the app!</p>
<p><strong><a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket&#47;">Article Index...<&#47;a><&#47;strong></p>
