---
layout: post
status: publish
published: true
title: Enums internationalization with Wicket
author:
  display_name: ildella
  login: ildella
  email: ildella@gmail.com
  url: ''
author_login: ildella
author_email: ildella@gmail.com
wordpress_id: 1718
wordpress_url: http://wicketbyexample.com/?p=130
date: '2009-10-06 08:30:07 +0000'
date_gmt: '2009-10-06 15:30:07 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3477
  author: Reinout van Schouwen (reinouts) 's status on Monday, 12-Oct-09 12:28:38
    UTC - Identi.ca
  author_email: ''
  author_url: http://identi.ca/notice/11867560
  date: '2009-10-12 05:28:51 +0000'
  date_gmt: '2009-10-12 12:28:51 +0000'
  content: "[...] by example: enums internationalization with Wicket http://wicketbyexample.com/enums-internationalization-with-wicket/
    #i18n [...]"
- id: 3478
  author: Leszek Gawron
  author_email: lgawron@apache.org
  author_url: ''
  date: '2009-12-07 14:59:05 +0000'
  date_gmt: '2009-12-07 21:59:05 +0000'
  content: |-
    and why complicate things if you can simply do:

    add( new Label( "enumValue", new StringResourceModel( MyEnum.class.getName() + ".${}", this, Model.of( myEnumValue ) ) ) ?
---
<em>(Editor&acirc;&euro;&trade;s note: <a href="http://yeswicket.com" target="_blank">Olivier Croisier</a> contributed this column from YesWicket.)</em>

Enums are a convenient way to represent finite collections of elements : seasons, week days... As a consequence, they frequently need to be input or displayed in web applications - and it better be in a I18N-aware way.<br />
Let's see how easily Wicket can handle this.

<h2>Enums internationalization</h2><br />
Throughout this article, we'll use the Seasons Enum as an example :

<pre lang="java" colla="+">
public enum Season {<br />
    SPRING, SUMMER, AUTUMN, WINTER;<br />
}<br />
</pre>

Wicket has a powerful hierarchical I18N system : given a logical I18N key (a string), the corresponding translation is first searched for at the current component level, then up its hierarchy - all the way up to the Application root if required.<br />
To benefit from it, the developer only has to call the getString() method on any Wicket component :

<pre lang="java" colla="+">
String translation = anyComponent.getString(key);<br />
</pre>

The first thing we need to do is therefore to devise a way to generate a unique I18N key for each Enum constant. The most obvious solution is to use their Fully Qualified Names as a key (eg. "com.yeswicket.wickettips.model.WINTER") ; this should prevent fortuitous name clashes.

The following code snippet demonstrates how to get an Enum's FQN :

<pre lang="java" colla="+">
Season enumValue = Season.WINTER;<br />
String messageKey = enumValue.getDeclaringClass().getCanonicalName() + "." + enumValue.name();<br />
</pre>

In order to avoid copy/pasting this code all around the application, and to be able to easily replace it with another algorithm should the need arise, we'll use the Strategy pattern, where every algorithm is encapsulated in its own class.<br />
This might seem easy to implement, but keep in mind that every class accessible from a Wicket component will be serialized along with it in the session store... and that's something you will definetely want to avoid.

Static methods to the rescue !<br />
The following class, inspired from java.util.Locale, has a static-only API for its consumers (thus solving the serialization concern) and still allows the underlying algorithm to be changed at will :

<pre lang="java" colla="+">
public abstract class EnumMessageKeyProvider {<br />
	private static EnumMessageKeyProvider provider = new DefaultEnumResourceKeyProvider();

	public static EnumMessageKeyProvider getDefault() {<br />
		return EnumMessageKeyProvider.provider;<br />
	}

	public static void setDefault(EnumMessageKeyProvider provider) {<br />
		EnumMessageKeyProvider.provider = provider;<br />
	}

	public abstract <t extends Enum<t>> String computeMessageKey(T enumValue);

	public static <t extends Enum<t>> String getMessageKey(T enumValue) {<br />
		return EnumMessageKeyProvider.provider.computeMessageKey(enumValue);<br />
	}<br />
}<br />
public class DefaultEnumResourceKeyProvider extends EnumMessageKeyProvider {<br />
	@Override<br />
	public <t extends Enum<t>> String computeMessageKey(T enumValue) {<br />
		return enumValue.getDeclaringClass().getCanonicalName() + "." + enumValue.name();<br />
	}<br />
}<br />
</pre>

Getting an I18N key for an Enum is now as easy as :

<pre lang="java" colla="+">
Season enumValue = Season.WINTER;<br />
String key = EnumMessageKeyProvider.getMessageKey(enumValue);<br />
</pre>

To use another key generation algorithm, just write a new strategy...

<pre lang="java" colla="+">
public class SimpleNameEnumResourceKeyProvider extends EnumMessageKeyProvider {<br />
	@Override<br />
	public <t extends Enum<t>> String computeMessageKey(T enumValue) {<br />
		return enumValue.name();<br />
	}<br />
}<br />
</pre>

...and register it with the EnumMessageKeyProvider ; a good place for that is the Application's init() method :

<pre lang="java" colla="+">
public class WicketTipsApplication extends WebApplication {<br />
	@Override<br />
	protected void init() {<br />
		EnumMessageKeyProvider.setDefault(new SimpleNameEnumResourceKeyProvider());<br />
	}<br />
	(...)<br />
}<br />
</pre>

<h2>Displaying internationalized enums</h2>

Wicket's Label is a very basic component that simply displays the text provided by its Model.<br />
To display Enums, we can develop a new kind of Model that automatically performs internationalization and hands over the resulting text to the component it is attached to.

As an example, we'll extend the very convenient PropertyModel.<br />
Please note that our Model provides a String but operates on an Enum : EnumPropertyModel<t extends Enum<t>> extends PropertyModel<string>. Also, in addition to the PropertyModel's existing constructor parameters (the target object and the name of the property to retrieve), our class needs a Component to call the getString() method on.

<pre lang="java" colla="+">
public class EnumPropertyModel<t extends Enum<t>> extends PropertyModel<string> {

	private Component component;

	public EnumPropertyModel(Object modelObject, String expression, Component resourceProvider) {<br />
		super(modelObject, expression);<br />
		this.component = resourceProvider;<br />
	}

	@Override<br />
	public String getObject() {<br />
		final String expression = propertyExpression();<br />
		final Object target = getTarget();<br />
		if (target != null) {<br />
			T enumValue = (T) PropertyResolver.getValue(expression, target);<br />
			String key = EnumMessageKeyProvider.getMessageKey(enumValue);<br />
			return component.getString(key);<br />
		}<br />
		return null;<br />
	}<br />
}<br />
</pre>

This custom Model can now be used with a Label (and many other components) to easily display any Enum :

<pre lang="java" colla="+">
public class HomePage extends WebPage {<br />
	private Season season = Season.SPRING;<br />
	public HomePage() {<br />
		add(new Label("label", new EnumPropertyModel<season>(this, "season", this)));<br />
	}<br />
}<br />
</pre>

<h2>Selecting an enum with a DropDownChoice</h2>

Now that we can display an Enum, let's see how to let the user choose one from a dropdown list.

The DropDownChoice component follows the MVC pattern :

<ul>
<li>The DropDownChoice itself is the Controller</li>
<li>The Model it takes as a parameter is, obviously, the Model</li>
<li>The View is rendered by a ChoiceRenderer that is responsible for the HTML<br />
<option> tags generation.</li><br />
</ul>

Usually, the DropDownChoice relies on the Model to define the set of selectable values. With Enums, those values are determined by the Enum's type itself, so we can bypass the Model and override the DropDownChoice's "getChoices()" method :

<pre lang="java" colla="+">
public class EnumDropDownChoice<t extends Enum<t>> extends DropDownChoice<t> {

	public EnumDropDownChoice(String id, IModel<t> model) {<br />
		super(id);<br />
		setModel(model);<br />
		setChoiceRenderer(new EnumChoiceRenderer<t>(this));<br />
	}

	public EnumDropDownChoice(String id, IModel<t> model, EnumChoiceRenderer<t> choiceRenderer) {<br />
		super(id);<br />
		setModel(model);<br />
		setChoiceRenderer(choiceRenderer);<br />
	}

	@Override<br />
	public List<? extends T> getChoices() {<br />
		return Arrays.asList(getModelObject().getDeclaringClass().getEnumConstants());<br />
	}<br />
}<br />
</pre>

The related ChoiceRenderer will generate the<br />
<option> tags using the Enum's name as an identifier, and its internationalized value as a label :

<pre lang="java" colla="+">
public class EnumChoiceRenderer<t extends Enum<t>> implements IChoiceRenderer<t> {

	/** The Component used a the root of the I18N search process */<br />
	private final Component resourceProvider;

	public EnumChoiceRenderer(final Component resourceProvider) {<br />
		this.resourceProvider = resourceProvider;<br />
	}

	@Override<br />
	public Object getDisplayValue(final T value) {<br />
		final String key = EnumMessageKeyProvider.getMessageKey(value);<br />
		return resourceProvider.getString(key);<br />
	}

	@Override<br />
	public String getIdValue(final T object, final int index) {<br />
		final Enum<?> enumValue = object;<br />
		return enumValue.name();<br />
	}<br />
}<br />
</pre>

Finally, here is an example of how our components can be used to select and display an Enum in a standart Form :

<pre lang="java" colla="+">
public class HomePage extends WebPage {<br />
	private Season season = Season.SPRING;<br />
	public HomePage() {<br />
		Form<void> form = new Form<void>("form");<br />
		form.add(new EnumDropDownChoice<season>("season", new PropertyModel<season>(this, "season")));<br />
		add(form);<br />
		add(new Label("label", new EnumPropertyModel<season>(this, "season", this)));<br />
	}<br />
}<br />
</pre>

<h2>In action</h2>

The complete source code is available at the bottom of this article.<br />
Feel free to play with it to see all those custom components in live action. The example form comes with two additional links, to switch between the French and English locales and see the internationalization magic happen.

Last note : a Gradle build script is provided to help you get started in seconds. Just run the following command in the application's directory. Gradle will automatically compile the classes, copy the required resources, and start a Jetty server.

<pre lang="java" colla="+">
gradle jettyRun<br />
</pre>

Then, open a browser at :

<pre lang="java" colla="+">
http://localhost:8080/Wicket-tips/<br />
</pre>

Have fun !

