var sp = 2000;
var gap = 400;

var fall = function () {
    $(".menu img").eq(0).delay(gap).toggleClass("show", sp, "easeOutElastic");
    $(".menu img").eq(1).delay(gap * 2).toggleClass("show", sp, "easeOutElastic");
    $(".menu img").eq(2).delay(gap * 3).toggleClass("show", sp, "easeOutElastic");
    $("h1").css("color", "gray");
    $("h1").text("SuperMario");
}

$(".logo").fadeIn();
$(".logo").click(fall);

$(".menu img").eq(0).click(function(){
    $("h1").css("color","red");
    $("h1").text("Mario");
});

$(".menu img").eq(1).click(function(){
    $("h1").css("color","green");
    $("h1").text("Luigi");
});

$(".menu img").eq(2).click(function(){
    $("h1").css("color","yellow");
    $("h1").text("Toad");
});
