//탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);


//배너
$('.ban').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true
});

//갤러리
$(".gallery_img").slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$(".play").click(function(e){
    $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(e){
    $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(e){
    $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(e){
    $(".gallery_img").slick("slickNext");
});

//버튼 클릭 시 전체 메뉴 보이게
$(".tit .btn").click(function(e){
    e.preventDefault();
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown();
    //$("#cont_nav").toggle();
    //$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(300);
    $(this).toggleClass("on");
});