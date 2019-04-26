'use strict';

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
        let oldplace = parseInt(returnObj.place);
        let newplace = parseInt(returnObj.place) + number;

        if (newplace >= 40) {
            newplace = newplace%40;
        }

        returnObj.place = newplace;
        localStorage.setObj(whoMove, returnObj);

        let step = localStorage.getObj("fieldStep");
             
        for (let j = 0; j < step.field.length; j++)
        {
            if (j == newplace) {
                step.field[j] = whoMove;
                step.bgcolor[j] = colorPlayer[whoMove];
            }
        };

        //АНИМАЦИЯ
        animePlayer(returnObj.idPlayer, oldplace, number);

        //выбор действия при сделке
        document.getElementById('dealField').style.display = "block";
        let returnField = localStorage.getObj("fieldStep");
        let line = "";

        if(returnField.field[newplace] == 0){
            line = newplace + " свободна";
        } else {
            line = newplace + " занята игроком " + returnObj.namePlayer;
        }

        document.getElementById('iddeal').innerHTML = line;

        //поочередное движение игроков
        // 2 - количество элементов в localStorage при старте игры (move & fieldStep)
        if (whoMove == localStorage.length - 2) { 
            whoMove = 1; 
        } else {
            whoMove++;
        }
        
        flagMove = 0;
        document.getElementById('modalCub').className = "btn btb-success";
        localStorage.setItem("move",whoMove);

        localStorage.setObj("fieldStep", step);
    }
});

function animePlayer(idPlayer, oldplace, number){
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

let buy = document.getElementById('buy');
let stand = document.getElementById('stand'); 

buy.addEventListener('click', () =>{
    let dealField = localStorage.getObj('fieldStep');
    let player = localStorage.getObj(whoMove);
    //доработать!!!
    //whoMove-1, так как в функции move переменная увеличилась на 1
    dealField.bgcolor[player.place] = colorPlayer[whoMove-1];

    localStorage.setObj('fieldStep',dealField);
    document.location.href = 'index.html';
});

stand.addEventListener('click', () =>{
    
    document.location.href = 'index.html';
});