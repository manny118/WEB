	console.log("...script.js file loaded...");

	var companies = [{name: "Microsoft", symbol: "MSFT", founded: "1975"}, 
					{name: "Oracle EMA", customers: 4200, phone: "1850 672 253"},
					{name: "Apple", symbol: "AAPL", founder: "Steve Jobs"}
					];
	
function printArray(){
	
	var myInnerHtml = document.getElementById("arrayValuesInnerHtml");
	var myTag = "<ul>";
	
	for(var i in companies){
		myTag += "<li>";
		
		for(var j in companies[i]){
			console.log(" " +  companies[i][j] );
			myTag +=   " " +  companies[i][j] ;
		
		}
			myTag += "</li>";
			
	}
			myTag += "</ul>";
			myInnerHtml.innerHTML = myTag;
}		
	
function printWithAppend(){
	var myInnerHtml = document.getElementById("arrayValuesInnerHtml");
	var childDiv = document.createElement("ul");
	myInnerHtml.appendChild(childDiv);
	
	document.getElementById("arrayValuesInnerHtml").appendChild("arrayValuesAppendChild"); 
	
	for(var i in companies){
	
		for(var j in companies[i]){
			childDiv  += "</br>"  + companies[i][j];
		}
	}
}	
	
	
	