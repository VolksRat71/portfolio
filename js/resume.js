(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      var targetId = this.hash;
      if (targetId == "#awards" || targetId == "#about" || targetId == "#page-top") {
        var cubic = "easeInOutQuint"
      } else {
        var cubic = "easeInOutBack"
      }
      console.log(targetId);
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top),
        }, 1500, cubic);
        return false;
      }
    }
  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

$(function () {
  $('[data-toggle="popover"]').popover()
})
