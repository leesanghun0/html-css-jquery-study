$(document).ready(function(){
    $(".key_list li").last().prependTo(".key_list"); 
    $(".key_list").css('top',-350);
    
    setInterval(function(){
       $(".key_list").animate({top:'-='+350},'slow',function(){
           $(".key_list li").first().appendTo(".key_list");
           $(".key_list").css('top',-350);
       });
    },2000);
});