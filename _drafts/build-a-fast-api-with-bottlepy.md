---
layout: post
title:  "Building a fast API with bottle.py"
date:   2014-11-21 10:59:00
author:
  display_name: Andrew Lombardi
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
comments: true
---

There are times when you need to plan out a giant undertaking, get several engineers on board, and develop a carefully crafted API.  When you're staring down an existing python app that you need to provide access to via REST calls, there's [bottle][bottle].

Our intention here will be a simple one, how to build an API with the python microframework [bottle][bottle].

Outline:
- Installation and initial configuration
- @route's
- simple functional test for bottle.py
- configuring for CORS
- configuring for proxies and firewalls that block all but HEAD, GET, and POST
- configuring for middleware
- link off to the docker and python article

Ciao!

[bottle]: http://bottlepy.org