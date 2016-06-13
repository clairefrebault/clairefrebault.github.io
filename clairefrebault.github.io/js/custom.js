jQuery(document).ready(function($) {
  
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar'),
    		distance = navbar.offset().top,
        $window = $(window);
    
    

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("#portfolio").css("padding-top", "70px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("#portfolio").css("padding-top", "0px");
        }
    });
    
  
    
    
      /* $('a[href^="#accueil"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(accueil).offset().top
	}, 'slow');
	return false;
});
    $('a[href^="#portfolio"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(portfolio).offset().top
	}, 'slow');
	return false;
});
    $('a[href^="#apropos"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(apropos).offset().top
	}, 'slow');
	return false;
});
    $('a[href^="#contact"]').click(function(){
	var the_id = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(contact).offset().top
	}, 'slow');
	return false;
}); */
});



$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
  
    });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#bs-example-navbar-collapse-1 a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#bs-example-navbar-collapse-1 ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


$(document).ready(function () {
  //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        menuHeight = $('#navbar').height();
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - menuHeight
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
        

    });
});