---
layout: post
status: publish
published: true
title: A mailto behavior for your model
author:
  display_name: kinabalu
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
author_login: kinabalu
author_email: andrew@mysticcoders.com
author_url: http://www.mysticcoders.com
excerpt: A great contribution from <a href="http://www.komuso.cz/" target="_blank">Vit
  Rozkovec</a> gives us a Wicket Behavior that renders a mailto link for an email
  address based model.
wordpress_id: 78
wordpress_url: http://wicketbyexample.com/?p=78
date: '2009-08-07 17:08:16 +0000'
date_gmt: '2009-08-08 00:08:16 +0000'
categories:
- Apache Wicket
tags: []
comments: []
---
A great contribution from <a href="http://www.komuso.cz/" target="_blank">Vit Rozkovec</a> gives us a Wicket Behavior that renders a mailto link for an email address based model.<a id="more"></a><a id="more-78"></a>

<pre lang="java" colla="+">
/*<br />
 * Licensed to the Apache Software Foundation (ASF) under one or more<br />
 * contributor license agreements.  See the NOTICE file distributed with<br />
 * this work for additional information regarding copyright ownership.<br />
 * The ASF licenses this file to You under the Apache License, Version 2.0<br />
 * (the "License"); you may not use this file except in compliance with<br />
 * the License.  You may obtain a copy of the License at<br />
 *<br />
 *      http://www.apache.org/licenses/LICENSE-2.0<br />
 *<br />
 * Unless required by applicable law or agreed to in writing, software<br />
 * distributed under the License is distributed on an "AS IS" BASIS,<br />
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br />
 * See the License for the specific language governing permissions and<br />
 * limitations under the License.<br />
 */<br />
package cz.newforms.wicket.behavior;

import org.apache.wicket.Component;<br />
import org.apache.wicket.behavior.AbstractBehavior;

/**<br />
 * Behavior that encapsulates model object into mailto: link.<br />
 *<br />
 * @author Vit Rozkovec<br />
 */<br />
public class EmailBehavior extends AbstractBehavior<br />
{

	/**<br />
	 * Construct.<br />
	 */<br />
	public EmailBehavior()<br />
	{<br />
	}

	/**<br />
	 * @see org.apache.wicket.behavior.AbstractBehavior#beforeRender(org.apache.wicket.Component)<br />
	 */<br />
	@Override<br />
	public void beforeRender(Component component)<br />
	{<br />
		super.beforeRender(component);<br />
		component.getResponse().write(<br />
			"<a href='mailto:" + component.getDefaultModelObjectAsString() + "'>");<br />
	}

	/**<br />
	 * @see org.apache.wicket.behavior.AbstractBehavior#onRendered(org.apache.wicket.Component)<br />
	 */<br />
	@Override<br />
	public void onRendered(Component component)<br />
	{<br />
		super.onRendered(component);<br />
		component.getResponse().write("</a>");<br />
	}

}<br />
</pre>

