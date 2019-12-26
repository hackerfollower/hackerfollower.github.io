---
layout: post
title:  SSH无密码登录设置
date:   2012-11-27 22:49:13 +0800
categories: Linux
tags: [it, Linux, shell, ssh]
description: 介绍了在服务器端信任客户端公钥，不需要输入密码即可登录远程服务器
---


# 0. 引言

现在云服务大行其道，很多时候一个产品上线需要多个服务器来支撑，在这些服务器之间跳转以及同步文件时，利用ssh相关命令是一种非常简便的方式。本文就介绍了如何实现服务器之间的免登陆。
<!-- more -->

# 1. 步骤

下面的例子介绍了该过程的几个步骤：

1.1 在188上产生公钥和密钥

1.2 将188的公钥发送给189

1.3 189将此公钥设置为可信的

这样188在访问189的时候就不需要输入用户名和密码了

# 2. 示例

{% highlight bash %}
[lh@188 ~]$ ssh-keygen -t rsa 
Generating public/private rsa key pair.
Enter file in which to save the key (/home/lh/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/lh/.ssh/id_rsa.
Your public key has been saved in /home/lh/.ssh/id_rsa.pub.
The key fingerprint is:
e7:90:69:80:3c:e1:e3:ff:17:a1:8f:cf:5f:ac:56:53 lh@188
The key’s randomart image is:
+--[ RSA 2048]----+
|    .            |
|   o o           |
|    * .          |
|   . o . o.     E|
|    .   S...   . |
|     . ..+.  .o  |
|      .  o.. .o. |
|       ...o .o   |
|        .oooo    |
+-----------------+
[lh@188 ~]$ cd .ssh/
[lh@188 .ssh]$ ls -al 
total 20
drwx------  2 lh maintain 4096 Dec 27 16:11 .
drwx------. 6 lh maintain 4096 Dec 27 16:04 ..
-rw-------  1 lh maintain 1671 Dec 27 16:11 id_rsa
-rw-r--r--  1 lh maintain  408 Dec 27 16:11 id_rsa.pub
-rw-r--r–-. 1 lh maintain 1185 Dec 27 09:48 known_hosts

[lh@188 ~]$ scp ~/.ssh/id_rsa.pub lh@192.168.0.189:/tmp/id_rsa.pub_188 
lh@192.168.0.189’s password:
id_rsa.pub                                                         100%  400     0.4KB/s   00:00
[lh@188 ~]$ ssh lh@192.168.0.189 
lh@192.168.0.189’s password:
Last login: Thu Dec 27 09:44:30 2012 from 192.168.0.188
[lh@189 ~]$ mkdir .ssh
[lh@189 ~]$ cat /tmp/id_rsa.pub_188 >> ~/.ssh/authorized_keys 
{% endhighlight %}

（完）
