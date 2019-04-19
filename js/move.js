let whoMove = JSON.parse(localStorage.getItem("move"));

if (whoMove != null) {
    let returnObj = JSON.parse(localStorage.getItem(whoMove));
    let newname = returnObj.namePlayer;
    document.getElementById('playerNumber').innerHTML = "Сейчас ходит " + newname;
}

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

        if (whoMove == localStorage.length - 1) {
            whoMove = 1;
        } else {
            whoMove++;
        }

        flagMove = 0;
        document.getElementById('modalCub').className = "btn btb-success";

        localStorage.setItem("move",whoMove);
        document.location.href = 'index.html';
    }
});


