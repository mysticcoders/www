---
layout: post
status: publish
published: true
title: Stress testing OpenLaszlo
author:
  display_name: jedstrom
  login: jedstrom
  email: jedstrom@mysticcoders.com
  url: ''
author_login: jedstrom
author_email: jedstrom@mysticcoders.com
excerpt: "I was playing with object redrawing in Laszlo (4.0.6).&Acirc;&nbsp;This
  is what I came up with, &Acirc;&nbsp;it seems I hit flash engine issues above a
  certain level of attached nodes but it does handle re-draws quite well once rendered.\r\n\r\nHere
  is the code I was playing with and a screenshot....\r\n\r\n&Acirc;&nbsp;\r\n\r\n[caption
  id=\"attachment_76\" align=\"aligncenter\" width=\"300\" caption=\"Interconnected
  nodes\"]<a href=\"http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2008&#47;08&#47;graphs.png\"><img
  class=\"size-medium wp-image-76\" src=\"http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2008&#47;08&#47;graphs.png\"
  alt=\"Interconnected nodes\" width=\"300\" height=\"268\" &#47;><&#47;a>[&#47;caption]\r\n\r\n"
wordpress_id: 75
wordpress_url: http://www.mysticcoders.com/?p=75
date: '2008-08-08 13:35:21 +0000'
date_gmt: '2008-08-08 21:35:21 +0000'
categories:
- Web
tags:
- Web
- Open Laszlo
- tip
comments:
- id: 95
  author: Recent Links Tagged With "openlaszlo" - JabberTags
  author_email: ''
  author_url: http://www.jabbertags.com/popular/openlaszlo
  date: '2008-12-26 16:19:09 +0000'
  date_gmt: '2008-12-26 22:19:09 +0000'
  content: "[...] public links >> openlaszlo   Stress testing OpenLaszlo Saved by
    canhhiep on Fri 12-12-2008   European OpenLaszlo Meeting 2008 Saved by ksoohy
    on Fri [...]"
- id: 3140
  author: sagl&Auml;&plusmn;khaberleri
  author_email: seni-ariyorumm@hotmail.com
  author_url: ''
  date: '2010-03-01 17:29:23 +0000'
  date_gmt: '2010-03-02 00:29:23 +0000'
  content: thanks.good good artickle
---
<p>I was playing with object redrawing in Laszlo (4.0.6).&Acirc;&nbsp;This is what I came up with, &Acirc;&nbsp;it seems I hit flash engine issues above a certain level of attached nodes but it does handle re-draws quite well once rendered.</p>
<p>Here is the code I was playing with and a screenshot....</p>
<p>&Acirc;&nbsp;</p>
<p>[caption id="attachment_76" align="aligncenter" width="300" caption="Interconnected nodes"]<a href="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2008&#47;08&#47;graphs.png"><img class="size-medium wp-image-76" src="http:&#47;&#47;www.mysticcoders.com&#47;wp-content&#47;uploads&#47;2008&#47;08&#47;graphs.png" alt="Interconnected nodes" width="300" height="268" &#47;><&#47;a>[&#47;caption]</p>
<p><a id="more"></a><a id="more-75"></a></p>
<pre lang="xml" line="1" colla="+">
<p><?xml version=&acirc;&euro;1.0&acirc;&euro;&sup3; encoding=&acirc;&euro;UTF-8&acirc;&euro;&sup3;?><br />
<!DOCTYPE canvas SYSTEM &acirc;&euro;&oelig;http:&#47;&#47;www.openlaszlo.org&#47;lps4&#47;tools&#47;lzx.xsd&acirc;&euro;></p>
<p><canvas width=&acirc;&euro;100%&acirc;&euro; height=&acirc;&euro;100%&acirc;&euro;></p>
<p><attribute name=&acirc;&euro;allNodes&acirc;&euro; value=&acirc;&euro;${new Array()}&acirc;&euro;&#47;><br />
<attribute name=&acirc;&euro;nodeGroups&acirc;&euro; value=&acirc;&euro;${new Array()}&acirc;&euro;&#47;></p>
<p><resource name=&acirc;&euro;node1&acirc;&euro;&sup3;><br />
   <frame src=&acirc;&euro;CS2-Standard-48&Atilde;&mdash;48.png&acirc;&euro;&#47;><br />
<&#47;resource></p>
<p><resource name=&acirc;&euro;node2&acirc;&euro;&sup3;><br />
    <frame src=&acirc;&euro;InDesign-48&Atilde;&mdash;48.png&acirc;&euro;&#47;><br />
<&#47;resource></p>
<p><resource name=&acirc;&euro;node3&acirc;&euro;&sup3;><br />
    <frame src=&acirc;&euro;CS2-Premium-48&Atilde;&mdash;48.png&acirc;&euro;&#47;><br />
<&#47;resource></p>
<p><resource name=&acirc;&euro;group&acirc;&euro;></p>
<p>    <frame src=&acirc;&euro;Illustrator-128&Atilde;&mdash;128.png&acirc;&euro;&#47;></p>
<p><&#47;resource></p>
<p><!&acirc;&euro;&ldquo; All nodes attach to this view, that way we can iterate over nodes and nodes only&acirc;&euro;&brvbar;. &acirc;&euro;&ldquo;></p>
<p><view name=&acirc;&euro;nodeCanvas&acirc;&euro;&#47;></p>
<p><class name=&acirc;&euro;linkedLine&acirc;&euro;></p>
<p>    <attribute name=&acirc;&euro;style&acirc;&euro; value=&acirc;&euro;0&Atilde;&mdash;00ff00&acirc;&euro;&sup3;&#47;><br />
        <attribute name=&acirc;&euro;myWidth&acirc;&euro; value=&acirc;&euro;2&acirc;&euro;&sup3;&#47;></p>
<p>            <attribute name=&acirc;&euro;mc&acirc;&euro;&#47;></p>
<p>                <handler name=&acirc;&euro;oninit&acirc;&euro;></p>
<p>                    this.mc = this.getMCRef().createEmptyMovieClip(&acirc;&euro;myLine&acirc;&euro;, 10);</p>
<p>                <&#47;handler></p>
<p>                <method name=&acirc;&euro;drawline&acirc;&euro; args=&acirc;&euro;x1,y1,x2,y2&acirc;&euro;&sup3;></p>
<p>                    Debug.write(&acirc;&euro;Moving line&acirc;&euro;);</p>
<p>                    Debug.write(this);</p>
<p>                    this.sendToBack();</p>
<p>                    mc.clear();</p>
<p>                    mc.lineStyle(this.myWidth, this.style,100);</p>
<p>                    mc.moveTo(x1,y1);</p>
<p>                    mc.lineTo(x2,y2);</p>
<p>                    Debug.write(this);</p>
<p>                <&#47;method></p>
<p>                <method name=&acirc;&euro;alarm&acirc;&euro;><br />
                    &#47;&#47; Alarm behaviour.<br />
                <&#47;method></p>
<p><&#47;class></p>
<p><class name=&acirc;&euro;subMap&acirc;&euro; extends=&acirc;&euro;view&acirc;&euro;><br />
<&#47;class></p>
<p><class name=&acirc;&euro;nodeLabel&acirc;&euro; extends=&acirc;&euro;text&acirc;&euro;></p>
<p>    <method name=&acirc;&euro;setLabel&acirc;&euro; args=&acirc;&euro;labelText&acirc;&euro;><br />
        this.setText(labelText);<br />
    <&#47;method></p>
<p><&#47;class></p>
<p><class name=&acirc;&euro;nodeStatus&acirc;&euro;&#47;></p>
<p><class name=&acirc;&euro;nodeGroup&acirc;&euro; extends=&acirc;&euro;view&acirc;&euro; resource=&acirc;&euro;group&acirc;&euro; visible=&acirc;&euro;false&acirc;&euro;></p>
<p>    <attribute name=&acirc;&euro;nodes&acirc;&euro;&#47;></p>
<p>        <handler name=&acirc;&euro;onmouseover&acirc;&euro;></p>
<p>            this.info.bringToFront();</p>
<p>            this.info.setVisible(true);</p>
<p>        <&#47;handler></p>
<p>        <method name=&acirc;&euro;alarm&acirc;&euro;><br />
        <&#47;method></p>
<p>        <handler name=&acirc;&euro;onmouseout&acirc;&euro;></p>
<p>            this.info.setVisible(false);</p>
<p>        <&#47;handler></p>
<p>        <!&acirc;&euro;&ldquo; A list of the existing attributes &acirc;&euro;&ldquo;></p>
<p>        <floatinglist name=&acirc;&euro;info&acirc;&euro; width=&acirc;&euro;80&acirc;&euro;&sup3; attach=&acirc;&euro;right&acirc;&euro; visible=&acirc;&euro;false&acirc;&euro;></p>
<p>            <textlistitem text=&acirc;&euro;Grouping&acirc;&euro;&#47;></p>
<p>                <textlistitem text=&acirc;&euro;This is a group...&acirc;&euro;&#47;></p>
<p>                <textlistitem text=&acirc;&euro;Bla&acirc;&euro;&#47;></p>
<p>                <textlistitem text=&acirc;&euro;Bla&acirc;&euro;&#47;></p>
<p>        <&#47;floatinglist></p>
<p>        <!&acirc;&euro;&ldquo; Hide the nodes below this node-group, assume the</p>
<p>        position of the first node, move it around, add even if</p>
<p>        we move to the underlaying nodes the x&#47;y coords so we can</p>
<p>        uncover as quickly as possible and revert them back to visible</p>
<p>        state on the canvas. This includes unhiding lines as well.</p>
<p>        This class should self destruct when unraveling the nodes in question.</p>
<p>        &acirc;&euro;&ldquo;></p>
<p>        <method name=&acirc;&euro;addNodes&acirc;&euro; args=&acirc;&euro;nodes&acirc;&euro;><![CDATA[</p>
<p>            this.nodes = nodes &#47;&#47;Save a reference....</p>
<p>            this.setX(nodes[nodes.length-1].x - this.width&#47;2);</p>
<p>            this.setY(nodes[nodes.length-1].y - this.height&#47;2);</p>
<p>            for (n in nodes) {<br />
                nodes[n].hide();<br />
            }</p>
<p>            this.setVisible(true);</p>
<p>            var linkList = new Array();</p>
<p>            Debug.write(&acirc;&euro;Current nodes&acirc;&euro; )</p>
<p>            for (n in nodes) {</p>
<p>                for (c in nodes[n].connected) {</p>
<p>                    linkList.push(nodes[n].connected[c].l);</p>
<p>                }</p>
<p>            }</p>
<p>            var links = linkList.unique(true);</p>
<p>            Debug.write(linkList);</p>
<p>            Debug.write(links);</p>
<p>            Debug.write(nodes);</p>
<p>            for (l in links ) {</p>
<p>                var firstHit = false;</p>
<p>                var secondHit = false;</p>
<p>                for (n in nodes) {</p>
<p>                    for (c in nodes[n].connected) {</p>
<p>                        if (nodes[n].connected[c].l == links[l]){</p>
<p>                            if (firstHit) {</p>
<p>                            secondHit = true;</p>
<p>                            }</p>
<p>                        firstHit = true;</p>
<p>                    }</p>
<p>                }</p>
<p>            }</p>
<p>            if (!(firstHit && secondHit)) {</p>
<p>                links[l].setVisible(true);</p>
<p>            }</p>
<p>            }</p>
<p>            ]]></p>
<p>        <&#47;method></p>
<p>        <handler name=&acirc;&euro;onclick&acirc;&euro;></p>
<p>            for (n in nodes) {</p>
<p>                nodes[n].show()</p>
<p>            }</p>
<p>            this.setVisible(false);</p>
<p>            this.destroy();</p>
<p>        <&#47;handler></p>
<p><&#47;class></p>
<p><class name=&acirc;&euro;onmsNode&acirc;&euro; extends=&acirc;&euro;view&acirc;&euro;</p>
<p>       resource=&acirc;&euro;node1&acirc;&euro;&sup3;</p>
<p>       onmousedown=&acirc;&euro;dragger.apply()&acirc;&euro; onmouseup=&acirc;&euro;dragger.remove()&acirc;&euro;></p>
<p>    <attribute name=&acirc;&euro;connected&acirc;&euro;&#47;></p>
<p>        <attribute name=&acirc;&euro;myLabel&acirc;&euro;&#47;></p>
<p>            <!&acirc;&euro;&ldquo; myStatus</p>
<p>            A bunch of resources where we set it based on</p>
<p>            response number value from the service - i.e are we going</p>
<p>            all is good or bleat like mad sheep&acirc;&euro;&brvbar;</p>
<p>            &acirc;&euro;&ldquo;></p>
<p>            <attribute name=&acirc;&euro;myStatus&acirc;&euro;&#47;></p>
<p>                <dragstate name=&acirc;&euro;dragger&acirc;&euro;&#47;></p>
<p>                    <method event=&acirc;&euro;oninit&acirc;&euro;></p>
<p>                        this.connected = new Array();</p>
<p>                        this.myLabel = new nodeLabel();</p>
<p>                        this.myLabel.setLabel(&acirc;&euro;Nodeinfo&acirc;&euro;);</p>
<p>                    <&#47;method></p>
<p>                    <handler name=&acirc;&euro;onload&acirc;&euro;></p>
<p>                        Debug.write(this.myLabel);</p>
<p>                    <&#47;handler></p>
<p>                    <method name=&acirc;&euro;move&acirc;&euro;></p>
<p>                        for(a in connected) {</p>
<p>                            connected[a].l.drawline(this.x+(this.width&#47;2),this.y+(this.height&#47;2),</p>
<p>                            connected[a].n.x + (connected[a].n.width&#47;2),connected[a].n.y + (connected[a].n.height&#47;2));</p>
<p>                        }</p>
<p>                        this.myLabel.setX(this.x);</p>
<p>                        this.myLabel.setY(this.y+this.height+2);</p>
<p>                    <&#47;method></p>
<p>                    <method event=&acirc;&euro;ony&acirc;&euro;></p>
<p>                        move();</p>
<p>                    <&#47;method></p>
<p>                    <method event=&acirc;&euro;onload&acirc;&euro;></p>
<p>                        move();</p>
<p>                    <&#47;method></p>
<p>                    <method name=&acirc;&euro;link&acirc;&euro; args=&acirc;&euro;n,l&acirc;&euro;></p>
<p>                        var nodeAff = new Object();</p>
<p>                        nodeAff.n = n;</p>
<p>                        nodeAff.l = l;</p>
<p>                        this.connected.push(nodeAff);</p>
<p>                        move();</p>
<p>                        Debug.write(this.connected);</p>
<p>                    <&#47;method></p>
<p>                    <handler name=&acirc;&euro;onmouseover&acirc;&euro;></p>
<p>                        this.info.bringToFront();</p>
<p>                        this.info.setVisible(true);</p>
<p>                    <&#47;handler></p>
<p>                    <method name=&acirc;&euro;alarm&acirc;&euro;></p>
<p>                    <&#47;method></p>
<p>                    <handler name=&acirc;&euro;onmouseout&acirc;&euro;></p>
<p>                        this.info.setVisible(false);</p>
<p>                    <&#47;handler></p>
<p>                    <!&acirc;&euro;&ldquo; A list of the existing attributes &acirc;&euro;&ldquo;></p>
<p>                    <floatinglist name=&acirc;&euro;info&acirc;&euro; width=&acirc;&euro;80&acirc;&euro;&sup3; attach=&acirc;&euro;right&acirc;&euro; visible=&acirc;&euro;false&acirc;&euro;></p>
<p>                        <textlistitem text=&acirc;&euro;NodeId&acirc;&euro;&#47;></p>
<p>                            <textlistitem text=&acirc;&euro;NodeName&acirc;&euro;&#47;></p>
<p>                                <textlistitem text=&acirc;&euro;Bla&acirc;&euro;&#47;></p>
<p>                                    <textlistitem text=&acirc;&euro;Bla&acirc;&euro;&#47;></p>
<p>                    <&#47;floatinglist></p>
<p>                    <handler name=&acirc;&euro;ondblclick&acirc;&euro;></p>
<p>                        &#47;&#47; Provide edit behaviour of the node.</p>
<p>                    <&#47;handler></p>
<p>                    <method name=&acirc;&euro;hide&acirc;&euro;></p>
<p>                        this.setVisible(false);</p>
<p>                        this.myLabel.setVisible(false);</p>
<p>                        for (c in this.connected) {</p>
<p>                            connected[c].l.setVisible(false)</p>
<p>                        }</p>
<p>                    <&#47;method></p>
<p>                    <method name=&acirc;&euro;show&acirc;&euro;></p>
<p>                        this.setVisible(true);</p>
<p>                        this.myLabel.setVisible(true);</p>
<p>                        for (c in connected) {</p>
<p>                            connected[c].l.setVisible(true)</p>
<p>                        }</p>
<p>                    <&#47;method></p>
<p><&#47;class></p>
<p><method event=&acirc;&euro;oninit&acirc;&euro;> <![CDATA[</p>
<p>    var baseNodes = new Array();</p>
<p>    for(var ii = 0; ii <=10 ; ii++ ) {</p>
<p>        var baseNode = new onmsNode(nodeCanvas);</p>
<p>        baseNodes.push(baseNode);</p>
<p>        if (ii < 10 ) {</p>
<p>            baseNode.setX( Math.round(600 + Math.cos(ii * (Math.PI&#47;5)) * 400));</p>
<p>            baseNode.setY(Math.round(500 + Math.sin(ii * (Math.PI&#47;5)) * 400));</p>
<p>            baseNode.setAttribute('resource', 'node2');</p>
<p>        } else {</p>
<p>            baseNode.setX( Math.round(600 + Math.cos(ii * (Math.PI&#47;5)) * 150));</p>
<p>            baseNode.setY(Math.round(500 + Math.sin(ii * (Math.PI&#47;5)) * 150));</p>
<p>            baseNode.setAttribute('resource', 'node3');</p>
<p>        }</p>
<p>        var linkColor = randomColor();</p>
<p>        var myWidth = Math.random()*3+1</p>
<p>        var y = baseNode.y;</p>
<p>        var x = baseNode.x;</p>
<p>        var intervalCount = 0;</p>
<p>        if (ii > 0) {</p>
<p>        var l2 = new linkedLine();</p>
<p>        l2.style = 0xaaaaaa;</p>
<p>        l2.myWidth = 5;</p>
<p>        baseNodes[ii].link(baseNodes[ii-1],l2);</p>
<p>        baseNodes[ii-1].link(baseNodes[ii],l2);</p>
<p>    }</p>
<p>    for (var i = 0; i <= 15 ; i++) {</p>
<p>        var l = new linkedLine();</p>
<p>        l.style = linkColor;</p>
<p>        l.myWidth = myWidth;</p>
<p>        var n = new onmsNode(nodeCanvas);</p>
<p>        x = Math.round(baseNode.x + Math.cos(intervalCount * (Math.PI&#47;(15&#47;2))) * 100);</p>
<p>        y = Math.round(baseNode.y + Math.sin(intervalCount * (Math.PI&#47;(15&#47;2))) * 100);</p>
<p>        intervalCount++</p>
<p>        n.setX(x);</p>
<p>        n.setY(y);</p>
<p>        Debug.write(n);</p>
<p>        Debug.write(l);</p>
<p>        baseNode.link(n,l);</p>
<p>        n.link(baseNode,l);</p>
<p>        canvas.allNodes.push(n);</p>
<p>    }</p>
<p>    canvas.allNodes.push(baseNode);</p>
<p>    oldnode = baseNode;</p>
<p>    }</p>
<p>    ]]></p>
<p><&#47;method></p>
<p><!&acirc;&euro;&ldquo; GLobal mouse tracker &acirc;&euro;&ldquo;></p>
<p><text name=&acirc;&euro;globalText&acirc;&euro; resize=&acirc;&euro;true&acirc;&euro;></p>
<p>    <attribute name=&acirc;&euro;x1&acirc;&euro;&sup3;&#47;></p>
<p>        <attribute name=&acirc;&euro;y1&acirc;&euro;&sup3;&#47;></p>
<p>            <attribute name=&acirc;&euro;x2&acirc;&euro;&sup3;&#47;></p>
<p>                <attribute name=&acirc;&euro;y2&acirc;&euro;&sup3;&#47;></p>
<p>                    <handler name=&acirc;&euro;onmousedown&acirc;&euro; reference=&acirc;&euro;LzGlobalMouse&acirc;&euro;></p>
<p>                        &#47;&#47; this.setText(&acirc;&euro;Mousedown &acirc;&euro; + getMouse(&acirc;&euro;&trade;x') + &acirc;&euro; &acirc;&euro; + getMouse(&acirc;&euro;&trade;y'));</p>
<p>                        this.x1 = getMouse(&acirc;&euro;&trade;x');</p>
<p>                        this.y1 = getMouse(&acirc;&euro;&trade;y');</p>
<p>                    <&#47;handler></p>
<p>                    <handler name=&acirc;&euro;onmouseup&acirc;&euro; reference=&acirc;&euro;LzGlobalMouse&acirc;&euro;></p>
<p>                        <![CDATA[</p>
<p>                        &#47;&#47;this.setText("Mouseup " + getMouse('x') + " " + getMouse('y'));</p>
<p>                        this.x2 = getMouse('x');</p>
<p>                        this.y2 = getMouse('y');</p>
<p>                        var blurThese = new Array();</p>
<p>                        for (n in canvas.nodeCanvas.subviews) {</p>
<p>                            &#47;&#47;Debug.write(x1,y1,x2,y2);</p>
<p>                            &#47;&#47;Debug.write(canvas.nodeCanvas.subviews[n].x,canvas.nodeCanvas.subviews[n].width,canvas.nodeCanvas.subviews[n].y,canvas.nodeCanvas.subviews[n].height);</p>
<p>                            if (canvas.nodeCanvas.subviews[n].x > this.x1</p>
<p>                            && canvas.nodeCanvas.subviews[n].x + canvas.nodeCanvas.subviews[n].width < this.x2</p>
<p>                            && canvas.nodeCanvas.subviews[n].y > this.y1</p>
<p>                            && canvas.nodeCanvas.subviews[n].y + canvas.nodeCanvas.subviews[n].height < this.y2</p>
<p>                            ){</p>
<p>                            blurThese.push(canvas.nodeCanvas.subviews[n]);</p>
<p>                            }</p>
<p>                        }</p>
<p>                        &#47;&#47; Finish up and mark these as a group&acirc;&euro;&brvbar;..</p>
<p>                        if (blurThese.length > 1) {</p>
<p>                            var hide = new nodeGroup();</p>
<p>                            hide.addNodes(blurThese);</p>
<p>                        }</p>
<p>                        ]]></p>
<p>                    <&#47;handler></p>
<p><&#47;text></p>
<p><script></p>
<p>    <![CDATA[</p>
<p>    function randomColor() {</p>
<p>        var array = new Array("f", "e", "d", "c", "b", "a", "9", "8", "7", "6", "5", "4", "3", "2", "1");</p>
<p>        var endHex = "0x";</p>
<p>        for (var i = 0; i < 6; i++) {</p>
<p>            endHex += array[Math.round(Math.random() * array.length)]; &#47;&#47; and each time add a new character to the returned color.</p>
<p>        }</p>
<p>        return endHex;</p>
<p>    }</p>
<p>    &#47;&#47; Find things in Arrays&acirc;&euro;&brvbar;</p>
<p>    Array.prototype.find = function(searchStr) {</p>
<p>        var returnArray = false;</p>
<p>        for (i = 0; i < this.length; i++) {</p>
<p>            if (typeof(searchStr) == &acirc;&euro;&tilde;<br />
            function&acirc;&euro;&trade;)<br />
        {</p>
<p>            if (searchStr.test(this[i])) {</p>
<p>                if (!returnArray) {<br />
                    returnArray = []<br />
                }</p>
<p>                returnArray.push(i);</p>
<p>            }</p>
<p>        }<br />
        else<br />
        {</p>
<p>            if (this[i] === searchStr) {</p>
<p>                if (!returnArray) {<br />
                    returnArray = []<br />
                }</p>
<p>                returnArray.push(i);</p>
<p>            }</p>
<p>        }</p>
<p>        }</p>
<p>        return returnArray;</p>
<p>    }</p>
<p>    &#47;&#47; Array.unique( strict ) - Remove duplicate values</p>
<p>    Array.prototype.unique = function(b) {</p>
<p>        var a = [], i, l = this.length;</p>
<p>        for (i = 0; i < l; i++) {</p>
<p>            if (a.indexOf(this[i], 0, b) < 0) {<br />
                a.push(this[i]);<br />
            }</p>
<p>        }</p>
<p>        return a;</p>
<p>    };</p>
<p>    &#47;&#47; Array.indexOf( value, begin, strict ) - Return index of the first element that matches value</p>
<p>    Array.prototype.indexOf = function(v, b, s) {</p>
<p>        for (var i = +b || 0, l = this.length; i < l; i++) {</p>
<p>            if (this[i] === v || s && this[i] == v) {<br />
                return i;<br />
            }</p>
<p>        }</p>
<p>        return -1;</p>
<p>    };</p>
<p>    ]]></p>
<p><&#47;script><br />
<&#47;canvas></p>
<p><&#47;pre></p>
