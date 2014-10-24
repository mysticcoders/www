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
comments: true
---
After much loss of sleep trying to use DatePicker in wicket-extensions, I've instead opted to create a simple component with date selectable dropdowns of month, day, year.  This little pet project was great, in that it helped me really get a better understanding of how Model's work with Wicket<a id="more"></a><a id="more-43"></a>, and what it takes to make a component.  So instead of the javascript date chooser, we have this:

<img id="image42" src="http://www.mysticcoders.com/wp-content/uploads/2006/08/picture-1.png" alt="DateChooser Component Screenshot" />

And the only thing you pass it, is a Date in a Model, and it does the rest of the setting up.  So I'll give you a quick overview of the source and what it does, and include the code as attachments to this post.

First things first, initialization:

<pre>public class DateChooser extends FormComponent {</pre><br />
as this is going to be a component, it should extend FormComponent, if we were adding extra functionality onto an existing form element, rather than a collection of them, we could just extend that class, easy.

<pre>public DateChooser(final MarkupContainer parent, final String id, IModel model) {<br />
super(parent, id);</pre><br />
This is the constructor from DateChooser, as you can see, its not a 1.x constructor, but written against the new changes in 2.0.  It would be fairly simple to convert this to a 1.2 implementation.

<pre>new DropDownChoice(this, "month", new DateModel(model, Calendar.MONTH), getMonths(), new IChoiceRenderer() { ... }<br />
new DropDownChoice(this, "day", new DateModel(model, Calendar.DAY_OF_MONTH), getDays());<br />
new DropDownChoice(this, "year", new DateModel(model, Calendar.YEAR), getYears());</pre><br />
And here are the dropdowns, as you can see from the first dropdown, there is an added IChoiceRenderer, which in the implementation basically grabs the numeric value passed in for the choices Collection, and using SimpleDateFormat, gives the text for that month.

<pre>private class DateModel extends AbstractModel {</pre><br />
...on to the implementation of the model, making some simple use of generics here.

<pre>public DateModel(IModel dateModel, int calendarField) {</pre><br />
we create a DateModel instance, and pass it the model that is being passed to this component, and in addition we pass the calendarField value, so we know what to modify in our setObject() method.

<pre>if (dateModel.getObject() == null) return null;<br />
Calendar cal = Calendar.getInstance();<br />
cal.setTime((Date) dateModel.getObject());<br />
return cal.get(calendarField);</pre><br />
Here we implement the getObject() method, returning the numeric value for the supplied calendarField.

<pre>Date date = (Date)dateModel.getObject();<br />
if(date==null) {<br />
date = new Date();<br />
}<br />
Calendar cal = Calendar.getInstance();<br />
cal.setTime(date);<br />
cal.set(calendarField, object.intValue());<br />
dateModel.setObject(cal.getTime());</pre><br />
and here's the setObject() method, where during the submission of the form, if a Date hasn't been added to the model yet, for us to start setting field values on, it gets created, and then using the value passed in for Object, we set each calendarField in turn as the FormComponent get processed.

There are a few different things that can be done to enhance this:

<ul>
<li>The days dropdown always shows 31 days, whether its got 30, 31, 28, 29, etc.</li>
<li>The ordering of the dropdowns is in M/d/y, which definitely isn't the only way to do it.</li><br />
</ul><br />
Would love comments on how to improve this, code attached.

<a id="p44" title="DateChooser Component" href="http://www.mysticcoders.com/wp-content/uploads/2006/08/datechoosercomponent.zip">DateChooser Component</a>

