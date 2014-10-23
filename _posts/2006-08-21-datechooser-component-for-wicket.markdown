---
layout: post
status: publish
published: true
title: DateChooser component for Wicket
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: After much loss of sleep trying to use DatePicker in wicket-extensions, I've
  instead opted to create a simple component with date selectable dropdowns of month,
  day, year.  This little pet project was great, in that it helped me really get a
  better understanding of how Model's work with Wicket
wordpress_id: 43
wordpress_url: http://www.mysticcoders.com/blog/2006/08/21/datechooser-component-for-wicket/
date: '2006-08-21 00:17:17 +0000'
date_gmt: '2006-08-21 07:17:17 +0000'
categories:
- Apache Wicket
tags:
- Apache Wicket
- Java
- Development
comments:
- id: 583
  author: Date DropDownChoice Component Apache Wicket &laquo; Aparna Chaudhary Blog
  author_email: ''
  author_url: http://aparnachaudhary.net/?p=272
  date: '2009-08-19 00:40:28 +0000'
  date_gmt: '2009-08-19 07:40:28 +0000'
  content: "[...] sigh&#8230;the component was not available. I googled a bit and
    found the nice implementation by Mystic Coders. A small TODO thing in this piece
    of code is that the date drop down always show 31 days [...]"
---
<p>After much loss of sleep trying to use DatePicker in wicket-extensions, I've instead opted to create a simple component with date selectable dropdowns of month, day, year.  This little pet project was great, in that it helped me really get a better understanding of how Model's work with Wicket<a id="more"></a><a id="more-43"></a>, and what it takes to make a component.  So instead of the javascript date chooser, we have this:</p>
<p><img id="image42" src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2006&#47;08&#47;picture-1.png" alt="DateChooser Component Screenshot" &#47;></p>
<p>And the only thing you pass it, is a Date in a Model, and it does the rest of the setting up.  So I'll give you a quick overview of the source and what it does, and include the code as attachments to this post.</p>
<p>First things first, initialization:</p>
<pre>public class DateChooser extends FormComponent {<&#47;pre><br />
as this is going to be a component, it should extend FormComponent, if we were adding extra functionality onto an existing form element, rather than a collection of them, we could just extend that class, easy.</p>
<pre>public DateChooser(final MarkupContainer parent, final String id, IModel model) {<br />
super(parent, id);<&#47;pre><br />
This is the constructor from DateChooser, as you can see, its not a 1.x constructor, but written against the new changes in 2.0.  It would be fairly simple to convert this to a 1.2 implementation.</p>
<pre>new DropDownChoice(this, "month", new DateModel(model, Calendar.MONTH), getMonths(), new IChoiceRenderer() { ... }<br />
new DropDownChoice(this, "day", new DateModel(model, Calendar.DAY_OF_MONTH), getDays());<br />
new DropDownChoice(this, "year", new DateModel(model, Calendar.YEAR), getYears());<&#47;pre><br />
And here are the dropdowns, as you can see from the first dropdown, there is an added IChoiceRenderer, which in the implementation basically grabs the numeric value passed in for the choices Collection, and using SimpleDateFormat, gives the text for that month.</p>
<pre>private class DateModel extends AbstractModel {<&#47;pre><br />
...on to the implementation of the model, making some simple use of generics here.</p>
<pre>public DateModel(IModel dateModel, int calendarField) {<&#47;pre><br />
we create a DateModel instance, and pass it the model that is being passed to this component, and in addition we pass the calendarField value, so we know what to modify in our setObject() method.</p>
<pre>if (dateModel.getObject() == null) return null;<br />
Calendar cal = Calendar.getInstance();<br />
cal.setTime((Date) dateModel.getObject());<br />
return cal.get(calendarField);<&#47;pre><br />
Here we implement the getObject() method, returning the numeric value for the supplied calendarField.</p>
<pre>Date date = (Date)dateModel.getObject();<br />
if(date==null) {<br />
date = new Date();<br />
}<br />
Calendar cal = Calendar.getInstance();<br />
cal.setTime(date);<br />
cal.set(calendarField, object.intValue());<br />
dateModel.setObject(cal.getTime());<&#47;pre><br />
and here's the setObject() method, where during the submission of the form, if a Date hasn't been added to the model yet, for us to start setting field values on, it gets created, and then using the value passed in for Object, we set each calendarField in turn as the FormComponent get processed.</p>
<p>There are a few different things that can be done to enhance this:</p>
<ul>
<li>The days dropdown always shows 31 days, whether its got 30, 31, 28, 29, etc.<&#47;li>
<li>The ordering of the dropdowns is in M&#47;d&#47;y, which definitely isn't the only way to do it.<&#47;li><br />
<&#47;ul><br />
Would love comments on how to improve this, code attached.</p>
<p><a id="p44" title="DateChooser Component" href="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2006&#47;08&#47;datechoosercomponent.zip">DateChooser Component<&#47;a></p>
