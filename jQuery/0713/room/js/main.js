var current = 0;

/*size() = list의 갯수, 0부터 시작하기 때문에 -1*/
var count = $('.wall_list li').size()-1;

$(".wall_list li").click(function(){
    var name = $(this).children().attr("title");
    $(".title").text(name);
    
    var bg = $(this).children().attr('src');
    $(".wall").css('background-image','url('+bg+')');

    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    current = $(this).index();
});

/*클릭한 상태 만들기*/
$(".wall_list li").eq(0).click();

$(".left").click(function(){
    /*이전으로*/
    current-=1;
    
    if(current<0){
        current=count;
    };
    
    $(".wall_list li").eq(current).click();
});

$(".right").click(function(){
   current+=1;

    if(current>count) {
        current=0;
    };
    $(".wall_list li").eq(current).click();
});

