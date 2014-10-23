---
layout: post
status: publish
published: true
title: 'After the 5 Days of Wicket: IDEA Plugin'
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: <p>From the beginning of building out <a href="http:&#47;&#47;www.mysticpaste.com"
  target="_blank">Mystic Paste<&#47;a>, the vision was to have multiple interfaces
  to allow ubiquitous use of the pastebin. With the variety of plugins we've got out
  now including Eclipse, IDEA, VIM, and NetBeans, that vision is definitely here.
  If you reached this link looking for the plugin, look no further, the plugin page
  has <a href="http:&#47;&#47;www.mysticpaste.com&#47;plugin" target="_blank">downloads
  for multiple IDE platforms<&#47;a>.<&#47;p>
wordpress_id: 782
wordpress_url: http://www.mysticcoders.com/blog/2009/04/20/after-the-5-days-of-wicket-idea-plugin/
date: '2009-04-21 09:00:28 +0000'
date_gmt: '2009-04-21 16:00:28 +0000'
categories:
- Java
tags:
- Java
- Development
comments: []
---
<p>From the beginning of building out <a href="http:&#47;&#47;www.mysticpaste.com" target="_blank">Mystic Paste<&#47;a>, the vision was to have multiple interfaces to allow ubiquitous use of the pastebin. With the variety of plugins we've got out now including Eclipse, IDEA, VIM, and NetBeans, that vision is definitely here. If you reached this link looking for the plugin, look no further, the plugin page has <a href="http:&#47;&#47;www.mysticpaste.com&#47;plugin" target="_blank">downloads for multiple IDE platforms<&#47;a>.<&#47;p><a id="more"></a><a id="more-782"></a>
<p>For the IDEA plugin we'll be showing how it was developed, so we can remove the 8+ step process of pasting into a simple 3-step process ... select, send, paste.<&#47;p></p>
<h2>Setting up the project<&#47;h2></p>
<p>With IntelliJ IDEA 8.x getting a new plugin project setup couldn't be easier! Launch IDEA and choose File -> New Project... -> Create project from scratch<&#47;p></p>
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;04&#47;picture-2.png" width="480" height="395" alt="Picture 2.png" &#47;><br &#47;><&#47;p></p>
<p>Just as with any project, give it a good name, and for type, select "Plugin Module". Go through the normal project setup details and click Finish when done.<&#47;p></p>
<h4>Plugin configuration<&#47;h4></p>
<p>There is a simple plugin.xml file that governs how IDEA will interact with your masterpiece. The use case for this simple plugin is to capture text selected in an editor and provide an action hook for the right-click menu. I've included the entire plugin.xml file for the mystic paste idea plugin<&#47;p></p>
<pre lang="XML" colla="+">
<p><idea-plugin version="2"><br />
    <name>MysticPastePlugin<&#47;name><br />
    <description><br />
        <![CDATA[<br />
        This plugin takes a selection from the IDEA editor, and posts it to http:&#47;&#47;mysticpaste.com.  It then provides the URL in the clipboard<br />
      ]]><br />
    <&#47;description><br />
    <version>0.2.1<&#47;version><br />
    <vendor url="http:&#47;&#47;www.mysticcoders.com">Mystic Coders, LLC<&#47;vendor><br />
    <idea-version since-build="8000"&#47;></p>
<p>    <change-notes><br />
        <![CDATA[</p>
<ul>
<li> Added the notification on the bottom right alerting the user that the paste action was successful<&#47;li><br />
            <&#47;ul><br />
        <&#47;p><br />
        ]]><br />
    <&#47;change-notes></p>
<project-components>
        <component><br />
            <implementation-class>com.mysticcoders.mysticpaste.plugin.MysticPasteIndicationComponent<br />
            <&#47;implementation-class><br />
        <&#47;component><br />
    <&#47;project-components></p>
<p>    <actions><br />
        <action id="com.mysticcoders.mysticpaste.plugin.PastebinAction"<br />
                class="com.mysticcoders.mysticpaste.plugin.PastebinAction" text="Add to Mystic Paste..."<br />
                description="Sends the selection to MysticPaste.com"><br />
            <add-to-group group-id="EditorPopupMenu" anchor="last"&#47;><br />
        <&#47;action><br />
    <&#47;actions></p>
<p><&#47;idea-plugin></p>
<p><&#47;pre></p>
<p>The top portion of this file is all identification information for the plugin, version info, vendor, which idea minimum IDEA version it will work with, changelog details. The next 3 elements define:<&#47;p></p>
<ul>
<li>Application Components<&#47;li>
<li>Project Components<&#47;li>
<li>Actions<&#47;li><br />
<&#47;ul></p>
<p>For a lot more in-depth information on plugin development, the <a href="http:&#47;&#47;www.jetbrains.net&#47;confluence&#47;display&#47;IDEADEV&#47;Plugin+Development+FAQ" title="Plugin Development FAQ" target="_blank">Plugin Development FAQ<&#47;a> is very useful.<br &#47;><&#47;p></p>
<h4>Application Component<&#47;h4></p>
<p>A plugin has many different scopes it can be contained in, and if you're plugin is not project specific, ApplicationComponent scope is a great place to define it. These components are only loaded once when the IDE starts up.<&#47;p></p>
<h4>Project Component<&#47;h4></p>
<p>This component is scoped to be project-specific, so IDEA will make an instance of this plugin available for each open project.<&#47;p></p>
<h4>Actions<&#47;h4></p>
<p><em>AnAction<&#47;em> is used for any code that needs to hook into IDEA's menus and&#47;or toolbars. This is precisely where we'll hook into the right-click menu available to use from the editor, and act upon selected code. In here we define the following:<&#47;p></p>
<ul>
<li>Unique id for our action<&#47;li>
<li>Implementation class<&#47;li>
<li>Text to show in the popup menu<&#47;li>
<li>Description which will show in the status bar<&#47;li>
<li>Element add-to-group which defines what popup menu to attach to, and where to anchor it in the list<&#47;li><br />
<&#47;ul></p>
<p>Check out <a href="http:&#47;&#47;www.jetbrains.com&#47;idea&#47;plugins&#47;plugin_structure.html" title="IntelliJ IDEA Plugin Structure" target="_blank">IDEA plugin structure<&#47;a> for much more info.<&#47;p></p>
<h2>Implementation<&#47;h2></p>
<p>Our plugin is really simple, we need to take the current editor selection, open an HTTP connection with MysticPaste.com's plugin servlet, POST the selection text and place the URL in the clipboard. Let's start with getting the editor selection!<&#47;p></p>
<pre lang="JAVA", colla="+">
        DataContext context = event.getDataContext();<br />
        Editor editor = DataKeys.EDITOR.getData(context);</p>
<p>        String selectedText = null;<br />
        SelectionModel selection = null;<br />
        if (editor != null) {<br />
            selection = editor.getSelectionModel();<br />
            if (selection.hasSelection()) {<br />
                selectedText = selection.getSelectedText();<br />
            }<br />
        }<br />
<&#47;pre></p>
<p>As you can see from the code snippet, we grab an instance of the Editor using the DataContext which can be retrieved from the AnActionEvent instance passed to every action. From there we get the Editor's SelectionModel, find out if there is indeed a selection, and fill selectedText with the contents.<&#47;p></p>
<pre lang="JAVA" colla="+">
    Document doc = editor.getDocument();<br />
    VirtualFile virtualFile = FileDocumentManager.getInstance().getFile(doc);<br />
    String extension = null;<br />
    if (virtualFile.getName().lastIndexOf(".") != -1) {<br />
        extension = virtualFile.getName().substring(virtualFile.getName().lastIndexOf(".") + 1, virtualFile.getName().length());<br />
    }<br />
<&#47;pre></p>
<p>Next up, we want the file extension of the document we've grabbed our selected text. We get an instance of VirtualFile through the Document, substring it to grab what should be the extension, and pass it to the sendPaste method along with the selectedText.<&#47;p></p>
<pre lang="java" colla="+">
    private String sendPaste(String text, String extension) {</p>
<p>        String pasteNumber = null;</p>
<p>        try {<br />
            &#47;&#47; Construct data<br />
            String data = URLEncoder.encode("content", "UTF-8") + "=" + URLEncoder.encode(text, "UTF-8");</p>
<p>            if(extension != null) {<br />
                data += "&" + URLEncoder.encode("fileExt", "UTF-8") + "=" + URLEncoder.encode(extension, "UTF-8");<br />
            }</p>
<p>            &#47;&#47; Send data<br />
            URL url = new URL("http:&#47;&#47;www.mysticpaste.com&#47;servlet&#47;plugin");<br />
            URLConnection conn = url.openConnection();<br />
            conn.setDoOutput(true);<br />
            OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());<br />
            wr.write(data);<br />
            wr.flush();</p>
<p>            &#47;&#47; Get the response<br />
            BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));<br />
            String line;<br />
            while ((line = rd.readLine()) != null) {<br />
                pasteNumber = line;<br />
            }</p>
<p>            wr.close();<br />
            rd.close();<br />
        } catch (Exception e) {<br />
            e.printStackTrace();<br />
        }</p>
<p>        return (pasteNumber != null ? "http:&#47;&#47;www.mysticpaste.com&#47;view&#47;" + pasteNumber : null);<br />
    }<br />
<&#47;pre></p>
<p>If you're looking to integrate another platform with MysticPaste.com, the code above should provide you all you need. We very simply encode the data for HTTP POST, and use the standard java.net classes to achieve our pasting. The result of this class is a URL in which this paste can be found.<&#47;p></p>
<pre lang="java" colla="+">
    CopyPasteManager.getInstance().setContents(new StringSelection(text));<br />
<&#47;pre></p>
<p>After a quick null check, we use IDEA's supplied CopyPasteManager to set the contents to our paste URL.<&#47;p></p>
<p>You can test your app by running it like you would anything else, IDEA provides a target in the Run&#47;Debug configurations to achieve this.<br &#47;><&#47;p></p>
<p><br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;04&#47;picture-3.png" width="218" height="417" alt="Picture 3.png" &#47;><&#47;p></p>
<p>IDEA will launch a completely new version of the IDE in which to test your plugin, I would heartily suggest that you create a simple project that can exercise whatever functionality is intended to be used with your plugin.<&#47;p></p>
<h2>Deployment<&#47;h2></p>
<p><br &#47;><br />
<img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2009&#47;04&#47;picture-4.png" width="444" height="232" alt="Picture 4.png" &#47;><&#47;p></p>
<p>If you're happy with your debugging efforts, and the functionality works for your needs, under the Build menu select "Prepare Plugin Module ..." and it will build a plugin jar that you can drop into IDEA's plugin directory<&#47;p></p>
<ul>
<li>Windows: C:Documents and Settings<username>.IntelliJIdea80configplugins<&#47;li>
<li>OS X: $HOME&#47;Library&#47;Application Support&#47;IntelliJIDEA80<&#47;li>
<li>Linux&#47;Unix: $HOME&#47;.IntelliJIdea80&#47;config&#47;plugins<&#47;li><br />
<&#47;ul></p>
<p>That's it. Overall the process isn't too bad once you find all the documentation, grab a few code samples, possibly reverse engineer a few to see how they did it. Have fun, and if you have any questions, or want us to develop a custom IDEA plugin for your organization, <a href="http:&#47;&#47;www.mysticcoders.com&#47;contact&#47;" title="Mystic Contact Us" target="_top">contact us<&#47;a>.<&#47;p></p>
