(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    $('#menuModal').modal('hide');
  });

  $('#menuModal').on('hidden.bs.modal', function (e) {
      $('body').removeClass('js-no-scroll')
  });
  $('#menuModal').on('shown.bs.modal', function (e) {
      $('body').addClass('js-no-scroll')
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

    $("iframe[data-src]").Lazy();

    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        prevArrow:'<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',

        //         responsive: [
        //             {
        //               breakpoint: 576,
        //               settings: {
        //                 centerMode: false,
        //                 variableWidth: false,
        //               }
        //             },
        //         ]
    });

    $('.gallery-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        verticalSwiping: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        asNavFor: '.gallery-slider-nav',
        prevArrow:'<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',

        //         responsive: [
        //             {
        //               breakpoint: 576,
        //               settings: {
        //                 centerMode: false,
        //                 variableWidth: false,
        //               }
        //             },
        //         ]
    });

    $('.gallery-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.gallery-slider',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        prevArrow:'<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    });

})(jQuery); // End of use strict
