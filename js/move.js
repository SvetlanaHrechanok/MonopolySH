'use strict';

let go = document.getElementById('go');
let move = document.getElementById('move');

go.addEventListener('click', () => {
    if (localStorage.length <= 2)
    {
      alert("Не созданы игроки!");
    } else {
      document.getElementById('add').style.display = "none"; 
      document.getElementById('btnGo').style.display = "block";
    } 
});

move.addEventListener('click', () =>{

    let number = document.getElementById('cubNumber').innerHTML;
        number = parseInt(number);
    
    if(number != "" && flagMove == 1) {
        let returnObj = localStorage.getObj(whoMove);
        let oldplace = returnObj.place;
        let newplace = returnObj.place + number;

        if (newplace >= 40) {
            newplace = newplace%40;
        }

        let step = localStorage.getObj('fieldStep');
             
        for (let j = 0; j < step.field.length; j++) {
            if (j == newplace && step.field[j] == 0) {
                document.getElementById('buyField').style.display = "inline-block";
            } else if (j == newplace && step.field[j] != 0 && step.field[j] != returnObj.idPlayer) {
                document.getElementById('payField').style.display = "inline-block";
                document.getElementById('standField').style.display = "none";
            }
        };

        //АНИМАЦИЯ
        animePlayer(returnObj.idPlayer, oldplace, number);

        //выбор действия при сделке
        document.getElementById('dealField').style.display = "block";
        let line = "";
        let foreignObj = localStorage.getObj(step.field[newplace]);

        if(step.field[newplace] == 0){
            line = newplace + " свободна";
        } else if (step.field[newplace] == returnObj.idPlayer) {
            line = newplace + " Ваша ";
        } else {
            line = newplace + " занята игроком " + foreignObj.namePlayer;
        }
        
        document.getElementById('iddeal').innerHTML = line;

        flagMove = 0;
        document.getElementById('modalCub').className = "btn btb-success";
    }
});

function animePlayer(idPlayer, oldplace, number) {
  //goXpx на сколько пикселей продвинутся по оси Х
  //goYpx на сколько пикселей продвинутся по оси Y
    let number1;
    let goXpx; 
    let goYpx;
    let newplace = oldplace + number;

    switch(oldplace){
        case 0: // start
            goXpx = 100 + 50*(number-1);
            goYpx = 0;
            Anime(idPlayer,goXpx,goYpx);
        break;

        case (oldplace > 0 && oldplace < 10 && newplace <= 10 )? oldplace : 'alert' : //top line
            goXpx = 50*number;
            goYpx = 0;
            Anime(idPlayer,goXpx,goYpx);
        break;

        case (oldplace < 10 && newplace > 10)? oldplace : 'alert' :
            number1 = 10 - oldplace;
            goXpx = 50*(number1);
            number = number - number1;
            goYpx = 100 + 50*(number-1);
            AnimeCorner(idPlayer,goXpx,goYpx)
        break;

        case 10:
            goXpx = 0;
            goYpx = 100 + 50*(number-1);
            Anime(idPlayer,goXpx,goYpx);
        break;

        case (oldplace > 10 && oldplace < 20 && newplace <= 20 )? oldplace : 'alert' : //top line
            goXpx = 0;
            goYpx = 50*number;
            Anime(idPlayer,goXpx,goYpx);
        break;

        case (oldplace < 20 && newplace > 20)? oldplace : 'alert' :
            number1 = 20 - oldplace;
            goYpx = 50*(number1);
            number = number - number1;
            goXpx = -(100 + 50*(number-1));
            AnimeCorner(idPlayer,goXpx,goYpx);
        break;

        case 20:
            goXpx = -(100 + 50*(number-1));
            goYpx = 0;
            Anime(idPlayer,goXpx,goYpx);
        break;
        
        case (oldplace > 20 && oldplace < 30 && newplace <= 30 )? oldplace : 'alert' : //top line
            goXpx = -50*number;
            goYpx = 0;
            Anime(idPlayer,goXpx,goYpx);
        break;

        case (oldplace < 30 && newplace > 30)? oldplace : 'alert' :
            number1 = 30 - oldplace;
            goXpx = -50*(number1);
            number = number - number1;
            goYpx = -(100 + 50*(number-1));
            AnimeCorner(idPlayer,goXpx,goYpx);
        break;

        case 30:
            goXpx = 0;
            goYpx = -(100 + 50*(number-1));
            Anime(idPlayer,goXpx,goYpx);
        break;

        case (oldplace > 30 && oldplace < 40 && newplace <= 40 )? oldplace : 'alert' : //top line
            goXpx = 0;
            goYpx = -50*number;
            Anime(idPlayer,goXpx,goYpx);
        break;

        case (oldplace < 40 && newplace > 0)? oldplace : 'alert' :
            number1 = 40 - oldplace;
            goYpx = -50*(number1);
            number = number - number1;
            goXpx = 100 + 50*(number-1);
            AnimeCorner(idPlayer,goXpx,goYpx);
        break;
    }    
}

function Anime(id,goXpx,goYpx) {
    let playerGo = anime({
        targets: document.getElementById('player'+id),
        translateX: {value: goXpx, duration: 500},
        translateY: goYpx,
        easing: 'linear',
        autoplay: false
    });

    playerGo.restart();
}

function AnimeCorner(id,goXpx,goYpx) {
    let playerGo = anime.timeline({
        autoplay: false
    });

    if(goXpx > 0 && goYpx > 0 || goXpx < 0 && goYpx < 0) {
        playerGo.add({
            targets: document.getElementById('player'+id),
            translateX: goXpx,
            easing: 'linear'
        }).add({
            targets: document.getElementById('player'+id),
            translateY: goYpx,
            easing: 'linear'
        });
    } else {
        playerGo.add({
            targets: document.getElementById('player' + id),
            translateY: goYpx,
            easing: 'linear'
        }).add({
            targets: document.getElementById('player' + id),
            translateX: goXpx,
            easing: 'linear'
        });
    }

    playerGo.restart();  
}

let buyField = document.getElementById('buyField');
let standField = document.getElementById('standField'); 
let payField = document.getElementById('payField');

buyField.addEventListener('click', () =>{

    let number = document.getElementById('cubNumber').innerHTML;
        number = parseInt(number);

    let dealField = localStorage.getObj('fieldStep');
    let playerNow = localStorage.getObj('move');
    let player = localStorage.getObj(playerNow);
    let stay = player.place + number;

    //КУПИТЬ
    player.funds = player.funds - dealField.cost[stay];
    player.place = stay;
    dealField.bgcolor[stay] = colorPlayer[playerNow-1];//индекс с массива с нуля
    dealField.field[stay] = player.idPlayer;

    localStorage.setObj('fieldStep', dealField);
    localStorage.setObj(playerNow, player);

    //поочередное движение игроков
    // 2 - количество элементов в localStorage при старте игры (move & fieldStep)
    if (playerNow == localStorage.length - 2) { 
        playerNow = 1; 
    } else {
        playerNow++;
    }
         
    localStorage.setItem('move',playerNow);

    document.location.href = 'index.html';
});

standField.addEventListener('click', () =>{
    let number = document.getElementById('cubNumber').innerHTML;
        number = parseInt(number);
    let playerNow = localStorage.getObj('move');
    let player = localStorage.getObj(playerNow);
    let stay = player.place + number;

    player.place = stay;
    localStorage.setObj(playerNow, player);

    //поочередное движение игроков
    // 2 - количество элементов в localStorage при старте игры (move & fieldStep)
    if (playerNow == localStorage.length - 2) { 
        playerNow = 1; 
    } else {
        playerNow++;
    }
         
    localStorage.setItem('move',playerNow);

    document.location.href = 'index.html';
});

payField.addEventListener('click', () =>{

    let number = document.getElementById('cubNumber').innerHTML;
        number = parseInt(number);

    let dealField = localStorage.getObj('fieldStep');
    let playerNow = localStorage.getObj('move');
    let player = localStorage.getObj(playerNow);
    let stay = player.place + number;
    //определяем кому принадлежит ячейка, кому нужно заплатить
    let foreign = localStorage.getObj(dealField.field[stay]);

    //ЗАПЛАТИТЬ
    player.funds = player.funds - dealField.pay[stay];
    player.place = stay;
    foreign.funds = foreign.funds + dealField.pay[stay];

    localStorage.setObj(dealField.field[stay], foreign);
    localStorage.setObj(playerNow, player);

    //поочередное движение игроков
    // 2 - количество элементов в localStorage при старте игры (move & fieldStep)
    if (playerNow == localStorage.length - 2) { 
        playerNow = 1; 
    } else {
        playerNow++;
    }
         
    localStorage.setItem('move',playerNow);

    document.location.href = 'index.html';
});