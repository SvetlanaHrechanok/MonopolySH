let whoMove = JSON.parse(localStorage.getItem("move"));

if (whoMove != null) {
    let returnObj = JSON.parse(localStorage.getItem(whoMove));
    let newname = returnObj.namePlayer;
    document.getElementById('playerNumber').innerHTML = newname;
}

move.addEventListener('click', () =>{
    let number = document.getElementById('cubNumber').innerHTML;

    let returnObj = JSON.parse(localStorage.getItem(whoMove));
    let newplace = returnObj.place;

    newplace = parseInt(newplace) + parseInt(number);

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

    localStorage.setItem("move",whoMove);
    document.location.href = 'index.html';
});


