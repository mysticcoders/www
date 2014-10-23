---
layout: post
status: publish
published: true
title: Autocomplete with an Object
author:
  display_name: sswinsburg
  login: sswinsburg
  email: steve.swinsburg@gmail.com
  url: http://steve-on-sakai.blogspot.com
author_login: sswinsburg
author_email: steve.swinsburg@gmail.com
author_url: http://steve-on-sakai.blogspot.com
wordpress_id: 1720
wordpress_url: http://wicketbyexample.com/?p=156
date: '2010-01-27 19:37:01 +0000'
date_gmt: '2010-01-28 02:37:01 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3480
  author: Ash
  author_email: ash@cougarmail.org
  author_url: ''
  date: '2010-01-29 02:07:20 +0000'
  date_gmt: '2010-01-29 09:07:20 +0000'
  content: Thanks for the tip. Is there a way to select multiples from the list?
- id: 3481
  author: sswinsburg
  author_email: steve.swinsburg@gmail.com
  author_url: http://steve-on-sakai.blogspot.com
  date: '2010-01-29 17:14:56 +0000'
  date_gmt: '2010-01-30 00:14:56 +0000'
  content: |-
    Hi Ash,

    It looks like its in as a feature request here:
    http://wicketstuff.org/jira/browse/WSO-1

    cheers,
    Steve
- id: 3482
  author: Dani
  author_email: dani@anglopolish.com
  author_url: ''
  date: '2010-03-18 04:36:59 +0000'
  date_gmt: '2010-03-18 11:36:59 +0000'
  content: great art. Helpful to me
- id: 3483
  author: Steve Hiller
  author_email: shetc@bellsouth.net
  author_url: ''
  date: '2010-05-11 12:16:50 +0000'
  date_gmt: '2010-05-11 19:16:50 +0000'
  content: |-
    Great explanation! I have a question about modeling. I have a form that is backed with a CompoundPropertyModel but the ObjectAutoCompleteField is not filling a property in the form's model. I call builder.build("someField") without providing a model since I have the CompoundPropertyModel in the form. Is there something else I need to do?

    Thanks in advance!!
- id: 3484
  author: Steve Hiller
  author_email: shetc@bellsouth.net
  author_url: ''
  date: '2010-05-12 04:46:43 +0000'
  date_gmt: '2010-05-12 11:46:43 +0000'
  content: |-
    I realize I may have big misunderstanding here. Does ObjectAutoCompleteField  return an object (such as Person) when a selection is made? Or is it just the selected object's ID?

    Thanks
- id: 3485
  author: Steve Hiller
  author_email: shetc@bellsouth.net
  author_url: ''
  date: '2010-05-14 10:45:30 +0000'
  date_gmt: '2010-05-14 17:45:30 +0000'
  content: |-
    ObjectAutoCompleteField component inside a ListView

    http://apache-wicket.1842946.n4.nabble.com/Wicket-Stuff-ObjectAutoCompleteField-component-inside-a-ListView-td2197427.html#a2197427
- id: 3486
  author: 'Confluence: Development'
  author_email: ''
  author_url: ''
  date: '2011-03-02 10:52:31 +0000'
  date_gmt: '2011-03-02 17:52:31 +0000'
  content: |-
    <strong>Wicket...</strong>

    Description Wicket is a Java web framework. It goes against some common features in other frameworks. Wicket has no XML configuration. Wicket has no code in its HTML. Each page/component is a combination of a Java class and an HTML page or fragment.......
- id: 3487
  author: Majid Mehmood
  author_email: mmehmood@init.de
  author_url: ''
  date: '2011-08-21 02:16:57 +0000'
  date_gmt: '2011-08-21 09:16:57 +0000'
  content: |-
    Hi,

    I have a requirement to show user images along with their names in the auto suggested list.

    How should I do it using Auto Complete Components. Any ideas ?

    Regards
    Majid
- id: 3686
  author: Sander Postma
  author_email: sanderpostma@yahoo.com
  author_url: ''
  date: '2012-01-30 11:29:22 +0000'
  date_gmt: '2012-01-30 18:29:22 +0000'
  content: "How do I preset a value? I have a an item in the PropertyModel I pass
    in, but when I load the page I only see the remove button. My choice is not loaded
    based on the id I have in the PropertyModel. I tried adding these properties to
    the builder:\r\n\t\t\tcustomerACBuilder.idType(Integer.class);\r\n\t\t\tcustomerACBuilder.idProperty(\"customerId\");\r\nbut
    with no luck."
- id: 3767
  author: Mike Chandler
  author_email: netscooptv@gmail.com
  author_url: ''
  date: '2013-02-13 17:41:00 +0000'
  date_gmt: '2013-02-14 00:41:00 +0000'
  content: It definitely took me a while to find this blog post, but now that I have
    I know it's the solution to my problems.  I'm a little surprised that there isn't
    more documentation out there on this.  It seems like a relatively common thing.
---
The Wicket Extensions package provides a neat component called the AutoCompleteTextField.

In a nutshell, this allows you to provide a TextField with a List of Strings and when you start typing, the ones that match the input show up. This is a great component, but consider this scenario:

<em>You have a list of contacts, one of which you want to send an email to. Each person has a unique id and a name. You want to search based on their name, but send the message to their id.</em>

<pre>
class Person {<br />
  long uuid;<br />
  String displayName;<br />
  String email;<br />
  ...<br />
}</pre>

This is not possible with the AutoCompleteTextField, as it uses a list of Strings and will submit whatever is entered in the text field.<br />
What you need is to be able to separate the key from the value.

Enter the ObjectAutoCompleteTextField. This is a class from <a href="http://wicketstuff.org/confluence/display/STUFFWEB/Home">WicketStuff</a> and allows you to provide a List of Objects and tell the AutoCompleteTextField what value should be the displayed value, and what values should be submitted.

Firstly, the markup is the same as a normal text field:<br />
<code><input type="text" wicket:id="toField" /></code>

Now lets build the parts we need:

<strong>1.</strong> The list of objects:

<pre>
final List contacts = dao.getContacts();<br />
</pre>

<strong>2.</strong> The AutoCompletionChoicesProvider:

<pre>
AutoCompletionChoicesProvider provider = new AutoCompletionChoicesProvider() {<br />
	private static final long serialVersionUID = 1L;

	public Iterator getChoices(String input) {<br />
		return logic.getMatchingContacts(contacts, input).iterator();<br />
	}<br />
};<br />
</pre>

This is called whenever the input changes and allows us to get a list of items from our master list that match the input. In this example we already have the list of contacts, so we just need to return an Iterator of the matches for that list. You could use something like this:

<pre>
public List getMatchingContacts(List contacts, String search) {<br />
	List subList = new ArrayList();

	for(Person p : connections){<br />
		if(StringUtils.startsWithIgnoreCase(p.getDisplayName(), search)) {<br />
			if(subList.size() == Constants.MAX_CONNECTIONS_PER_SEARCH) {<br />
				break;<br />
			}<br />
			subList.add(p);<br />
		}<br />
	}<br />
	return subList;<br />
}<br />
</pre>

<strong>3.</strong> The ObjectAutoCompleteRenderer:

<pre>
ObjectAutoCompleteRenderer renderer = new ObjectAutoCompleteRenderer(){<br />
	private static final long serialVersionUID = 1L;

	protected String getIdValue(Person p) {<br />
		return p.getUuid();<br />
	}<br />
	protected String getTextValue(Person p) {<br />
		return p.getDisplayName();<br />
	}<br />
};<br />
</pre>

This separates out the key from the value. From the Person class we want to use the uuid as the submitted value<br />
and the displayName as the one that shows up in the textfield and we search based on that.

<strong>4.</strong> Putting it all together is the ObjectAutoCompleteBuilder which takes the provider and sets the renderer.

<pre>
ObjectAutoCompleteBuilder builder = new ObjectAutoCompleteBuilder(provider);<br />
builder.autoCompleteRenderer(renderer);<br />
</pre>

<strong>5.</strong> Finally, we create the ObjectAutoCompleteField from the builder.

<pre>
ObjectAutoCompleteField autocompleteField = builder.build("toField", new PropertyModel(newMessage, "to"));<br />
final TextField toField = autocompleteField.getSearchTextField();<br />
toField.setRequired(true);<br />
form.add(autocompleteField);<br />
</pre>

We now have a textfield that allows us to search through a list of items but submit a different value associated with each of those items.<br />
<img src="http://www.mysticcoders.com/wp-content/uploads/2010/01/autocomplete.png" alt="autocomplete" width="150" height="176" class="alignnone size-full wp-image-161" />

<strong>Advanced tip:</strong><br />
Once we have found an item in the list, it is set into the TextField. If we want to clear the selection, by default the link is a textual [x]. We can override this to be whatever we want, different text, or even an Image.<br />
<img src="http://www.mysticcoders.com/wp-content/uploads/2010/01/autocomplete_search.png" alt="autocomplete_search" width="113" height="36" class="alignnone size-full wp-image-162" />

To use an icon like in the example above, add something like this to the builder:

<pre>
<code>builder.searchLinkImage(new ContextRelativeResource("images/cross.png"));</code><br />
</pre>

