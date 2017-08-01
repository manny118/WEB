	console.log("...script.js file loaded...");
	var a;
	console.log("a" +  a);
	
	if(a == undefined){
		console.log("a is undefined");
	}
	else{
		console.log("a is defined");
	}
	
	var b = 5;
	console.log("b" +  b);
	if(b == undefined){
		console.log("b is undefined");
	}
	
	else{
		console.log("b is defined");
	}
	
	
	var c = "Good";
	c +=  " morning ";
	console.log( "c: " + c + "!"  );
	
	var d=5, e=6, x;
	console.log("d = " + d);
	console.log("e = " + e);
	console.log("d + e = " + (d + e));
	console.log("d - e = " + (d - e));
	console.log("d * e = " + (d * e));
	console.log("d / e = " + (d / e));
	console.log("x + e = " + (x + e));///this returns NaN(Not a number)
	if( (x + e) == NaN ){
		console.log("(x + e) returns NaN, not a number");
		
	}
	
	var f = 4, g=4;
	console.log("f = " + f);
	console.log("g = " + g);
	if(f == g){
		console.log("f equals g");
	}
	else{
		console.log("f is not equal to g");
	}
	
	var h = 4, i="4";
	console.log("h = " + h);
	console.log("i = " + i);
	if(h == i){
		console.log("h equals i");
	}
	else{
		console.log("h is not equal to i(comparison with '====' STRICT)");
	}
	
	if(h === i){
		console.log("h equals i");
	}
	else{
		console.log("h is not equal to i (comparison with '====' STRICT)");
	}
	
	
	var j = false;
	console.log("j: " + j);
	if(j){
		console.log("j == true");
	}

	else{
		console.log("j == false");
	}
	
	if(!j)
	{
		console.log("j == not true");
	}
	
	console.log("Testing fot true and false");
	
	
	if(false){
		console.log("tested for false and found to be true");
	}
	else{
		console.log("tested for false and found to be false");
	}
	
	
	function k()
{
		
		return {
			x: "Curly brace in next line"			
		};
		
		
	}
	
	function l(){
		
		return {
			x: "Curly brace in next line"			
		};
		
	}
	
	///
	
	console.log("function K : " + k());	
	console.log("function l : " + l());	
	
	for(var n = 0; n < 10; n++){
		console.log("For loop for n :" + n);		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	