$(document).ready(function(){		
	$('#top-slider').slider({
		range:"min",
		min:70,
		max:95,
		value:30,
		slide:changeWidth,
		change:changeWidth
		
	});
	changeWidth();
	function changeWidth(){
	var sliderWidth = $('#top-slider').slider("value");
		$(".container-fluid").css("width", sliderWidth+'%'),
		$(".footer-fluid").css("width", sliderWidth+'%');

		
	} 	
});  		