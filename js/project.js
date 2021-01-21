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

    $('[data-toggle="popover"]').popover();

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

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    variableWidth: false,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('#gallery-slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        dots: true,
        infinite: true,
        prevArrow:'<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.slider-container').find('.slider-for').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-container .slider-nav'
    });

    $('.slider-container').find('.slider-nav').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-container .slider-for',
        dots: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true
    });

    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        prevArrow:'<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow:'<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
    $('#contactForm').submit(function () {
        yaCounter56138671.reachGoal('form-feedback');
    });

    $('#contactForm_popup').submit(function () {
        yaCounter56138671.reachGoal('form-feedback-popup');
    });
})(jQuery); // End of use strict
