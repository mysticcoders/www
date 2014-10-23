---
layout: post
status: publish
published: true
title: Using the AutoCompleteTextField component
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: Does your new <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Wicket<&#47;a>
  app scream for needing a Google Suggest type component?  <a href="http:&#47;&#47;grepcode.com&#47;file&#47;repo1.maven.org$maven2@org.apache.wicket$wicket-extensions@1.3.6@org$apache$wicket$extensions$ajax$markup$html$autocomplete$AutoCompleteTextField.java#AutoCompleteTextField"
  target="_blank">AutoCompleteTextField<&#47;a> in the wicket-extensions package is
  what you need to fill that void!
wordpress_id: 64
wordpress_url: http://wicketbyexample.com/?p=64
date: '2009-07-29 09:27:01 +0000'
date_gmt: '2009-07-29 16:27:01 +0000'
categories:
- Apache Wicket
tags: []
comments:
- id: 3469
  author: Dani from Poland
  author_email: dani@anglopolish.com
  author_url: ''
  date: '2010-03-18 04:39:24 +0000'
  date_gmt: '2010-03-18 11:39:24 +0000'
  content: Good, but not very exploring article. All this can be found on Wicket page.
- id: 3470
  author: kinabalu
  author_email: andrew@mysticcoders.com
  author_url: http://www.mysticcoders.com
  date: '2010-03-18 08:39:34 +0000'
  date_gmt: '2010-03-18 15:39:34 +0000'
  content: That's completely okay, duplication just provides more avenues for folks
    to find the information needed to learn.
---
<p>Does your new <a href="http:&#47;&#47;wicket.apache.org" target="_blank">Wicket<&#47;a> app scream for needing a Google Suggest type component?  <a href="http:&#47;&#47;grepcode.com&#47;file&#47;repo1.maven.org$maven2@org.apache.wicket$wicket-extensions@1.3.6@org$apache$wicket$extensions$ajax$markup$html$autocomplete$AutoCompleteTextField.java#AutoCompleteTextField" target="_blank">AutoCompleteTextField<&#47;a> in the wicket-extensions package is what you need to fill that void!<a id="more"></a><a id="more-64"></a></p>
<p>Simply add this field to your form, give it a model, and override the <a href="http:&#47;&#47;grepcode.com&#47;file&#47;repo1.maven.org$maven2@org.apache.wicket$wicket-extensions@1.3.6@org$apache$wicket$extensions$ajax$markup$html$autocomplete$AutoCompleteTextField.java#AutoCompleteTextField.getChoices(java.lang.String)" target="_blank">getChoices<&#47;a> method with your own implementation thas passes back an iterator of results.</p>
<pre lang="java" colla="+">
            final AutoCompleteTextField field = new AutoCompleteTextField("searchField", mySearchModel) {<br />
                @Override<br />
                protected Iterator<string> getChoices(String input) {<br />
                    if (Strings.isEmpty(input)) {<br />
                        List<string> emptyList = Collections.emptyList();<br />
                        return emptyList.iterator();<br />
                    }</p>
<p>                    List<string> keyMatches = new ArrayList<string>(10);</p>
<p>                    return myService.searchMatches(keyMatches).iterator();<br />
                }<br />
            };<br />
<&#47;pre></p>
