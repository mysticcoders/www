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
wordpress_id: 78
wordpress_url: http://wicketbyexample.com/?p=78
date: '2009-08-07 17:08:16 +0000'
date_gmt: '2009-08-08 00:08:16 +0000'
tags: []
comments: true
---
A great contribution from <a href="http://www.komuso.cz/" target="_blank">Vit Rozkovec</a> gives us a Wicket Behavior that renders a mailto link for an email address based model.<a id="more"></a><a id="more-78"></a>

``` java
/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package cz.newforms.wicket.behavior;

import org.apache.wicket.Component;
import org.apache.wicket.behavior.AbstractBehavior;

/**
 * Behavior that encapsulates model object into mailto: link.
 *
 * @author Vit Rozkovec
 */
public class EmailBehavior extends AbstractBehavior
{

	/**
	 * Construct.
	 */
	public EmailBehavior()
	{
	}

	/**
	 * @see org.apache.wicket.behavior.AbstractBehavior#beforeRender(org.apache.wicket.Component)
	 */
	@Override
	public void beforeRender(Component component)
	{
		super.beforeRender(component);
		component.getResponse().write(
			"<a href='mailto:" + component.getDefaultModelObjectAsString() + "'>");
	}

	/**
	 * @see org.apache.wicket.behavior.AbstractBehavior#onRendered(org.apache.wicket.Component)
	 */
	@Override
	public void onRendered(Component component)
	{
		super.onRendered(component);
		component.getResponse().write("</a>");
	}

}
```
