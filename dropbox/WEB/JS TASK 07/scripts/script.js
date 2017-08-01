	console.log("...script.js file loaded...");
	
	
	var num = 100;
	function Increment(){
		
		var incrementNum = num++;
		
		if(num % 2 == 1){
			document.getElementById("result1").value =	incrementNum;
		}
		else{
			document.getElementById("result").value =	incrementNum;
		}
		
			console.log("num: " + num);
	
	}
	
	