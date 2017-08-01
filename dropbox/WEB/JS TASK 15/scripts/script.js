	console.log("...script.js file loaded..." + Date());
 	
	document.addEventListener("DOMContentLoaded" , function(event){
		
		loadDocs();
		document.addEventListener("click", contentBody);
		
	});
	
	function loadDocs(){
		
	document.getElementById("wrapper").innerHTML = "DOM: " + Date();
		//	document.getElementById("wrapper").innerHTML = "DOM: " + new Date(year, month, day, hours, minutes, seconds, milliseconds);
		//	document.getElementById("wrapper").innerHTML =
		
				
	}
	
	
	function contentBody(){
		
		document.getElementById("htmlBody").innerHTML = "BODY: " + Date();
				
	}
	
	