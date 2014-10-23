---
layout: post
status: publish
published: true
title: Setting up your Apache Wicket project with Maven
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
wordpress_id: 1491
wordpress_url: http://www.mysticcoders.com/?p=1491
date: '2010-12-01 16:21:48 +0000'
date_gmt: '2010-12-01 23:21:48 +0000'
categories:
- Apache Wicket
tags: []
comments: []
---
<p>Here at Mystic, we love <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a> for it's clean separation of mark-up and logic, simple POJO data model and one of the first web frameworks to espouse lack of XML as a benefit.</p>
<p>1. Download <a href="http:&#47;&#47;maven.apache.org">Apache Maven<&#47;a>.<br />
2. Install it and ensure that the mvn executable is in your path.<br />
3. Run the following command to download and execute the mvn archetype for Wicket:</p>
<pre>mvn archetype:create \<br />
-DarchetypeGroupId=org.apache.wicket \<br />
-DarchetypeArtifactId=wicket-archetype-quickstart \<br />
-DarchetypeVersion=1.4.14 \<br />
-DgroupId=com.mycompany \<br />
-DartifactId=myproject<&#47;pre></p>
<p>That's it.  This creates the Maven directory structure with the appropriate pom.xml setup and the dependencies in your ~&#47;.m2 directory.  After this you should be ready to rock your next <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a> application.</p>
