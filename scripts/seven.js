require.config({
	paths: {
		modernizr: 'libs/custom.modernizr',
		jquery: 'libs/jquery'
	},
  shim: {
  	"libs/respond.min" : { },
	"foundation/foundation" : { deps: ["jquery"], exports: 'jquery' },
	//"foundation/foundation.alerts": { deps: ["jquery"], exports: 'jquery' },
	//"foundation/foundation.cookie": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.forms": { deps: ["jquery"], exports: 'jquery' },
	//"foundation/foundation.placeholder": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.reveal": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.topbar": { deps: ["jquery"], exports: 'jquery' },
	"foundation/jquery.offcanvas": { deps: ["jquery"], exports: 'jquery' },
	//"libs/jquery.parallax-1.1.3": { deps: ["jquery"], exports: 'jquery' },
	"libs/parsley": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.flexslider-min": { deps: ["jquery"], exports: 'jquery' },
	"libs/mediaelement-and-player.min": { deps: ["jquery"], exports: 'jquery' }
  }
});

require(["modernizr",
	"jquery",
	"libs/respond.min",
	"foundation/foundation",
	//"foundation/foundation.alerts",
	//"foundation/foundation.cookie",
	"foundation/foundation.forms",
 	//"foundation/foundation.placeholder",
	"foundation/foundation.reveal",
	"foundation/foundation.topbar",
	"foundation/jquery.offcanvas",
	//"libs/jquery.parallax-1.1.3",
	"libs/parsley",
	"libs/mediaelement-and-player.min",
	"libs/jquery.flexslider-min",
], function (modernizr, $) {
  	$(document).foundation();
  	$(window).load(function() {
		$('.flexslider').flexslider({
		    animation: "slide",
		    animationLoop: false,
		    itemWidth: 200,                			
		    itemMargin: 10,
		    controlNav: false,
		    slideshow: false,
		    minItems: 2,
		    touch: true,
		    maxItems: 4,
		    move: 1,
		    prevText: "",
			nextText: ""
		});
	});

	var curSlide;
	
	$('.flexslider .slides li').on('click', function() {
		$('.loaded-carousel').flexslider({ 
		   	slideshow: false,
		    controlNav: false,
		    directionNav: true,
	        slideToStart: 0,  
	        minItems: 1,
		    touch: true,
		    maxItems: 1,
		    move: 1,
			prevText: "",
		 	nextText: "",
		 	after: function(slider) {
			    $('#videoModal .flex-direction-nav li').eq(1).html(slider.currentSlide + 1);
			    $('#player1')[0].player.pause();
				$('#youtube1')[0].player.pause();
			},
			start: function(slider) {
			    $('#videoModal .flex-direction-nav li').eq(1).before('<li>' + 1 + '</li>');
			    $('#videoModal .flex-direction-nav li').eq(2).before('<li>' + 'of' + '</li>');
			    $('#videoModal .flex-direction-nav li').eq(3).before('<li>' + slider.count + '</li>');
				$('video,audio').mediaelementplayer({features: ['playpause','progress','current','duration','volume','fullscreen']});
			}
		});
	});
	
	$( ".close-reveal-modal" ).click(function() {
		$('video')[0].player.pause();
		
	})
});