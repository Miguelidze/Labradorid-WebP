import $ from "jquery";

$(document).ready(function () {
  $(".main-slider").slick({
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
  });
  $(".gallery-slider").slick({
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  });
  $(".news-slider").slick({
    centerMode: true,
    centerPadding: 60,
    dots: true,
    arrows: true,
    appendArrows: $(".news-arrows"),
    appendDots: $(".news-dots"),
    speed: 1000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 790,
        settings: {
          centerPadding: 0,
          centerMode: true,
          slidesToShow: 1.5,
          infinite: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
