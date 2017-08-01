	console.log("...script.js file loaded...");
	
	
	var myStudents = new Array();

	myStudents[0] = "Success";
	myStudents[1] = "Cars";
	myStudents[2] = 2017;
	myStudents[3] = function(name) {	
		console.log("Hi Student" + name);
	};
	myStudents[4] = {course: "Software", centre: "Finglas"};
	
	console.log(myStudents[3]("JOY"));
	console.log(myStudents[4].course);
	
	var arrayIndex = [ "java", "c#"]
	console.log(arrayIndex[0]);
			
	var arrayIndex = [ {name: "c#"}]
	console.log(arrayIndex[0].name);
		
	for(var i=0; i<myStudents.length; i++){
		console.log(myStudents[i]);
	}
	
	var randomCol = new Array();
	for(var i=0; i<100; i++){
		randomCol[i] ="rgb("+  
		Math.floor(Math.random()*256); + ", 0, 0)" ;
	}
	console.log(randomCol);
	
		
	