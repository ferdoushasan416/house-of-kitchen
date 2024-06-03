(function ($) {
"use strict";

        $(document).ready(function(){
          $('.assortiment-slide-active').slick({
            prevArrow: '<span class="priv_arrow"><i class="fa-solid fa-arrow-left-long"></i></span>',
            nextArrow: ' <span class="next_arrow"><i class="fa-solid fa-arrow-right-long"></i></span>',
            autoplay:false,
            slidesToShow: 3,
            loop:true,
            dots:false,
            responsive: [
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
         
      });

        $(document).ready(function(){
          $('.box-slider-active').slick({
            autoplay:false,
            slidesToShow: 4,
            loop:true,
            dots:false,
            arrows:false,
            responsive: [
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
         
      });

// WOW active
new WOW().init();


})(jQuery);