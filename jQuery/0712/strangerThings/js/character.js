$(".logo").click(function(){
    $(".ch h2").removeClass(".open");
    $(".ch p").slideUp();
    $(".ch img").fadeOut(200);
    $(".ch h2").css("background-color","black");
});

$(".ch").click(function(){
    var me = $(this).children('h2');
    var bros = $(this).siblings().children("h2");
    
    if(me.hasClass("open")==true) {
        /*닫기*/
        me.removeClass("open");
        
        me.next().slideUp();
        me.prev().fadeOut(200);
    } else {
        /*선택한것 열기*/
        me.addClass("open");
        bros.removeClass("open");
        
        me.next().slideDown();
        bros.next().slideUp();
        
        me.prev().fadeIn(200);
        bros.prev().fadeOut();
    }
});