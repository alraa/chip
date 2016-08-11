$(document).ready(function() {

	//placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });

    $('.head-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
		dots: false,
		centerMode: true,
		centerPadding: '0px',
        arrows: true
    });
	
	//
	$('.fancy').fancybox();
	
	//
	var ww = document.body.clientWidth;
	var wc = $('#container').width();
	$(document).ready(function() {
		adjustMenu();
	});	
	$(window).bind('resize orientationchange', function() {
		ww = document.body.clientWidth;
		wc = $('#container').width();
		adjustMenu();
	});
	
	var adjustMenu = function() {		
		if (wc < 640) {
			
		}
		else if (wc >= 640) {
			$('.menu').removeAttr('style');
		}		
	}	
	$('.mobile-button').click(function(){
		$('.menu').toggleClass('open');		
		$(this).toggleClass('open');		
	});
	
	//
	$('.up').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	

});




