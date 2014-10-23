---
layout: post
status: publish
published: true
title: Maven assembly plugin and Spring
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: "Here at <a href=\"http://mysticcoders.com/\" title=\"mystic coders -
  to our success!\">Mystic</a>, we do a lot of different types of development. It's
  not all web development. I found myself writing a simple document parser that takes
  files uploaded by automated process, processes them by adding to a database, and
  finishes. One of the components we used to tie everything together, the <a href=\"http://www.springframework.org/\"
  title=\"Spring Framework\" target=\"_blank\">Spring Framework</a>, it's great for
  that.<br />
\r\n"
wordpress_id: 280
wordpress_url: http://www.mysticcoders.com/blog/2009/03/01/maven-assembly-plugin-and-spring/
date: '2009-03-02 10:30:43 +0000'
date_gmt: '2009-03-02 17:30:43 +0000'
categories:
- Java
tags:
- Java
- Web
- Development
comments:
- id: 231
  author: Chris
  author_email: cwilkes@gmail.com
  author_url: ''
  date: '2009-03-07 08:53:49 +0000'
  date_gmt: '2009-03-07 16:53:49 +0000'
  content: Can you use the maven plugin for creating the manifest to write out the
    correct information?
- id: 3148
  author: Andrew Swan
  author_email: andrews@bisinfo.com.au
  author_url: ''
  date: '2010-03-10 21:00:14 +0000'
  date_gmt: '2010-03-11 04:00:14 +0000'
  content: Nice solution, but what if you need Spring 3.x, which doesn't have the
    all-in-one JAR file?
- id: 3165
  author: Nicholas
  author_email: me@nicholasbs.net
  author_url: ''
  date: '2010-04-16 07:22:58 +0000'
  date_gmt: '2010-04-16 14:22:58 +0000'
  content: Thank you, thank you, thank you!
- id: 3186
  author: Roman
  author_email: romansaul@web.de
  author_url: ''
  date: '2010-05-24 10:38:54 +0000'
  date_gmt: '2010-05-24 17:38:54 +0000'
  content: "@Andrew Swan: I use the onejar-maven-plugin from http://code.google.com/p/onejar-maven-plugin/\r\nwith
    Spring 3.0 without problems. It puts all your dependency-JARs and your own maven
    created JAR file  in one big JAR and appends some classpath magic ..."
---
Here at <a title="mystic coders - to our success!" href="http://mysticcoders.com/">Mystic</a>, we do a lot of different types of development. It's not all web development. I found myself writing a simple document parser that takes files uploaded by automated process, processes them by adding to a database, and finishes. One of the components we used to tie everything together, the <a title="Spring Framework" href="http://www.springframework.org" target="_blank">Spring Framework</a>, it's great for that.

Since this would be a command line app running via cron most likely, we pulled <a title="Apache Maven" href="http://maven.apache.org" target="_blank">Maven</a> and the <a title="Apache Maven assembly plugin" href="http://maven.apache.org/plugins/maven-assembly-plugin/" target="_blank">assembly plugin</a> from our bag-of-tricks. Simply adding something like so:

<pre lang="xml" colla="+">
<plugin>
              <artifactId>maven-assembly-plugin</artifactId><br />
              <configuration><br />
                  <descriptorRefs><br />
                    <descriptorRef>jar-with-dependencies</descriptorRef><br />
                  </descriptorRefs><br />
                  <archive><br />
                    <manifest><br />
                      <mainClass>com.your.main.class.file</mainClass><br />
                    </manifest><br />
                  </archive><br />
              </configuration><br />
            </plugin><br />
</pre>

All was right with the world, until we ran it from the dependency included jar on the server, and BAM!

<span style="font-family: Arial;"><em>Exception in thread "main" org.springframework.beans.factory.parsing.BeanDefinitionParsingException: Configuration problem: Unable to locate Spring NamespaceHandler for XML schema namespace</em> <span class="nobr"><a href="http://www.springframework.org/schema/context"><em>http://www.springframework.org/schema/context</em></a></span></span>

<span style="font-family: Arial;">Ouch, how frustrating, this worked in the IDE "Works on my machine &acirc;&bdquo;&cent;". After a bit of googling I realized, we were using separate dependencies for the Spring jars that we needed, and the contents of META-INF/ were getting overwritten (only a single JAR remember?). So the solution was to swap out all the separate Spring dependencies in <a title="Apache Maven" href="http://maven.apache.org" target="_blank">Maven</a>, and use the all-in-one like so:</span>

<pre lang="XML" colla="+">
        <dependency><br />
            <groupId>org.springframework</groupId><br />
            <artifactId>spring</artifactId><br />
            <version>${spring.version}</version><br />
        </dependency><br />
</pre>

