$(document).ready(function(){
    
    var navLink = $('.nav-link');
    var navBar = $('.collapse');
    var toggleButton = $('.navbar-toggler');
    var nav = $('nav').offset().top;
    // For 100vh
    $('.home').css('height',$(window).innerHeight());
    // Preloader
    $(window).on('load',function(){
        $('#loader_div').fadeOut(1000);
    })
    // Magnific Pop up
    $('.test-popup-link').magnificPopup({
        type: 'image'
    });

    // Adding navbara shadow
    $(window).resize(function(){
        $('.home').css('height',$(window).innerHeight());
    });
    $(window).scroll(function(){;
        var scroll = $(window).scrollTop();
        if(scroll > nav){
            $('nav').addClass('active');
        }
        else{
            $('nav').removeClass('active');
        }
    });

    // Close Navbar when open
    navLink.click(function(){
        if(navBar.hasClass('show')){
            navBar.removeClass('show');
            toggleButton.attr('aria-expanded','false')
        }
    });

    // AOS
    AOS.init({
       startEvent: 'load',
    });
})