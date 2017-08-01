	console.log("...script.js file loaded...");


document.addEventListener("DOMContentLoaded", function(event){
	
	document.getElementById("top").addEventListener("click", function(){changeBlock();});
	
})

function changeBlock(){
	var parentElement = document.getElementById("top");
	
	
	
	if(parentElement.style.display = "none"){
		
		parentElement.style.display = "block"
	}
	else{
		parentElement.style.display = "none"
	}
	
	
}		


	