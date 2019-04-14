let button = document.getElementById('button');

function writeGamers() {
    let returnst = "";
    
    for (var i=0,key; i < localStorage.length; i++) {
        key = localStorage.key(i);

        let returnObj = JSON.parse(localStorage.getItem(key));

        returnst+= '<hr>'
        +returnObj.name + ': $'
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
    
	if ( name == "" || funds == "") {

        alert("You have a mistake.");
        
	}else{
        
        let myItem = {
            name: name,
            funds: funds,
            place: 0
        };    
        let serialObj = JSON.stringify(myItem); //сериализуем его
        localStorage.setItem(name, serialObj); //запишем его в хранилище
        //  document.location.href='index.html';
    }

});

writeGamers();
