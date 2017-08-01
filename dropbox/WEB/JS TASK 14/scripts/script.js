	console.log("...script.js file loaded...");
 
	var htmlEls = [{sel: "wrapper", prop: "width"},
					{sel: "wrapper", prop: "height"}];
	
document.addEventListener("DOMContentLoaded", function(event){	
		createDiv();
		
		getValues("header1");
	//	getValues("aside1");//	getValues("nav1");//	getValues("article1");
		
});	
function createDiv(){
	//getValues("section1")
	//var myTable = "<table><tr><td style='width: 100px; color: red;'>Col Head 1</td>";
	//document.write(myTable);
	var childDiv = document.createElement("div");
	childDiv.id = "mychildDiv1";
	childDiv.style.color  = "red";
	document.getElementById("footer1").appendChild(childDiv);
	
}
///function createTable(){}
	
	//var table1 = document.createElement("table");
	//document.getElementById("footer1").appendChild(childDiv);
		
	var getProp = "";  //var incrementHeight = 5;
	
function getValues(propertyId){
	
	for(var i in htmlEls){
		
		for(var j in htmlEls[i]){
						
		}
		var cssProperty = htmlEls[i][j];		
		var elm = document.getElementById(propertyId);		
		var propertyE = window.getComputedStyle(elm, null).getPropertyValue(cssProperty);
		console.log(propertyId + " computed " + cssProperty + " " + propertyE );
		
	}
		///var pHeight= 100 + incrementHeight;
		elm.style.width = "100px";
		elm.style.height = "100" + "px";
		var propWidth = elm.style.width;
		var propHeight = elm.style.height;
		console.log(propertyId + " default width: " + propWidth  );
		console.log(propertyId + " default height: " + propHeight);
		//incrementHeight+=9;
		 //getProp = "width: " +propWidth + "height: " + propHeight;
	
	
}	
		