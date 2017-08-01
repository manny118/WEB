	console.log("read external script file");
	
	function a(){
		
		console.log("string in function a : " + string);
		return	;
	}
	function b(){
		var string = "string in function b";
		console.log("string in function b : " + string);
		return;
	}
	function c(){
		console.log("string in function c : " + string);
		b();
		console.log("string in function c : " + string);
	}