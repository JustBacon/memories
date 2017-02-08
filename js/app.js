console.log("hello.. it's me")
var clicked = 0;
var maxClick = 2;
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");



function flip(id){
	// clicked ++;
	document.getElementById(id).style.transform = "rotateY(180deg)";
	// card1.style.opacity = "0"
	if (card1.innerHTML === card2.innerHTML) {
		card1.style.opacity = "0";
		card2.style.opacity = "0";
}
}
// 	}else if (document.getElementById(id).style.transform === "rotateY(180deg)"){
// 		setTimeout(function(){document.getElementById(id).style.transform = "rotateY(0deg)";
// 	},1000);
// }
// }