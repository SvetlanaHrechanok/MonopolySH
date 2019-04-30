'use strict';
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};

let colorPlayer = ["red","green","blue","yellow"];

let whoMove = JSON.parse(localStorage.getItem('move'));
let flagMove = 0; //флаг = 0, значит игрок не сделал ход
let step = localStorage.getObj('fieldStep');

//больше нельзя добавлять игроков, игра началась
for (let i = 0; i < step.field.length; i++) {
    if (step.field[i] > 0) {
    	document.getElementById('add').style.display = "none"; 
    	document.getElementById('btnGo').style.display = "block";
	}
};

if (localStorage.length > 2) {
    let returnObj = localStorage.getObj(whoMove);
    let newname = returnObj.namePlayer;
    document.getElementById('playerNumber').innerHTML = "Сейчас ходит " + newname;
}
//появление таблицы создания игроков, при создании новой игры
if (localStorage.length > 1) {
	document.getElementById('game').style.display = "block";
}