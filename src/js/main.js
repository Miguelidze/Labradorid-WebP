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
    // настройки (не обязательно), см. API
});

// class galleryModal{
//   constructor(props) {
//     let defaultConfig = {
//       linkAttributeName: 'data-gallerymodal',

//     }
//     this.config = Object.assign(defaultConfig, props);
//     this.init();
//   }
//   static _shadow = false;
//   init() {
//     this.isOpened = false;
//     this.openedWindow = false;
//     this._modalBlock = false;
//     this.starter = false;
//     this._nextWindows = false;
//     this._scrollPosition = 0;
// }
// $(document).on('click', '.modal-trigger', function(event) {


// 	var modalID = $(this).data('modal-id');
// 	let modal = OpenModal('#' + modalID);
	

// 	var modalTitle = $(this).data('modal-title');
// 	if(typeof modalTitle !== 'undefined'){
// 		modal.find(".modal-title").html(modalTitle);
// 	}
// 	let modalFieldPresets= $(this).data('field-presets');
// 	if(modalFieldPresets){
// 		for (let i = 0; i < modalFieldPresets.length; i++) {
// 			modal.find(modalFieldPresets[i].childSelector).val(modalFieldPresets[i].value);
// 		}
// 	}
// 	let modalContent = $(this).data('modal-content');
// 	if(modalContent){
// 		modal.find('.modal-content-wrapper').html(modalContent);
// 	}
	
// });
// function OpenModal(selector){
// 	$("body").css("overflow", "hidden");
// 	var modal = $(selector + ".modal");
// 	modal.addClass("modal-active");
// 	return modal;
// }
// $(document).on('mousedown touchstart', '.modal-bg, .modal-cross', function(event) {
// 	CloseModal(this);
// });
// function CloseModal(selector){
// 	if($('.modal-active').length == 1){ // only 1 modal window is open
// 		$("body").css("overflow", "visible");
// 	}
// 	var modal = $(selector).closest(".modal");
// 	modal.removeClass("modal-active");
// }
// $(document).on('mousedown touchstart', '.modal-window', function(event) {
// 	event.stopPropagation();
// });