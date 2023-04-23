var height = 185;
var milk = 5;

var long = function(){
    
    if(height<=145 || height >=250){
        $('.face').addClass('cry');
    }else{
        $('.face').removeClass('cry');
    }

    $('.height').text(height+'cm');
    $('.leg').css('height',height);
}

long();

$('.arr-top').click(function(){
    
    if(height<300){
        height += milk;
        long();
    }else{
        $('.face').effect('shake');
    }
});

$('.arr-bottom').click(function(){
    
    if(height>100){
        height-=milk;
        long();
    }else{
        $('.face').effect('shake');  
    }
});
                