$(document).ready(function(){
    loadNProgress();
    var tags_a = $(".post-category");
    tags_a.each(function () {
        var x = 4;
        var y = 0;
        var rand = parseInt(Math.random() * (x - y + 1) + y);
        $(this).addClass("post-category-" + rand);
    });
    $(".top").click(function () {
        $('html,body').animate({scrollTop: '0px'}, 800);
    })
	var codeimg = $("input[name='codeimg']").val();
    $('.phone-share .phone-share-img').css("background-image","url(" + codeimg + ")");
});

function loadNProgress(){
    /* begin: 加载 NProgress 进度条 */
    NProgress.start();
    setTimeout(function () {
        NProgress.done();
    }, 400);
    showTop();
	/* end: 加载 NProgress 进度条 */
}

$(window).scroll(function () {
    showTop()
});
function showTop() {
    h = $(window).height(),
        t = $(document).scrollTop(),
        t > h ? $(".top").fadeIn(300) : $(".top").fadeOut(300)
}
