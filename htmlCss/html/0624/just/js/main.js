$(document).ready(function(){
    /*menu*/
    $(".main_menu_list li").mouseover(function(){
        $(this).find(".sub_menu_list").slideDown();
    });
    $(".sub_menu_list").mouseleave(function(){
        $(this).slideUp();
    });
    
    /*slide*/
    $(".slide_list li").last().prependTo(".slide_list");
    $(".slide_list").css('top',-300);
    
    setInterval(function(){
        $(".slide_list").animate({top:'-='+300},'slow',function(){
            $(".slide_list li").first().appendTo(".slide_list");
            $(".slide_list").css('top',-300);
        });
    },2000);
    
    /*tab*/
    $(".tab").click(function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
    });
    
    /*modal*/
    var w = ($(window).width()/2)-($(".modal").width()/2);
    var h = ($(window).height()/2)-($(".modal").height()/2);
    
    $(".modal").css({
        left: w, top: h
    });
    
    $(".pop").click(function(){
       $(".modal").fadeIn(2000); 
       $(".dimmed").fadeIn(2000); 
    });
    
    $(".close").click(function(){
       $(".modal").fadeOut(0); 
       $(".dimmed").fadeOut(0); 
    });
    
    $(".dimmed").click(function(){
       $(".modal").fadeOut(0); 
       $(".dimmed").fadeOut(0); 
    });
    
});