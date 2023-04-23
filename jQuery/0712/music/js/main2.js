$(".title").click(function(){
    $(this).next().slideDown();
});

$(".music_list li").click(function(){
    var txt = $(this).text();
    $(this).parent().prev().text(txt);
    $(this).parent().slideUp();
    
    var num = $(this).index();
    $(".cd img").eq(num).addClass("border");
    $(".cd img").eq(num).siblings().removeClass("border");
});