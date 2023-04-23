var fall = function() {
    $(".new").delay(400).toggleClass("show",2000,"easeOutElastic");
}

$(".blank").click(function(){
    $(this).fadeOut();
    fall();
});