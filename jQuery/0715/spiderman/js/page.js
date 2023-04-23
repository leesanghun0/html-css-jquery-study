var num = 0;
var size = $(".season_list li").size()-1;

$(".poster_list li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    current = $(this).index();
    
    var index =$(this).index();
    var screen = 960 * index;
    var pagen = 192 * index;
    
    $(".season_list").animate({left:-screen},400);
    $(".bar").animate({left:pagen},400);
    
    var title = $(this).text();
    $(".title").text(title);
});

$(".controls a").click(function(){
    var arrows = $(this).hasClass("prev");
    
    if(arrows==true) {
        num-=1;
    }else {
        num+=1;
    }
    if(num<0) {
        num=size;
    }
    if(num>size) {
        num=0;
    }
    $(".poster_list li").eq(num).click();
});