
//localStorage.setItem("move",1);
let whoMove = JSON.parse(localStorage.getItem("move"));

let returnObj = JSON.parse(localStorage.getItem(whoMove));
let newname = returnObj.namePlayer;
document.getElementById('playerNumber').innerHTML = newname;

move.addEventListener('click', () =>{
    let number = document.getElementById('cubNumber').innerHTML;

    let returnObj = JSON.parse(localStorage.getItem(whoMove));
    let id = returnObj.idPlayer;
    let newname = returnObj.namePlayer;
    let newfunds = returnObj.funds;
    let newplace = returnObj.place;

    number = parseInt(number);
    newplace = parseInt(newplace);
    newplace += number;

    if (newplace >= 40) {
        newplace = newplace%40;
    }

    let keynew = {
        idPlayer: id,
        namePlayer: newname,
        funds: newfunds,
        place: newplace
      };

    let serialObj = JSON.stringify(keynew);
    localStorage.setItem(whoMove, serialObj);

    if (whoMove == localStorage.length - 1) {
        whoMove = 1;
    } else {
        whoMove++;
    }

    localStorage.setItem("move",whoMove);
    document.location.href = 'index.html';
});


