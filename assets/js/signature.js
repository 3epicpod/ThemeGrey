
var eventDown = "mousedown";
var eventMove = "mousemove";
var eventUp = "mouseup";

var paintingStart = false;
var painting = false;

var objWidth, objHeight;
var ObjPos = new Array();
var isJustClicked = false;

$(document).ready(function(){
	setTimeout(function(){
	document.onKeyDown = function(){
		if(window.event && window.event.keyCode == 9) 
		{
			return false; 
		}
	}

	var c = document.getElementById("myCanvas");
	var context = c.getContext("2d");
	//context = canvas.get(0).getContext("2d");
	
	
	if ('ontouchstart' in document.documentElement) {
		eventDown = 'touchstart';
	}
	if('ontouchmove' in document.documentElement) {
		eventMove = 'touchmove';
	}
	if('ontouchstart' in document.documentElement) {
		eventUp = 'touchend';
	}
	$('#eraser').bind("click",function(){


		context.clearRect(0, 0, 1024, 1024);
		$('#myCanvas').css({'background-image':'none'});

		
	});

	$('#myCanvas').bind(eventDown, function(e){

			isJustClicked = true;
			painting = true;
			element = $(event.target);
			parentOffset = element.parent().offset();
			if(eventDown == "mousedown") {
				lastX = e.pageX - this.offsetLeft - parentOffset.left;
				lastY = e.pageY - this.offsetTop - parentOffset.top;
			}else{
				lastX = e.originalEvent.touches[0].pageX - this.offsetLeft - parentOffset.left;
				lastY = e.originalEvent.touches[0].pageY - this.offsetTop - parentOffset.top;
			}
		
	});
	$(window).bind(eventUp, function(e){
	    painting = false;
	    isJustClicked = false;
	});
	$(window).bind(eventMove, function(e){
	    if (painting) {
		
		if(eventMove == "mousemove") {
			mouseX = e.pageX - document.getElementById("myCanvas").offsetLeft - parentOffset.left;
			mouseY = e.pageY - document.getElementById("myCanvas").offsetTop - parentOffset.top;
		}
		else{
			mouseX = e.originalEvent.touches[0].pageX - document.getElementById("myCanvas").offsetLeft - parentOffset.left;
			mouseY = e.originalEvent.touches[0].pageY - document.getElementById("myCanvas").offsetTop - parentOffset.top;
		}
		// find all points between        
		var x1 = mouseX,
		    x2 = lastX,
		    y1 = mouseY,
		    y2 = lastY;
		var lineThickness = 5;
		if (x1 < lineThickness) x1 = lineThickness;
		else if (x1 >= $("#myCanvas").width()-lineThickness) x1 = $("#myCanvas").width()-lineThickness;
		if (y1 < lineThickness) y1 = lineThickness;
		else if (y1 >= $("#myCanvas").height()-lineThickness) y1 = $("#myCanvas").height()-lineThickness;
		if (isJustClicked) {
			context.beginPath();
			context.moveTo(x1, y1);
			context.lineWidth = lineThickness;
			isJustClicked = false;
		}
		else context.lineTo(x1, y1);
		context.strokeStyle = "red";
		context.stroke();
		lastX = mouseX;
		lastY = mouseY;
	    }
	});

},1000);
});






