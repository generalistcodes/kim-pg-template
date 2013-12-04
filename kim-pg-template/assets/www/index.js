var myTouch1; 
var myTouch2;

$(document).ready(function () { 
	// create containers
	$(document.body).append('<div id="myTouch1" class="jsTouchPanel" style="position: absolute; left: 0px; top: 0px; border-left: 0px !important;"></div>');
	$(document.body).append('<div id="myTouch2" class="jsTouchPanel" style="position: absolute; left: 320px; top: 0px;"></div>');
	// init boxes
		$(".chart_box > .ring").live('click', function(){
		var getVal = $(this).attr('value');
		jsTouch.overlayPage('pages/overlay-msg2.html', { width: 300, height: 462, getVal: getVal});	
		});
		$("#chart_ring").hover(
		  function () {
		    $('grid_num').addClass("grid_num_hover");
		  },
		  function () {
		    $('grid_num').removeClass("grid_num_hover");
		  }
		);
	myTouch1 = jsTouch.init('myTouch1', { width: 320,  page: 'pages/lists.html' } );
	myTouch2 = jsTouch.init('myTouch2', { width: -320, page: 'pages/home.html' } );
	// unload page event
	resize();


		    var $sw = $('.rgrid'),$lyul = $('.lyul'),$lblock = $('.lblock');   
			
		    $lblock.live('click', function (event) {
		     //   event.preventDefault();
		       event.preventDefault();
				$(this).toggleClass('dc');
				$(this).toggleClass('cr');

		    });	
		    $lblock.live('click', function (event) {
		     //   event.preventDefault();
		       event.preventDefault();
				$(this).toggleClass('dc');
				$(this).toggleClass('dcselect');
		    });



		    $(".chart_box > .ring").live('touchstart click', function(){
		    	//console.log(event.srcElement);
		    	console.log(event);
});

		    var $sw = $(document.body);

            $sw.on('hold tap swipe doubletap transformstart transform transformend dragstart drag dragend swipe release', function (event) {
                event.preventDefault();

                console.log(event.direction);
            });

			//alert("the density is:" + window.devicePixelRatio);

});
// events
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false); // prevent default scroll 
document.addEventListener('orientationchange', resize, false);
window.addEventListener('resize', resize, false);

document.addEventListener('touchstart', function(event) {
    alert(event.touches.length);
}, false)

function resize() {
	var width  = parseInt(window.innerWidth);
	var height = parseInt(window.innerHeight);
	if (width > 1000 || height > 1000) {
		myTouch1.width = 320;
		myTouch2.width = -320;
		$('#myTouch2').css('left', 320);
	} else {
		myTouch1.width = width;
		$('#myTouch2').css('left', width);
	}
	jsTouch.resize();
}
