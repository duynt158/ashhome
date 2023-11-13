$( document ).ready(function() {

    $(document).on("click","body:not(.nav-open) .hamburger",function() {
        $('body').addClass('nav-open');
    });

    $(document).on("click","body.nav-open .hamburger, .nav-overlay, .mobile-message .x",function() {
        $('body').removeClass('nav-open');
    });

    $(document).on("click","header nav a",function() {
        $('body').removeClass('nav-open');
    });

    $(document).on('scroll',(function() {
        if ($(document).scrollTop()> 100) {
          $('body').addClass("scrolled-down");
        } else {
          $('body').removeClass("scrolled-down");
        }
    }));

    if ($('.next-error-h1')) {
        $('body').addClass('error-page');
    }

});