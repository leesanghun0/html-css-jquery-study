$(document).ready(function(){
    $(".mainMenuList li").mouseover(function(){
        $(".subMenu").slideDown(); 
    });
    $(".subMenu").mouseleave(function(){
        $(".subMenu").slideUp(); 
    });
    
    
    
    $(".imgList li").last().prependTo(".imgList");
    $(".imgList").css('left',0);
    
    setInterval(function(){
        $(".imgList").animate({left:'-='+ 300 + '%'},'slow',function(){
            $(".imgList li").first().appendTo(".imgList");
            $(".imgList").css('left',0);
        });
    },3000);
    
    $(".submit").click(function(){
        alert("상담 신청이 완료되었습니다."); 
    });
});