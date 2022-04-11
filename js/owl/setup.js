/****** scrolltop******/
$(document).ready(function(){
    var offset =300;
    var duration = 500;

    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('.top').fadeIn(duration);
        }else{
            $('.top').fadeOut(duration);
        }
    });

    $('.top').click(function(){
        $('html,body').animate({scrollTop: 0}, duration);
    })
  });
  /******fim scrolltop******/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/****** scrollbottom******/
$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({'scrollTop':offSetTop});

        return false;
    })
})
/******fim scrollbottom******/

/******menu-mobile******/
$(function(){
    $('nav.mobile i').click(function(){
        var el = $(this).parent().find('ul');
        if(el.is(':visible') == false){
         el.fadeIn();
        }else{
            el.fadeOut();
        }
    })
})
/******fim-menu-mobile******/

