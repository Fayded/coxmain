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

  	$("#carousel").flexslider({
		        animation: "slide",
		        useCSS: false,
		        controlNav: false,
		        animationLoop: false,
		        smoothHeight: true,
		        slideshow: false,
		        itemWidth: 200,
		        itemMargin: 10,
		        minItems: 2,
		        touch: true,
		        maxItems: 10,
		        move: 1,
		        asNavFor: '#slider',
				prevText: "",
				nextText: ""
		});
		
		$('#slider').flexslider({
		    animation: "slide",
		    useCSS: false,
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    smoothHeight: true,
		    sync: "#carousel",
			prevText: "",
			nextText: "",
		    start: function(slider){

          	},
          	before: function(slider){
          	
          	}
		});
	$('video,audio').mediaelementplayer({features: ['playpause','progress','current','duration','volume','fullscreen']});
});
