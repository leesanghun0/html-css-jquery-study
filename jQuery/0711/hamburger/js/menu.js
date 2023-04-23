$(".hamburger_list li").click(function(){
    $(".hamburger_list li img").removeClass("big",400);
    $(this).children().toggleClass("big",400,"easeOutElastic");
    
    var color = $(this).css("background-color");
    $(".selected").css("background-color", color);
    
    var img = $(this).children().attr("src");
    $(".selected img").attr("src",img);
    
    // text가져오기
    var txt = $(this).children().text();
    $(".selected p").text(txt);
});

$(".hamburger_list li").eq(0).click(function(){
    $(".selected h3").text("맥크리스피™디럭스 버거");
});
$(".hamburger_list li").eq(1).click(function(){
    $(".selected h3").text("빅맥®");
});
$(".hamburger_list li").eq(2).click(function(){
    $(".selected h3").text("맥스파이시®상하이 버거");
});
$(".hamburger_list li").eq(3).click(function(){
    $(".selected h3").text("1955® 버거");
});
$(".hamburger_list li").eq(4).click(function(){
    $(".selected h3").text("맥치킨® 모짜렐라");
});
$(".hamburger_list li").eq(5).click(function(){
    $(".selected h3").text("더블 불고기 버거");
});
$(".hamburger_list li").eq(6).click(function(){
    $(".selected h3").text("슈비 버거");
});
$(".hamburger_list li").eq(7).click(function(){
    $(".selected h3").text("베이컨 토마토 디럭스");
});
