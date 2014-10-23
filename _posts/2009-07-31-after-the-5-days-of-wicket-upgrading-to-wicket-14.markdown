---
layout: post
status: publish
published: true
title: 'After the 5 Days of Wicket: Upgrading to Wicket 1.4'
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: If you follow anything about Wicket, you know that they just released <a
  href="http:&#47;&#47;wicketbyexample.com&#47;wicket-developers-release-apache-wicket-1-4&#47;">Wicket
  1.4<&#47;a> which offers some very nice improvements and structural changes that
  make it even more awesome of a framework to work with.  Back in March of this year
  we brought you <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket&#47;">5
  Days of Wicket<&#47;a>, so in today's post we upgrade the sample application which
  is available online at <a href="http:&#47;&#47;mysticpaste.com">MysticPaste.com<&#47;a>
  to 1.4.
wordpress_id: 1094
wordpress_url: http://www.mysticcoders.com/?p=1094
date: '2009-07-31 15:06:30 +0000'
date_gmt: '2009-07-31 22:06:30 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3518
  author: Mystic updates 5 Days of Wicket sample app to 1.4 &lsaquo; Mystic Coders
    &#8211; Java Enterprise Consulting
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/07/31/mystic-updates-5-days-of-wicket-sample-app-to-1-4/
  date: '2012-01-05 15:28:57 +0000'
  date_gmt: '2012-01-05 22:28:57 +0000'
  content: "[...] the sample app from 5 Days of Wicket to Wicket 1.4 which was just
    released. Learn about a simple conversion to 1.4 of MysticPaste.com on Mystic&#8217;s
    blog. We review some of our [...]"
---
<p>If you follow anything about Wicket, you know that they just released <a href="http:&#47;&#47;wicketbyexample.com&#47;wicket-developers-release-apache-wicket-1-4&#47;">Wicket 1.4<&#47;a> which offers some very nice improvements and structural changes that make it even more awesome of a framework to work with.  Back in March of this year we brought you <a href="http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;2009&#47;03&#47;09&#47;5-days-of-wicket&#47;">5 Days of Wicket<&#47;a>, so in today's post we upgrade the sample application which is available online at <a href="http:&#47;&#47;mysticpaste.com">MysticPaste.com<&#47;a> to 1.4.<a id="more"></a><a id="more-1094"></a><br />
<br &#47;><br &#47;></p>
<h4>Dependency Changes<&#47;h4><br />
First thing's first, use <a href="http:&#47;&#47;maven.apache.org">Maven<&#47;a>, it's just going to make life a whole lot easier to deal with.  Since the sample application utilized Spring, I'll also include the changes you should make in your pom.xml file for 1.4:<br />
<br &#47;><br &#47;></p>
<pre lang="xml" colla="+">
<dependency><br />
     <groupId>org.apache.wicket<&#47;groupId><br />
     <artifactId>wicket<&#47;artifactId><br />
     <version>1.4.0<&#47;version><br />
<&#47;dependency><br />
<dependency><br />
     <groupId>org.apache.wicket<&#47;groupId><br />
     <artifactId>wicket-ioc<&#47;artifactId><br />
     <version>1.4.0<&#47;version><br />
<&#47;dependency><br />
<dependency><br />
     <groupId>org.apache.wicket<&#47;groupId><br />
     <artifactId>wicket-spring<&#47;artifactId><br />
     <version>1.4.0<&#47;version><br />
<&#47;dependency><br />
<&#47;pre><br />
<br &#47;><br />
The library wicket-spring-annot has been deprecated in favor of wicket-ioc and wicket-spring, and simply modifying the version to 1.4.0 for all wicket-core artifacts should do the trick.<br />
<br &#47;><br &#47;></p>
<h4>Configuration<&#47;h4><br />
While this may not cover every case, the only configuration item that was required for us was to change the context-param defining the development&#47;deployment mode:</p>
<pre lang="xml" colla="+">
<context-param></p>
<param-name>configuration<&#47;param-name></p>
<param-value>DEPLOYMENT<&#47;param-value><br />
<&#47;context-param><br />
<&#47;pre><br />
becomes<br />
<br &#47;><br &#47;></p>
<pre lang="xml" colla="+">
<context-param></p>
<param-name>wicket.configuration<&#47;param-name></p>
<param-value>DEPLOYMENT<&#47;param-value><br />
<&#47;context-param><br />
<&#47;pre><br />
<br &#47;></p>
<h4>Deprecations ... fare thee well old friends<&#47;h4><br />
In the examples, we use HeaderContributor to references a few CSS files and this has been deprecated in favor of:<br />
<br &#47;><br &#47;></p>
<pre lang="java" colla="+">
   add(JavascriptPackageResource.getHeaderContribution(MYPAGE_JS));</p>
<p>   add(CSSPackageResource.getHeaderContribution(MYPAGE_CSS));<br />
<&#47;pre><br />
<br &#47;><br />
We also utilized the simple DefaultDataProvider for our DataView on the history page, and this too has been axed.  Our solution for this was to just implement IDataProvider ourselves:<br />
<br &#47;><br &#47;></p>
<pre lang="java" colla="+">
public class HistoryDataProvider implements IDataProvider<PasteItem> {<br />
    ...</p>
<p>    public Iterator<PasteItem> iterator(int first, int count) {<br />
        try {<br />
            return pasteService.getLatestItems("web", count, first, false).iterator();<br />
        } catch (InvalidClientException e) {<br />
            e.printStackTrace();<br />
        }<br />
        return null;<br />
    }</p>
<p>    public IModel<PasteItem> model(PasteItem pasteItem) {<br />
        return new Model<PasteItem>(pasteItem);<br />
    }</p>
<p>    &#47;**<br />
     * @see org.apache.wicket.model.IDetachable#detach()<br />
     *&#47;<br />
    public void detach() {<br />
    }<br />
}<br />
<&#47;pre><br />
<br &#47;><br />
As with a lot of the framework in 1.4, things have been generified, so instead of casting everywhere, you just generify everywhere =).<br />
<br &#47;><br &#47;></p>
<h4>Component Changes<&#47;h4><br />
With Link, you can pass in a Model, and BookmarkablePageLink extends from Link, so if you want your code nice and clean, since it doesn't need it:<br />
<br &#47;><br &#47;></p>
<pre lang="java" colla="+">
BookmarkablePageLink<Void> myLink = new BookmarkablePageLink<Void>("myWicketId", MyWicketPage.class);<br />
<&#47;pre><br />
<br &#47;><br />
Component has also changed, and they have removed the .setModel and .getModel methods in favor of .getDefaultModel and .setDefaultModel.  My understanding is that because IModel was generified, suddenly all components had to be generified, and that would have sucked.  For more info on this <a href="http:&#47;&#47;cwiki.apache.org&#47;WICKET&#47;migrating-to-wicket-14.html" target="_blank">Wicket's wiki page on Migrating to Wicket 1.4<&#47;a>.  Here are a few examples of blocks from the sample app that we modified to support generics:<br />
<br &#47;><br &#47;></p>
<pre lang="java" colla="+">
   add(new CheckBox("twitter", new PropertyModel<Boolean>(PasteForm.this, "twitter")));</p>
<p>   ...</p>
<p>   add(new TextField<String>("email", new PropertyModel<String>(PasteItemPage.this, "spamEmail")));</p>
<p>   ...</p>
<p>   markAbuseLabel.setDefaultModel(new Model<String>("Marked As Spam"));</p>
<p>   ...</p>
<p>   CommentListModel commentListModel = new CommentListModel(pasteModel.getObject().getId());<br />
   final ListView<PasteComment> commentList = new ListView<PasteComment>("commentList", commentListModel) {<br />
       @Override<br />
       protected void populateItem(final ListItem<PasteComment> item) {         </p>
<p>    ...</p>
<p>    RequiredTextField<String> commentEmail = new RequiredTextField<String>("email");</p>
<p><&#47;pre><br />
<br &#47;><br />
Overall and throughout the code, things seem a bit cleaner, and more pleasant to work with.  If you'd like to take a more in-depth look at the code, you can browse it <a href="http:&#47;&#47;kenai.com&#47;projects&#47;mystic-apps" target="_blank">on our Kenai project page<&#47;a>.  As always we welcome any comments, and if we've made a boo-boo in our conversion, please let us know.  All told it took about 30 minutes to convert the codebase, and since it's small, that makes sense.  If you need more details, please check the ever evolving <a href="http:&#47;&#47;cwiki.apache.org&#47;WICKET&#47;migrating-to-wicket-14.html" target="_blank">Wicket migration to 1.4<&#47;a> on the Wiki.<br />
<br &#47;><br &#47;><br />
Happy coding!</p>
