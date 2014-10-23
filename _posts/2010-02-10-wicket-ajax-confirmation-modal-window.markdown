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
  <em>(Editor&acirc;&euro;&trade;s note: Tomasz Dziurko contributed this column from <a href="http://codehardgopro.blogspot.com/2010/02/wicket-ajax-modal-are-you-sure-window.html" target="_blank">Code Hard Go Pro</a>.)</em>

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
    in java like http://www.mysticcoders.com/blog/wicket-ajax-confirmation-modal-window/
    (but in this case author using &#8216;confirm&#8217; instead of &#8216;prompt&#8217;
    and [...]"
---
<em>(Editor&acirc;&euro;&trade;s note: Tomasz Dziurko contributed this column from <a href="http://codehardgopro.blogspot.com/2010/02/wicket-ajax-modal-are-you-sure-window.html" target="_blank">Code Hard Go Pro</a>.)</em>

While developing web application with Wicket I sometimes need to check whether the user really, really does want to do something, for example to delete an entity from the database. The first and easiest choice that comes to my mind is to use JavaScript window.<br />
<a id="more"></a><a id="more-1725"></a><br />
So we have HomePage.html:

<pre lang="html" colla="+">
<!DOCTYPE html<br />
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"<br />
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><br />
<html xmlns:wicket="http://wicket.apache.org/dtds.data/wicket-xhtml1.4-strict.dtd" ><br />
    <head><br />
        <title>Wicket Ajax 'Are you sure?' Modal Window</title><br />
    </head><br />
    <body>

<div align="center">
            <strong>Wicket Ajax 'Are you sure?' Modal Window</strong>

<form action="" wicket:id="formWithJavaScript">
                <input type="submit" wicket:id="buttonWithJavaScript" value="Action!"/><br />
            </form><br />
        </div><br />
    </body><br />
</html><br />
</pre>

and corresponding Java class:

<pre lang="java" colla="+">
package pl.tdziurko.ajaxmodalwindowapp;

// imports omitted

/**<br />
 * Author: Tomasz Dziurko<br />
 */

public class HomePage extends WebPage {

    private static final long serialVersionUID = 1L;

    public HomePage(final PageParameters parameters) {

        Form formWithJavaScript = new Form("formWithJavaScript");

        Button buttonWithJavaScript = new Button("buttonWithJavaScript") {

            @Override<br />
            public void onSubmit() {<br />
                System.out.println("Doing my job");<br />
            }<br />
        };<br />
        buttonWithJavaScript.add(new SimpleAttributeModifier(<br />
                "onclick", "if(!confirm('Do you really want to perform this action?')) return false;"));

        formWithJavaScript.add(buttonWithJavaScript);<br />
        add(formWithJavaScript);

    }

}<br />
</pre>

Finally, we can see how it looks:

<img src="http://www.mysticcoders.com/wp-content/uploads/2010/02/javaScriptWindow.PNG.png" alt="" title="javaScriptWindow.PNG" width="400" height="320" class="alignnone size-full wp-image-209" />

It solves our problem but in the era of Web2.0, rounded corners and shiny looks it isn't enough. Why can't we use ajax modal window to ask user for confirmation? It would make our application look good and our css magician could make it look even better.

So let's try with creating reusable 'Are you sure?' ajax modal window with Wicket.

At the beginning we must prepare panel which will be displayed in our modal window. Let's name it YesNoPanel.

<pre lang="html" colla="+">
<?xml version="1.0" encoding="UTF-8"?><br />
<!DOCTYPE html<br />
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"<br />
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><br />
<html xmlns:wicket><br />
    <head><br />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><br />
        <title></title><br />
    </head><br />
    <body><br />
        <wicket:panel>

<form wicket:id="yesNoForm" action="">
                <span wicket:id="message">Are you sure?</span>

<table style="width: 65%;" align="center">
<tr>
<td align="left">
                            <input type="submit" wicket:id="noButton" value="No" /><br />
                        </td>

<td align="right">
                            <input type="submit" wicket:id="yesButton" value="Yes" /><br />
                        </td><br />
                    </tr><br />
                </table><br />
            </form><br />
        </wicket:panel><br />
    </body><br />
</html><br />
</pre>

and Java class:

<pre lang="java" colla="+">
package pl.tdziurko.ajaxmodalwindowapp.areyousuremodal;

import org.apache.wicket.ajax.AjaxRequestTarget;<br />
import org.apache.wicket.ajax.markup.html.form.AjaxButton;<br />
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;<br />
import org.apache.wicket.markup.html.basic.MultiLineLabel;<br />
import org.apache.wicket.markup.html.form.Form;<br />
import org.apache.wicket.markup.html.panel.Panel;<br />
import pl.tdziurko.ajaxmodalwindowapp.areyousuremodal.AreYouSurePanel.ConfirmationAnswer;

public class YesNoPanel extends Panel {

    public YesNoPanel(String id, String message, final ModalWindow modalWindow, final ConfirmationAnswer answer) {<br />
        super(id);

        Form yesNoForm = new Form("yesNoForm");

        MultiLineLabel messageLabel = new MultiLineLabel("message", message);<br />
        yesNoForm.add(messageLabel);<br />
        modalWindow.setTitle("Please confirm");<br />
        modalWindow.setInitialHeight(200);<br />
        modalWindow.setInitialWidth(350);

        AjaxButton yesButton = new AjaxButton("yesButton", yesNoForm) {

            @Override<br />
            protected void onSubmit(AjaxRequestTarget target, Form form) {<br />
                if (target != null) {<br />
                    answer.setAnswer(true);<br />
                    modalWindow.close(target);<br />
                }<br />
            }<br />
        };

        AjaxButton noButton = new AjaxButton("noButton", yesNoForm) {

            @Override<br />
            protected void onSubmit(AjaxRequestTarget target, Form form) {<br />
                if (target != null) {<br />
                    answer.setAnswer(false);<br />
                    modalWindow.close(target);<br />
                }<br />
            }<br />
        };

        yesNoForm.add(yesButton);<br />
        yesNoForm.add(noButton);

        add(yesNoForm);<br />
    }

}<br />
</pre>

Everything looks pretty straightforward. We pass to the constructor text which will be displayed as a confirmation question, references to ModalWindow object in which YesNoPanel is placed and to ConfirmationAnswer object.<br />
ConfirmationAnswer class will be created in the next paragraph and will be used to store information whether user pressed 'Yes' or 'No' button in our panel.

Now it's time to prepare wrapping form to our YesNoPanel. We could simply achieve it by creating panel with form and one button in it. In our example it will be AreYouSurePanel class:

<pre lang="html" colla="+">
<?xml version="1.0" encoding="UTF-8"?><br />
<!DOCTYPE html<br />
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"<br />
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><br />
<html xmlns:wicket><br />
    <head><br />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><br />
        <title></title><br />
    </head><br />
    <body><br />
        <wicket:panel >

<form wicket:id="confirmForm" action="" style="display: inline;">
                <input type="submit" wicket:id="confirmButton" value="Default name" /><br />
                <span style="display: none;" wicket:id="modal"></span><br />
            </form><br />
        </wicket:panel><br />
    </body><br />
</html><br />
</pre>

and in Java:

<pre lang="java" colla="+">
package pl.tdziurko.ajaxmodalwindowapp.areyousuremodal;

import java.io.Serializable;<br />
import java.util.Map;<br />
import org.apache.wicket.ajax.AjaxRequestTarget;<br />
import org.apache.wicket.ajax.markup.html.form.AjaxButton;<br />
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalWindow;<br />
import org.apache.wicket.markup.html.form.Form;<br />
import org.apache.wicket.markup.html.panel.Panel;<br />
import org.apache.wicket.model.Model;

public abstract class AreYouSurePanel extends Panel {

    protected ModalWindow confirmModal;<br />
    protected ConfirmationAnswer answer;<br />
    protected Map<string,string> modifiersToApply;

    public AreYouSurePanel(String id, String buttonName, String modalMessageText) {<br />
        super(id);<br />
        answer = new ConfirmationAnswer(false);<br />
        addElements(id, buttonName, modalMessageText);<br />
    }

    protected void addElements(String id, String buttonName, String modalMessageText) {

        confirmModal = createConfirmModal(id, modalMessageText);

        Form form = new Form("confirmForm");<br />
        add(form);

        AjaxButton confirmButton = new AjaxButton("confirmButton", new Model(buttonName)) {

            @Override<br />
            protected void onSubmit(AjaxRequestTarget target, Form form) {<br />
                confirmModal.show(target);<br />
            }<br />
        };

        form.add(confirmButton);

        form.add(confirmModal);

    }

    protected abstract void onConfirm(AjaxRequestTarget target);<br />
    protected abstract void onCancel(AjaxRequestTarget target);

    protected ModalWindow createConfirmModal(String id, String modalMessageText) {

        ModalWindow modalWindow = new ModalWindow("modal");<br />
        modalWindow.setCookieName(id);<br />
        modalWindow.setContent(new YesNoPanel(modalWindow.getContentId(), modalMessageText, modalWindow, answer));<br />
        modalWindow.setWindowClosedCallback(new ModalWindow.WindowClosedCallback() {

            @Override<br />
            public void onClose(AjaxRequestTarget target) {<br />
                if (answer.isAnswer()) {<br />
                    onConfirm(target);<br />
                } else {<br />
                    onCancel(target);<br />
                }<br />
            }<br />
        });

        return modalWindow;<br />
    }

    public class ConfirmationAnswer implements Serializable {

        private boolean answer;

        public ConfirmationAnswer(boolean answer) {<br />
            this.answer = answer;<br />
        }

        public boolean isAnswer() {<br />
            return answer;<br />
        }

        public void setAnswer(boolean answer) {<br />
            this.answer = answer;<br />
        }<br />
    }

}<br />
</pre>

Here we do following steps:

<ol>
<li>Create form with one AjaxButton which shows modalWindow when clicked.</li>
<li>Create modalWindow with YesNoPanel in it. As mentioned earlier, we pass there references to our modal window and to confirmationAnswer object.</li>
<li>Add WindowClosedCallback to modalWindow and basing on user choice perform onConfirm or onCancel method. These methods are both abstract to force developer extending AreYouSurePanel to implement them according to his needs.</li><br />
</ol>

That's it, we are done. To test how it's working we must change a bit our page class and html file:

<pre lang="html" colla="+">
<!DOCTYPE html<br />
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"<br />
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><br />
<html xmlns:wicket="http://wicket.apache.org/dtds.data/wicket-xhtml1.4-strict.dtd" ><br />
    <head><br />
        <title>Wicket Ajax 'Are you sure?' Modal Window</title><br />
    </head><br />
    <body>

<div align="center">
            <strong>Wicket Ajax 'Are you sure?' Modal Window</strong>

<form action="" wicket:id="formWithJavaScript">
                <input type="submit" wicket:id="buttonWithJavaScript" value="Action!"/><br />
            </form><br />
        </div>

<div align="center">
            <span wicket:id="yesNoPanel"/><br />
        </div>

    </body><br />
</html><br />
</pre>

and

<pre lang="java" colla="+">
package pl.tdziurko.ajaxmodalwindowapp;

// imports omitted

public class HomePage extends WebPage {

    private static final long serialVersionUID = 1L;

    public HomePage(final PageParameters parameters) {

        Form formWithJavaScript = new Form("formWithJavaScript");

        Button buttonWithJavaScript = new Button("buttonWithJavaScript") {

            @Override<br />
            public void onSubmit() {<br />
                System.out.println("Doing my job");<br />
            }<br />
        };<br />
        buttonWithJavaScript.add(new SimpleAttributeModifier(<br />
                "onclick", "if(!confirm('Do you really want to perform this action?')) return false;"));

        formWithJavaScript.add(buttonWithJavaScript);<br />
        add(formWithJavaScript);

        AreYouSurePanel yesNoPanel = new AreYouSurePanel("yesNoPanel", "Ajax Action!", "Do you really want to perform this action?") {

            @Override<br />
            protected void onConfirm(AjaxRequestTarget target) {<br />
                System.out.println("Doing my job after ajax modal");<br />
            }

            @Override<br />
            protected void onCancel(AjaxRequestTarget target) { }

        };

        add(yesNoPanel);<br />
    }

}<br />
</pre>

And after clicking 'Ajax Action!' we could see that it's working as intended:

<img src="http://www.mysticcoders.com/wp-content/uploads/2010/02/ajaxModalWindow.PNG.png" alt="" title="ajaxModalWindow.PNG" width="399" height="400" class="alignnone size-full wp-image-210" />

