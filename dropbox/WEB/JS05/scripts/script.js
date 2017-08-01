	console.log("...script.js file loaded...");

	//for(var n = 0; n < 7; n+2){
			
	//console.log("x");
		
	//	for(var p = 0; p < 7; p++){
			
	//		console.log("x");
	//	}
	
//	}

/*	
			
		for(var i =0; i < 8; i++){
			
			
			
			for(var j= 0; j<i; j++){
				
				//console.log("x");
				
				document.write("x");
				
			}
			document.write("<>");
			document.write(" \n" );
			
		}*/

		
function printStars(character){		
		var spaces = 0;

		for (var i = 1; i <=15; i=i+2) {

			for (var j = 0; j < i; j++) {
			
				spaces =i+j;
				
				document.write("   ");
				
				document.write(character);
				
			}
			document.write("<br>");
			document.write("<br>");
		}	
		
			
}
	
	
	
	
	
	
	
	
	