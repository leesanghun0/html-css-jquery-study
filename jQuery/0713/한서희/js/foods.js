var current = 0;
var count = $(".foods_list li").size()-1;

$(".foods_list li").click(function(){
    var title = $(this).children().attr('title');
    $(".food_title").text(title);
    
    var foods = $(this).children().attr('src');
    $(".view").css('background-image','url('+foods+')');
    
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    current = $(this).index();
});


$(".foods_list li").eq(0).click();

$(".left").click(function(){
    current-=1;
    if(current<0) {
        current=count;
    };
    $(".foods_list li").eq(current).click();
});

$(".right").click(function(){
    current+=1;
    if(current>count){
        current=0;
    };
    $(".foods_list li").eq(current).click();
});