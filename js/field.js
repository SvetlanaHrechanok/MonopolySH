'use strict';

startGame.addEventListener('click', () =>{
    localStorage.clear();

    localStorage.setItem("fieldStep","[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]");

    localStorage.setItem("move",1);

    document.getElementById('game').style.display = "block";

    document.location.href = 'index.html';
});

stopGame.addEventListener('click', () =>{
    localStorage.clear();

    document.getElementById('game').style.display = "none";

    document.location.href = 'index.html';
});

function infoFromId(id){

	let inside, cost, pay, lineCost, linePay;
	
	switch(id){
	case 0: 
		inside = 'Старт';
		break;

	case 10:  
		inside = 'Тюрьма';
		break;

	case 20:  
		inside = 'Свободa';
		break;

	case 30:  
		inside = 'Иди в тюрьму';
		break;

	case 2:
	case 12:
	case 22:
	case 32:  
		inside = 'Бери карту!';
		break;

	case 5:
	case 15:
	case 25:
	case 35:

		cost = 400;
		pay = 200;

		lineCost = '<span id="cost' + id + '">' + cost + '</span>';
		linePay = '<span id="pay' + id + '">' + pay + '</span>';

		inside = lineCost + '<br>' + linePay;
		break;

	case 8:
	case 18:
	case 28:
	case 38:

		cost = 500;
		inside = 'Бонус <span id="bonus' + id + '">' + cost + '</span>';
		break;

	default:
		cost = id * 4 * 50;
		pay = id * 50;

		lineCost = '<span id="cost' + id + '">' + cost + '</span>';
		linePay = '<span id="pay' + id + '">' + pay + '</span>';

		inside = lineCost + '<br>' + linePay;
	}
	return inside;
}

function drawBox(objDiv){

	let div = document.createElement('div');
		div.style.backgroundColor = "#bbb";
		div.style.border = "1px solid black";
		div.style.position = "absolute";
		div.style.top = objDiv.top + 'px';
		div.style.left = objDiv.left + 'px';
		div.style.width = objDiv.width + 'px';
		div.style.height = objDiv.height + 'px';
		div.id = objDiv.id;
		div.innerHTML = infoFromId(objDiv.id);

	return div;
}

let field = document.getElementById("field");

let newDiv = {
	top : 0,
	left : 0,
	width : 0,
	height : 0,
	id : 0
};

for(let i = 0; i < 41; i++){
	
	switch(i){
		case 0:	// start
			newDiv.width = 100;
			newDiv.height = 100;
			break;

		case (i > 0 && i < 10)? i : 'alert' : //top line
			newDiv.width = 50;
			newDiv.height = 100;
			newDiv.left = 100 + (i - 1) * newDiv.width;
			break;

		case 10:	// jail
			newDiv.width = 100;
			newDiv.height = 100;
			newDiv.left = 550;
			break;

		case (i > 10 && i < 20)? i : 'alert':	// right line
			newDiv.width = 100;
			newDiv.height = 50;
			newDiv.left = 550;
			newDiv.top = 100 + (i - 11) * newDiv.height;
			break;
		
		case 20:	//free
			newDiv.width = 100;
			newDiv.height = 100;
			newDiv.left = 550;
			newDiv.top = 550;
			break;

		case (i > 20 && i < 30)? i : 'alert':	// left line
			newDiv.width = 50;
			newDiv.height = 100;
			newDiv.left = 500 - (i - 21) * newDiv.width;
			newDiv.top = 550;
			break;

		case 30:	//go to jail
			newDiv.width = 100;
			newDiv.height = 100;
			newDiv.left = 0;
			newDiv.top = 550;
			break;	
			
		case (i > 30 && i < 40)? i : 'alert':	// left line
			newDiv.width = 100;
			newDiv.height = 50;
			newDiv.top = 500 - (i - 31) * newDiv.height;
			break;

	}
	newDiv.id = i;

	field.appendChild( drawBox(newDiv) );
}

let flagMove = 0;

/*let fieldStep = JSON.parse(localStorage.getItem("fieldStep"));

if (fieldStep == null) {
  fieldStep = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  localStorage.setItem("fieldStep",fieldStep);
}*/



