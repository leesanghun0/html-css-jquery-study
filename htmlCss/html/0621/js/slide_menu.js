$(document).ready(function(){
    $(".main_menu li").mouseover(function(){
        $(".sub_menu").slideDown(); 
    });
    $(".sub_menu").mouseleave(function(){
        $(".sub_menu").slideUp(); 
    });
});