$(".series_list li").click(function(){
    var img = $(this).children().attr("src");
    $(".selected img").attr("src",img);
    
    var txt =$(this).children().text();
    $(".selected h2").text(txt);
    $(".selected h2").css("color","firebrick");
});