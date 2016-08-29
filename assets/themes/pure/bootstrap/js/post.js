$(document).ready(function(){
    loadToc();
    loadFancybox();
	loadSyntaxHighlighter();
	$(".article a").attr("target", "_blank");
});

function loadToc(){
    /* begin: 加载 toc 组件 */
    $('#toc').toc({
        'selectors': 'h1,h2',
        //elements to use as headings
        'container': '.article',
        //element to find all selectors in
        'smoothScrolling': true,
        //enable or disable smooth scrolling on click
        'prefix': 'toc',
        //prefix for anchor tags and class names
        'onHighlight': function(el) {},
        //called when a new section is highlighted
        'highlightOnScroll': true,
        //add class to heading that is currently in focus
        'highlightOffset': 100,
        //offset to trigger the next headline
        'anchorName': function(i, heading, prefix) { //custom function for anchor name
            return prefix + i;
        },
        'headerText': function(i, heading, $heading) { //custom function building the header-item text
            return $heading.text();
        },
        'itemClass': function(i, heading, $heading, prefix) { // custom function for item class
            return $heading[0].tagName.toLowerCase();
        }
    });
    /* end: 加载 toc 组件 */
}

function loadFancybox(){
    /* begin: 加载 fancybox 组件 */
    $('.article').each(function(i) {
        $(this).find('img').each(function() {
            if ($(this).parent().hasClass('fancybox')) return;
            var url = this.src;
            $(this).wrap('<a href="' + url + '" title="' + this.title + '" class="fancybox" rel="article' + i + '"</a>');
        });
    });
    $('.fancybox').fancybox();
    /* end: 加载 fancybox 组件 */
}

function loadSyntaxHighlighter(){
    SyntaxHighlighter.autoloader(
        'applescript            /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushAppleScript.js',
        'actionscript3 as3      /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushAS3.js',
        'bash shell             /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushBash.js',
        'coldfusion cf          /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushColdFusion.js',
        'cpp c                  /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushCpp.js',
        'c# c-sharp csharp      /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushCSharp.js',
        'css                    /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushCss.js',
        'delphi pascal          /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushDelphi.js',
        'diff patch pas         /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushDiff.js',
        'erl erlang             /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushErlang.js',
        'groovy                 /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushGroovy.js',
        'java                   /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushJava.js',
        'jfx javafx             /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushJavaFX.js',
        'js jscript javascript  /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushJScript.js',
        'perl pl                /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushPerl.js',
        'php                    /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushPhp.js',
        'text plain             /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushPlain.js',
        'py python              /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushPython.js',
        'ruby rails ror rb      /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushRuby.js',
        'sass scss              /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushSass.js',
        'scala                  /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushScala.js',
        'sql                    /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushSql.js',
        'vb vbnet               /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushVb.js',
        'xml xhtml xslt html    /assets/themes/pure/bootstrap/syntaxhighlighter/scripts/shBrushXml.js'
    );
	SyntaxHighlighter.all();
    shLineWrapWhenReady();
}

function shLineWrapWhenReady() {
    if ($('.syntaxhighlighter').length === 0) {
        setTimeout(shLineWrapWhenReady, 10);
    } else {
        shLineWrap();
    }
}

function shLineWrap() {
    $('.syntaxhighlighter').each(function() {
        var $sh = $(this),
        $gutter = $sh.find('td.gutter'),
        $code = $sh.find('td.code');
        $gutter.children('.line').each(function(i) {
            var $gutterLine = $(this),
            $codeLine = $code.find('.line:nth-child(' + (i + 1) + ')');
            var height = $codeLine.height() || 0;
            if (!height) {
                height = 'auto';
            } else {
                height = height += 'px';
            }
            $gutterLine.attr('style', 'height: ' + height + ' !important'); // fix by Edi, for JQuery 1.7+ under Firefox 15.0
        });
    });
}