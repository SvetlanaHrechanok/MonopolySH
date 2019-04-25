'use strict';

function writeGamers() {
    let returnst = "";

    for (var i=0,key; i < localStorage.length; i++) {
        key = localStorage.key(i);

        if(key != "move" && key != "fieldStep") {
            let returnObj = localStorage.getObj(key);

            returnst+= '<hr>'
            +returnObj.namePlayer + ': на счету $'
            +returnObj.funds +' | ячейка поля №'
            +returnObj.place + ' ';
        }
    }

    let div = document.createElement("div");
        div.style.height = 100 + 'px';
        div.style.backgroundColor = "#fefefe";
        div.style.width = 300 + 'px';
        div.style.margin = '0 auto';
        div.innerHTML = returnst;

    let writeGamers = document.getElementById('usertable');  
    writeGamers.appendChild(div);
}

addPlayer.addEventListener('click', () =>{

    let funds = document.getElementById('funds').value;
    let name = document.getElementById('name').value;
    let idplayer = 0;  

    if ( name == "" || funds == "") {
        alert("Введите количество денег и имя игрока");
    }else{
        
        idplayer = localStorage.length - 1;
       
        if(idplayer > 4){
            alert("Больше игроков создавать нельзя!");
            document.location.href='index.html';
        } else {
            let myItem = {
                idPlayer: idplayer,
                namePlayer: name,
                funds: funds,
                place: 0
            };
 
            localStorage.setObj(idplayer, myItem);

            document.location.href='index.html';
        } 
    }
});

function drawPlayerdiv() {
  for (let i=0,key; i < localStorage.length; i++) {
        key = localStorage.key(i);

        if (key != "move" && key != "fieldStep") {

            let returnObj = localStorage.getObj(key);
            let place = returnObj.place;

            for (let j = 0; j < 40; j++) {
                if (place == j) {

                    let div = document.createElement('div');
                    div.className = "player";
                    div.innerHTML = returnObj.namePlayer;
                    div.id = 'player'+ returnObj.idPlayer;

                    let fieldplayer = document.getElementById(j);
                    fieldplayer.appendChild(div);
                }
            };
        }
    };
}

writeGamers();

drawPlayerdiv();