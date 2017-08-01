	console.log("...script.js file loaded...");
	var centerRed =255;
	var centerBlue =255;
	var centerGreen =255;
	
	var topLeftRed =0;
	var topLeftBlue =0;
	var topLeftGreen =0;
	
	var topRightRed =0;
	var topRightBlue =0;
	var topRightGreen =0;
	
	var bottomRightGreen =0;
	var bottomRightRed =0;
	var bottomRightBlue =0;
	
	var bottomLeftGreen =0;
	var bottomLeftRed =0;
	var bottomLeftBlue =0;
	
	
	function changeColourValues(){
		centerRed = randomNum();
		centerBlue = randomNum();
		centerGreen = randomNum();	console.log("center:  " + centerRed,centerBlue,centerBlue);
		
		topLeftBlue = randomNum();
		topLeftRed = randomNum();
		topLeftGreen = randomNum();console.log("topLeft:  " + topLeftRed,topLeftBlue,topLeftGreen);
		
		topRightRed = randomNum();
		topRightBlue = randomNum();
		topRightGreen = randomNum();console.log("topRight:  " + topRightRed,topRightBlue,topRightGreen);
		
		bottomRightGreen = randomNum();
		bottomRightRed = randomNum();
		bottomRightBlue = randomNum();console.log("bottomRight:  " + bottomRightGreen,bottomRightRed,bottomRightBlue);
		
		bottomLeftGreen = randomNum();
		bottomLeftRed = randomNum();
		bottomLeftBlue = randomNum();console.log("bottomLeft:  " + bottomRightGreen,bottomRightRed,bottomRightBlue);
	
	}
	
	
	
	
	
	function randomNum(){
		var randomNumber= Math.floor(Math.random()*256);
		return randomNumber;		
	}
	function changeColour(){
	//	document.getElementById("topLeft").style.backgroundColor = 
	//				"rgb("+topLeftRed+" ,"+topLeftGreen+" , "+topLeftBlue+" )";
					
		document.getElementById("topLeft").style.background = 
					"linear-gradient(-45deg, "+
					
					"rgb("+centerRed+" ,"+centerGreen+" , "+centerBlue+" ) "+
					", "+
					
					
					"rgb("+topLeftRed+" ,"+topLeftGreen+" , "+topLeftBlue+" )" + ");"
		
	}
	
	setInterval(function(){
		//console.log("Interval");
		changeColourValues();
		changeColour();

		//document.getElementById("randomNumber").innerHTML=changeColour();
	}, 3000);
	