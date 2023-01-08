import $ from "jquery";


$(".burger-btn").on("click", function () {
  $(this).toggleClass("active");
  $(".mobile__header").toggleClass("active");
});
$(".main-slider").on("click", function () {
  $(".burger-btn").removeClass("active");
  $(".mobile__header").removeClass("active");
});

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

$(document).ready(function(){
	ibg();
	// RatioW();
	// RatioH();
});

// $(window).resize(function(){
// 	RatioW();
// 	RatioH();
// });
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