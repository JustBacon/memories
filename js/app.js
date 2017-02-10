var firstClick = [];
var secondClick = [];
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
var array1 = [card1,card2]
var match = document.getElementById("matches");
var matchCounter = 0;
console.log(array1[1])

function flip(id){
	clicked++
	if(clicked == 1){
		document.getElementById(id).style.transform = "rotateY(180deg)"
		document.getElementById(id).onclick = false
		firstClick.push(id)
		console.log(firstClick[0])
	}else if(clicked == 2){
		document.getElementById(id).style.transform = "rotateY(180deg)"
		secondClick.push(id)
		console.log(secondClick[0])
		if(card1.style.background === card2.style.background && card1.style.transform === "rotateY(180deg)" && card2.style.transform === "rotateY(180deg)"){
			setTimeout(function(){
				card2.onclick = null
				card1.onclick = null
				setTimeout(function(){
					matchCounter++
					match.innerHTML = matchCounter
					card1.style.opacity = "0.5"
					card2.style.opacity = "0.5"
					card2.style.transform = "rotateY(179deg)"
					firstClick.length = 0
					secondClick.length = 0
					clicked = 0;	
				},1000)
			},1);
		}else if(card3.style.background === card4.style.background && card3.style.transform === "rotateY(180deg)" && card4.style.transform === "rotateY(180deg)"){
			setTimeout(function(){
				card3.onclick = null
				card4.onclick = null
				setTimeout(function(){
					matchCounter++
					match.innerHTML = matchCounter
					card3.style.opacity = "0.5"
					card4.style.opacity = "0.5"
					card3.style.transform = "rotateY(179deg)"
					firstClick.length = 0
					secondClick.length = 0
					clicked = 0;	
				},1000)
			},1);
		}else if(card5.style.background === card6.style.background && card5.style.transform === "rotateY(180deg)" && card6.style.transform === "rotateY(180deg)"){
			setTimeout(function(){
				card5.onclick = null
				card6.onclick = null
				setTimeout(function(){
					matchCounter++
					match.innerHTML = matchCounter
					card5.style.opacity = "0.5"
					card6.style.opacity = "0.5"
					card5.style.transform = "rotateY(179deg)"
					firstClick.length = 0
					secondClick.length = 0
					clicked = 0;	
				},1000)
			},1);
		}else if(card7.style.background === card8.style.background && card7.style.transform === "rotateY(180deg)" && card8.style.transform === "rotateY(180deg)"){
			setTimeout(function(){
				card7.onclick = null
				card8.onclick = null
				setTimeout(function(){
					matchCounter++
					match.innerHTML = matchCounter
					card7.style.opacity = "0.5"
					card8.style.opacity = "0.5"
					card7.style.transform = "rotateY(179deg)"
					firstClick.length = 0
					secondClick.length = 0
					clicked = 0;	
				},1000)
			},1);
		}else{
			setTimeout(function(){
			document.getElementById(firstClick).style.transform = "rotateY(0deg)"
			document.getElementById(secondClick).style.transform = "rotateY(0deg)"
			document.getElementById(firstClick).onclick = function(){flip(this.id)}
				setTimeout(function(){
					firstClick.length = 0
					secondClick.length = 0
					clicked = 0
					console.log(firstClick[0])
				},250);
			},1000);
		}
	}

}