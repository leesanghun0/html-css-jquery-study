$(".animal_list li").click(function(){
    $(".animal_list li img").removeClass("big",400);
    $(this).children().toggleClass("big",400,"easeOutElastic");
    
    var color = $(this).css('background-color');
    $(".cover").css("background-color", color);
    
    var img = $(this).children().attr("src");
    $(".cover img").attr("src",img);
});