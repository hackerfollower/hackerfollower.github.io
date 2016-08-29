---
layout: post
title: Jekyll主题 &bull;JekyllPure
description: "Static Markdown (or Textile), Liquid, HTML & CSS go in. Static sites come out ready for deployment. Jekyll template guide,JekyllPure是一个基于jekyll主题,集成了各种方便的插件,以及简洁的页面"
category: Project
codeimg: "http://liyouhai.qiniudn.com/opensource-jekyll-theme-jekyllpure-codeimg.png"
avatarimg: "/images/apple-touch-icon.png"
tags : [ Jekyll ,静态博客,主题]
---

![](http://liyouhai.qiniudn.com/2014-05-11-opensource-jekyll-theme-jekyllpure.jpg/top )

> **JekyllPure**版本V1.0.0 <br>
> **最后更新**:2014-09-19 16:45
<!-- more -->


Demo:[曾经不知你好'Blog](http://liyouhai.com/)

Github:[JekyllPure'github](https://github.com/liyouhai/JekyllPure)

##版本更新
<hr>
|版本   | 时间  | 说明|
| :-------- | :--------| :------ |
| V0.4.2| 2014-05-12 22:00|第一个版本  |
|V0.5.0|2014-05-27 16:00|1.修复主页分页.标签与分类URL.<br>2.Font Awesome更新为4.1.0<br> 3.替换一些小图标为Font<br> 4.blockquote下的li增加数字前缀样式<br>5.一些导航html移到Public文件夹<br>|
|V1.0.0|2014-09-19 16:45:04| 1.Pure正式为Pure v0.5.0 <br> 2.毫无技术的使用了Pure官方的blog布局 <br> 3.兼容性全面支持ie <br> 4.Font Awesome更新为4.2.0 兼容ie7<br>  5. jquery降级到1.7.2 为了兼容ie <br> 6.jwplayer加载不需要远程获取js<br> 7.多说js也调用本地js <br>  8.index.js增加主题颜色随着星期变换.可删除<br> 9.以后小修改请参照博客源码<br>10.欢迎随便修改使用.有问题留言|

##使用技术
<hr>
|项目基于   | 说明  | 版本 |
| :-------- | :--------| :--: |
|[Jekyll](http://jekyllrb.com/)  |静态博客| Version 2.5.2|
|[Pure](http://purecss.io/)     | 雅虎前端框架|Version 0.5.0|
|[Fontawesome](http://fontawesome.io/)     |字体图标| Version 4.2.0|
|[Jquery](http://jquery.com/)|javascript|Version 2.1.0|
|[NProgress.js](http://ricostacruz.com/nprogress/)|页面顶部加载条|Version 0.1.6|
|[TOC.js](http://projects.jga.me/toc)|文章目录生成|Version 0.3.2|
|[fancyBox](http://fancybox.net/)|图片盒子|Version 2.1.5|
|[syntaxhighlighter](http://alexgorbatchev.com/SyntaxHighlighter/)|代码高亮|Version 3.0.83|
|[qrcode](http://jeromeetienne.github.io/jquery-qrcode/)|网址生成二维码|Version 0.0.1|
|[tagcloud.js](http://addywaddy.github.io/jquery.tagcloud.js/)|标签云|Version 0.0.1|
|[Jwplayer](http://www.jwplayer.com/)|HTML5视频插件|Version 6.2.0|

## 环境搭建
<hr>
0. 小前提

1. 需了解使用版本控制Git

2. 需了解jekyll

3. 需了解使用Github、或GitCafe

4. 对html等熟悉.或程序员、或适合折腾的人

Mac/Linux下:

请使用如下命令（其中 gem 是 [Ruby](https://www.ruby-lang.org/)  的包管理工具）安装 jekyll（如果遇到权限问题请在前面加 sudo）：

    gem install jekyll


#### <i class="fa fa-windows"></i>window 安装步骤


|基于   | 版本  |  安装包| 安装设置|
| :-------- | :--: | --: |:--: |
|Ruby  |2.0|  [ruby-2.0.0-p481-i386-mingw32.7z](http://dl.bintray.com/oneclick/rubyinstaller/ruby-2.0.0-p481-i386-mingw32.7z)| 环境变量 |
|DevKit|1.9| [DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe](http://cdn.rubyinstaller.org/archives/devkits/DevKit-mingw64-32-4.7.2-20130224-1151-sfx.exe)|解压|
|Python |2.7| [python-2.7.8.msi](https://www.python.org/ftp/python/2.7.8/python-2.7.8.msi)|环境变量|
|jekyll | 2.3.4| gem install jekyll|完成以上|
|wdm | 0.1.0|gem install wdm(多数人运行错误都是没安装这依赖)|最后安装|

环境变量：
`C:\OpenSources\lib\Jekyll\ruby\bin;C:\OpenSources\lib\Jekyll\DevKit\bin;C:\OpenSources\lib\Jekyll\DevKit\mingw\bin`

<pre class='brush: ruby'>

# 解压DevKit 然后进入文件夹
cd C:\OpenSources\jekyll\DevKit

# 初始化DevKit 配置文件(记得ruby要加入环境变量)
C:\OpenSources\jekyll\DevKit>ruby dk.rb init
Initialization complete! Please review and modify the auto-generated
'config.yml' file to ensure it contains the root directories to all
of the installed Rubies you want enhanced by the DevKit.

# 安装DevKit
C:\OpenSources\jekyll\DevKit>ruby dk.rb install
[INFO] Updating convenience notice gem override for 'C:/OpenSources/jekyll/ruby'
[INFO] Installing 'C:/OpenSources/jekyll/ruby/lib/ruby/site_ruby/devkit.rb'

# 查看是否安装gem成功
C:\OpenSources\jekyll\DevKit>gem --version
2.0.14

# RubyGems 镜像换为淘宝、防止下载包出错(官网https://ruby.taobao.org/)
# 移除旧地址
C:\OpenSources\jekyll\DevKit>gem sources --remove https://rubygems.org/
https://rubygems.org/ removed from sources
# 更新为淘宝镜像
C:\OpenSources\jekyll\DevKit>gem sources -a https://ruby.taobao.org/
https://ruby.taobao.org/ added to sources
# 查看是否只有一条镜像地址
C:\OpenSources\jekyll\DevKit>gem sources -l
*** CURRENT SOURCES ***
https://ruby.taobao.org/

# 安装jekyll
C:\OpenSources\jekyll\DevKit>gem install jekyll
Fetching: liquid-2.6.1.gem (100%)
Successfully installed liquid-2.6.1
Fetching: kramdown-1.4.1.gem (100%)
Successfully installed kramdown-1.4.1
Fetching: mercenary-0.3.4.gem (100%)
Successfully installed mercenary-0.3.4
----------此处省略xxx---------
Installing ri documentation for jekyll-watch-1.1.1
Parsing documentation for fast-stemmer-1.0.2
unable to convert "\x90" from ASCII-8BIT to UTF-8 for lib/stemmer.so, skipping
Installing ri documentation for fast-stemmer-1.0.2
Parsing documentation for classifier-reborn-2.0.1
Installing ri documentation for classifier-reborn-2.0.1
Parsing documentation for jekyll-2.4.0
Installing ri documentation for jekyll-2.4.0
31 gems installed

# 查看是否安装jekyll成功
C:\OpenSources\jekyll\DevKit>jekyll -version
jekyll 2.4.0

# 继续安装依赖包
C:\OpenSources>gem install wdm
Fetching: wdm-0.1.0.gem (100%)
Temporarily enhancing PATH to include DevKit...
Building native extensions.  This could take a while...
Successfully installed wdm-0.1.0
Parsing documentation for wdm-0.1.0
unable to convert "\x90" from ASCII-8BIT to UTF-8 for lib/wdm_ext.so, skipping
Installing ri documentation for wdm-0.1.0
1 gem installed

# 继续安装依赖包代码高亮
C:\OpenSources\liyouhai>gem install rdiscount
Fetching: rdiscount-2.1.7.1.gem (100%)
Temporarily enhancing PATH to include DevKit...
Building native extensions.  This could take a while...
Successfully installed rdiscount-2.1.7.1
Parsing documentation for rdiscount-2.1.7.1
unable to convert "\x90" from ASCII-8BIT to UTF-8 for lib/rdiscount.so, skipping

Installing ri documentation for rdiscount-2.1.7.1
1 gem installed
</pre>

<i class="fa fa-warning"></i> 如果运行错误.安装以下步骤
<pre class='brush: ruby'>
# 删除86版本的yajl
C:\OpenSources\liyouhai>gem uninstall yajl-ruby
Successfully uninstalled yajl-ruby-1.1.0-x86-mingw32

# 安装指定版本的yajl
C:\OpenSources\liyouhai>gem install yajl-ruby -v 1.1.0 --platform=ruby
Fetching: yajl-ruby-1.1.0.gem (100%)
Temporarily enhancing PATH to include DevKit...
Building native extensions.  This could take a while...
Successfully installed yajl-ruby-1.1.0
Parsing documentation for yajl-ruby-1.1.0
unable to convert "\x90" from ASCII-8BIT to UTF-8 for lib/yajl/yajl.so, skipping

Installing ri documentation for yajl-ruby-1.1.0
1 gem installed


# 最终安装pyhton 并且加入环境变量
</pre>

####Windows其他安装方法②:

官方对 *winodws* 的支持程度很低，推荐使用 [Building portable Jekyll for Windows](http://www.madhur.co.in/blog/2013/07/20/buildportablejekyll.html)，附上网盘地址方便大家下载：[PortableJekyll 1.3.0[百度网盘]](http://pan.baidu.com/s/1dDqtzUT)

下边以 PortableJekyll 的解压目录为 `e:\jekyll` 介绍环境变量的配置：

1. 在环境变量中新建变量：
	JEKYLL_HOME 取值为 `e:\jekyll`

2. 为 PATH 变量添加如下内容：
	`%JEKYLL_HOME%\ruby\bin;%JEKYLL_HOME%\devkit\bin;%JEKYLL_HOME%\git\bin;%JEKYLL_HOME%\Python\App;%JEKYLL_HOME%\devkit\mingw\bin;%JEKYLL_HOME%\curl\bin`

4. 完成 jekyll 配置后，通过如下命令检查是否配置成功：`jekyll -h`

5. 以上为百度[FEX](https://github.com/fex-team/fex-team.github.io)提供的方法、本人使用的是`Ruby200-x64`原始安装、Jekyll新版本使用基本完美

----------



<i class="fa fa-play-circle-o"></i>完成 jekyll 的安装后，需要将[本项目](https://github.com/liyouhai/JekyllPure) clone 至本地环境，或Download zip按钮<br>
*cmd*下*cd*进去目录目录运行如下命令，就能在 localhost:4000 中预览了：

    jekyll serve -watch (或jekyll serve -w

关于Jekyll:

jekyll是一个简单的免费的Blog生成工具，类似WordPress。但是和WordPress又有很大的不同，原因是jekyll只是一个生成静态网页的工具，不需要数据库支持。但是可以配合第三方服务,例如多说评论。最关键的是jekyll可以免费部署在Github上，而且可以绑定自己的域名

1. Jekyll官网 [http://jekyllrb.com/](http://jekyllrb.com/)

2. Jekyll中文网 [http://jekyllcn.com/](http://jekyllcn.com/),

3. Jekyll Themes 主题 [http://jekyllthemes.org/](http://jekyllthemes.org/),

4. **Google搜索**site:github.io [github.io](http://203.208.46.148/#newwindow=1&q=site:github.io).

5. 如果你熟悉html等.完全可以自己弄首页与内容页模板就可以搭建博客了、也可以使用本主题.请尊重作者,保留footer主题地址


## 使用说明
<hr>
- 大致浏览JekyllPure代码的结构、能方便理解以下的技巧
- 更改自己的多说id `_includes\duoshuo.html --> var duoshuoQuery = {short_name:"你申请的ID"};`
- 全文搜索功能[tapirgo](http://tapirgo.com/)填写邮箱和网站rss地址生成.需要提前部署一次到远程仓库.返回`token`填写在`search.html`
- 发布文章`duoshuo: false` 可关闭评论
- 发布文章`avatarimg: "http://liyouhai.com/images/lindachung.jpg"` 为首页文章小头像
- url地址RESTful风格设置`permalink: 1/` 地址为`http://liyouhai.com/1`

文章发表:

在*_posts*目录下新建*2014-05-11-opensource-jekyll-theme-jekyllpure.md*文件名有规定的格式
<pre class='brush: html'>
---
layout: post     //使用哪个模板、`_layouts`下可自定义模板
title: Jekyll主题 &bull;JekyllPure
description: "文章的描述、可复制百度搜索排前的和你文章相符的描述"
category: Project    //文章的分类.看本文url就提现出来.
avatarimg: "/img/lindachung.jpg"  //首页文章题目旁边的小头像.可上传文章作者头像或者相关的图标
tags : [ 静态博客] //标签,方便搜索引擎收录 <meta name="keywords" content="静态博客"/>
---
文章正文
<!-- more --> //在首页文章内容截取的部分.后面的内容不再首页显示.
</pre>
文章插入代码:
{% highlight ruby  %}
{% raw %}  {% highlight java  %} {% endraw %}  //可填写各种语言例如ruby.javascript.css.html
       System.out.print("输出") ;
{% raw %}{% endhighlight %}{% endraw %}
{% endhighlight %}
文章的图片存放:

1.只能墙裂推荐七牛云储存.但愿伸出你援助之手我的[邀请地址](https://portal.qiniu.com/signup?code=3ldl7ior52n2q),没有副作用(本人能增加流量

2.七牛云储存提供10G的免费空间,以及每月10G的流量.存放个人博客图片最好不过了

3.本人不是打广告的、用了真心好.有各种图形处理功能.缩略图.视频存放速度也给力.还有CDN加速功能喔,你还等什么

视频播放:

可以使用`Jwplayer`插件直接在`xxxx.md`下使用以下代码.`Markdown`会直接解析运行代码.<br>(小技巧:直接输入`html`的代码如`<br>`页面会是一个换行
{% highlight html  %}
<script src="../js/min/jwplayer/jwplayer.js"></script>
<div id="videotop"></div>
<script type="text/javascript">
    jwplayer("videotop").setup({
    flashplayer: "../js/min/jwplayer/jwplayer.flash.swf",
        file:"http://liyouhai.qiniudn.com/2014-05-04-intellij-idea-guide-note.mp4",
        image: 'http://liyouhai.qiniudn.com/2014-05-04-intellij-idea-guide-note01.jpg',
        aboutlink:"http://liyouhai.com",
		width: '743',
        height: '360',
        stretching: "fill",
    });
</script>
{% endhighlight %}

音频播放:
直接黏贴音频地址就可以显示了
{% highlight html  %}
<script type="text/javascript" src="http://www.xiami.com/widget/player-single?uid=0&sid=1771944809&mode=js"></script>
{% endhighlight %}



##Markdown
<hr>
![](http://liyouhai.qiniudn.com/2014-04-04-Markdown-document-StackEdit-css.jpg/top"StackEdit编译器截图")
> **Markdown**:很多人用它写博客.可读性高.写作方便.表格、脚注、展现的非常棒<br>
> **StackEdit**：是一个开放源码免费使用的 MarkDown 的在线编辑器

看到在线编辑[StackEdit](https://stackedit.io)很漂亮，很清爽.动了心.把它的CSS样式抄过来.改了背景色.一些小样式.发现它小图标是用[<i class="fa fa-external-link"></i> fontawesome](http://fontawesome.io/)字体图标


####Fontawesome使用
**Fontawesome** 一款字体小图标.<i class="fa fa-ambulance"></i>通过`<i class="fa fa-ambulance"></i>`调用.官网还有更多的图标样式.我们只需要增加你所喜欢图标的class.前端`bootstrap`框架也是运用了这个字体库

<i class="fa fa-file-text-o"></i> 官网下载后.加入css和font文件夹到服务器.网页载入CSS文件

{% highlight html %}
<link rel="stylesheet" href="/css/font-awesome.min.css">
{% endhighlight %}


<i class="fa fa-paperclip"></i> fontawesome4.0.3版本IE7兼容下载
{% highlight html %}
<!--[if IE 7]>
<link rel="stylesheet" href="/css/font-awesome-ie7.css"><![endif]-->
{% endhighlight %}
<i class="fa fa-arrow-circle-o-right"></i>尽情添加你的小图标吧

<i class="fa fa-rub"></i>
<i class="fa fa-ruble"></i>
<i class="fa fa-rouble"></i>
<i class="fa fa-pagelines"></i>
<i class="fa fa-stack-exchange"></i>
<i class="fa fa-arrow-circle-o-left"></i>
<i class="fa fa-caret-square-o-left"></i>
<i class="fa fa-toggle-left"></i>
<i class="fa fa-dot-circle-o"></i>
<i class="fa fa-wheelchair"></i>
<i class="fa fa-vimeo-square"></i>
<i class="fa fa-try"></i>
<i class="fa fa-turkish-lira"></i>
<i class="fa fa-plus-square-o"></i>


----------




####Markdown语法

显示图片：`![](url)`

超级连接：`[<i class=""></i> text](url)`

显示本url：`[url][1]`:

文字加粗：`**Text**`

字体斜体：`*Text*`

显示警告：<i class="label label-danger">It's time to be brave.Say I'm not afraid.Not anymore.I used to be calm</i>

显示代码：`code` 注

更多语法查看: [淘宝UED博客Markdown介绍](http://ued.taobao.com/blog/2012/07/getting-started-with-markdown/)

表格：

| Item      |    Value | Qty  |
| :-------- | --------:| :--: |
| Computer  | 1600 USD |  5   |
| Phone     |   12 USD |  12  |
| Pipe      |    1 USD | 234  |

----------
####Markdown代码高亮

**高亮：**采用的是`highlight`版本有多种.由于`pygments`生成的是以下div结构

{% highlight html %}
    <div class="highlight"><pre><code class="java">  <span class="cm">test</span>
{% endhighlight %}

这种结构颜色的定义css
{% highlight css %}
 pre .cm{color:#60a0b0}
{% endhighlight %}
不难看出`pygments`在生成代码高亮的时候自动用`<span>`标签来分割代码关键字再加以class定义,为此我找到了几款`Markdown css`的样式

####Highlight CSS的样式

> **NOTE:** Pygments online demo
>
> -  **Markdown** Demo列表 [here](http://pygments.org/demo/),
> -  **Markdown java** demo [here](http://pygments.org/demo/313289/),
> -  **Markdown html** demo [here](http://pygments.org/demo/312945/http://pygments.org/demo/312945/),
> -  **Markdown JavaScript** demo [here](http://pygments.org/demo/280629/),
> -  **Markdown css** demo [here](http://pygments.org/demo/273794/).


##Jekyll技巧
<hr>
>**jekyll**无所不能了.越来越多的开源项目的主页大多是jekyll生成托管在github.io.包括jekyll主页等<br>

小提示:如果想学习jekyll新版本增加的特性.可在源码下运行`cd C:\Ruby200-x64\lib\ruby\gems\2.0.0\gems\jekyll-2.0.2\site`

**Page域**:就是特定某篇文章范围、我们可以在发布文章的`.md`文件下.增加自己的变量.例如 `avatarimg: "任何文本内容"`在文章迭代`_layouts/post.html`使用方法为
{% highlight ruby  %}
<header class="post-header">
    <img class="post-avatar" height="48" width="48"
         src="{% raw %}{{ page.avatarimg }}{% endraw %}">
{% endhighlight %}
**Post域**:也算是公共的范围吧.例如在首页`index.html`遍历全部文章.具体哪一篇当然会有一个for循环.当然page域有的变量post也会拥有
{% highlight html  %}
{% raw %}{% for post in paginator.posts %}{% endraw %}
 <h2 class="post-title">{% raw %}{{ post.title }}{% endraw %}</h2>
  <p class="post-meta">By {% raw %}{{ post.date | date: "%m" }}{% endraw %}月{% raw %}{{ post.date | date: "%d" }}{% endraw %}日 {% raw %} {{ post.date | date: "%Y" }}{% endraw %}
  <a class="post-categorybut " href="#">{% raw %}{{ post.categories  }}{% endraw %}</a>
  <a class="post-category " href="#">{% raw %} {{ post.tags | first }}{% endraw %}</a>
  <a class="post-category " href="#"> {% raw %} {{ post.tags[1] }}{% endraw %}</a> </p></header>
  <div class="post-description">
 {% raw %}  {{ post.content | split:'<!-- more -->'| first }}{% endraw %}
   <a href="{% raw %}{{ post.url }}{% endraw %}" class="post-categorybut">阅读全文</a>
{% raw %}{% endfor %}{% endraw %}
{% endhighlight %}
我们可以遍历全部.也可以选择数组中的某个值
{% highlight ruby  %}
{% raw %} {{ post.tags[1] }}{% endraw %} 这里的数组也是从0下标开始数起
{% endhighlight %}
也可以使用过滤器
{% highlight ruby  %}
{% raw %}  {{ post.content | split:'<!-- more -->'| first }}{% endraw %}
{% endhighlight %}
以上的中文日期年月日.也是使用了过滤器!!更多的过滤器方法参照[Liquid for Designers(译)](http://yanshasha.com/2013/01/22/Liquid-for-Designers/)

我们可以让某篇博文特殊关照.例如没有评论.没有分享按钮.没有任何你想到的(来、看代码`\_layouts\post.html`
{% highlight ruby  %}
 {% raw %}{% if  page.duoshuo != false %}{% endraw %}
   {% raw %} {% include duoshuo.html %}{% endraw %}
  {% raw %}  {% endif %}{% endraw %}
{% endhighlight %}
具体使用办法只要在不想评论的文章.增加`duoshuo: false`即可关闭评论功能.默认不配置为开启
你可以为博文增加各种变量、例如指定下一页URL.上一页URL,

**site域**:应该算为全局变量吧.在`_config.yml`定义使用

##404网页
<hr>
>**网站**只需要在自己的404页面中嵌入一段简单的代码，就能通过互联网来迅速传播失踪儿童信息，从而提高找回失踪儿童的概率。失踪儿童信息来自宝贝回家寻子网。


####公益404页面接入方法?
* [腾讯公益404](http://www.qq.com/404/)
* [益云公益404](http://yibo.iyiyun.com/Index/web404)
* [本站案例](http://liyouhai.com/jfajfajflaf)

####注意事项
- 如果一个 404 页面的内容小于 512B，IE 会认为该 404 页面不够友好，在 IE 下将不会成功返回该 404 错误页面
- 以下的代码给插入了2种公益的代码。页面大小刚好够，单单加入一个会被IE浏览器报403错误
- javascript的代码插入到body里面才有效
- jekyll博客的只需要在根目录创建404.html
- 在`<head>`增加`<META HTTP-EQUIV="Refresh" CONTENT="5;URL=http://liyouhai.com/">`能五秒后跳转回首页


{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <title>网页找不到_404公益</title>
</head>
<body>
<script type="text/javascript"src="http://www.qq.com/404/search_children.js" charset="utf-8"></script>

<iframe scrolling='no' frameborder='0' src='http://yibo.iyiyun.com/js/yibo404/key/2057' width='640' height='464' style='display:block; margin:0 auto;'></iframe>
</body>
</html>

{% endhighlight %}

##其它扩展
<hr>
**微搜索**:站内搜索引擎
使用方法.参照http://doc.tinysou.com/guides/overview.html


##本文日志
----------
|时间   | 修改内容  |
| :-------- | :--------|
| 2014-05-12 22:00|主题基本说明|
|2014-05-19 16:00|增加jekyll的技巧|
|2014-05-27 16:00|版本更新|
|2014-09-11 14:00|win下安装jekyll教程|
|2014-11-04 12:07:44|增加微搜索全文检索服务|