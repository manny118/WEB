	console.log("...script.js file loaded...");
	
	
	function getAverage(){
		var counter = 0;
		var sum = 0;
		
		var num1 = parseInt(document.getElementById("num1").value);
		var num2 = parseInt(document.getElementById("num2").value);
		var num3 = parseInt(document.getElementById("num3").value);
		var num4 = parseInt(document.getElementById("num4").value);
		var num5 = parseInt(document.getElementById("num5").value);
		var num6 = parseInt(document.getElementById("num6").value);
		var num7 = parseInt(document.getElementById("num7").value);
		var num8 = parseInt(document.getElementById("num8").value);
		var num9 = parseInt(document.getElementById("num9").value);
		var num10 = parseInt(document.getElementById("num10").value);
		
		
		if( num1 > 0 ){
			sum = sum + num1;
			counter++;
		}
		if( num2 > 0 ){
			sum = sum + num2;
			counter++;
		}
		if( num3 > 0 ){
			sum = sum + num3;
			counter++;
		}
		if( num4 > 0 ){
			sum += num4;
			counter++;
		}
		if(num5 > 0){
			sum += num5;
			counter++;
		}
		if(num6 > 0){
			sum += num6;
			counter++;
		} 
		if(num7 > 0){
			sum += num7;
			counter++;
		}
		if(num8 > 0){
			sum += num8;
			counter++;
		}
		if(num9 > 0){
			sum += num9;
			counter++;
		}
		if(num10 > 0){
			sum += num10;
			counter++;
		}
		
		document.getElementById("result").value = sum / counter;
		
		
	}
	
	
	
	function calculateAverage(){}
	

	
	
	
	
	
	
	