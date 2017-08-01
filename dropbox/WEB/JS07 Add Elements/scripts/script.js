	console.log("JS07 script.JS file");
	var divIdNum=0;
	var divDim=0;
	var red =15;var blue=5;
	function createNewDiv(){
		var color  = "rgb("+red+",20,"+blue+")";
		var newElement = document.createElement("div");
		newElement.id = "newDivId" +divIdNum;
		divIdNum++;
		newElement.className = "divStyle";
		newElement.style.width = divDim + "px"; 
		newElement.style.height = divDim + "px"; 
		newElement.innerHTML = "Text";
		newElement.innnerText = "Div" + divIdNum;
		newElement.style.fontSize = (divDim/3) + "px";
		newElement.style.backgroundColor = color;
		divDim= divDim+10;
		document.getElementById("wrapper").appendChild(newElement);
		red= red+1 5; blue=blue+38;
		if(red>255 || blue> 255){red=20;blue=5}
	}
	
	
	
	
	