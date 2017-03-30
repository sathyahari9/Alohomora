var main = function(){
	var stickyHeaderTop = $('.menu').offset().top; 
	$(window).scroll(function(){
		if( $(window).scrollTop() > stickyHeaderTop ) {
			$('.menu').addClass('active');
		}
		else{
			$('.menu').removeClass('active');
		}
}
);
};

$(document).ready(main);