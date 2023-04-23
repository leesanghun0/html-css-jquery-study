/* logo클릭시 전부 닫힘, 사라짐*/
$(".logo").click(function(){
    $(".tt h2").removeClass(".open");
    $(".tt p").slideUp();
    $(".tt img").fadeOut(200);
});

$(".tt").click(function(){
    /*자식 중 h2*/
    var me = $(this).children('h2'); /*내가 선택한것*/
    var bros = $(this).siblings().children("h2"); /*선택하지않은것*/
    
    /*'me'가 'open'이라는 클래스명을 가지고 있는게 사실이면,*/
    if(me.hasClass("open")==true) {
        
        me.removeClass("open");
        
        /* next=p , prev=img (html참고) */
        me.next().slideUp();
        me.prev().fadeOut(200);
    } else {
        me.addClass("open");
        bros.removeClass("open");
        
        me.next().slideDown();
        bros.next().slideUp();
        
        me.prev().fadeIn(200);
        bros.prev().fadeOut(200);
    }
});