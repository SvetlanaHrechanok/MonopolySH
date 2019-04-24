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
    
    if(number != "") {
        let returnObj = JSON.parse(localStorage.getItem(whoMove));
        let oldplace = parseInt(returnObj.place);
        let newplace = parseInt(returnObj.place) + number;

        if (newplace >= 40) {
            newplace = newplace%40;
        }

        returnObj.place = newplace;
        localStorage.setItem(whoMove, JSON.stringify(returnObj));

        let step = JSON.parse(localStorage.getItem("fieldStep"));
             
        for (let j = 0; j < step.length; j++)
        {
            if (j == newplace) {
                step[j] = whoMove;
            }
        }

        //АНИМАЦИЯ
        animePlayer(returnObj.idPlayer, oldplace, number);

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

        localStorage.setItem("fieldStep", JSON.stringify(step));

        //document.location.href = '/';
    }
});

function animePlayer(idPlayer, oldplace, number){
  //goXpx на сколько пикселей продвинутся по оси Х
  //goYpx на сколько пикселей продвинутся по оси Y
    let goXpx = 0; 
    let goYpx = 0;
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

        case (oldplace < 10 && newplace > 10)? oldplace : 'alert' : //top line
            let number1 = 10 - oldplace;
            let goXpx1 = 50*(number1);
            let goYpx1 = 0;
            
            number = number - number1;
            let goXpx2 = 0;
            let goYpx2 = 100 + 50*(number-1);
            
            let playerGo1 = anime({
                targets: document.getElementById('player'+idPlayer),
                translateX: [
                    {value: goXpx1, duration: 500},
                    {value: goXpx2, duration: 500}
                  ],
                translateY: [
                    {value: goYpx1, duration: 500},
                    {value: goYpx2, duration: 500}
                  ],
                easing: 'linear',
                autoplay: false
            });

          playerGo1.restart();

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

        case (oldplace < 20 && newplace > 20)? oldplace : 'alert' : //top line
            goXpx = 0;
            goYpx = 0;
            Anime(idPlayer,goXpx,goYpx);
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

        case (oldplace < 30 && newplace > 30)? oldplace : 'alert' : //top line
            goXpx = 0;
            goYpx = 0;
            Anime(idPlayer,goXpx,goYpx);
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
      }    
}

function Anime(id,goXpx,goYpx) {
    let playerGo = anime({
        targets: document.getElementById('player'+id),
        translateX: goXpx,
        translateY: goYpx,
        easing: 'linear',
        autoplay: false
    });

    playerGo.restart();
}
