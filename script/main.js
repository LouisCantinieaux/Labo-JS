let menu = [];
menu[0]="<ul><li>1.1</li><li>1.2</li></ul>";
menu[1]="<ul><li>2.1</li><li>2.2</li></ul>";
menu[2]="<ul><li>3.1</li><li>3.2</li><li>3.3</li><li>3.4</li></ul>";
menu[3]="<ul><li>4.1</li><li>4.2</li></ul>";

let liste;

let index = -1;
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
