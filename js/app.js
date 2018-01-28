$(document).ready(function() {
    
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(window).scroll(function(){
	if($(window).scrollTop()>50){
		$("#menu-container").css("background-color","rgba(41, 44, 68, .8)");                
        $("#menu-container").css("border-bottom", "1px solid #18CDCA");        
		$(".nav-link").css("color","white")

	}else{
		$("#menu-container").css("background-color","rgba(41, 44, 68, 0)");        
        $("#menu-container").css("border-bottom", "none");        
		$(".nav-link").css("color","#292C44")
	}
});