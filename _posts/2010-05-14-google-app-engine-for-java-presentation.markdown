---
layout: post
status: publish
published: true
title: Google App Engine for Java presentation
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1413
wordpress_url: http://www.mysticcoders.com/?p=1413
date: '2010-05-14 20:45:25 +0000'
date_gmt: '2010-05-15 03:45:25 +0000'
categories:
- Mystic
tags: []
comments: []
---
<p>I gave a talk last night at the <a href="http:&#47;&#47;ocjug.org" target="_blank">Orange County Java User's Group (OCJUG)<&#47;a> on Google App Engine development with the Java platform.  This was the same one we gave at the <a href="http:&#47;&#47;scandevconf.se" target="_blank">Scandinavian Developer Conference<&#47;a> in March.  The whole talk stemmed from a good friend <a href="http:&#47;&#47;www.eugeneciurana.com" target="_blank">Eugene Ciurana<&#47;a> being unable to attend, so I adapted his slides and did the talk.  </p>
<p>One of the aspects I added was a demo showing how to deploy a <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a> based web application to the dev server and then ultimately up to Google App Engine's servers.  In addition, the demo rather than show off the easy-to-use Eclipse plugin opts for using the <a href="http:&#47;&#47;code.google.com&#47;appengine&#47;downloads.html" target="_blank">App Engine SDK<&#47;a> along with Maven to build.  And we also use <a href="http:&#47;&#47;code.google.com&#47;p&#47;simpleds&#47;" target="_blank">simpleds<&#47;a> for persistence in the demo just to show an alternative to the JDO &#47; JPA offerings that Google provides on top of Datastore.</p>
<p>With that, here is a snippet of the Maven pom.xml to grab all the required dependencies:</p>
<pre lang="xml" colla="+">
<p>                <dependency><br />
                    <groupId>org.extrema-sistemas<&#47;groupId><br />
                    <artifactId>simpleds<&#47;artifactId><br />
                    <version>0.9<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>com.google.appengine<&#47;groupId><br />
                    <artifactId>appengine-api-1.0-sdk<&#47;artifactId><br />
                    <version>1.3.1<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>asm<&#47;groupId><br />
                    <artifactId>asm<&#47;artifactId><br />
                    <version>3.1<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>org.apache.geronimo.specs<&#47;groupId><br />
                    <artifactId>geronimo-jta_1.1_spec<&#47;artifactId><br />
                    <version>1.1.1<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>javax.jdo<&#47;groupId><br />
                    <artifactId>jdo2-api<&#47;artifactId><br />
                    <version>2.3-eb<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>org.apache.geronimo.specs<&#47;groupId><br />
                    <artifactId>geronimo-jpa_3.0_spec<&#47;artifactId><br />
                    <version>1.1.1<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>org.datanucleus<&#47;groupId><br />
                    <artifactId>datanucleus-jpa<&#47;artifactId><br />
                    <version>1.1.5<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>org.datanucleus<&#47;groupId><br />
                    <artifactId>datanucleus-enhancer<&#47;artifactId><br />
                    <version>1.1.4<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>org.datanucleus<&#47;groupId><br />
                    <artifactId>datanucleus-core<&#47;artifactId><br />
                    <version>1.1.5<&#47;version><br />
                <&#47;dependency></p>
<p>                <dependency><br />
                    <groupId>com.google.appengine.orm<&#47;groupId><br />
                    <artifactId>datanucleus-appengine<&#47;artifactId><br />
                    <version>1.0.5<&#47;version><br />
                <&#47;dependency><br />
<&#47;pre></p>
<p>Your mileage certainly may vary on versions, but as of this writing, slamming that into your pom.xml should get you cracking with simpleds for Google App Engine.</p>
<p>And in case you're interested, here's the presentation from last night and March's talk at Scandev.</p>
<p><a href="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2010&#47;05&#47;Google-App-Engine-Java-HOWTO.pdf"><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-includes&#47;images&#47;crystal&#47;document.png" border="0" &#47;><&#47;a>&nbsp;-&nbsp;<a href="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2010&#47;05&#47;Google-App-Engine-Java-HOWTO.pdf">Google App Engine for Java<&#47;a></p>
<p>Enjoy!</p>
