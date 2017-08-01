	console.log("...script.js file loaded...");


	//
	
	var index = 1;
	document.addEventListener("DOMContentLoaded", function(event){
		console.log("DOM loaded");
				
	});
	
	
	function nextChapter(){
		
		index++;
		
		console.log("it clicked");

		document.getElementById("chapter1").style.display = "none";
		document.getElementById("chapter2").style.display = "block";
		
	}
	
	
	
	function prevChapter(){
		
		document.getElementById("chapter2").style.display = "none";
		document.getElementById("chapter1").style.display = "block";
				
	}
	
	function toggleNavPopOut(){
		
		var htmlEl = document.getElementById("navList");
		if(htmlEl.style.display == "block"){
			htmlEl.style.display == "none"
		}
		else{
			htmlEl.style.display == "block"
		}
		
	}
	
	function homePage(){
		console.log("h1");
		///
		document.getElementById("<a href='myhtml.htm' title='Learn HTML'>").innerHTML;;
		
	}
	
	
	