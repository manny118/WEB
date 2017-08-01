	console.log("JS07 script.JS file");

	function startBubbles(id, canvasId, countBubbles){
		resizeBubbles(id, canvasId);
		var parentElement = document.getElementById(id);
		var canvasElement = document.getElementById(canvasId);
		var parentWidth = parseFloat(window.getComputedStyle(parentElement, null).getPropertyValue("width"));
		var parentHeight = parseFloat(window.getComputedStyle(parentElement, null).getPropertyValue("height"));
		
		//console.log("parentWidth: " + parentWidth);
		for(i =0; i<countBubbles; i++){
			var newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			newCircle.id= "bubble_" + (i);
			newCircle.style.fill = "white"
			newCircle.style.strokeWidth = "1";
			newCircle.style.stroke = "gray"
			var currentCX = 100;
			var currentCY = 100;
			newCircle.setAttribute("cx", currentCX);
			newCircle.setAttribute("cy", currentCY);
			newCircle.setAttribute("r", "9");
/*check this*/			newCircle.className = "bubbles"
			canvasElement.appendChild(newCircle);
		}
		
	}
		
	function resizeBubbles(id, canvasId){
		var parentElement = document.getElementById(id);
		var canvasElement = document.getElementById(canvasId);
		
		var parentHeight = parseFloat(window.getComputedStyle(parentElement, null).getPropertyValue("height"));
		console.log("parentWidth: " + parentWidth);
		var parentElement = document.getElementById(id);
		
		var parentWidth = parseFloat(window.getComputedStyle(parentElement, null).getPropertyValue("width"));
		console.log("parentWidth: " + parentWidth);
		parentElement.style.height = (parentHeight-10) + "px";
		parentElement.style.width = (parentWidth-10) + "px";
		//canvasElement
	}	
	
	
	
	
	