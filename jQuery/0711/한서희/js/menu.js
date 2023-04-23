$(".hamburger_list li").click(function(){
    $(".hamburger_list li img").removeClass("big",400);
    $(this).children().toggleClass("big",400,"easeOutElastic");
    
    var color = $(this).css("background-color");
    $(".selected").css("background-color", color);
    
    var img = $(this).children().attr("src");
    $(".selected img").attr("src",img);
});