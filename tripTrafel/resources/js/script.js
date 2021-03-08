$(document).ready(function() {
   
   $('.js--feature-section').waypoint(function(direction) {
      if (direction == "down") {
         $('nav').addClass('sticky')
      } else {
         $('nav').removeClass('sticky')
      }
   }, {
      offset: '60px'
   })

   
   $('.--js-scroll-sign').click(function() {
      $('html, body').animate({scrollTop: $('#sign').offset().top}, 1000)
   })
   $('.--js-scroll-features').click(function() {
      $('html, body').animate({scrollTop: $('#feature').offset().top}, 1000)
   })



   // Select all links with hashes
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


   $('.js--wp-1').waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeIn')
   }, {
      offset: '70%'
   })

   $('.js--wp-2').waypoint(function(direction) {
      $('.js--wp-2').addClass('animated fadeInUp')
   }, {
      offset: '50%'
   })

   $('.js--wp-3').waypoint(function(direction) {
      $('.js--wp-3').addClass('animated fadeIn')
   }, {
      offset: '50%'
   })

   $('.js--wp-4').waypoint(function(direction) {
      $('.js--wp-4').addClass('animated pulse')
   }, {
      offset: '50%'
   })


   $('.js--nav-icon').click(function(){
      var nav = $('.js--main-nav')
      var icon = $('.js--nav-icon i')

      nav.slideToggle(200) 

      if (icon.hasClass('im-angle-down-circle')) {
         icon.addClass('im-angle-up-circle')
         icon.removeClass('im-angle-down-circle')
      } else {
         icon.addClass('im-angle-down-circle')
         icon.removeClass('im-angle-up-circle')
      }

   })

     /* MAP */
	// Map starting location:
	var map = new GMaps( {
		div: '.map',
		lat: -6.200000,
		lng: 106.816666,
		zoom: 12
	});

	// Map marker:
	map.addMarker( {
		lat: -6.131059336067474, 
		lng: 106.91995283680698,
		title: 'North Jakarta',
		infoWindow: {
			content: '<p>Our North Jakarta</p>'
		}
	});

}) 