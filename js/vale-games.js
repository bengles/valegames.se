$(function () 
{

	$('a').attr('target', '_blank');

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
	{
		$("#about-content").fadeIn();
		$("div.logo-text").fadeIn();
	}
	else if ($(window).width() < 1081)
	{
		$("#about-content").fadeIn();	
		$("div.logo-text").fadeIn();
	} 
	else
	{
		setTimeout(function() 
		{
			shrinkBanner();
		    	$('html').off('DOMMouseScroll');
		}, 1000);

		// Scroll detection for Firefox
		$('html').on('DOMMouseScroll', function (e) 
		{
		    var delta = e.originalEvent.detail;

		    // If scrolling down
			if (delta > 0) 
		    {
		    	shrinkBanner();
		    	$('html').off('DOMMouseScroll');
		    }
		});

		// Scroll detection for Chrome, IE, Opera and Safari
		$('html').on ('mousewheel', function (e) 
		{
		    var delta = e.originalEvent.wheelDelta;

		    // If scrolling down
		    if (delta < 0) 
		    {
		       shrinkBanner();
		       $('html').off('mousewheel');
		    } 
		});
	}

	$('button.nav-button').click(function () 
	{
		var id = $(this).attr('id');
		$('div.content-view').hide();
		switch (id)
		{
			case "about":
				$('#about-content').fadeIn();
				break;
			case "games":
				$('#games-content').fadeIn();
				break;
			case "contact":
				$('#contact-content').fadeIn();
				break;
		}
	});
});

function shrinkBanner()
{
	$("div.nav-bar").show();
	$("div.banner").animate({height: '8em'}, "slow");
	$("img#logo").animate({width: '6em'}, "slow", function() 
	{
		$(this).animate({left: '12.5%'}, "slow", function() 
		{
			$("div.logo-text").fadeIn();
			$("div.container").css('height', 'auto');
			$("#about-content").fadeIn();
			$("div.footer").fadeIn();
		});
	});
}