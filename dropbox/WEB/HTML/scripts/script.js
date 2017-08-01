	console.log("...script.js file loaded...");
	
	document.addEventListener("DOMContentLoaded", function(event){
		
		//
		window.alert("hey there");
		
		//
		var mySel = document.querySelectorAll(".hcl");
		for(var i=0; mySel.length; i++){
			
			mySel[i].style.fontSize = "60px";
			
		}
		
		
		
		
	});
	
	
	