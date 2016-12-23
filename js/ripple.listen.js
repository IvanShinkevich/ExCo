$(function() {
	$('.ripple').click(rippleClick);
});

var rippleClick = function() {
	$field = $(this);//a
	//alert($field);
	var $div = $('<div/>');
	var btnOffset = $field.offset();
	var xPos = event.pageX - btnOffset.left;
	var yPos = event.pageY - btnOffset.top;

	$div.addClass('ripple-effect');
	var $ripple = $(".ripple-effect");
	var height = $field.height();
	var width = $field.width();
	$ripple.css("height", height);
	$ripple.css("width", width);
	$div
	.css({
	  top: yPos,
	  left: xPos,
	  //background: $(this).data("ripple-color")
	}) 
	.appendTo($field);

	window.setTimeout(function(){
	$div.remove();
	}, 500);
	return true;
}