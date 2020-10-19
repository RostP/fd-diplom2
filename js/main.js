$(function () {

$('.regulars-slider').slick({
    arrows: true,
    slidesToShow: 3,
    dots: false,
    cssEase: 'linear',
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1041,
        settings: {          
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 769,
        settings: {          
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.music-slider, .events-slider').slick({
    arrows: true,
    slidesToShow: 1,
    dots: false,
    cssEase: 'linear',
    slidesToScroll: 1,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
     }
    ]
  });


  $('.paty-slider').slick({
    arrows: true,
    slidesToShow: 1,
    dots: false,
    cssEase: 'linear',
    slidesToScroll: 1,
    adaptiveHeight: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 480,
        settings: "unslick"
     }
    ]
  });

  
  
  $('.burger-menu').click(function (event) {
    $('.header-menu-mob').addClass('burger-menu-mob-active');
    // e.stopPropagation();
  }); 

  $('.close-button').click(function (event) {
    $('.header-menu-mob').removeClass('burger-menu-mob-active');
  });  


  $(document).click(function(event) {
   
    if (!$(event.target).closest(".close-button,.burger-menu").length) {
      $("body").find(".header-menu-mob").removeClass("burger-menu-mob-active");
    }
  });

  


  

});  