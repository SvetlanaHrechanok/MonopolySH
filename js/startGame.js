'use strict';

let whoMove = JSON.parse(localStorage.getItem("move"));
let flagMove = 0; //флаг = 0, значит игрок не сделал ход
let step = JSON.parse(localStorage.getItem("fieldStep"));

//больше нельзя добавлять игроков, игра началась
for (let i = 0; i < step.length; i++) {
    if (step[i] > 0) {
    	document.getElementById('add').style.display = "none"; 
    	document.getElementById('btnGo').style.display = "block";
	}
};

if (localStorage.length > 2) {
    let returnObj = JSON.parse(localStorage.getItem(whoMove));
    let newname = returnObj.namePlayer;
    document.getElementById('playerNumber').innerHTML = "Сейчас ходит " + newname;
}
//появление таблицы создания игроков, при создании новой игры
if (localStorage.length > 1) {
	document.getElementById('game').style.display = "block";
}