import { Modal } from "bootstrap";
import $ from "jquery";
import HystModal from "./hystmodal";

// burger en mobile

$(".burger-btn").on("click", function () {
  $(this).toggleClass("active");
  $(".mobile__header").toggleClass("active");
});
$(".main-slider").on("click", function () {
  $(".burger-btn").removeClass("active");
  $(".mobile__header").removeClass("active");
});

// active page

$(".navigation__item").on("click", function () {
  $(".navigation__item").removeClass("active");
  $(this).addClass("active");
});
$("mobile__nav_item").on("click", function () {
  $("mobile__nav_item").removeClass("active");
  $(this).addClass("active");
});

// Selected title

$(".title__text").on("click", function () {
  $(".title__text").removeClass("selected");
  $(this).addClass("selected");
});
$(".link__text").on("click", function () {
  $(".link__text").removeClass("selected");
  $(this).addClass("selected");
});

// IBG function

function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).find("img").first().css("width", 0);
      $(this).find("img").first().css("height", 0);
      $(this).find("img").first().css("display", "none");
      $(this).css(
        "background-image",
        'url("' + $(this).find("img").attr("src") + '")'
      );
    }
  });
}

function RatioW() {
  $.each($(".ratio-w"), function (index, val) {
    var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    }
    ////console.log(ratioMultiplier);
    $(this).css(
      "height",
      (parseFloat($(this).css("width")) * ratioMultiplier).toString() + "px"
    );
  });
}
function RatioH() {
  $.each($(".ratio-h"), function (index, val) {
    var ratioMultiplier = parseFloat($(this).data("ratio-multiplier"));
    if (ratioMultiplier == "undefined") {
      ratioMultiplier = 1;
    }
    ////console.log(ratioMultiplier);
    $(this).css(
      "width",
      (parseFloat($(this).css("height")) * ratioMultiplier).toString() + "px"
    );
  });
}
$(document).ready(function () {
  ibg();
  RatioW();
  RatioH();
});

$(window).resize(function () {
  RatioW();
  RatioH();
});

// language change

$('.lang').on('click', function(e){
	$('.lang__list').addClass('active');
	e.stopPropagation();
	// $('#'+$(this).data('lang-id')).
});
$('.lang__item').on('click', function() {

	$('.lang__item').removeClass('selected');
	$(this).addClass('selected');

	$('.lang').removeClass('active');
	$('#'+$(this).data('lang-id')).addClass('active');
});

$(document).on('click', function(){
	$('.lang__list').removeClass('active');
});

// Accordion 

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;

    var dropdownlink = this.el.find(".dropdownlink");
    dropdownlink.on(
      "click",
      { el: this.el, multiple: this.multiple },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      //this is the ul.submenuItems
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass("open");

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el
        .find(".submenuItems")
        .not($next)
        .slideUp()
        .parent()
        .removeClass("open");
    }
  };

  var accordion = new Accordion($(".accordion-menu"), false);
});

// Modal window

///MODAL
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
});

// Choose img in modal
// $(".gallery__item img").click(function () {
//   let src = $(this).attr("src");
//   $(".gallery-slider__image img").attr("src", src);
//   $(".gallery-slider__slide").fadeIn();
// });
// $(".close").click(function () {
//   $(".gallery-slider__slide").fadeOut();
// });

