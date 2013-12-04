$(function(){
		$("a.fancybox").fancybox({
		"transitionIn":			"elastic",
		"transitionOut":		"elastic",
		"easingIn":					"easeOutBack",
		"easingOut":				"easeInBack",
		"titlePosition":		"over",
		"padding":					0,
		"speedIn":      		500,
		"speedOut": 				500,
		"hideOnContentClick":	"true",
		"overlayShow":        false
	});	
	$(".fancybox").fancybox({
		"transitionIn":			"elastic",
		"transitionOut":		"elastic",
		"easingIn":					"easeOutBack",
		"easingOut":				"easeInBack",
		"titlePosition":		"over",
		"padding":					0,
		"speedIn":      		500,
		"speedOut": 				500,
		"hideOnContentClick":	false,
		"overlayColor": "#000000",
		"overlayShow":        true
	});	
	$(".fancyboxtooth").fancybox({
		//"transitionIn":			"elastic",
		//"transitionOut":		"elastic",
		//"easingIn":					"easeOutBack",
		//"easingOut":				"easeInBack",
		"titlePosition":		"over",
		"padding":					0,
		"speedIn":      		500,
		"onStart" : function () {
			//$("#threed").prepend('<iframe src="./td" class="ifrm" scrolling="no"></iframe>');
			$(".ifrm").attr('src','./td/index.html');
		},
		"onCleanup": function(){
			//alert($("#threed").html());
		},
		"speedOut": 				500,
		"hideOnContentClick":	false,
		"overlayColor": "#000",
		"overlayShow":        true
	});

	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: true,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	//rgrid fbox
})