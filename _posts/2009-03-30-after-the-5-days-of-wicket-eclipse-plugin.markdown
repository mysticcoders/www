---
layout: post
status: publish
published: true
title: 'After the 5 Days of Wicket: Eclipse Plugin'
author:
  display_name: Craig Tataryn
  login: Craig Tataryn
  email: ctataryn@mysticcoders.com
  url: ''
author_login: Craig Tataryn
author_email: ctataryn@mysticcoders.com
excerpt: "Don't get me wrong, <a href=\"http:&#47;&#47;www.mysticpaste.com&#47;\">Mystic
  Paste<&#47;a> is great!  However if I'm on ##wicket and someone asks a question
  about some code, and I know I've written that code, I want to be the first to respond.
  \ I don't want some n00b making me look like a n00b by responding first :)  \r\n\r\nSo
  instead of:\r\n<ol style=\"list-style-type:lower-alpha;\">\r\n\t<li>copying code
  to the clipboard<&#47;li>\r\n        <li>opening up my browser<&#47;li>\r\n\t<li>navigating
  to Mystic Paste<&#47;li>\r\n\t<li>pasting my code<&#47;li>\r\n\t<li>selecting the
  syntax highlighting language<&#47;li>\r\n\t<li>clicking submit<&#47;li>\r\n\t<li>copying
  the url for the pasted code to my clipboard<&#47;li>\r\n\t<li>pasting that to irc<&#47;li>\r\n\t<li>bang
  my head against the wall cause someone else beat me to it...<&#47;li>\r\n<&#47;ol>\r\n\r\nI
  can instead:\r\n<ol style=\"list-style-type:lower-alpha;\">\r\n\t<li>right click
  on the text I have selected in my editor and choose \"Add to Mystic Paste\"<&#47;li>\r\n\t<li>paste
  url to irc<&#47;li>\r\n<&#47;ol>\r\n\r\nThat's what  the plugin does, it will take
  that text, figure out which type of editor it resides in and use that information
  to determine the syntax, post the code to Mystic Paste and copy the url for the
  code to the clipboard.  Boom, now steps a) through i) become steps a) to b) .\r\n"
wordpress_id: 572
wordpress_url: http://www.mysticcoders.com/?p=572
date: '2009-03-30 07:00:27 +0000'
date_gmt: '2009-03-30 14:00:27 +0000'
categories:
- Java
tags:
- Apache Wicket
- eclipse
- plugin
comments:
- id: 399
  author: Jonathan Locke
  author_email: jonathan.locke@gmail.com
  author_url: ''
  date: '2009-04-03 22:34:46 +0000'
  date_gmt: '2009-04-04 05:34:46 +0000'
  content: cool!
- id: 3732
  author: Rookmal
  author_email: secretariat@mvro.sk
  author_url: http://www.facebook.com/profile.php?id=100003405431902
  date: '2012-02-11 11:03:47 +0000'
  date_gmt: '2012-02-11 18:03:47 +0000'
  content: Thanks for sivang me from having to purchase samurai swords myself.  I
    only wasted two hours &#8230; it could have been much worse.
---
<p>Don't get me wrong, <a href="http:&#47;&#47;www.mysticpaste.com&#47;">Mystic Paste<&#47;a> is great!  However if I'm on ##wicket and someone asks a question about some code, and I know I've written that code, I want to be the first to respond.  I don't want some n00b making me look like a n00b by responding first :)  </p>
<p>So instead of:</p>
<ol style="list-style-type:lower-alpha;">
<li>copying code to the clipboard<&#47;li>
<li>opening up my browser<&#47;li>
<li>navigating to Mystic Paste<&#47;li>
<li>pasting my code<&#47;li>
<li>selecting the syntax highlighting language<&#47;li>
<li>clicking submit<&#47;li>
<li>copying the url for the pasted code to my clipboard<&#47;li>
<li>pasting that to irc<&#47;li>
<li>bang my head against the wall cause someone else beat me to it...<&#47;li><br />
<&#47;ol></p>
<p>I can instead:</p>
<ol style="list-style-type:lower-alpha;">
<li>right click on the text I have selected in my editor and choose "Add to Mystic Paste"<&#47;li>
<li>paste url to irc<&#47;li><br />
<&#47;ol></p>
<p>That's what  the plugin does, it will take that text, figure out which type of editor it resides in and use that information to determine the syntax, post the code to Mystic Paste and copy the url for the code to the clipboard.  Boom, now steps a) through i) become steps a) to b) .<br />
<a id="more"></a><a id="more-572"></a></p>
<h2>You are simply here for the Plugin<&#47;h2><br />
If you don't actually care to know how the plugin was written, but want to start using it, you may download it from <a href="http:&#47;&#47;www.mysticpaste.com&#47;plugin">http:&#47;&#47;www.mysticpaste.com&#47;plugin<&#47;a>  the directions are there to show you how to get it to work with Eclipse.</p>
<h2>Setting up the project<&#47;h2><br />
Ok, for the two of you who stayed to learn, here's how the Mystic Paste Eclipse plugin was created.  Firstly, launch Eclipse and choose <strong>File->New->Project<&#47;strong> and choose "<strong>Plug-in Project<&#47;strong>".</p>
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;eclipse1.png" alt="Eclipse Plug-in Project" title="Eclipse Plug-in Project" width="530" height="544" class="aligncenter size-full wp-image-577" &#47;></p>
<p>This will guide you through a series of dialogs, I'll only go over the ones which are meaningful.  We named our plugin project MysticPasteEclipseProject and we gave it the plugin ID of com.mysticcoders.mysticpaste.  The ID of the plugin is important to Eclipse because when your plugin is loaded, it's the ID which uniquely identifies it amongst the thousands of other plugins which comprise the Eclipse platform.</p>
<p>The plug-in project wizard also lets you pick a template to start a new project from.  Our plugin is going to be one that extends the "Popup Menu" feature of Eclipse, this is any feature which shows a context menu.  The project template we choose is not <em>exactly<&#47;em> what we want, but it will be close enough so for now, choose the project template for "Plug-in with popup menu" and proceed.</p>
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;eclipse2.png" alt="Eclipse Popup Menu Template" title="Eclipse Popup Menu Template" width="584" height="760" class="aligncenter size-full wp-image-579" &#47;></p>
<p>Next the project wizard will ask us some questions about the "Action" for our plugin.  The Action, in Eclipses-speak , is the class which houses the actual code that will be executed when the user clicks on your menu item.</p>
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;eclipse3.png" alt="Eclipse Action Setup" title="Eclipse Action Setup" width="584" height="760" class="aligncenter size-full wp-image-582" &#47;></p>
<p>Click the Finish button and let Eclipse build the skeleton project for you.</p>
<h2>Plugin.xml<&#47;h2><br />
plugin.xml is the file which Eclipse itself will read to determine what exactly your plugin does.  Is it a new editor?  Is it a toolbar?  That's determined by the <em>extension point<&#47;em> you list in this file.  For context menus, the extension point is <code>org.eclipse.ui.popupMenus<&#47;code> and the plug-in project wizard conveniently set this for us.</p>
<p>However, remember above I was mentioning that the project template we picked was not "exactly what we want"?  The template Eclipse uses will assume that the context menu should be applicable to <em>resource types<&#47;em>, typically these are the nodes you see in your navigation window on the left hand side of the screen when you are browsing through your project files.  Instead, we want to extend the context menu which shows up when you right click inside an editor.</p>
<p>So, instead of our plugin.xml file looking like this:</p>
<pre lang="xml" colla="+">
   <extension<br />
         point="org.eclipse.ui.popupMenus"><br />
      <objectContribution<br />
            objectClass="#CompilationUnitEditorContext"<br />
            id="com.mysticcoders.mysticpaste.contribution1"></p>
<menu<br />
               label="group.add"<br />
               path="additions"<br />
               id="com.mysticcoders.mysticpaste.menu1"><br />
            <separator<br />
                  name="group1"><br />
            <&#47;separator><br />
         <&#47;menu><br />
         <action<br />
               label="Add to Mystic Paste"<br />
               class="com.mysticcoders.mysticpaste.popup.actions.MysticPasteAction"<br />
               menubarPath="a.menu1&#47;group1"<br />
               enablesFor="1"<br />
               id="com.mysticcoders.mysticpaste.newAction"><br />
         <&#47;action><br />
      <&#47;objectContribution><br />
   <&#47;extension><br />
<&#47;pre></p>
<p>We want to instead change the "objectContribution" tag to a "viewerContribution" tag and all together remove the "menu" tag like so:</p>
<pre lang="xml" colla="+">
   <extension<br />
         point="org.eclipse.ui.popupMenus"><br />
		<viewerContribution<br />
			targetID="#CompilationUnitEditorContext"<br />
			id="com.mysticcoders.mysticpaste.actions.compilationuniteditor"><br />
			<action<br />
				label="%Add_to_MysticPaste.name"<br />
				icon="$nl$&#47;icons&#47;mystic16.png"<br />
				class="com.mysticcoders.mysticpaste.popup.actions.MysticPasteAction"<br />
				menubarPath="group.add"<br />
				id="com.mysticcoders.mysticpaste.popup.actions.MysticPasteAction.JAVA5" &#47;><br />
		<&#47;viewerContribution><br />
   <&#47;extension><br />
<&#47;pre></p>
<p>Now what I am showing you above is the actual finished product, and if you are not familiar with Eclipse plugins it probably doesn't amount to a whole lot.  Here's a dissection of the elements:</p>
<pre lang="xml" colla="+">
   <extension<br />
         point="org.eclipse.ui.popupMenus"><br />
<&#47;pre></p>
<p>Extension points are places in Eclipse which can be "Extended".  Basically, they are just the IDs of plugins in Eclipse that allow themselves to be extended.  The ID for context menus is "org.eclipse.ui.popupMenus".</p>
<pre lang="xml" colla="+">
<viewerContribution<br />
	targetID="#CompilationUnitEditorContext"<br />
	id="com.mysticcoders.mysticpaste.actions.compilationuniteditor"><br />
<&#47;pre></p>
<p>Viewer contributions (as opposed to object contributions) determine which type of "thing" in Eclipse will be contributed to.  In our case, we want a viewer contribution because Editors are a type of viewer.  The <strong>targetID<&#47;strong> might seem a little weird, but it's actually a predefined constant used by Eclipse to indicate "any editor that has code which can be compiled".  To us, this means a "Java editor", so our contribution to the popup menu extension is for Java Editors.  The <strong>id<&#47;strong>, is a unique id which our contribution is known to Eclipse by, it doesn't have to correspond to a package in your project or anything, it just needs to be unique across plugins.</p>
<pre lang="xml" colla="+">
<action<br />
	label="%Add_to_MysticPaste.name"<br />
	icon="$nl$&#47;icons&#47;mystic16.png"<br />
	class="com.mysticcoders.mysticpaste.popup.actions.MysticPasteAction"<br />
	menubarPath="group.add"<br />
	id="com.mysticcoders.mysticpaste.popup.actions.MysticPasteAction.JAVA5" &#47;><br />
<&#47;pre></p>
<p>An "Action" is going to be the class which is loaded by Eclipse when someone clicks on the menu item we have added.  You can see that the class "executed" is determined by the fully qualified class you enter as the value for the class attribute.  It must extend <code>IEditorActionDelegate<&#47;code>, this is not the same class that the plug-in project wizard setup for you, so you'll have to change it.</p>
<p>menubarPath is a pre-canned designation setup for an area of the context menu which holds the "Add to Snippets" menu item, I figured Add to Mystic Paste did a very similar job, so decided to have the menu item live there.</p>
<p>You'll notice weird things like %Add_to_MysticPaste.name and $nl$&#47;icons&#47;mystic16.png.  You'll find all sorts of unconventional syntax like that in the Eclipse platform and usually you have to dig deep to find out what exactly it all means.  Well, in the case of %Add_to_MysticPaste.name, this tells Eclipse to look in a <code>plugin.properties<&#47;code> file bundled with your plugin and insert the value for the key Add_to_MysticPaste.name.  For $nl$&#47;icons&#47;mystic16.png this tells Eclipse to replace the $nl$ token with the path to your plugin's base directory when loaded into Eclipse.  Actually, it points to the "internationalized" base path, but don't worry about that for now, Mystic Paste's icon isn't language dependent.  <strong>Important<&#47;strong>: in order to use values from plugin.properties in your plugin.xml file you must add the following line to <code>META-INF&#47;MANIFEST.INF<&#47;code>: Bundle-Localization: plugin</p>
<p>Finally we have the id for the action, again just make something unique.  In our case, I added .JAVA5 to the end of my id so that when the user clicks it, I know what language syntax to use when pasting the selected code to Mystic Paste by querying the action's ID at runtime.  What isn't depicted above is the fact that the actual project has several viewerContribution sections for different types of editors in Eclipse and each action has a .<lang type> appended to it's ID to help me determine what language the editor supports.</p>
<h2>The Code<&#47;h2><br />
The code for Mystic Paste is really quite simple.  We take the selected text in the editor and do an HTTP POST to a Servlet which is setup in the Mystic Paste webapplication.  The Servlet accepts the content of the paste as well as the language type.</p>
<p>The only thing special which needs to be done, is to add the dependencies for <a href="http:&#47;&#47;hc.apache.org&#47;httpcomponents-client&#47;index.html">Commons Http Client<&#47;a>.  This is done by using the plugin.xml editor and adding the dependency jars to your project as follows:</p>
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;eclipse4.png" alt="Build Depenencies" title="Build Depenencies" width="713" height="542" class="aligncenter size-full wp-image-593" &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;eclipse5.png" alt="Build Dependencies" title="Build Dependencies" width="711" height="541" class="aligncenter size-full wp-image-594" &#47;></p>
<p>The actual code itself is pretty straight forward especially since the author actually documented the code!</p>
<pre lang="java" colla="-">
package com.mysticcoders.mysticpaste.popup.actions;</p>
<p>&#47;**<br />
 * Implements an Action Delegate which responds to a context menu item click<br&#47;><br />
 * <br&#47;><br />
 * The delegate posts the selected text to the Mystic Paste webapplication, then places the url for the page<br />
 * where the user can view their paste onto the clipboard.  A "Balloon Tip" is shown after a successful paste.<br />
 *<br />
 * @author Craig Tataryn<br />
 *<br />
 *&#47;<br />
public class MysticPasteAction implements IEditorActionDelegate {</p>
<p>	private String selectionText = null;<br />
	private int selectionStart = 0;<br />
	private Shell shell;<br />
	ResourceBundle bundle = null;</p>
<p>	public MysticPasteAction() {<br />
		super();<br />
		bundle = ResourceBundle.getBundle("plugin");<br />
	}</p>
<p>	public void setActiveEditor(IAction action, IEditorPart editorPart) {<br />
		shell = editorPart.getSite().getShell();<br />
	}</p>
<p>	&#47;**<br />
	 * Code which executes when the menu item is clicked.  Code selected is pasted to the Mystic Paste<br />
	 * web application, the view URL is put on the clipboard and an informational message is shown in a<br />
	 * balloon tip.<br />
	 *&#47;<br />
	public void run(IAction action) {<br />
		System.out.println("run called");<br />
		if (this.selectionText != null && !this.selectionText.trim().equals("")) {<br />
			&#47;&#47;the action is setup in plugin.xml with an ID that ends in .<lang type><br />
			String type = action.getId().substring(action.getId().lastIndexOf('.') + 1);<br />
			String url = submitPaste(this.selectionText, type);<br />
			Clipboard cb = new Clipboard(this.shell.getDisplay());<br />
			cb.setContents(new Object[] {url}, new Transfer[] {TextTransfer.getInstance()});<br />
			cb.dispose();<br />
			showUrlBox();<br />
		}<br />
	}</p>
<p>	&#47;**<br />
	 * Decides whether or not to enable the mystic paste menu item in the context menu<br />
	 * depending on whether there is selected text.  Unfortunately, because of how eclipse<br />
	 * lazy loads things, this method isn't fired until the menu item is clicked for the<br />
	 * first time, so you can never grey out the item before it is clicked.<br />
	 *&#47;<br />
	public void selectionChanged(IAction action, ISelection selection) {<br />
		System.out.println("selectionChanged called");<br />
		if (ITextSelection.class.isAssignableFrom(selection.getClass())) {<br />
			ITextSelection txtSelection = (ITextSelection) selection;<br />
			if (txtSelection == null || txtSelection.isEmpty() || txtSelection.getText().trim().equals("")) {<br />
				action.setEnabled(false);<br />
				this.selectionText = null;<br />
				this.selectionStart = 0;<br />
			} else {<br />
				action.setEnabled(true);<br />
				this.selectionText = txtSelection.getText();<br />
				this.selectionStart = txtSelection.getStartLine();<br />
			}</p>
<p>		}</p>
<p>	}</p>
<p>	&#47;**<br />
	 * Submits the selected text to the Mystic Paste web application.  Web application<br />
	 * urls and other information are stored in the plugin.properties file.<br&#47;><br />
	 * <br&#47;><br />
	 * The language type for the selected text is determined by the action's id as setup<br />
	 * in plugin.xml.  For instance, the action for the Java editor will have an id that ends<br />
	 * with .JAVA.  The xml editor's action ID ends in .XML, and so on.  The default is TEXT.<br />
	 * @param content<br />
	 * @param type<br />
	 * @return<br />
	 *&#47;<br />
	private String submitPaste(String content, String type) {<br />
		String url = bundle.getString("mysticpaste.url");<br />
		String newPasteContext = bundle.getString("mysticpaste.new");<br />
		String contentParam = bundle.getString("mysticpaste.content.param");<br />
		String langParam = bundle.getString("mysticpaste.language.param");<br />
		String retString = null;</p>
<p>		HttpClient httpClient = new DefaultHttpClient();<br />
		HttpPost post = new HttpPost(url + newPasteContext);<br />
		List <NameValuePair> nvps = new ArrayList <NameValuePair>();<br />
        nvps.add(new BasicNameValuePair(langParam, type));<br />
        nvps.add(new BasicNameValuePair(contentParam, content));</p>
<p>        try {<br />
	        post.setEntity(new UrlEncodedFormEntity(nvps, HTTP.UTF_8));<br />
	        HttpResponse response = httpClient.execute(post);<br />
			HttpEntity entity = response.getEntity();<br />
			retString = EntityUtils.toString(entity, HTTP.UTF_8);<br />
			retString = url + bundle.getString("mysticpaste.view") + retString;<br />
			System.out.println(retString);<br />
		} catch (ClientProtocolException e) {<br />
			e.printStackTrace();<br />
			MessageDialog.openInformation(<br />
					shell,<br />
					"MysticPaste Plug-in",<br />
					"Sorry, we couldn't contact Mystic Paste");<br />
		} catch (IOException e) {<br />
			e.printStackTrace();<br />
			MessageDialog.openInformation(<br />
					shell,<br />
					"MysticPaste Plug-in",<br />
					"Sorry, we couldn't contact Mystic Paste");<br />
		}</p>
<p>		return retString;<br />
	}</p>
<p>	&#47;**<br />
	 * Shows an informational "balloon tip" at the bottom of the screen<br />
	 *&#47;<br />
	private void showUrlBox() {<br />
		Rectangle bounds = shell.getDisplay().getPrimaryMonitor().getClientArea();<br />
		ToolTip tip = new ToolTip(shell, SWT.BALLOON | SWT.ICON_INFORMATION);<br />
		tip.setAutoHide(true);<br />
		tip.setText("Your selection has been copied to to Mystic Paste");<br />
		tip.setMessage("The Url is on your clipboard");<br />
		tip.setLocation(bounds.width, bounds.height);<br />
		tip.setVisible(true);</p>
<p>	}<br />
}</p>
<p><&#47;pre></p>
<h2>Building a Plugin Jar<&#47;h2><br />
Building the plugin jar is pretty simple.  Just go File->Export->Deployable plug-ins and fragments and follow the wizard</p>
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;03&#47;eclipse6.png" alt="Build Jar" title="Build Jar" width="708" height="630" class="aligncenter size-full wp-image-598" &#47;></p>
<h2>Installing the Jar<&#47;h2><br />
Locate where on your file system Eclipse is installed.  Under this directory there should be a "dropins" folder, this is where the jar you built (or downloaded) for the plugin should reside.  Restart Eclipse, and voila!.  <strong>Note<&#47;strong>: on a Mac, you'll have to right click on Eclipse.app and choose "Show Package Contents", the dropins folder will then be accessible through the Finder window which pops up.</p>
<h2>Conclusion<&#47;h2><br />
Hopefully this gives you a good idea of how the Mystic Paste Eclipse plugin was built.  It probably took more time explaining than it did actually coding the darn thing.  That being said, programming for Eclipse is not for the faint of heart.  I pretty much "code by debugger" when I have to create Eclipse plugins, a lot of the API is shrouded by interfaces with one method on them, you really never know what the real object is you are dealing with until you inspect it at runtime.</p>
