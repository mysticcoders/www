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

-- Note --
LEMP is an acronym that stands for Linux, MySQL, PHP and eNGINeX, see?  they made engine with an X on the end, how cute is that?  Those PHP guys are so fancy

As with all things, this is just one of the ways to do this, and we use it.

## Installation
Getting Docker on your system will be based heavily on the operating system.  Docker // fill this in with details about Docker, the installation, etc

### boot2docker
Some very smart folks have been using Vagrant to solve the very interesting dilemma of OSX not being Linux.  boot2docker sets up a very tiny Linux and

### A base image
`Dockerfile`'s can be inherited, and it lessens the work done to spin up subsequent containers.  With that in mind, a base image to use is recommended.  

{% highlight docker %}
# base image
#
FROM                    debian:jessie
MAINTAINER              Mystic Coders, LLC

USER                    root

RUN                     apt-get update && apt-get install -y \
                        git \
                        build-essential
{% endhighlight docker %}

### A MySQL container
Interesting content goes here

{% highlight docker %}
FROM                    mystic/baseimage
MAINTAINER              Mystic Coders, LLC

# *** OS-level packages ***
RUN                     apt-get install -y mysql-server

# Configure MySQL
RUN                     sed -i -e"s/^bind-address\s*=\s*127.0.0.1/bind-address = 0.0.0.0/" /etc/mysql/my.cnf

ADD                     lfg.sql /tmp/

RUN /usr/sbin/mysqld & \
    sleep 10s &&\
    echo "GRANT ALL ON *.* TO admin@'%' IDENTIFIED BY 'changeme' WITH GRANT OPTION; FLUSH PRIVILEGES" | mysql &&\
    mysql < /tmp/lfg.sql

EXPOSE 3306

CMD ["/usr/bin/mysqld_safe"]
{% endhighlight docker %}

### PHP using FastCGI container
Interesting content goes here

{% highlight docker %}
FROM                    mystic/baseimage
MAINTAINER              Mystic Coders, LLC

# ENV                     DEBIAN_FRONTEND noninteractive

# Add unstable sources for debian
RUN                     echo "deb http://cdn.debian.net/debian unstable main" > /etc/apt/sources.list.d/unstable.list

RUN                     apt-get update && apt-get install -y \
                        lib32z1-dev \
                        libxml2-dev \
                        libxslt1-dev \
                        antiword \
                        poppler-utils \
                        php5-cli \
                        php5-fpm \
                        php5-mysql \
                        php5-curl \
                        php5-gd \
                        php5-mcrypt \
                        phantomjs

# the kriansa/H2P code expects phantomjs is installed in /usr/local/bin
RUN                     ln -s /usr/bin/phantomjs /usr/local/bin/phantomjs

RUN                     sed -i '/daemonize /cdaemonize = no' /etc/php5/fpm/php-fpm.conf
RUN                     sed -i '/display_errors /cdisplay_errors = On' /etc/php5/fpm/php.ini
RUN                     sed -i '/^;log_level/clog_level = debug' /etc/php5/fpm/php-fpm.conf

RUN                     sed -i '/error_reporting /cerror_reporting = E_ALL' /etc/php5/fpm/php-fpm.conf
RUN                     sed -i '/^listen = /clisten = 0.0.0.0:9000' /etc/php5/fpm/pool.d/www.conf
RUN                     sed -i '/^listen.allowed_clients/c;listen.allowed_clients =' /etc/php5/fpm/pool.d/www.conf
RUN                     sed -i '/^;catch_workers_output/ccatch_workers_output = yes' /etc/php5/fpm/pool.d/www.conf
RUN                     sed -i '/^chdir = \//cchdir = \/var\/www\/' /etc/php5/fpm/pool.d/www.conf

EXPOSE                  9000

WORKDIR                 /var/www
ADD                     src/ /var/www

CMD                     ["/usr/sbin/php5-fpm"]
{% endhighlight docker %}

### nginx container
Interesting content goes here

{% highlight docker %}
FROM                    mystic/baseimage
MAINTAINER              Mystic Coders, LLC

#
# *** OS-level packages ***
#

RUN                     apt-get -y update && apt-get install -y \
                        nginx

# Configure nginx

# End Nginx-PHP

# RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ADD                     default /etc/nginx/sites-available/
RUN                     echo "daemon off;" >> /etc/nginx/nginx.conf

ADD                     nginx.sh /usr/local/bin/
RUN                     chmod +x /usr/local/bin/nginx.sh

WORKDIR                 /var/www
ADD                     src/ /var/www

EXPOSE 80

CMD ["/usr/local/bin/nginx.sh"]
{% endhighlight docker %}

And our `nginx.sh` executable is below

{% highlight bash %}
#!/bin/sh

sed -i "s/%fpm-ip%/$FPM_PORT_9000_TCP_ADDR/" /etc/nginx/sites-available/default

exec /usr/sbin/nginx
{% endhighlight %}

### sshfs for sharing filesystem
Docker already contains a volume mounting system to use with the host filesystem and it's containers.  The problem lies in the fact that your OSX machine, isn't the host.  The boot2docker instance is.  To overcome this we can use sshfs to mount things in the proper order.

### LiveReload and grunt watch
Awesomeness ensues

### Using Docker's ADD instead
blah blah


Ciao!