let button = document.getElementById('button');

function writeGamers() {
    let returnst = "";
    
    for (var i=0,key; i < localStorage.length; i++) {
        key = localStorage.key(i);

        let returnObj = JSON.parse(localStorage.getItem(key));

        returnst+= '<hr>'
        +returnObj.namePlayer + ': $'
        +returnObj.funds +' | '
        +returnObj.place + ' ';
    }

    let div = document.createElement("div");
        div.style.height = 100 + 'px';
        div.style.backgroundColor = "#fefefe";
        div.style.width = 200 + 'px';
        div.style.margin = '0 auto';
        div.innerHTML = returnst;

    let writeGamers = document.getElementById('usertable');
    
    writeGamers.appendChild(div);
}

button.addEventListener('click', () =>{
    
    let funds = document.getElementById('funds').value;
    let name = document.getElementById('name').value;
    let idplayer = 0;  

	if ( name == "" || funds == "") {

        alert("You have a mistake.");
        
	}else{

        if (localStorage.length == 0) {
            idplayer = 1;
        } else {
            let i = localStorage.length-1;
            let key = localStorage.key(i);
            let returnObj = JSON.parse(localStorage.getItem(key));
                idplayer = parseInt(returnObj.idPlayer)+1;
        }

        if(idplayer > 4){
            alert("Больше игроков создавать нельзя!");
        } else {
            let myItem = {
                idPlayer: idplayer,
                namePlayer: name,
                funds: funds,
                place: 0
            };   
             
            let serialObj = JSON.stringify(myItem); 
            localStorage.setItem(idplayer, serialObj); //запишем его в хранилище
            document.location.href='index.html';
        } 
    }
});


function drawPlayerdiv() {

  for (let i=0,key; i < localStorage.length; i++) {
    key = localStorage.key(i);

    let returnObj = JSON.parse(localStorage.getItem(key));
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
  };
}

writeGamers();

drawPlayerdiv();