console.log("... JS14 script.js file has loaded ...");

window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

	getPropValues();
	// Unobstrusive events with addEventListener
	//document.getElementById("wrapper").addEventListener("click", logHello);

	// Unobstrusive events with addEventListener + passing parameters with anonymous function
	//document.getElementById("wrapper").addEventListener("dblclick", function(){logHello2("Stefan");});	

});

function getPropValues() {
	var htmlEl = document.getElementById("wrapper");

	var width = window.getComputedStyle(htmlEl, null).getPropertyValue("width");
	console.log("computed wrapper width= " + width);
	var backgroundColor = window.getComputedStyle(htmlEl, null).getPropertyValue("background-color");
	console.log("computed wrapper backgroundColor= " + backgroundColor);

	var cssProperty = "color";
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	var cssProperty = "margin";
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	
	htmlEl.style.margin = "2px 12px 0px 10px";
	var propValue = htmlEl.style.margin;
	console.log("defined wrapper margin = " + propValue);
	
	htmlEl.style.padding = "8px";
	var cssProperty = "padding";
	var propValue = htmlEl.style[cssProperty];
	console.log("defined wrapper "+ cssProperty + " = " + propValue);

	
	// CSS computed vs CSS defined
	var cssProperty = "width";
	var cssValue = "100px";
	htmlEl.style[cssProperty] = cssValue;
	console.log("Intention is to set the " + cssProperty + " to " + cssValue);
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	var propValue = htmlEl.style[cssProperty];
	console.log("defined wrapper "+ cssProperty + " = " + propValue);
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	
}