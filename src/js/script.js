$(document).ready(function () {
  $(".carousel__inner").slick({
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    speed: 1200,
    // adaptiveHeight: true,

    // arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/left.svg"> </button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/right.svg"> </button>',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],

    // dots: true,

    // autoplay: true,
    // autoplaySpeed: 2000,

    // fade: true,
    // cssEase: "linear",
  });
});
