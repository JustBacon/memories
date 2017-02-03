console.log("hi")
var clicked = 0;
var maxClick = 3;

/* document.getElementById(id).onclick = */function flip(id){
	clicked ++;
	document.getElementById(id).style.transform = "rotateY(180deg)";
	if (clicked > maxClick) {
		document.getElementById(id).disabled = true;
	}
if (document.getElementById(id).style.transform === "rotateY(180deg)"){
		setTimeout(function(){document.getElementById(id).style.transform = "rotateY(0deg)";
	},1000);
}
}