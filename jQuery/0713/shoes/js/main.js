var current = 0;
var count = $(".shoes_list li").size()-1;

$(".shoes_list li").click(function(){
    var title = $(this).children().attr("title");
    $(".title").text(title);
    
    var shoes = $(this).children().attr('src');
    $(".big").css('background-image','url('+shoes+')');
    
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    
    current = $(this).index();
});

$(".shoes_list li").eq(0).click();

$(".left").click(function(){
    current-=1;
    
    if(current<0) {
        current=count;
    };
    $(".shoes_list li").eq(current).click();
});

$(".right").click(function(){
    current +=1;
    
    if(current>count){
        current=0;
    }
    $(".shoes_list li").eq(current).click();
});

/*
1. list li 클릭하면 big에 사진 바뀌기
2. list li 클릭하면 text 바뀌기
3. list li 클릭하면 border색 바뀌기, 다른 li border 해제
4. 기본 클릭상태 만들기
5. 화살표 클릭시 다른 li보이기
*/