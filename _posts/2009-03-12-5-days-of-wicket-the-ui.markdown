---
layout: post
status: publish
published: true
title: 5 Days of Wicket - The UI
author:
  display_name: Steve Forsyth
  login: sforsyth
  email: sforsyth@mysticcoders.com
  url: http://mysticcoders.com
author_login: sforsyth
author_email: sforsyth@mysticcoders.com
author_url: http://mysticcoders.com
excerpt: "So... you should now have a fairly good understanding of how to put <a target=\"_blank\"
  href=\"http:&#47;&#47;wicket.apache.org&#47;\">Wicket<&#47;a> together with <a target=\"_blank\"
  href=\"http:&#47;&#47;www.springsource.org&#47;\">Spring<&#47;a> and <a target=\"_blank\"
  href=\"http:&#47;&#47;www.hibernate.org&#47;\">Hibernate<&#47;a>, creating your
  DAOs and services and putting that code through the test gauntlet. We can see that
  our foundation is rock solid... but we're missing the eye-candy... so let's hop
  over to the UI and show you where Wicket really shines.\r\n&nbsp;\r\n"
wordpress_id: 359
wordpress_url: http://www.mysticcoders.com/?p=359
date: '2009-03-12 09:00:15 +0000'
date_gmt: '2009-03-12 16:00:15 +0000'
categories:
- Apache Wicket
tags:
- Java
- apache wicket
- development
comments:
- id: 276
  author: mystic blog &raquo; 5 Days of Wicket!
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/09/5-days-of-wicket/
  date: '2009-03-12 15:17:02 +0000'
  date_gmt: '2009-03-12 22:17:02 +0000'
  content: "[...] Day 4 - Designing the Wicket components [...]"
- id: 282
  author: mystic blog &raquo; 5 Days of Wicket - Putting it all together
  author_email: ''
  author_url: http://www.mysticcoders.com/blog/2009/03/13/5-days-of-wicket-putting-it-all-together/
  date: '2009-03-13 09:01:40 +0000'
  date_gmt: '2009-03-13 16:01:40 +0000'
  content: "[...] On Day 4, we got to the most exciting part of our journey, Apache
    Wicket. &Acirc;&nbsp;The article walked you through some of the basics of putting
    a page together using markup inheritance, and amazingly enough, how this simple
    act removes the need for technology so common in the MVC world to support this.
    &Acirc;&nbsp;Best of all, because its all in Java, ultimately you can actually
    use your IDE and refactor or debug as needed. &Acirc;&nbsp;Each of the most basic
    components with forms, and display, and the wicket-based tags that act as extensions
    to your HTML pages, were reviewed with links off to the Javadoc for further discovery.
    &Acirc;&nbsp;One of the many reasons to love Wicket, is the clear separation of
    functional concerns, no code in your template pages, it&#8217;s just HTML. [...]"
- id: 284
  author: Jonathan Locke
  author_email: jonathan.locke@gmail.com
  author_url: ''
  date: '2009-03-13 18:16:22 +0000'
  date_gmt: '2009-03-14 01:16:22 +0000'
  content: "Thanks for a great series of articles! \r\n\r\nWicket is RAD indeed and
    I hope it will be way more RAD when I finally get time to finish Wicket on Wheels..."
- id: 3367
  author: Guido Amabili
  author_email: gambolino@internet.lu
  author_url: ''
  date: '2011-05-14 09:11:25 +0000'
  date_gmt: '2011-05-14 16:11:25 +0000'
  content: Thx once more for this great tutorial, very nicely done!
---
<p>So... you should now have a fairly good understanding of how to put <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;">Wicket<&#47;a> together with <a target="_blank" href="http:&#47;&#47;www.springsource.org&#47;">Spring<&#47;a> and <a target="_blank" href="http:&#47;&#47;www.hibernate.org&#47;">Hibernate<&#47;a>, creating your DAOs and services and putting that code through the test gauntlet. We can see that our foundation is rock solid... but we're missing the eye-candy... so let's hop over to the UI and show you where Wicket really shines.<br />
&nbsp;<br />
<a id="more"></a><a id="more-359"></a></p>
<h1>Base Class<&#47;h1><br />
Most if not all web applications use some sort of base template to remove duplication such as the header and footer. Wicket has a built-in way of handling this instead of having to use a separate library such as <a href="http:&#47;&#47;www.opensymphony.com&#47;sitemesh&#47;" target="_blank">SiteMesh<&#47;a>. Wicket uses inheritance to facilitate templates. They provide their own base class called <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;WebPage.html">WebPage<&#47;a> that our application specific base class will extend from to get started. The <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;WebPage.html">WebPage<&#47;a> class sets us up with a blank web page in seconds. For our application, we have a simple header&#47;footer that we want all of our pages to use and a very simple menu that I threw into the base page that I named <em>BasePage<&#47;em>.</p>
<pre>public class BasePage extends WebPage {...<&#47;pre><br />
This along with an html page gives us a basic template that all of our pages will extend from.</p>
<pre lang="html" colla="+">
<!DOCTYPE html PUBLIC "-&#47;&#47;W3C&#47;&#47;DTD XHTML 1.1&#47;&#47;EN" "http:&#47;&#47;www.w3.org&#47;TR&#47;xhtml11&#47;DTD&#47;xhtml11.dtd"><br />
<html><br />
  <head><br />
    <meta http-equiv="Content-Type" content="text&#47;html; charset=UTF-8"&#47;><br />
    <title>Mystic Paste<&#47;title></p>
<link rel="stylesheet" type="text&#47;css" href="css&#47;style.css"&#47;>
    <!--[if IE]></p>
<link rel="stylesheet" type="text&#47;css" href="css&#47;ie.css" &#47;>
    <![endif]--><br />
  <&#47;head><br />
  <body></p>
<div id="leftSide">&nbsp;<&#47;div></p>
<div id="rightSide">&nbsp;<&#47;div></p>
<div id="center">
<p>      <!-- header --></p>
<div id="header">
<div id="logo"><a class="logo" href="http:&#47;&#47;mysticpaste.com&#47;new"> <&#47;a><&#47;div><br />
      <&#47;div></p>
<div id="nav">
<ul id="menus">
<li class="cat-item"><a class="home" title="Home" href="http:&#47;&#47;www.mysticcoders.com&#47;">Home<&#47;a><&#47;li>
<li wicket:id="newLinkContainer" class="cat-item"><a wicket:id="newLink" href="#" title="New Paste">New<&#47;a><&#47;li>
<li wicket:id="historyLinkContainer" class="cat-item"><a wicket:id="historyLink" href="#" title="View Paste History">History<&#47;a><&#47;li>
<li><a class="lastmenu" href="javascript: return false;"> <&#47;a><&#47;li><br />
        <&#47;ul><br />
      <&#47;div></p>
<div id="header_bottom"> <&#47;div></p>
<p>      <!-- content --></p>
<div id="content">
        <wicket:child&#47;><br />
      <&#47;div></p>
<div class="clear"> <&#47;div></p>
<p>      <!-- footer --></p>
<div id="footer_left"> <&#47;div></p>
<div id="footer_right"> <&#47;div></p>
<div id="footer_center">
<div id="copyright">Copyright &copy; 2000-2009 Mystic Coders, LLC<&#47;div><br />
      <&#47;div><br />
    <&#47;div></p>
<div id="logo_footer"><img src="images&#47;logo_bottom.png" width="74" height="57"&#47;><&#47;div><br />
  <&#47;body><br />
<&#47;html><&#47;pre><br />
This html file sits on the file system in the same package as your <em>BasePage<&#47;em> class and is named the same but with a .html extension... BasePage.html. We have decided to separate the java files from the html by putting the html within the same package structure underneath the resources folder. Note the <em>wicket:id<&#47;em> attributes and the <em><wicket:child&#47;><&#47;em> tag... the <em>wicket:id<&#47;em> attributes are used within the java code to identify the components and the <em>wicket:child<&#47;em> tag is used as a placeholder signaling that any page that extends this page will be filling in the body of the tag. The 2 links with <em>wicket:id<&#47;em> attributes are used for menu item links and the surrounding <em>li<&#47;em> tags contain <em>wicket:id<&#47;em> attributes to facilitate the highlighting of the current page.<br />
&nbsp;</p>
<h1>PASTE IT!<&#47;h1><br />
Wicket starts to get fun when we get into forms. We need to create a form that will let the user choose the language type for formatting the pasted content, whether or not this is a private post (not easily guessed url and won't show in history), and the content itself. We are going to want to make sure that the end result has a fairly simple url that is easy to copy and paste.<br />
&nbsp;<br />
The first thing we usually do is come up with the page class and the html... so we are going to create a class that extends our <em>BasePage<&#47;em>:</p>
<pre>public class PasteItemPage extends BasePage {...<&#47;pre><br />
The matching html page again, resides in the same package as the Java class and is named the same.<br />
PasteItemPage.html:</p>
<pre lang="html" colla="+">
<wicket:extend></p>
<form wicket:id="pasteForm">
<div id="paste_options">
<ul>
<li>private:<&#47;li>
<li><input wicket:id="private" type="checkbox" &#47;><&#47;li><br />
      <&#47;ul></p>
<ul>
<li>language:<&#47;li>
<li>
<select wicket:id="type" class="language">
<option>Choose One<&#47;option></p>
<option>Java<&#47;option></p>
<option>Groovy<&#47;option></p>
<option>PHP<&#47;option><br />
          <&#47;select><br />
        <&#47;li><br />
      <&#47;ul><br />
    <&#47;div></p>
<div id="paste_content">
<div id="textLeft"> <&#47;div></p>
<div id="textRight"> <&#47;div></p>
<div id="textCenter"><textarea wicket:id="content" wrap="off"><&#47;textarea><&#47;div><br />
    <&#47;div></p>
<div id="paste_submit"><input type="submit" value="Paste" &#47;><&#47;div><br />
    <&#47;form><br />
<&#47;wicket:extend><&#47;pre><br />
Note the <em>wicket:extend<&#47;em> tags which tells Wicket that everything within those tags are the contents that we are interested in... for instance, you could have the whole html file with html&#47;head&#47;body tags if you wanted to and wicket would ignore everything except for the data between the <em>wicket:extend<&#47;em> tags.<br />
&nbsp;<br />
The <em>wicket:id<&#47;em> attributes are placed in the form and the form components. These attributes will allow us to create a Wicket form and bind to the form components.<br />
&nbsp;<br />
Wicket provides components for just about everything you want to do, so we extend the Wicket <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;form&#47;Form.html">Form<&#47;a> class and add that to our page, we then add our form fields (<a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;form&#47;DropDownChoice.html">DropDownChoice<&#47;a>, <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;form&#47;CheckBox.html">CheckBox<&#47;a> and <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;form&#47;TextArea.html">TextArea<&#47;a>) to the form.<br />
&nbsp;<br />
Components in Wicket are hierarchical, you MUST nest&#47;add your components in your java code to match exactly the nesting of your html components. For example, the following snippet is taken from BasePage.html:</p>
<pre lang="html" colla="+">
<li wicket:id="newLinkContainer" class="cat-item"><a wicket:id="newLink" href="#" title="New Paste">New<&#47;a><&#47;li><br />
<&#47;pre><br />
the corresponding java code looks like this:</p>
<pre lang="java" colla="+">
    WebMarkupContainer newLinkContainer = new WebMarkupContainer("newLinkContainer");<br />
    ...<br />
    newLinkContainer.add(new BookmarkablePageLink("newLink", PasteItemPage.class));<br />
    add(newLinkContainer);<br />
<&#47;pre><br />
In the html markup, the <em>href<&#47;em> tag marked with <em>wicket:id="newLink"<&#47;em> is nested inside of the <em>li<&#47;em> tag marked with <em>wicket:id="newLinkContainer"<&#47;em>. We therefore need to match this hierarchy  within our corresponding java code. In the Java code, I have created a WebMarkupContainer component with id="newLinkContainer" to match to our <em>li<&#47;em> tag, I then add the nested <em><strong>BookmarkablePageLink<&#47;strong><&#47;em> with id="newLink" to the newLinkContainer component. I then add the newLinkContainer component to the page as the newLinkContainer is not contained within any other wicket tags.<br />
&nbsp;<br />
This nesting can get very deep depending on the web page layout. It is not difficult to keep track of the nesting but sometimes you may forget to fix the html or the Java code when making changes to the either file. However, the Wicket developers built in a clean error message that comes up when you run the application and there is a mismatch between your html and the Java code. For example, if I use our example above and add the newLink to the page rather than to the newLinkContainer, I get the following error message:</p>
<pre>
WicketMessage: Unable to find component with id 'newLink' in [MarkupContainer [Component id = newLinkContainer]]. This means that you declared wicket:id=newLink in your markup, but that you either did not add the component to your page at all, or that the hierarchy does not match.<br />
[markup = file:&#47;...paste&#47;web&#47;pages&#47;paste&#47;PasteItemPage.html<br />
<&#47;pre><br />
These error messages make it easy to find the problems with the hierarchy rather than guessing as to where the problem might be.<br />
&nbsp;<br />
The following is the full Java source for our <em>PasteItemPage<&#47;em>:</p>
<pre lang="java" colla="+">
public class PasteItemPage extends BasePage {</p>
<p>    @SpringBean<br />
    PasteService pasteService;</p>
<p>    public PasteItemPage() {<br />
        super(PasteItemPage.class);<br />
        add(new PasteForm("pasteForm", new CompoundPropertyModel(new PasteItem())));<br />
    }</p>
<p>    public class PasteForm extends Form {<br />
        public PasteForm(String id, IModel model) {<br />
            super(id, model);</p>
<p>            add(new CheckBox("private"));<br />
            add(new DropDownChoice("type", Arrays.asList(LanguageType.JAVA, LanguageType.CSS, LanguageType.HTML)));<br />
            add(new TextArea("content"));<br />
        }</p>
<p>        @Override<br />
        protected void onSubmit() {<br />
            PasteItem pasteItem = (PasteItem) PasteForm.this.getModelObject();<br />
            pasteService.createItem("web", pasteItem);<br />
            PageParameters params = new PageParameters();<br />
            if (pasteItem.isPrivate()) {<br />
                params.put("0", pasteItem.getPrivateToken());<br />
                setResponsePage(ViewPrivatePage.class, params);<br />
            } else {<br />
                params.put("0", Long.toString(pasteItem.getId()));<br />
                setResponsePage(ViewPublicPage.class, params);<br />
            }<br />
        }<br />
    }<br />
}<br />
<&#47;pre><br />
As you might have noticed... Wicket uses Models to back the components. In our case... we use a <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;model&#47;CompoundPropertyModel.html">CompoundPropertyModel<&#47;a> which makes it extremely easy to bind to components. It basically tells any component that uses this model to bind the property from the model object with a component using the components id. For instance, we have <em>add(new CheckBox("private"));<&#47;em> which says that we want to add a <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;form&#47;CheckBox.html">CheckBox<&#47;a> component with the id of "private" and bind it to the property of our model object with the same name (the private field of <em>PasteItem<&#47;em>). I have added the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;model&#47;CompoundPropertyModel.html">CompoundPropertyModel<&#47;a> to the form component which automagically backs all components added to the form but can easily be overridden by just passing in a new model to any components that need a different model. There are many other types of Models to choose from as you may not need or want the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;model&#47;CompoundPropertyModel.html">CompountPropertyModel<&#47;a> due to mismatches in the names and such. The <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;form&#47;DropDownChoice.html">DropDownChoice<&#47;a> and <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;form&#47;TextArea.html">TextArea<&#47;a> components are bound to the html <em>SELECT<&#47;em> and <em>TEXTAREA<&#47;em> tags in the same manor.<br />
&nbsp;<br />
The last piece of the form submission is completed by overriding the onSubmit method of the form and saving our model object with a simple call to our service. That is it for capturing user input and saving it... not sure that it gets much easier than that!<br />
&nbsp;<br />
As part of the save routine, one other noteworthy tidbit here is how we forward on to the next page:</p>
<pre lang="java" colla="+">
        PageParameters params = new PageParameters();<br />
        if (pasteItem.isPrivate()) {<br />
            params.put("0", pasteItem.getPrivateToken());<br />
            setResponsePage(ViewPrivatePage.class, params);<br />
        } else {<br />
            params.put("0", Long.toString(pasteItem.getId()));<br />
            setResponsePage(ViewPublicPage.class, params);<br />
        }<&#47;pre><br />
The <em>setResponsePage<&#47;em> method is exactly that... we give it the page that we want to forward to... in this case, if it is a private message, then we forward to our page we created for private pastes, otherwise, we forward to our regular public view page. Notice that we create a <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;PageParameters.html">PageParameters<&#47;a> object, Wicket abstracts away the dreadful request object from you and gives you a convenient object for adding and retrieving page parameters. Now... as I mentioned earlier, we want simple urls... so normally, you would put something like <em>params.put("id", pasteItem.getId());<&#47;em> and this would pass the request param of <em>id=5<&#47;em> or with Wickets bookmarkable pages, you would see something like <em>http:&#47;&#47;your.domain.com&#47;view&#47;id&#47;5<&#47;em>. We decided we didn't want the id to show as it provides no use within the url itself... so... Wicket gives us the ability to create our own URL encoding strategy and provides a few already implemented strategies. Within the Wicket Application class that was generated on Day 1, we can add the following:</p>
<pre>mount(new IndexedParamUrlCodingStrategy("&#47;view", ViewPublicPage.class));<&#47;pre><br />
This tells Wicket that anyone forwarding to my <em>ViewPublicPage<&#47;em> will use the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;request&#47;target&#47;coding&#47;IndexedParamUrlCodingStrategy.html">IndexedParamUrlCodingStrategy<&#47;a>... which works as follows: we add&#47;pull params from the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;PageParameters.html">PageParameters<&#47;a> using keys of 0, 1, 2... etc. As you can see in our code example, we use 0 as we only have one param. The end result of this is that our url will look something like this:</p>
<pre>http:&#47;&#47;your.domain.com&#47;view&#47;5<&#47;pre><br />
This doesn't seem like much, but it does have a slightly cleaner url and depending on your application can help greatly with SEO.<br />
&nbsp;</p>
<h1>Simple and Clean<&#47;h1><br />
I have shown you a very simple form and how easy it is to create a working form submission, but have you noticed that there isn't any java snippets of any kind in the html?<br />
In my opinion, that is one of the best features of wicket, there ARE <em>wicket:ids<&#47;em> but those are attributes and tags that are ignored by most GUI designers such as Dreamweaver so the HTML can be ported back and forth if need be without the graphics designer hosing the developers hard work. Even if you have to take a fresh copy of the HTML... it is far simpler to just have to add the <em>wicket:ids<&#47;em> back in than to merge in all of the XML or JSP crud that most other Java frameworks force the developer to work with.<br />
&nbsp;<br />
Gone are the days of System.outs in your jsps to figure out what is going on in there. With Wicket... all of your code is in Java classes which can be debugged easily with your favorite IDE. You can walk through your loops to see what you are populating and why. You can even debug portions of Ajax calls as Wicket Ajax enabled components hide the complexity of Ajax submissions and data retrieval.<br />
&nbsp;<br />
Enough jabbering... let's see some list action and paging goodness!<br />
&nbsp;</p>
<h1>History<&#47;h1><br />
Form handling and components are wonderful but I think the history page shows off some of my favorite components within Wicket. There is a nice selection of different types of repeater components and a great paging component that we will use to display paste history.<br />
&nbsp;<br />
Let's start off by talking about the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DataView.html">DataView<&#47;a> component that we are going to use to display the pastes. The <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DataView.html">DataView<&#47;a> component is a repeater that allows us to easily mark what we want to repeat within the html and fill in the data from our model object. This is done by adding the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DataView.html">DataView<&#47;a> to our page and then implementing the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DataView.html">DataView<&#47;a>s <em>populateItem<&#47;em> method as follows:</p>
<pre lang="java" colla="+">
        add(historyDataView = new DataView("history", new HistoryDataProvider(pasteService), 10) {<br />
            protected void populateItem(Item item) {<br />
                PasteItem pasteItem = (PasteItem) item.getModelObject();</p>
<p>                PageParameters params = new PageParameters();<br />
                params.put("0", Long.toString(pasteItem.getId()));<br />
                item.add(new BookmarkablePageLink("viewLink", ViewPublicPage.class, params));</p>
<p>                final String[] contentLines = pasteItem.getContent().split("n");<br />
                item.add(new Label("lineCount", "(" + contentLines.length + " Line" + (contentLines.length > 1 ? "s" : "") + ")"));</p>
<p>                item.add(new Label("posted", getElapsedTimeSincePost(pasteItem)));</p>
<p>                List lines = new ArrayList();<br />
                int count = 0;<br />
                for (String contentLine : contentLines) {<br />
                    count++;<br />
                    if (count > 5) {<br />
                        break;<br />
                    } else {<br />
                        lines.add(contentLine);<br />
                    }<br />
                }<br />
                item.add(new ListView("content", lines) {<br />
                    protected void populateItem(ListItem item) {<br />
                        String content = (String) item.getModelObject();<br />
                        Label contentLine = new Label("contentLine", ((item.getIndex() + 1) + "     ").substring(0, 5) + content.replaceAll("r", "").replaceAll("n", ""));<br />
                        item.add(contentLine);<br />
                        if ((item.getIndex() + 1) % 2 == 0) {<br />
                            item.add(new SimpleAttributeModifier("class", "highlight"));<br />
                        }<br />
                    }<br />
                });</p>
<p>                item.add(new BookmarkablePageLink("viewLink2", ViewPublicPage.class, params) {<br />
                    @Override<br />
                    public boolean isVisible() {<br />
                        return contentLines.length > 5;<br />
                    }<br />
                });<br />
            }<br />
        });<&#47;pre><br />
and the corresponding html:</p>
<pre lang="html" colla="+">
<div wicket:id="history" class="historyItem">
<div class="view">
<div class="historyItemHeader">
<div class="historyItemView"><a wicket:id="viewLink" href="#">View Paste<&#47;a><&#47;div>
<div wicket:id="lineCount" class="historyItemLines">(27 lines)<&#47;div>
<div wicket:id="posted" class="historyItemTime">1 hour ago<&#47;div><br />
          <&#47;div></p>
<div class="historyItemHeaderBottom"> <&#47;div></p>
<div wicket:id="content"><re wicket:id="contentLine">asdfl;kajsdf; a;sldkfj a;lskdjf<&#47;re><&#47;div></p>
<div class="historyItemView"><a wicket:id="viewLink2">More...<&#47;a><&#47;div><br />
        <&#47;div><br />
    <&#47;div><br />
<&#47;pre><br />
Digging in... you mark with a <em>wicket:id<&#47;em> what you want to repeat... in our case, it is the container div for a history item which we marked as <em>wicket:id="history"<&#47;em>. For every object (<em>PasteItem<&#47;em>) within our models list, we are going to get a new div with contents. For each object within the list, we add a <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;link&#47;BookmarkablePageLink.html">BookmarkablePageLink<&#47;a> which links to the paste view, the line count and elapsed time which we add as <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;basic&#47;Label.html">Label<&#47;a> components, a repeater to display the first 5 lines of the paste, and a More link which displays only if there are more than 5 lines in the paste.<br />
&nbsp;<br />
A <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;link&#47;BookmarkablePageLink.html">BookmarkablePageLink<&#47;a> means we are going to have a "clean" URL and we have already covered the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;PageParameters.html">PageParameters<&#47;a>. The <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;basic&#47;Label.html">Label<&#47;a> has a convenience constructor to allow for <a target="_blank" href="http:&#47;&#47;java.sun.com&#47;javase&#47;6&#47;docs&#47;api&#47;java&#47;lang&#47;String.html">String<&#47;a>s rather than having to wrap them in a model. As mentioned earlier, the line count and elapsed time are derived and therefore cannot be pulled from the model object but instead are set manually. Then we have another type of repeater to display the paste. I have chosen a <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;list&#47;ListView.html">ListView<&#47;a> as I'm passing it a <a target="_blank" href="http:&#47;&#47;java.sun.com&#47;javase&#47;6&#47;docs&#47;api&#47;java&#47;util&#47;List.html">List<&#47;a> and don't need to worry about length or paging. The last component we add is the conditional link to the paste view where we override the <em>isVisible<&#47;em> method to tell Wicket whether or not this component is visible.<br />
&nbsp;<br />
That covers the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DataView.html">DataView<&#47;a>... now, what about paging? Wicket has a <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;navigation&#47;paging&#47;PagingNavigator.html">PagingNavigator<&#47;a> component that has a prebuilt paging mechanism that can be easily overridden to accommodate just about any type of paging look and feel that your little heart desires. The requirements for using the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;navigation&#47;paging&#47;PagingNavigator.html">PagingNavigator<&#47;a> are that you need to start with a reapeater that implements <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;navigation&#47;paging&#47;IPageable.html">IPageable<&#47;a> (<a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DataView.html">DataView<&#47;a>) and you will need to supply the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DataView.html">DataView<&#47;a> with a data provider that implements <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;IDataProvider.html">IDataProvider<&#47;a>. I have chosen to extend <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DefaultDataProvider.html">DefaultDataProvider<&#47;a> and implement as follows:</p>
<pre lang="java" colla="+">public class HistoryDataProvider extends DefaultDataProvider {</p>
<p>    PasteService pasteService;</p>
<p>    public HistoryDataProvider(PasteService pasteService) {<br />
        this.pasteService = pasteService;<br />
    }</p>
<p>    public Iterator iterator(int first, int count) {<br />
        return pasteService.getLatestItems("web", count, first, false).iterator();<br />
    }</p>
<p>    public int size() {<br />
        return new Long(pasteService.getLatestItemsCount("web")).intValue();<br />
    }</p>
<p>    public IModel model(Object object) {<br />
        return new Model((PasteItem) object);<br />
    }</p>
<p>}<&#47;pre><br />
You can see that the data provider allows us to only pull what is displayed on the current page and gives the paging mechanism the overall count value via the size method. In return, the paging mechanism supplies the start and count for the pulling of what is to be displayed.<br />
&nbsp;<br />
Last is the addition of the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;navigation&#47;paging&#47;PagingNavigator.html">PagingNavigator<&#47;a> components which I have chosen to show at the top and bottom of the list.<br />
&nbsp;<br />
HistoryPage.html</p>
<pre lang="html" colla="+">
<wicket:extend></p>
<div class="navContainer">
<div wicket:id="pageNav" class="pageNav"><a href="#">Previous<&#47;a><a href="#">1<&#47;a><a href="#">2<&#47;a><a href="#">Next<&#47;a><&#47;div><&#47;div></p>
<div wicket:id="history" class="historyItem">
<div class="view">
<div class="historyItemHeader">
<div class="historyItemView"><a wicket:id="viewLink" href="#">View Paste<&#47;a><&#47;div>
<div wicket:id="lineCount" class="historyItemLines">(27 lines)<&#47;div>
<div wicket:id="posted" class="historyItemTime">1 hour ago<&#47;div><br />
          <&#47;div></p>
<div class="historyItemHeaderBottom"> <&#47;div></p>
<div wicket:id="content"><re wicket:id="contentLine">asdfl;kajsdf; a;sldkfj a;lskdjf<&#47;re><&#47;div></p>
<div class="historyItemView"><a wicket:id="viewLink2">More...<&#47;a><&#47;div><br />
        <&#47;div><br />
    <&#47;div></p>
<div class="navContainer">
<div wicket:id="pageNav2" class="pageNav"><a href="#">Previous<&#47;a><a href="#">1<&#47;a><a href="#">2<&#47;a><a href="#">Next<&#47;a><&#47;div><&#47;div><br />
<&#47;wicket:extend><&#47;pre><br />
and HistoryPage.java</p>
<pre lang="java" colla="+">public class HistoryPage extends BasePage {</p>
<p>    @SpringBean<br />
    PasteService pasteService;</p>
<p>    SimpleDateFormat sdf = new SimpleDateFormat("MM&#47;dd&#47;yyyy");</p>
<p>    DataView historyDataView;</p>
<p>    public HistoryPage() {<br />
        super(HistoryPage.class);</p>
<p>        add(historyDataView = new DataView("history", new HistoryDataProvider(pasteService), 10) {<br />
            protected void populateItem(Item item) {<br />
                PasteItem pasteItem = (PasteItem) item.getModelObject();</p>
<p>                PageParameters params = new PageParameters();<br />
                params.put("0", Long.toString(pasteItem.getId()));<br />
                item.add(new BookmarkablePageLink("viewLink", ViewPublicPage.class, params));</p>
<p>                final String[] contentLines = pasteItem.getContent().split("n");<br />
                item.add(new Label("lineCount", "(" + contentLines.length + " Line" + (contentLines.length > 1 ? "s" : "") + ")"));</p>
<p>                item.add(new Label("posted", getElapsedTimeSincePost(pasteItem)));</p>
<p>                List lines = new ArrayList();<br />
                int count = 0;<br />
                for (String contentLine : contentLines) {<br />
                    count++;<br />
                    if (count > 5) {<br />
                        break;<br />
                    } else {<br />
                        lines.add(contentLine);<br />
                    }<br />
                }<br />
                item.add(new ListView("content", lines) {<br />
                    protected void populateItem(ListItem item) {<br />
                        String content = (String) item.getModelObject();<br />
                        Label contentLine = new Label("contentLine", ((item.getIndex() + 1) + "     ").substring(0, 5) + content.replaceAll("r", "").replaceAll("n", ""));<br />
                        item.add(contentLine);<br />
                        if ((item.getIndex() + 1) % 2 == 0) {<br />
                            item.add(new SimpleAttributeModifier("class", "highlight"));<br />
                        }<br />
                    }<br />
                });</p>
<p>                item.add(new BookmarkablePageLink("viewLink2", ViewPublicPage.class, params) {<br />
                    @Override<br />
                    public boolean isVisible() {<br />
                        return contentLines.length > 5;<br />
                    }<br />
                });<br />
            }<br />
        });</p>
<p>        add(new PagingNavigator("pageNav", historyDataView));<br />
        add(new PagingNavigator("pageNav2", historyDataView));<br />
    }<br />
}<&#47;pre><br />
Note that we have just added the 2 <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;html&#47;navigation&#47;paging&#47;PagingNavigator.html">PagingNavigator<&#47;a>s at the bottom of the code, passing in the <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;markup&#47;repeater&#47;data&#47;DataView.html">DataView<&#47;a> that we created above. That is it... you now have a fully functioning history page with paging navigation. Again, not sure it can get much easier than that.<br />
&nbsp;</p>
<h1>Testing<&#47;h1><br />
Testing you say? Whoa... we can't test the front-end without going through a lot of trouble can we?<br />
&nbsp;<br />
Well... the truth is that Wicket provides a way to do quite a bit of front-end testing and it is pretty much as easy as testing any other Java code!<br />
&nbsp;<br />
What would we want to test? Well, I believe we would want to test that a successful paste would indeed go to the correct page and that the view of the post would contain what we pasted. We might also want to see if our links work... do they go to the correct page? We don't have a complicated application, so we are going to show a small test, but the testing framework can check for just about anything that can happen on a page. For now, take a look at this simple test:</p>
<pre lang="java" colla="+">
public class TestPastePage extends AbstractIntegrationTest {</p>
<p>    @SpringBeanByType<br />
    private PasteService svc;</p>
<p>    @SpringBeanByType<br />
    private PasteItemDao dao;</p>
<p>    protected WicketTester tester;</p>
<p>    @Before<br />
    public void setup() {<br />
        AnnotApplicationContextMock appctx = new<br />
                AnnotApplicationContextMock();<br />
        appctx.putBean("pasteDao", dao);<br />
        appctx.putBean("pasteService", svc);</p>
<p>        tester = new WicketTester(MysticPasteApplication.class);<br />
        WebApplication app = tester.getApplication();</p>
<p>        app.addComponentInstantiationListener(new SpringComponentInjector(app, appctx));<br />
    }</p>
<p>    @Test<br />
    public void testPaste() {<br />
        tester.startPage(PasteItemPage.class);<br />
        tester.assertRenderedPage(PasteItemPage.class);<br />
        FormTester ft = tester.newFormTester("pasteForm");<br />
        ft.select("type", 0);<br />
        ft.setValue("content", "blahblahblah");<br />
        ft.submit();<br />
        tester.assertRenderedPage(ViewPublicPage.class);<br />
        tester.assertContains("blahblahblah");<br />
        tester.assertLabel("type", "JAVA");<br />
    }</p>
<p>    @Test<br />
    public void testHistoryMenuClick() {<br />
        tester.startPage(PasteItemPage.class);<br />
        tester.assertRenderedPage(PasteItemPage.class);<br />
        tester.clickLink("historyLinkContainer:historyLink");<br />
        tester.assertRenderedPage(HistoryPage.class);<br />
    }<br />
}<&#47;pre><br />
Well... this looks simple enough. First, we'll test to see if a paste works by looking at what happens in testPaste:</p>
<ul>
<li>start the page we want to look at.<&#47;li>
<li>validate that the page was rendered and that we are still on this page.<&#47;li>
<li>setup the form tester.<&#47;li>
<li>set the values for the language drop-down and the paste content.<&#47;li>
<li>submit the form.<&#47;li>
<li>assert that it went to the page we were expecting it to go to next.<&#47;li>
<li>see if it contains the paste, in this case "blahblahblah".<&#47;li>
<li>and finally, see if the label for Language is set to JAVA.<&#47;li><br />
<&#47;ul><br />
Very cool... the test passes... next we test the menu item history link. We open our starting page, kick off the link via clickLink which is set to our history link and then verify that it indeed went to our history page.<br />
&nbsp;<br />
I bet you never thought testing front-end code could be so easy. The <a target="_blank" href="http:&#47;&#47;wicket.apache.org&#47;docs&#47;wicket-1.3.2&#47;wicket&#47;apidocs&#47;org&#47;apache&#47;wicket&#47;util&#47;tester&#47;WicketTester.html">WicketTester<&#47;a> does all the work so you can now have far greater test coverage than you would normally have with a web application.<br />
&nbsp;</p>
<h1>Conclusion<&#47;h1><br />
Wicket allows a developer to create applications as rapidly as any framework I have seen to date while keeping the html as pristine as possible. Occasionally, I am forced to go back to older applications and deal with jsps both old and new and I always come away with a headache and nosebleed due to the punches taken in dealing with jsps and jstl. I wish I had the time and space to go into more details about some of the helpful components that Wicket offers and I haven't even touched on Wickets Ajax components in this version of the MysticPaste application. Pay close attention to our blog to see follow up posts and Wicket higher learning as we make improvements to the MysticPaste application. We will also continue to post Wicket tips and tricks as we come across them.</p>
