// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.extend( jQuery.easing,
{
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	}
});

jQuery(document).ready(function($) 
{
	$('#register-form-link').click(function(e) 
	{
		$("#register-form").delay(100).fadeIn(100);;
		$("#login-form").fadeOut(100);;
		$("#register-link").fadeOut(100);;
		$("#login-link").delay(100).fadeIn(100);;
		e.preventDefault();
	});
	$('#login-form-link').click(function(e) 
	{
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
 		$("#login-link").fadeOut(100);;
		$("#register-link").delay(100).fadeIn(100);;
		e.preventDefault();
	});
	$('#forget-link').click(function(e) 
	{
		$("#password-recovery").delay(100).fadeIn(100);;
		$("#login-form").fadeOut(100);;
		$("#register-link").fadeOut(100);;
		$("#recovery-link").delay(100).fadeIn(100);;
		e.preventDefault();
	});
	$('#password-recovery-link').click(function(e) 
	{
		$("#login-form").delay(100).fadeIn(100);
 		$("#password-recovery").fadeOut(100);
 		$("#recovery-link").fadeOut(100);;
		$("#register-link").delay(100).fadeIn(100);;
		e.preventDefault();
	});
	$(".scroll").click(function(event) 
	{		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
	$().UItoTop({ easingType: 'easeOutQuart' });
});