	console.log("... MCR_SP_0.1 script.js file loaded...");
	/*thIS IS the MCR Something Pretty Rev 0.1 File*/
	var mcr_sp = {};
	mcr_sp.myName = "Manny"
	///console.log(mcr_sp.myName);
	
	mcr_sp.welcome = function(){
		console.log("Welcome " + mcr_sp.myName);
	}
	
	
	mcr_sp.zoomText=function(id, txtContext, speed, delay, maxSize, minSize, currentSize,direction ){
		
		htmlElement = document.getElementById(id);
		console.log(htmlElement);
		
		if(direction == "fadeOut"){
			if(currentSize > 1){
				currentSize --;
				setTimeout("mcr_sp.zoomText('fadeOut')",speed);
			}
			else{setTimeout("mcr_sp.zoomText('fadeIn')",speed);}
		}
		
		
	}
	
	