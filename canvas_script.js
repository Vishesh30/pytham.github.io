function onCanvas(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	
	$("#canvas").mousedown(function(evt){
		var offset = $("#canvas").offset();
		
		context.beginPath();
		context.moveTo(evt.pageX , evt.pageY  );
		
		$(document).mousemove(function(evt){
			var offset = $("#canvas").offset();
			
			context.lineTo(evt.pageX , evt.pageY );
			context.lineWidth = 1;
			context.strokeStyle ='black';
			context.stroke();
		}).mouseup(function(){
					$( document ).unbind('mousemove');
					$( document ).unbind('mouseup');
		});
	});
}

function moveCanvas(){
	$( document ).mousemove(function(evt){
			//document.style.cursor='move';
			$( '#postit' ).offset({ top: evt.pageY, left: evt.pageX})
		}).mousedown(function(evt){
			$( document ).unbind('mousemove');
			$( document ).unbind('mousedown');
			//document.style.cursor='default';
		});	
}

function clearCanvas(){
	var myCanvas = document.getElementById('canvas');
	var context = myCanvas.getContext("2d");
	context.clearRect(0,0,myCanvas.width,myCanvas.height);
}
