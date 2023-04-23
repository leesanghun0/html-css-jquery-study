/*윈도우에 스크롤이 됐을 때~*/
$(window).scroll(function(){
    
    var Scroll = $(window).scrollTop();
    var nowScroll = parseInt(Scroll);
    
    $('.scroll').text(nowScroll);
    $('.world').css('background-position',-1*nowScroll);
    
    if(nowScroll>500) {
        $('.title').addClass("show",400,'easeInBack');
    } else {
        $(".title").removeClass("show",400,'easeOutBack');
    }
});

var check = false;

setInterval(function(){
    if(check==true){
        /*10씩 감소*/
        $(".world").css('background-position','-=10');
    }
},30);

/*toggle*/
$(".start").click(function(){
    /*check가 true랑 같으면 check에 false를 넣어라*/
    if(check==true){
        check=false; 
    } else {
        check=true;
    }
});

/*윈도우에 keyDown*/
$(window).keydown(function(){
    if(event.keyCode==65){
        $(".start").click();
    }
});