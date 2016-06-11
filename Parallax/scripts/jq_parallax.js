// jQuery here

$(window).on('scroll', function(){
		parallaxScroll();	
});
//as scroll, the image block goes to the top in different speed
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	//console.log(scrolled);
	$('#image1').css( 'top', 200-(scrolled * 0.25) );
	$('#image2').css( 'top', 500-(scrolled * 0.5) );
	$('#image3').css( 'top', 800-(scrolled * 0.75) );	
};