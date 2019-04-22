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
    
    if(number != "") {
        let returnObj = JSON.parse(localStorage.getItem(whoMove));
        
        let newplace = parseInt(returnObj.place) + parseInt(number);

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

        document.location.href = 'index.html';
    }
});


