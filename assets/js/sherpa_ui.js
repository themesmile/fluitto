$(document).ready(function(){		
	$('#width_slider').slider({
		range:"min",
		min:70,
		max:97,
		value:30,
		slide:changeWidth,
		change:changeWidth
		
	});
	changeWidth();
	function changeWidth(){
	var sliderWidth = $('#width_slider').slider("value");
		$(".container-fluid").css("width", sliderWidth+'%');
		
	}
	
});  		