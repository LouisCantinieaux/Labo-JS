let menu = [];
menu[0]="<ul><li>1.1</li><li>1.2</li></ul>";
menu[1]="<ul><li>2.1</li><li>2.2</li></ul>";
menu[2]="<ul><li>3.1</li><li>3.2</li><li>3.3</li><li>3.4</li></ul>";
menu[3]="<ul><li>4.1</li><li>4.2</li></ul>";

const validation = document.getElementById("validation");
let liste;
let tabRempli = [];

let index = 0;
let ligne ="";

function init(){
    liste = document.getElementById("carte").getElementsByTagName("li");
}

function debut(i){
    if(index >= 0){
        liste[i].innerHTML = ligne;
    }
    ligne = liste[i].innerHTML;
    index = i;
    liste[i].innerHTML += menu[i];
}

validation.addEventListener("click", function(){
    //Envoi dans le local storage
    localStorage.setItem("maCommande", JSON.stringify(menu));

    //Récupération depuis local storage
    tabRempli = JSON.parse(localStorage.getItem("maCommande"));

    for(let i = 0; i < tabRempli.length; i++){
        console.log("élément" + i + " " + tabRempli[i]);
    }
})
