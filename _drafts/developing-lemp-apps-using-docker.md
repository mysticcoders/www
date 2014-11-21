---
layout: post
title:  "Developing LEMP apps using Docker"
date:   2014-11-21 10:59:00
author:
  display_name: Andrew Lombardi
  login: kinabalu
  email: andrew@mysticcoders.com
  url: http://www.mysticcoders.com
comments: true
---

It's all the rage, and there's a good reason for it;  Docker is pretty great.  A project that Mystic took on recently involved an existing PHP-based application using MySQL as the database layer.  We chose that opportunity to shelve our existing Vagrant-only based way of building out the stack to use for development, and instead picked up Docker to take it for a spin.

## Installation
Getting Docker on your system will be based heavily on the OS.  Docker 

### boot2docker
Some very smart folks have been using Vagrant to solve the very interesting dilemma of OSX not being Linux.  boot2docker sets up a very tiny Linux and

### A MySQL container
Interesting content goes here

### PHP using FastCGI container
Interesting content goes here

### nginx container
Interesting content goes here

### sshfs for sharing filesystem
Docker already contains a volume mounting system to use with the host filesystem and it's containers.  The problem lies in the fact that your OSX machine, isn't the host.  The boot2docker instance is.  To overcome this we can use sshfs to mount things in the proper order.

### LiveReload and grunt watch
Awesomeness ensues

### Using Docker's ADD instead
blah blah


Ciao!