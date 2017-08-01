console.log("...JST12 loaded scripts.js file ...");


document.addEventListener("DOMContentLoaded", function(event){
	console.log("Doc loaded");
	document.getElementById("toggleDivH").addEventListener("click", toggle);
	
	var htmlElement = document.getElementById("toggleDiv");
	 divOrigHeight = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue("height"));
	
//	var divOrigHeight = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue("height"));
	htmlElement.style.height = divOrigHeight + "px";
			
});
var divOrigHeight = "0px";
function toggle(){
	//console.log("toggle function loaded");
	var htmlElement = document.getElementById("toggleDiv");
	
	
	if (htmlElement.style.opacity == "0") {
		console.log("Fading In");
		htmlElement.style.opacity = "1";
		htmlElement.style.height = divOrigHeight + "px";
	}
	else{
		console.log("Fading Out");
		htmlElement.style.opacity = "0";
		htmlElement.style.height = "0";
	}
	
}



