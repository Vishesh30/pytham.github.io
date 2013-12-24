function onStartWrite(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
		context.beginPath();
		context.moveTo(window.event.pageX - myCanvas.offsetLeft, window.event.pageY - myCanvas.offsetTop);
		
		$( document ).mousemove(function(evt){
			context.lineTo(evt.pageX - myCanvas.offsetLeft, evt.pageY - myCanvas.offsetTop);
			context.stroke();
		}).mouseup(function(evt){
			$( document ).unbind('mousemove');
			$( document ).unbind('mouseup');

	});
}

function moveCanvas(){
	$( document ).mousemove(function(evt){
			$( '#canvas' ).offset({ top: evt.pageY, left: evt.pageX})
		}).mousedown(function(evt){
			$( document ).unbind('mousemove');
			$( document ).unbind('mousedown');
		});	
}
