(function ( $ ) {
  $(document).ready(function(){
    $('img').parent('a').addClass('imglink');
    $('.flexslider').flexslider({
      animation: "slide"
    });
  });
})( jQuery );

(function( $ ){

  $.fn.skNav = function() {
     
    $(this).on('click', function() {
      var menuselector = $(this).attr('href');
      $(menuselector).toggleClass('expanded');
      $(menuselector).find('ul').removeClass('expanded');
      return false;
    });
    
    $('.menu-item').on('click', function() {
      $(this).find('ul').toggleClass('expanded');
    });

    $('<a href="#" class="toggle"><i class="icon-caret-down"></i></a>').insertBefore('.sub-menu');

  };
  $('#navtoggle').skNav();
})( jQuery );