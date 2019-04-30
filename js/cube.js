'use strict'

let modal = document.getElementById('modal');
let modalCub = document.getElementById('modalCub');

modalCub.addEventListener('click', () => {
	
	if (flagMove == 0 && localStorage.length > 2) {

		modal.style.display = "block";
		modalCub.className = "btn btb-default";

		setTimeout( () => {
			document.getElementById("cube").style.animation = "none";
		},1000);

		changeGo();
 
		setTimeout( () => {
			modal.style.display = "none";
		},1500);

		flagMove = 1;
	}
});

/*window.addEventListener('click', (event) => {
    if(event.target == modal || event.target == document.getElementById('cub')) {
    	modal.style.display = "none";
	}
});*/

function changeGo(){
	let rand = Math.floor(Math.random()*6)+1;
 
	document.getElementById('cubNumber').innerHTML = rand + " ходов";
 
	let front = document.getElementById('front').style;
	let right = document.getElementById('right').style;
 
	let imageFace = {
		1 : "url(img/cub1.png)",
		2 : "url(img/cub2.png)", 
		3 : "url(img/cub3.png)",
		4 : "url(img/cub4.png)",
		5 : "url(img/cub5.png)",
		6 : "url(img/cub6.png)" 
	};
	switch(rand) 
	{
		case 1:
			front.backgroundImage = imageFace[1];
			right.backgroundImage = imageFace[5];
			break;
		case 2:
			front.backgroundImage = imageFace[2];
			right.backgroundImage = imageFace[6];
			break;
		case 3:
			front.backgroundImage = imageFace[3];
			right.backgroundImage = imageFace[2];
			break;
		case 4:
			front.backgroundImage = imageFace[4];
			right.backgroundImage = imageFace[6];
			break;
		case 5:
			front.backgroundImage = imageFace[5]; 
			right.backgroundImage = imageFace[4];
			break;
		case 6:
			front.backgroundImage = imageFace[6];
			right.backgroundImage = imageFace[5];
			break;
	}
}


 
