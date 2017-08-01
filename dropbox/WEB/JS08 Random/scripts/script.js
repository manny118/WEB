	console.log("JS07 script.JS file");

	
	function randomNum(){
		var randomNumber= Math.floor(Math.random()*11);
		return randomNumber;		
	}
	setInterval(function(){
		document.getElementById("randomNumber").innerHTML=randomNum();
	}, 2000);
	
	
	
	