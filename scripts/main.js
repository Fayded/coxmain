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
	//"foundation/foundation.reveal": { deps: ["jquery"], exports: 'jquery' },
	"foundation/foundation.topbar": { deps: ["jquery"], exports: 'jquery' },
	"foundation/jquery.offcanvas": { deps: ["jquery"], exports: 'jquery' },
	"libs/selectnav.min": { deps: ["jquery"], exports: 'jquery' },
	//"libs/jquery.parallax-1.1.3": { deps: ["jquery"], exports: 'jquery' },parsley.js
	"libs/parsley": { deps: ["jquery"], exports: 'jquery' },
	"libs/skrollr.min": { deps: ["jquery"], exports: 'jquery' },
	"libs/jquery.flexslider-min": { deps: ["jquery"], exports: 'jquery' }
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
	//"foundation/foundation.reveal",
	"foundation/foundation.topbar",
	"libs/selectnav.min",
	"foundation/jquery.offcanvas",
	//"libs/jquery.parallax-1.1.3",
	"libs/parsley",
	"libs/skrollr.min",
	"libs/jquery.flexslider-min",
], function (modernizr, $) {
  	$(document).foundation();
  	
  	if(window.outerWidth > 768) {
  		skrollr.init({
			forceHeight: false,
		});
  	};

	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		controlNav: true,
		directionNav: true,
		slideshow: false,
		minItems: 1,
		touch: true,
		useCSS: Modernizr.touch,
		maxItems: 3,
		prevText: "",
		nextText: ""
	});

	var myArrays = {
		arr : [],
		arr2 : []
	}

	$('.templ-box:first .hide').each(function() {
		myArrays.arr.push($(this));
	});

	$('.templ-box:last .hide').each(function() {
		myArrays.arr2.push($(this));
	});

	function loadItems (array, index) {
		var newArray = array; 
		var newIndex = index;
		var itemsInArray = newArray.length;

		var value = Math.min(newIndex, itemsInArray);

		for(var i = 0; i < value; i++) {
			newArray[i].removeClass('hide');
		}
		newArray.splice(0, value);
	}

	loadItems(myArrays.arr, 12);
	loadItems(myArrays.arr2, 12);

    $(".pink-cta:first a" ).on( "click", function(event) {
    	event.preventDefault();
    	loadItems(myArrays.arr, 12);
	});

	$(".pink-cta:last a" ).on( "click", function(event) {
    	event.preventDefault();
    	loadItems(myArrays.arr2, 12);
	});
});
