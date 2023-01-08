import $ from "jquery";

$(document).ready(function () {
  $(".main-slider").slick({
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  });
});
