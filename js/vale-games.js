$(function () 
{

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		console.log("mobile");
		$("#about-content").fadeIn();
	}
	else if ($(window).width() < 768)
	{
		console.log("asd");
		$("#about-content").fadeIn();	
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
});

function shrinkBanner()
{
	$("div.nav-bar").show();
	$("div.banner").animate({height: '8em'}, "slow");
	$("img#logo").animate({width: '6em'}, "slow", function() 
	{
		$(this).animate({left: '5em'}, "slow", function() 
		{
			$("img#logo-text").fadeIn();
			$("div.container").css('height', 'auto');
			$("#about-content").fadeIn();
			$("div.footer").fadeIn();
		});
	});
}