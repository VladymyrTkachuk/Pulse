// $(document).ready(function () {
//   $(".carousel__inner").slick({
//     speed: 1200,
//     adaptiveHeight: true,

//     arrows: false,
//     prevArrow:
//       '<button type="button" class="slick-prev"><img src="icons/left.svg"> </button>',
//     nextArrow:
//       '<button type="button" class="slick-next"><img src="icons/right.svg"> </button>',

//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

const slider = tns({
  container: ".carousel__inner",
  items: 1,
  slideBy: "page",
  controls: false,
  nav: false,
  // controlsContainer: Node,
  // edgePadding: 20,
  // gutter: 20,

  // responsive:
  //   {
  //     640: {
  //       edgePadding: 20,
  //       gutter: 20,
  //       items: 2,
  //     },
  //     700: {
  //       gutter: 30,
  //     },
  //     900: {
  //       items: 3,
  //     },
  //   } | true,

  // controlsText: ['<img src="icons/left.svg">', '<img src="icons/right.svg">'],
});

document.querySelector(".prev").addEventListener("click", function () {
  slider.goTo("prev");
});
document.querySelector(".next").addEventListener("click", function () {
  slider.goTo("next");
});
