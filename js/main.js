(function($) {
// Header 
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});
	$(window).on('resize', function () {
  		if(window.innerWidth > 768) {
  			$('.navbar-collapse').removeClass('in');
  			$('#hamburger').removeClass('open');
  		}
	});
	$('select').niceSelect();
})(jQuery);