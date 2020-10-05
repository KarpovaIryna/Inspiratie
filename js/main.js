'use strict';

$('.ba-slick').slick({
	infinite: true,
	slide: '.ba-slick__slide',
	prevArrow: '.ba-slick__prev',
	nextArrow: '.ba-slick__next',
	responsive: [
	  {
		 breakpoint: 480,
		 settings: {
			arrows: false,
		 }
	  }
	]
 });
 
$(".hamburger").click(function(e) {
	e.preventDefault();
	$(".ba-nav").toggleClass('is-active');
	$(this).toggleClass('is-active');
	$(".ba-header").toggleClass('is-active');
 })

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  $('[data-fancybox="gallery"]').fancybox({
	afterLoad : function(instance, current) {
		 var pixelRatio = window.devicePixelRatio || 1;

		 if ( pixelRatio > 1.5 ) {
			  current.width  = current.width  / pixelRatio;
			  current.height = current.height / pixelRatio;
		 }
	}
});
$('[data-fancybox="gallery"]').fancybox({
	toolbar  : false,
	smallBtn : true,
	iframe : {
		preload : false
	}
});
function initMap() {
	// The location of Uluru
	var uluru = {lat: -25.344, lng: 131.036};
	// The map, centered at Uluru
	var map = new google.maps.Map(
		 document.getElementById('map'), {zoom: 4, center: uluru});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({position: uluru, map: map});
 };

