---
layout: post
status: publish
published: true
title: Integrating HTML5 and Wicket
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: |
  After following some of the debates raging about <a href="http:&#47;&#47;www.apple.com&#47;ipad&#47;" target="_blank">Apple's new iPad<&#47;a> and the future of <a href="http:&#47;&#47;www.adobe.com&#47;products&#47;flashplayer&#47;" target="_blank">Adobe's Flash<&#47;a>, the discussion usually turned to the coming future of <a href="http:&#47;&#47;dev.w3.org&#47;html5&#47;spec&#47;Overview.html" target="_blank">HTML5<&#47;a>.

  Seeing as we love <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a> at <a href="http:&#47;&#47;www.mysticcoders.com" target="_blank">Mystic<&#47;a>, I thought I'd tinker around to see how hard it would be to start adding some support for the new HTML5 tags.  There are quite a few examples out there that show off <code>canvas<&#47;code>, <code>geolocation<&#47;code>, <code>storage<&#47;code>, and of course <code>video<&#47;code> and <code>audio<&#47;code>.
wordpress_id: 1723
wordpress_url: http://wicketbyexample.com/?p=191
date: '2010-02-01 00:13:34 +0000'
date_gmt: '2010-02-01 07:13:34 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3499
  author: rim
  author_email: rim.negra@gmail.com
  author_url: ''
  date: '2010-04-28 06:53:52 +0000'
  date_gmt: '2010-04-28 13:53:52 +0000'
  content: nice ...
- id: 3500
  author: dave
  author_email: db@gmail.com
  author_url: ''
  date: '2010-07-19 14:04:43 +0000'
  date_gmt: '2010-07-19 21:04:43 +0000'
  content: awesome dude!! ty
- id: 3501
  author: TG
  author_email: thomas.glock@pfizer.com
  author_url: ''
  date: '2010-08-25 08:20:36 +0000'
  date_gmt: '2010-08-25 15:20:36 +0000'
  content: Umm - Just because you can put HTML5 tags into the markup doesn't make
    it so.  Where is the proper html5 doctype ?  For that matter - I have yet to see
    a properly validated Wicket page.  A bug  supposedly 'resolved' on the userlist
    but thats it.  Would like to get into wicket but its pages dont seem to validate
    and its urls with appended jsession ids are easily exploited in a production app.  Hoping
    someone can set me straight on this...
- id: 3502
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2010-08-25 08:55:19 +0000'
  date_gmt: '2010-08-25 15:55:19 +0000'
  content: If you want your HTML5 page to have the HTML5 doctype, just add it.  Nothing
    stopping you with Wicket.  And Wicket pages validate just fine, what problems
    did you experience with this?  They are perfectly standard HTML pages so if they
    don't validate, you added something nonstandard to them in your app.  And jsessionid's
    are most likely a product of the container you're running under being mismanaged,
    any J2EE app will add these if it can't use cookies to save a user's session.
- id: 3503
  author: vinoth
  author_email: vinoth@vinothbabu.com
  author_url: ''
  date: '2010-12-22 05:12:41 +0000'
  date_gmt: '2010-12-22 12:12:41 +0000'
  content: I would love to join the team, let me know how to reach you.
---
<p>After following some of the debates raging about <a href="http:&#47;&#47;www.apple.com&#47;ipad&#47;" target="_blank">Apple's new iPad<&#47;a> and the future of <a href="http:&#47;&#47;www.adobe.com&#47;products&#47;flashplayer&#47;" target="_blank">Adobe's Flash<&#47;a>, the discussion usually turned to the coming future of <a href="http:&#47;&#47;dev.w3.org&#47;html5&#47;spec&#47;Overview.html" target="_blank">HTML5<&#47;a>.</p>
<p>Seeing as we love <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Apache Wicket<&#47;a> at <a href="http:&#47;&#47;www.mysticcoders.com" target="_blank">Mystic<&#47;a>, I thought I'd tinker around to see how hard it would be to start adding some support for the new HTML5 tags.  There are quite a few examples out there that show off <code>canvas<&#47;code>, <code>geolocation<&#47;code>, <code>storage<&#47;code>, and of course <code>video<&#47;code> and <code>audio<&#47;code>.<br />
<a id="more"></a><a id="more-1723"></a></p>
<p>First thing I set about doing, was to define the <code>video<&#47;code> tag.  It takes an optional <code>src<&#47;code> attribute among others, or multiple <code>source<&#47;code> tags for offering up different video streams for the browser to choose from.  Firefox uses Ogg Vorbis, and Safari uses H.264, so of course, the browser vendors still don't agree.  Here's some code to use what I'd want to see from a <code>video<&#47;code> component:</p>
<pre lang="java" colla="+">
        final List<mediaSource> mm = new ArrayList<mediaSource>();<br />
        mm.add(new MediaSource("&#47;dizzy.mp4", "video&#47;mp4"));<br />
        mm.add(new MediaSource("&#47;dizzy.ogv", "video&#47;ogg"));</p>
<p>        IModel
<list<mediaSource>> mediaSourceList = new AbstractReadOnlyModel
<list<mediaSource>>() {<br />
            public List<mediaSource> getObject() {<br />
                return mm;<br />
            }<br />
        };</p>
<p>        add(new Html5Video("dizzy", mediaSourceList) {</p>
<p>            @Override<br />
            protected boolean isControls() {<br />
                return true;<br />
            }</p>
<p>            @Override<br />
            protected boolean isAutoPlay() {<br />
                return true;<br />
            }<br />
        });<br />
<&#47;pre></p>
<p>We've defined a custom Object for use with our new <code>Html5Video<&#47;code> component, and it will hold the appropriate attributes we would need to output either a <code>src<&#47;code> attribute or a <code>source<&#47;code> tag.  You can also see from this example that we've got a few booleans we're overriding by default, and more available in the actual implementation.  Let's take a look at the <code>Html5Video<&#47;code> component:</p>
<pre lang="java" colla="+">
public class Html5Video extends Html5Media {</p>
<p>    public Html5Video(String id, IModel
<list<mediaSource>> model) {<br />
        super(id, model);<br />
    }</p>
<p>    protected int getWidth() { return 0; }</p>
<p>    protected int getHeight() { return 0; }</p>
<p>    @Override<br />
    protected void onComponentTag(final ComponentTag tag) {<br />
        if(getWidth()>0) {<br />
            tag.put("width", getWidth());<br />
        }</p>
<p>        if(getHeight()>0) {<br />
            tag.put("height", getHeight());<br />
        }</p>
<p>        super.onComponentTag(tag);<br />
    }</p>
<p>    protected String getTagName() {<br />
        return "video";<br />
    }<br />
}<br />
<&#47;pre></p>
<p>So you can see we've abstracted this out even further into an <code>Html5Media<&#47;code> object which we'll look at shortly.  For now, we have <code>width<&#47;code> and <code>height<&#47;code> which are specific to just the <code>video<&#47;code> tag.  And we're also overriding <code>onComponentTag<&#47;code> to throw those attributes into the <code>video<&#47;code> tag if they aren't zero.  We also steal from some ideas in wicket core, and implement a method in <code>Html5Media<&#47;code> to checkComponentTag based on the results of a method that can be overridden <code>getTagName<&#47;code>.</p>
<p>Let's take a look at <code>Html5Media<&#47;code> which is where we'll find most of the meat:</p>
<pre lang="java" colla="+">
public class Html5Media extends WebMarkupContainer {</p>
<p>    private IModel
<list<mediaSource>> sources;</p>
<p>    public Html5Media(String id, final IModel
<list<mediaSource>> model) {<br />
        super(id, model);<br />
        this.sources = wrap(model);<br />
        add(new Html5UtilsBehavior());<br />
    }<br />
<&#47;pre></p>
<p>First thing we see, is we're extending <code>WebMarkupContainer<&#47;code>, basically because our component can have body text (useful for fallback support).  Next you'll see that we're adding a behavior <code>Html5UtilsBehavior<&#47;code>.  The basic purpose is to header contribute a useful javascript file when working with browsers that don't yet support HTML5 (Internet Explorer I'm looking at you!).  Some more code:</p>
<pre lang="java" colla="+">
    @Override<br />
    protected void onComponentTag(final ComponentTag tag) {<br />
        String tagName = getTagName();<br />
        if (tagName != null) {<br />
            checkComponentTag(tag, tagName);<br />
        }</p>
<p>        List<mediaSource> sources = getSources();</p>
<p>        if (sources != null && sources.size() == 1) {<br />
            MediaSource source = sources.get(0);<br />
            tag.put("src", source.getSrc());<br />
        }</p>
<p>        if (isAutoBuffer()) {<br />
            tag.put("autobuffer", true);<br />
        }</p>
<p>        if (isAutoPlay()) {<br />
            tag.put("autoplay", true);<br />
        }</p>
<p>        if (isLoop()) {<br />
            tag.put("loop", true);<br />
        }</p>
<p>        if (isControls()) {<br />
            tag.put("controls", true);<br />
        }</p>
<p>        &#47;&#47; Default handling for component tag<br />
        super.onComponentTag(tag);<br />
    }</p>
<p>    protected String getTagName() {<br />
        return null;<br />
    }<br />
<&#47;pre></p>
<p>Here we check the component tag to ensure it is the acceptable name.  Then if we only have a single source, we add this to the <code>video<&#47;code> tag instead of separate elements in the body.  The next bunch of statements pull from methods and add boolean attributes to the tag if they are true.  And we provide an implementation of <code>getTagName<&#47;code> that returns null as a sensible default.</p>
<p><code>onComponentTagBody<&#47;code> is where we optionally will define <code>source<&#47;code> tags and the optional attributes that go along with it:</p>
<pre lang="java" colla="+">
    @Override<br />
    protected void onComponentTagBody(final MarkupStream markupStream, final ComponentTag openTag) {</p>
<p>        List<mediaSource> sources = getSources();</p>
<p>        if (sources != null && sources.size() > 1) {<br />
            final AppendingStringBuffer buffer = new AppendingStringBuffer();<br />
            for (int index = 0; index < sources.size(); index++) {<br />
                final MediaSource source = sources.get(index);<br />
                buffer.append("\n<source ");<br />
                buffer.append("src='");<br />
                buffer.append(source.getSrc());<br />
                buffer.append("'");<br />
                if (source.getType() != null) {<br />
                    buffer.append(" type='");<br />
                    buffer.append(source.getType());<br />
                    buffer.append("'");<br />
                }<br />
                if (source.getMedia() != null) {<br />
                    buffer.append(" media='");<br />
                    buffer.append(source.getMedia());<br />
                    buffer.append("'");<br />
                }</p>
<p>                buffer.append(" &#47;>");<br />
            }</p>
<p>            buffer.append("\n");</p>
<p>            getResponse().write(buffer.toString());</p>
<p>        }<br />
        super.onComponentTagBody(markupStream, openTag);<br />
    }<br />
<&#47;pre></p>
<p>Here we're ensuring things aren't empty, and then if we have more than one source element (often the case for compatibility between Firefox and Safari), we'll output each <code>source<&#47;code> tag.</p>
<p>We've also gone through the trouble of adding an implementation of <code>Html5Audio<&#47;code> which consisted of overriding the <code>getTagName<&#47;code> method and returning <code>audio<&#47;code>.  Pretty simple stuff.</p>
<p>When we put our example into place, we get a video with controls like so:<br &#47;><br &#47;><br />
<a href="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2010&#47;02&#47;Screen-shot-2010-01-31-at-10.59.53-PM.png"><img src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2010&#47;02&#47;Screen-shot-2010-01-31-at-10.59.53-PM.png" alt="" title="Screen shot 2010-01-31 at 10.59.53 PM" width="496" height="425" class="alignnone size-full wp-image-198" &#47;><&#47;a></p>
<p>So what's next?  If you download the project available and linked below, it also contains an example of using the <code>audio<&#47;code> component.  The <code>Html5UtilsBehavior<&#47;code> gives us the ability to CSS style the new HTML5 tags even with Internet Explorer, so our code can be more semantic instead of littering it with div's for lack of an alternative.  There are a ton more interactions and behaviors that can be added to support video and audio, support for canvas, postMessage,  storage, Web Database. Web Workers, geolocation, Content Editable, etc.  I have no reason to think any of these would be impossible to integrate into a sensible component with Wicket.</p>
<p>If you'd like to download the example and run it locally, or take a look at the components written, I've started a project over at Google Code called <a href="https:&#47;&#47;code.google.com&#47;p&#47;wicket-html5&#47;" target="_blank">wicket-html5<&#47;a>.  Contact me if you'd like to contribute and start hacking away at some of these components.</p>
<p>To infinity, and beyond!</p>
