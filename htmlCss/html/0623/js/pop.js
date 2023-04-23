$(document).ready(function(){
    /*화면의 너비를 2로 나눈 것에서 .modal의 너비를 2로 나눈것을 뺀다.*/
    var w = ($(window).width()/2)-($(".modal").width()/2);
    /*화면의 높이를 2로 나눈 것에서 .modal의 높이를 2로 나눈것을 뺀다.*/
    var h = ($(window).height()/2)-($(".modal").height()/2);
    
    $(".modal").css({
        left : w, top : h
    });
    
    $(".popzone a").click(function(){
        $(".modal").fadeIn(2000);
        $(".modal_bg").fadeIn(2000);
    });
    
    $(".modal a").click(function(){
        $(".modal").fadeOut(0);
        $(".modal_bg").fadeOut(0);
    });
});