	console.log("...script.js file loaded...");
	
	var red = 0;
	var blue = 0;
	var green = 0;
	
	
	
	function changeColour(){
	
		//var color = "rgb("+red+",0 ,0 )" ;
		
		var color = "rgb("+red+","+green+" ,"+blue+" )" ;
		
		
		
		document.getElementById("colourDiv").style.backgroundColor = color;
		
		
		
		
		red += 8;
		green += 5;
		blue += 2;
		
		if(red > 255 ){red =0; blue =0; green=5;}
		
		console.log("red: " + red);

	}
	
	