var current = 0;
var count = $(".movie_list li").size()-1;

$(".icon_list li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    current = $(this).index();
    
    var index = $(this).index();
    var pos = 960 * index;
    var bar = 192 * index;
    
    $(".movie_list").animate({left:-pos},400);
    $(".bar").animate({left:bar},400);
});

$(".controls a").click(function(){
    var check = $(this).hasClass("prev");
    
    if(check==true){
        current-=1;
    }else {
        current+=1;
    }
    
    if(current<0) {
        current=count;
    }
    
    if(current>count) {
        current=0;
    }
    $(".icon_list li").eq(current).click();
});