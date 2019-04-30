'use strict';

startGame.addEventListener('click', () =>{
    localStorage.clear();

    let fieldStep = {
        field: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        cost: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],     
        bgcolor: ["#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb", "#bbb"]
    };
    localStorage.setObj('fieldStep', fieldStep);

    localStorage.setItem('move',1);

    document.getElementById('game').style.display = "block";
    document.getElementById('addPlayer').style.display = "block";

    document.location.href = 'index.html';
});

stopGame.addEventListener('click', () =>{
    let end = confirm("Вы уверенны что хотите завершить игру?");
    
    if (end == true) {
    	localStorage.clear();
    	document.getElementById('game').style.display = "none";
    }

    document.location.href = 'index.html';
});

function infoFromId(id){

	let inside, cost, pay, lineCost, linePay;
	let fieldObj = localStorage.getObj('fieldStep');
	
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

		fieldObj.cost[id] = cost;
		fieldObj.pay[id] = pay;

		localStorage.setObj('fieldStep',fieldObj);

		lineCost = '<span id="cost' + id + '">' + cost + '</span>';
		linePay = '<span id="pay' + id + '">' + pay + '</span>';

		inside = lineCost + '<br>' + linePay;
		break;

	case 8:
	case 18:
	case 28:
	case 38:

		cost = 500;

		fieldObj.cost[id] = cost;

		localStorage.setObj('fieldStep',fieldObj);

		inside = 'Бонус <span id="bonus' + id + '">' + cost + '</span>';
		break;

	default:
		cost = id * 4 * 50;
		pay = id * 50;

		fieldObj.cost[id] = cost;
		fieldObj.pay[id] = pay;

		localStorage.setObj('fieldStep',fieldObj);

		lineCost = '<span id="cost' + id + '">' + cost + '</span>';
		linePay = '<span id="pay' + id + '">' + pay + '</span>';

		inside = lineCost + '<br>' + linePay;
	}
	return inside;
}

function drawBox(objDiv){

	let div = document.createElement('div');
		div.style.backgroundColor = objDiv.bgrcolor;
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

let field = document.getElementById('field');

let newDiv = {
	top : 0,
	left : 0,
	width : 0,
	height : 0,
	bgrcolor: "#bbb",
	id : 0
};

let bcolor = localStorage.getObj('fieldStep');

for(let i = 0; i < 40; i++){
	
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

	newDiv.bgrcolor = bcolor.bgcolor[i];

	field.appendChild( drawBox(newDiv) );
};






