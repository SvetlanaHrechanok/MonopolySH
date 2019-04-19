'use strict'

let modal = document.getElementById('modal');
let cube = document.getElementById('modalCub');
let close = document.getElementById('close');

cube.addEventListener('click', () => {
	if (flagMove == 0) {
		modal.style.display = "block";
	}
});

close.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if(event.target == modal) {
    	modal.style.display = "none";
	}
});

function changego(){

	let rand = Math.floor(Math.random()*6)+1;
	let stop = document.getElementsByClassName("cube");
	stop[0].style.animation = "none";
	document.getElementById('cubNumber').innerHTML = rand + " ходов";

	switch(rand)
	{
		case 1:
			document.getElementById('front').style = "background: url(img/cub1.png) center center no-repeat; background-size: contain;";
			document.getElementById('back').style = "background: url(img/cub2.png) center center no-repeat; background-size: contain;";
			document.getElementById('top').style = "background: url(img/cub3.png) center center no-repeat; background-size: contain;";
			document.getElementById('bottom').style = "background: url(img/cub4.png) center center no-repeat; background-size: contain;";
			document.getElementById('left').style = "background: url(img/cub5.png) center center no-repeat; background-size: contain;";
			document.getElementById('right').style = "background: url(img/cub6.png) center center no-repeat; background-size: contain;";
		break;
		case 2:
			document.getElementById('front').style = "background: url(img/cub2.png) center center no-repeat; background-size: contain;";
			document.getElementById('back').style = "background: url(img/cub1.png) center center no-repeat; background-size: contain;";
			document.getElementById('top').style = "background: url(img/cub3.png) center center no-repeat; background-size: contain;";
			document.getElementById('bottom').style = "background: url(img/cub4.png) center center no-repeat; background-size: contain;";
			document.getElementById('left').style = "background: url(img/cub5.png) center center no-repeat; background-size: contain;";
			document.getElementById('right').style = "background: url(img/cub6.png) center center no-repeat; background-size: contain;";
		break;
		case 3:
		    document.getElementById('front').style = "background: url(img/cub3.png) center center no-repeat; background-size: contain;";
			document.getElementById('back').style = "background: url(img/cub2.png) center center no-repeat; background-size: contain;";
			document.getElementById('top').style = "background: url(img/cub1.png) center center no-repeat; background-size: contain;";
			document.getElementById('bottom').style = "background: url(img/cub4.png) center center no-repeat; background-size: contain;";
			document.getElementById('left').style = "background: url(img/cub5.png) center center no-repeat; background-size: contain;";
			document.getElementById('right').style = "background: url(img/cub6.png) center center no-repeat; background-size: contain;";
		break;
		case 4:
			document.getElementById('front').style = "background: url(img/cub4.png) center center no-repeat; background-size: contain;";
			document.getElementById('back').style = "background: url(img/cub2.png) center center no-repeat; background-size: contain;";
			document.getElementById('top').style = "background: url(img/cub3.png) center center no-repeat; background-size: contain;";
			document.getElementById('bottom').style = "background: url(img/cub1.png) center center no-repeat; background-size: contain;";
			document.getElementById('left').style = "background: url(img/cub5.png) center center no-repeat; background-size: contain;";
			document.getElementById('right').style = "background: url(img/cub6.png) center center no-repeat; background-size: contain;";
		break;
		case 5:
			document.getElementById('front').style = "background: url(img/cub5.png) center center no-repeat; background-size: contain;";
			document.getElementById('back').style = "background: url(img/cub2.png) center center no-repeat; background-size: contain;";
			document.getElementById('top').style = "background: url(img/cub3.png) center center no-repeat; background-size: contain;";
			document.getElementById('bottom').style = "background: url(img/cub4.png) center center no-repeat; background-size: contain;";
			document.getElementById('left').style = "background: url(img/cub1.png) center center no-repeat; background-size: contain;";
			document.getElementById('right').style = "background: url(img/cub6.png) center center no-repeat; background-size: contain;";
		break;
		case 6:
			document.getElementById('front').style = "background: url(img/cub6.png) center center no-repeat; background-size: contain;";
			document.getElementById('back').style = "background: url(img/cub2.png) center center no-repeat; background-size: contain;";
			document.getElementById('top').style = "background: url(img/cub3.png) center center no-repeat; background-size: contain;";
			document.getElementById('bottom').style = "background: url(img/cub4.png) center center no-repeat; background-size: contain;";
			document.getElementById('left').style = "background: url(img/cub5.png) center center no-repeat; background-size: contain;";
			document.getElementById('right').style = "background: url(img/cub1.png) center center no-repeat; background-size: contain;";
		break;
	}
}

function changecub(){

	changego();

	document.getElementById('modalCub').className = "btn btb-default";
	document.getElementById('btncub').style.display = "none";
	flagMove = 1;
}