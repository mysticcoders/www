---
layout: post
status: publish
published: true
title: Wicket Ajax Confirmation Modal window
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: |
  <em>(Editor&acirc;&euro;&trade;s note: Tomasz Dziurko contributed this column from <a href="http:&#47;&#47;codehardgopro.blogspot.com&#47;2010&#47;02&#47;wicket-ajax-modal-are-you-sure-window.html" target="_blank">Code Hard Go Pro<&#47;a>.)<&#47;em>

  While developing web application with Wicket I sometimes need to check whether the user really, really does want to do something, for example to delete an entity from the database. The first and easiest choice that comes to my mind is to use JavaScript window.
wordpress_id: 1725
wordpress_url: http://wicketbyexample.com/?p=207
date: '2010-02-10 11:24:56 +0000'
date_gmt: '2010-02-10 18:24:56 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3504
  author: Fuad Efendi
  author_email: fuad@efendi.ca
  author_url: http://www.tokenizer.ca
  date: '2010-07-30 10:20:43 +0000'
  date_gmt: '2010-07-30 17:20:43 +0000'
  content: |-
    I still DO prefer Client-Side processing (without network client-server roundtrips!):
    if(!confirm('Do you really want to perform this action?')) return false;"));

    It is faster than AJAX call.
- id: 3505
  author: Nowaker
  author_email: nowaker@geozone.pl
  author_url: http://www.nowaker.net/
  date: '2010-08-27 11:50:38 +0000'
  date_gmt: '2010-08-27 18:50:38 +0000'
  content: Faster but how ugly. Brrrrr.
- id: 3506
  author: Anurag
  author_email: anurag.tayal.iiit@gmail.com
  author_url: ''
  date: '2010-11-01 05:57:24 +0000'
  date_gmt: '2010-11-01 12:57:24 +0000'
  content: |-
    I need the values submitted with the form . Where do i get them from. for example . I need the selected value in dropdownchoice.

    Thanks
- id: 3507
  author: Anurag
  author_email: anurag.tayal.iiit@gmail.com
  author_url: ''
  date: '2010-11-02 01:55:41 +0000'
  date_gmt: '2010-11-02 08:55:41 +0000'
  content: |-
    I want the message to be include values submitted by my form . How can i do that . I am talking about message " Do you really want to ... " .. I want to replace it with " You have updated [variable] to [this variable] . I get the variables after i submit the form .

    Thanks.
- id: 3508
  author: Paolo
  author_email: dikeparker@yahoo.com
  author_url: ''
  date: '2011-02-02 02:25:36 +0000'
  date_gmt: '2011-02-02 09:25:36 +0000'
  content: thanks! pretty neat code. i'll try this.
- id: 3749
  author: prompt() in wicket components | PHP Developer Resource
  author_email: ''
  author_url: http://www.dkphp.com/questions-2/prompt-in-wicket-components.html
  date: '2012-05-23 19:24:29 +0000'
  date_gmt: '2012-05-24 02:24:29 +0000'
  content: "[...] try to find pattern how to return &#8216;prompt()&#8217; result
    in java like http:&#47;&#47;www.mysticcoders.com&#47;blog&#47;wicket-ajax-confirmation-modal-window&#47;
    (but in this case author using &#8216;confirm&#8217; instead of &#8216;prompt&#8217;
    and [...]"
---
<p><em>(Editor&acirc;&euro;&trade;s note: Tomasz Dziurko contributed this column from <a href="http:&#47;&#47;codehardgopro.blogspot.com&#47;2010&#47;02&#47;wicket-ajax-modal-are-you-sure-window.html" target="_blank">Code Hard Go Pro<&#47;a>.)<&#47;em></p>
<p>While developing web application with Wicket I sometimes need to check whether the user really, really does want to do something, for example to delete an entity from the database. The first and easiest choice that comes to my mind is to use JavaScript window.<br />
<a id="more"></a><a id="more-1725"></a><br />
So we have HomePage.html:</p>
<pre lang="html" colla="+">
<!DOCTYPE html<br />
    PUBLIC "-&#47;&#47;W3C&#47;&#47;DTD XHTML 1.0 Transitional&#47;&#47;EN"<br />
    "http:&#47;&#47;www.w3.org&#47;TR&#47;xhtml1&#47;DTD&#47;xhtml1-transitional.dtd"><br />
<html xmlns:wicket="http:&#47;&#47;wicket.apache.org&#47;dtds.data&#47;wicket-xhtml1.4-strict.dtd" ><br />
    <head><br />
        <title>Wicket Ajax 'Are you sure?' Modal Window<&#47;title><br />
    <&#47;head><br />
    <body></p>
<div align="center">
            <strong>Wicket Ajax 'Are you sure?' Modal Window<&#47;strong></p>
<form action="" wicket:id="formWithJavaScript">
                <input type="submit" wicket:id="buttonWithJavaScript" value="Action!"&#47;><br />
            <&#47;form><br />
        <&#47;div><br />
    <&#47;body><br />
<&#47;html><br />
<&#47;pre></p>
<p>and corresponding Java class:</p>
<pre lang="java" colla="+">
package pl.tdziurko.ajaxmodalwindowapp;</p>
<p>&#47;&#47; imports omitted</p>
<p>&#47;**<br />
 * Author: Tomasz Dziurko<br />
 *&#47;</p>
<p>public class HomePage extends WebPage {</p>
<p>    private static final long serialVersionUID = 1L;</p>
<p>    public HomePage(final PageParameters parameters) {</p>
<p>        Form formWithJavaScript = new Form("formWithJavaScript");</p>
<p>        Button buttonWithJavaScript = new Button("buttonWithJavaScript") {</p>
<p>            @Override<br />
            public void onSubmit() {<br />
                System.out.println("Doing my job");<br />
            }<br />
        };<br />
        buttonWithJavaScript.add(new SimpleAttributeModifier(<br />
                "onclick", "if(!confirm('Do you really want to perform this action?')) return false;"));</p>
<p>        formWithJavaScript.add(buttonWithJavaScript);<br />
        add(formWithJavaScript);</p>
<p>    }</p>
<p>}<br />
<&#47;pre></p>
<p>Finally, we can see how it looks:</p>
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2010&#47;02&#47;javaScriptWindow.PNG.png" alt="" title="javaScriptWindow.PNG" width="400" height="320" class="alignnone size-full wp-image-209" &#47;></p>
<p>It solves our problem but in the era of Web2.0, rounded corners and shiny looks it isn't enough. Why can't we use ajax modal window to ask user for confirmation? It would make our application look good and our css magician could make it look even better.</p>
<p>So let's try with creating reusable 'Are you sure?' ajax modal window with Wicket.</p>
<p>At the beginning we must prepare panel which will be displayed in our modal window. Let's name it YesNoPanel.</p>
<pre lang="html" colla="+">
<?xml version="1.0" encoding="UTF-8"?><br />
<!DOCTYPE html<br />
    PUBLIC "-&#47;&#47;W3C&#47;&#47;DTD XHTML 1.0 Transitional&#47;&#47;EN"<br />
    "http:&#47;&#47;www.w3.org&#47;TR&#47;xhtml1&#47;DTD&#47;xhtml1-transitional.dtd"><br />
<html xmlns:wicket><br />
    <head><br />
        <meta http-equiv="Content-Type" content="text&#47;html; charset=UTF-8"&#47;><br />
        <title><&#47;title><br />
    <&#47;head><br />
    <body><br />
        <wicket:panel></p>
<form wicket:id="yesNoForm" action="">
                <span wicket:id="message">Are you sure?<&#47;span></p>
<table style="width: 65%;" align="center">
<tr>
<td align="left">
                            <input type="submit" wicket:id="noButton" value="No" &#47;><br />
                        <&#47;td></p>
<td align="right">
                            <input type="submit" wicket:id="yesButton" value="Yes" &#47;><br />
                        <&#47;td><br />
                    <&#47;tr><br />
                <&#47;table><br />
            <&#47;form><br />
        <&#47;wicket:panel><br />
    <&#47;body><br />
<&#47;html><br />
<&#47;pre></p>
<p>and Java class:</p>
<pre lang="java" colla="+">
package pl.tdziurko.ajaxmodalwindowapp.areyousuremodal;</p>
<p>import org.apache.wicket.ajax.AjaxRequestTarget;<br />
import org.apache.wicket.ajax.markup.html.form.AjaxButton;<br />
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;<br />
import org.apache.wicket.markup.html.basic.MultiLineLabel;<br />
import org.apache.wicket.markup.html.form.Form;<br />
import org.apache.wicket.markup.html.panel.Panel;<br />
import pl.tdziurko.ajaxmodalwindowapp.areyousuremodal.AreYouSurePanel.ConfirmationAnswer;</p>
<p>public class YesNoPanel extends Panel {</p>
<p>    public YesNoPanel(String id, String message, final ModalWindow modalWindow, final ConfirmationAnswer answer) {<br />
        super(id);</p>
<p>        Form yesNoForm = new Form("yesNoForm");</p>
<p>        MultiLineLabel messageLabel = new MultiLineLabel("message", message);<br />
        yesNoForm.add(messageLabel);<br />
        modalWindow.setTitle("Please confirm");<br />
        modalWindow.setInitialHeight(200);<br />
        modalWindow.setInitialWidth(350);</p>
<p>        AjaxButton yesButton = new AjaxButton("yesButton", yesNoForm) {</p>
<p>            @Override<br />
            protected void onSubmit(AjaxRequestTarget target, Form form) {<br />
                if (target != null) {<br />
                    answer.setAnswer(true);<br />
                    modalWindow.close(target);<br />
                }<br />
            }<br />
        };</p>
<p>        AjaxButton noButton = new AjaxButton("noButton", yesNoForm) {</p>
<p>            @Override<br />
            protected void onSubmit(AjaxRequestTarget target, Form form) {<br />
                if (target != null) {<br />
                    answer.setAnswer(false);<br />
                    modalWindow.close(target);<br />
                }<br />
            }<br />
        };</p>
<p>        yesNoForm.add(yesButton);<br />
        yesNoForm.add(noButton);</p>
<p>        add(yesNoForm);<br />
    }</p>
<p>}<br />
<&#47;pre></p>
<p>Everything looks pretty straightforward. We pass to the constructor text which will be displayed as a confirmation question, references to ModalWindow object in which YesNoPanel is placed and to ConfirmationAnswer object.<br />
ConfirmationAnswer class will be created in the next paragraph and will be used to store information whether user pressed 'Yes' or 'No' button in our panel.</p>
<p>Now it's time to prepare wrapping form to our YesNoPanel. We could simply achieve it by creating panel with form and one button in it. In our example it will be AreYouSurePanel class:</p>
<pre lang="html" colla="+">
<?xml version="1.0" encoding="UTF-8"?><br />
<!DOCTYPE html<br />
    PUBLIC "-&#47;&#47;W3C&#47;&#47;DTD XHTML 1.0 Transitional&#47;&#47;EN"<br />
    "http:&#47;&#47;www.w3.org&#47;TR&#47;xhtml1&#47;DTD&#47;xhtml1-transitional.dtd"><br />
<html xmlns:wicket><br />
    <head><br />
        <meta http-equiv="Content-Type" content="text&#47;html; charset=UTF-8"&#47;><br />
        <title><&#47;title><br />
    <&#47;head><br />
    <body><br />
        <wicket:panel ></p>
<form wicket:id="confirmForm" action="" style="display: inline;">
                <input type="submit" wicket:id="confirmButton" value="Default name" &#47;><br />
                <span style="display: none;" wicket:id="modal"><&#47;span><br />
            <&#47;form><br />
        <&#47;wicket:panel><br />
    <&#47;body><br />
<&#47;html><br />
<&#47;pre></p>
<p>and in Java:</p>
<pre lang="java" colla="+">
package pl.tdziurko.ajaxmodalwindowapp.areyousuremodal;</p>
<p>import java.io.Serializable;<br />
import java.util.Map;<br />
import org.apache.wicket.ajax.AjaxRequestTarget;<br />
import org.apache.wicket.ajax.markup.html.form.AjaxButton;<br />
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;<br />
import org.apache.wicket.markup.html.form.Form;<br />
import org.apache.wicket.markup.html.panel.Panel;<br />
import org.apache.wicket.model.Model;</p>
<p>public abstract class AreYouSurePanel extends Panel {</p>
<p>    protected ModalWindow confirmModal;<br />
    protected ConfirmationAnswer answer;<br />
    protected Map<string,string> modifiersToApply;</p>
<p>    public AreYouSurePanel(String id, String buttonName, String modalMessageText) {<br />
        super(id);<br />
        answer = new ConfirmationAnswer(false);<br />
        addElements(id, buttonName, modalMessageText);<br />
    }</p>
<p>    protected void addElements(String id, String buttonName, String modalMessageText) {</p>
<p>        confirmModal = createConfirmModal(id, modalMessageText);</p>
<p>        Form form = new Form("confirmForm");<br />
        add(form);</p>
<p>        AjaxButton confirmButton = new AjaxButton("confirmButton", new Model(buttonName)) {</p>
<p>            @Override<br />
            protected void onSubmit(AjaxRequestTarget target, Form form) {<br />
                confirmModal.show(target);<br />
            }<br />
        };</p>
<p>        form.add(confirmButton);</p>
<p>        form.add(confirmModal);</p>
<p>    }</p>
<p>    protected abstract void onConfirm(AjaxRequestTarget target);<br />
    protected abstract void onCancel(AjaxRequestTarget target);</p>
<p>    protected ModalWindow createConfirmModal(String id, String modalMessageText) {</p>
<p>        ModalWindow modalWindow = new ModalWindow("modal");<br />
        modalWindow.setCookieName(id);<br />
        modalWindow.setContent(new YesNoPanel(modalWindow.getContentId(), modalMessageText, modalWindow, answer));<br />
        modalWindow.setWindowClosedCallback(new ModalWindow.WindowClosedCallback() {</p>
<p>            @Override<br />
            public void onClose(AjaxRequestTarget target) {<br />
                if (answer.isAnswer()) {<br />
                    onConfirm(target);<br />
                } else {<br />
                    onCancel(target);<br />
                }<br />
            }<br />
        });</p>
<p>        return modalWindow;<br />
    }</p>
<p>    public class ConfirmationAnswer implements Serializable {</p>
<p>        private boolean answer;</p>
<p>        public ConfirmationAnswer(boolean answer) {<br />
            this.answer = answer;<br />
        }</p>
<p>        public boolean isAnswer() {<br />
            return answer;<br />
        }</p>
<p>        public void setAnswer(boolean answer) {<br />
            this.answer = answer;<br />
        }<br />
    }</p>
<p>}<br />
<&#47;pre></p>
<p>Here we do following steps:</p>
<ol>
<li>Create form with one AjaxButton which shows modalWindow when clicked.<&#47;li>
<li>Create modalWindow with YesNoPanel in it. As mentioned earlier, we pass there references to our modal window and to confirmationAnswer object.<&#47;li>
<li>Add WindowClosedCallback to modalWindow and basing on user choice perform onConfirm or onCancel method. These methods are both abstract to force developer extending AreYouSurePanel to implement them according to his needs.<&#47;li><br />
<&#47;ol></p>
<p>That's it, we are done. To test how it's working we must change a bit our page class and html file:</p>
<pre lang="html" colla="+">
<!DOCTYPE html<br />
    PUBLIC "-&#47;&#47;W3C&#47;&#47;DTD XHTML 1.0 Transitional&#47;&#47;EN"<br />
    "http:&#47;&#47;www.w3.org&#47;TR&#47;xhtml1&#47;DTD&#47;xhtml1-transitional.dtd"><br />
<html xmlns:wicket="http:&#47;&#47;wicket.apache.org&#47;dtds.data&#47;wicket-xhtml1.4-strict.dtd" ><br />
    <head><br />
        <title>Wicket Ajax 'Are you sure?' Modal Window<&#47;title><br />
    <&#47;head><br />
    <body></p>
<div align="center">
            <strong>Wicket Ajax 'Are you sure?' Modal Window<&#47;strong></p>
<form action="" wicket:id="formWithJavaScript">
                <input type="submit" wicket:id="buttonWithJavaScript" value="Action!"&#47;><br />
            <&#47;form><br />
        <&#47;div></p>
<div align="center">
            <span wicket:id="yesNoPanel"&#47;><br />
        <&#47;div></p>
<p>    <&#47;body><br />
<&#47;html><br />
<&#47;pre></p>
<p>and</p>
<pre lang="java" colla="+">
package pl.tdziurko.ajaxmodalwindowapp;</p>
<p>&#47;&#47; imports omitted</p>
<p>public class HomePage extends WebPage {</p>
<p>    private static final long serialVersionUID = 1L;</p>
<p>    public HomePage(final PageParameters parameters) {</p>
<p>        Form formWithJavaScript = new Form("formWithJavaScript");</p>
<p>        Button buttonWithJavaScript = new Button("buttonWithJavaScript") {</p>
<p>            @Override<br />
            public void onSubmit() {<br />
                System.out.println("Doing my job");<br />
            }<br />
        };<br />
        buttonWithJavaScript.add(new SimpleAttributeModifier(<br />
                "onclick", "if(!confirm('Do you really want to perform this action?')) return false;"));</p>
<p>        formWithJavaScript.add(buttonWithJavaScript);<br />
        add(formWithJavaScript);</p>
<p>        AreYouSurePanel yesNoPanel = new AreYouSurePanel("yesNoPanel", "Ajax Action!", "Do you really want to perform this action?") {</p>
<p>            @Override<br />
            protected void onConfirm(AjaxRequestTarget target) {<br />
                System.out.println("Doing my job after ajax modal");<br />
            }</p>
<p>            @Override<br />
            protected void onCancel(AjaxRequestTarget target) { }</p>
<p>        };</p>
<p>        add(yesNoPanel);<br />
    }</p>
<p>}<br />
<&#47;pre></p>
<p>And after clicking 'Ajax Action!' we could see that it's working as intended:</p>
<p><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2010&#47;02&#47;ajaxModalWindow.PNG.png" alt="" title="ajaxModalWindow.PNG" width="399" height="400" class="alignnone size-full wp-image-210" &#47;></p>
