---
layout: post
status: publish
published: true
title: 'Wicket TinyMCE: some advanced tips'
author:
  display_name: ildella
  login: ildella
  email: ildella@gmail.com
  url: ''
author_login: ildella
author_email: ildella@gmail.com
excerpt: 'Some tricks to use TinyMCE wicket integration in a real application: toggle
  behavior on and off with user interactions, submit a form via ajax with a tinyMCE
  component inside.'
wordpress_id: 101
wordpress_url: http://wicketbyexample.com/?p=101
date: '2009-09-16 13:04:01 +0000'
date_gmt: '2009-09-16 20:04:01 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3472
  author: Half october updates. &laquo; The Lazy Dev
  author_email: ''
  author_url: http://thelazydev.wordpress.com/2009/10/15/half-october-updates/
  date: '2009-10-15 02:58:39 +0000'
  date_gmt: '2009-10-15 09:58:39 +0000'
  content: "[...]  2. I almost complete my open source stack for building web applications
    at Ohloh. 3. I published an article on WicketByExample about tinyMce and Wicket.
    A new one is already written and will talk about some other subtle [...]"
- id: 3473
  author: Steve
  author_email: steve@example.com
  author_url: ''
  date: '2009-12-14 06:32:00 +0000'
  date_gmt: '2009-12-14 13:32:00 +0000'
  content: Excellent post, I was trying to get TinyMCE loaded in a panel loaded via
    Ajax in Wicket as well. Thanks!
- id: 3474
  author: ildella
  author_email: ildella@gmail.com
  author_url: ''
  date: '2009-12-14 10:55:12 +0000'
  date_gmt: '2009-12-14 17:55:12 +0000'
  content: you're welcome :) I have a second article with more sutle trick solved
    on this topic. It is almost ready to post since a month ago... Maybe this week
    I will manage to publish it.
- id: 3475
  author: yanweijie
  author_email: weijiescu@gmail.com
  author_url: ''
  date: '2010-04-11 02:56:26 +0000'
  date_gmt: '2010-04-11 09:56:26 +0000'
  content: I don't like tinymce.I hope someone  can teach us freshmen how to use a
    favor  editor in wicket
- id: 3476
  author: Kalle
  author_email: kallewidell@hotmail.com
  author_url: ''
  date: '2010-11-25 20:30:44 +0000'
  date_gmt: '2010-11-26 03:30:44 +0000'
  content: After battleing issues with  submitting form in ajax with wicketstuff TinyMCE
    component i finally found some smart guy who rebuilt the artifact with newest
    original tinymce js in it. Get 1.4.14-SNAPSHOT or later to accomplish this.
---
Wicket offers a valid integration with the powerful and open source <a href="http://tinymce.moxiecode.com/">TinyMCE</a>, a Javascript HTML WYSIWYG editor. Wicket-contrib-tinymce is part of the wicketstuff-core and is well done and maintained. Then using TinyMCE within wicket is very easy and the <a href="http://wicketstuff.org/confluence/display/STUFFWIKI/wicket-contrib-tinymce">instructions on the site</a> would be enough to make things work and the example project on the subversion repository will do most of the rest.

<a id="more"></a><a id="more-101"></a>

Here I want to tell something I have learned using this nice toy.

<strong>Use with Maven 2</strong>

To use tinymce in a Maven 2 project, we need to add the wicketstuff maven2 repository:

<pre lang="xml" colla="+">
<repository><br />
	<id>wicket-stuff</id><br />
	<url>http://wicketstuff.org/maven/repository</url><br />
</repository><br />
</pre>

and, of course, the dependency

<pre lang="xml" colla="+">
<dependency><br />
	<groupId>org.wicketstuff</groupId><br />
	<artifactId>tinymce</artifactId><br />
	<version>1.4-SNAPSHOT</version><br />
</dependency><br />
</pre>

<strong>Creating a CheckBox that toggle TinyMceBehavior on and off.</strong>

In my scenario I need the user to enable Rich Text capabilities for a field in a form. Is nothing complicated but we need to take care about when to instantiate objects. In my solution, I use a checkbox to toggle the state. This is the code I have in the constructor of my panel.

<pre lang="java" colla="+">
public class CustomPanel extends Panel {<br />
   private TinyMceBehavior tinyMceBehavior;<br />
   public CustomPanel(String id, IModel model) {<br />
       ...<br />
      TextArea field = new TextArea("text", model);<br />
      tinyMceBehavior = new TinyMceBehavior();<br />
      PropertyModel richProperty = new PropertyModel(model, "rich");<br />
      if (richProperty.getObject()) {<br />
         field.add(tinyMceBehavior);<br />
      }

      add(new AjaxCheckBox("switchRte", richProperty) {

         @Override<br />
         protected void onUpdate(AjaxRequestTarget target) {<br />
            if (getModelObject()) {<br />
               field.add(tinyMceBehavior);<br />
            } else {<br />
               field.remove(tinyMceBehavior);<br />
               tinyMceBehavior = new TinyMceBehavior();<br />
            }<br />
            target.addComponent(CustomPanel.this);<br />
         }<br />
      });<br />
   }<br />
}<br />
</pre>

The information is saved in a property called "rich" in my domain object so it is persisted and I can remember next time. That object is already wrapped in the variable <em>model</em> (a wicket IModel) that in this code is wrapped in a simple wicket PropertyModel. In this example I have used Wicket 1.4 support for generics.

<strong>Switching to Rich Text after the page is load</strong>

One of the problem I had was that my page loaded without any TinyMCEBehavior attached to any component. User can enable the behavior at runtime like in the example before. Well, it did not work because the javascript needs to be load at the time the page is loaded. The solution is that when you have some TinyMCE components in your page, is better that in the constructor of the page you load the Javascript this way:

<pre lang="java" colla="+">      add(new HeaderContributor(new IHeaderContributor() {<br />
         public void renderHead(IHeaderResponse response) {<br />
            response.renderJavascriptReference(TinyMCESettings.javaScriptReference());<br />
         }<br />
      }));</pre><br />
<strong>Subtle trick: submit via Ajax</strong>

Maybe anyone knew this before. I did not. When you submit a form containing a TinyMCE component and the form submits via ajax, say an AjaxSubmitLink or an AjaxButton in Wicket, you *must* use a trick as someone else <a href="http://dwairi.blogspot.com/2006/12/tinymce-ajax.html">already explained</a>. With wicket-tinymce this becomes adding the <em>TinyMceAjaxSubmitModifier</em> to the submit component and that's all.

<strong>Conclusion</strong>

wicket-contrib-tinymce is a well done contribution to the wicketstuff-core and an important library for web developer that uses Wicket. The only small point is that is actually using a one year old version of TinyMCE, dated august 2008. It does the *most* of the stuff and I never felt the need to upgrade. Maybe someone just need some feature or a bug fix present in more recent release. Hope that wicket-tinymce developer will have some time to play with newer TinyMCE.

This is my first contribution to WicketByExample. I hope you liked the article, I will like any feedback. Cheers.<br />
<a href="http://twitter.com/ildella" target="_blank"></a>

