$(document).ready(function(){
    $(".main_menu li").mousemove(function(){
        $(".sub_menu").slideDown();
    });
    $(".sub_menu").mouseleave(function(){
        $(".sub_menu").slideUp();
    });
    
    $(".img_list li").last().prependTo(".img_list");
    $(".img_list").css('left',0);
    
    setInterval(function(){
        $(".img_list").animate({left:'-='+1200},'slow',function(){
            $(".img_list li").first().appendTo('.img_list');
            $(".img_list").css('left',0);
        });
    },2000);
});