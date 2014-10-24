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
excerpt: Does your new <a href="http://wicket.apache.org" target="_blank">Wicket</a>
  app scream for needing a Google Suggest type component?  <a href="http://grepcode.com/file/repo1.maven.org$maven2@org.apache.wicket$wicket-extensions@1.3.6@org$apache$wicket$extensions$ajax$markup$html$autocomplete$AutoCompleteTextField.java#AutoCompleteTextField"
  target="_blank">AutoCompleteTextField</a> in the wicket-extensions package is what
  you need to fill that void!
wordpress_id: 64
wordpress_url: http://wicketbyexample.com/?p=64
date: '2009-07-29 09:27:01 +0000'
date_gmt: '2009-07-29 16:27:01 +0000'
tags: []
---
<p>Does your new <a href="http://wicket.apache.org" target="_blank">Wicket</a> app scream for needing a Google Suggest type component?  <a href="http://grepcode.com/file/repo1.maven.org$maven2@org.apache.wicket$wicket-extensions@1.3.6@org$apache$wicket$extensions$ajax$markup$html$autocomplete$AutoCompleteTextField.java#AutoCompleteTextField" target="_blank">AutoCompleteTextField</a> in the wicket-extensions package is what you need to fill that void!<a id="more"></a><a id="more-64"></a></p>
<p>Simply add this field to your form, give it a model, and override the <a href="http://grepcode.com/file/repo1.maven.org$maven2@org.apache.wicket$wicket-extensions@1.3.6@org$apache$wicket$extensions$ajax$markup$html$autocomplete$AutoCompleteTextField.java#AutoCompleteTextField.getChoices(java.lang.String)" target="_blank">getChoices</a> method with your own implementation thas passes back an iterator of results.</p>
<pre lang="java" colla="+">
            final AutoCompleteTextField field = new AutoCompleteTextField("searchField", mySearchModel) {
                @Override
                protected Iterator<string> getChoices(String input) {
                    if (Strings.isEmpty(input)) {
                        List<string> emptyList = Collections.emptyList();
                        return emptyList.iterator();
                    }

                    List<string> keyMatches = new ArrayList<string>(10);

                    return myService.searchMatches(keyMatches).iterator();
                }
            };
</pre>
