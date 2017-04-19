$(document).ready(function(){
	$(window).load(function() {
		playSlide();
	});

	var header = $('header'),
		btn    = $('button.toggle-nav');

	btn.on('click', function(){
		header.toggleClass('active');
	});
	
	// $('.sectionArea01').css({'height' : $(window).height()});

	$(window).resize(function(){
		$('.sectionArea01').css({'height' : $(window).height()});
	});


	var slide = ['pattern','pattern1','pattern2'], idx = 0;
	function playSlide() {
		var slide = 'pattern';
		if(idx == 1) { slide = 'pattern1'; }
		if(idx == 2) { slide = 'pattern2'; }
		$('.item--svg-fill .grabe').css('fill','url(#'+slide+')').css({'animation':'switch 5s infinite','-webkit-animation':'switch 5s infinite'});
		$('.svg-defs pattern image').css({'animation':'move 5s infinite','-webkit-animation':'move 5s infinite'});
		// playSlide();
		idx++;
		if(idx > 2) {idx = 0; }
		setTimeout(function(){ playSlide(); }, 5000);
		// console.log(idx);
	}

	$('.menu-container').click(function(){
		$(this).toggleClass('is-menu-open');
		$('.sectionArea01, .headerContent01B').toggleClass('open');
	});

	$(".hover").mouseleave(
	  function() {
	    $(this).removeClass("hover");
	  }
	);

	$("#owl-example").owlCarousel({
		items : 5,
	    itemsCustom : false,
	    itemsDesktop : [1199,4],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,2],
	    itemsTabletSmall: false,
	    itemsMobile : [479,2],
	});


	$(window).on('scroll', function() {
	    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
	      $('body').addClass('tight');
	    } else {
	      $('body').removeClass('tight');
	    }
	  });


	// fullpage
	$('#fullpage').fullpage({
		'afterLoad': function(anchorLink, index){
			
			if(index == 2) {
				console.log('dddd');
				TweenLite.to('.section2 .quote p.img1 img', .25, {
					animation: 'slideInLeft 500ms forwards',
					opacity: 1
				});
				TweenLite.to('.section2 .quote p.img2 img', .50, {
					animation: 'slideInRight 500ms forwards',
					opacity: 1
				});
				TweenLite.to('.section2 .quote p.img3 img', .75, {
					animation: 'slideInLeft 500ms forwards',
					opacity: 1
				});
				TweenLite.to('.section2 .quote p.img4 img', .75, {
					animation: 'slideInRight 500ms forwards',
					opacity: 0.7
				});


			}

			if(index == 3){
				TweenLite.to('.parallax .front', 2, {
					top: $('.section3').height()/10,
					opacity: 1
				});
			}

			

			if(index == 4){
				
			}

			

		},

		'onLeave': function(index, nextIndex, direction){
			if (index == 3){
				TweenLite.to('.parallax .front', 2, {
					top: 0
				});
			}

			if (index == 4){
				
			}
		}

		

	});

	
});