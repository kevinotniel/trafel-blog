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

}) 