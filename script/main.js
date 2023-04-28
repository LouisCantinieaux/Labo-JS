validation.addEventListener("click", function(){
    //Envoi dans le local storage
    localStorage.setItem("maCommande", JSON.stringify(menu));

    //Récupération depuis local storage
    tabRempli = JSON.parse(localStorage.getItem("maCommande"));

    for(let i = 0; i < tabRempli.length; i++){
        console.log("élément" + i + " " + tabRempli[i]);
    }
})


let valeur1 = document.getElementById("valeur-1")
let valeur2 = document.getElementById("valeur-2")
let valeur3 = document.getElementById("valeur-3")
let valeur4 = document.getElementById("valeur-4")
let valeur5 = document.getElementById("valeur-5")
let valeur6 = document.getElementById("valeur-6")

let validation = document.getElementById("validation")

let tab = []
let tabRempli = []
count = 0

valeur1.addEventListener('click', function(){
    auPassage()
    tab.push(valeur1.innerText)
})

valeur2.addEventListener('click', function(){
    auPassage()
    tab.push(valeur2.innerText)
})

valeur3.addEventListener('click', function(){
    auPassage()
    tab.push(valeur3.innerText)
})

valeur4.addEventListener('click', function(){
    auPassage()
    tab.push(valeur4.innerText)
})

valeur5.addEventListener('click', function(){
    auPassage()
    tab.push(valeur5.innerText)
})

valeur6.addEventListener('click', function(){
    auPassage()
    tab.push(valeur6.innerText)
})

validation.addEventListener("click", function(){
    // Envoie dans le local storage
    localStorage.setItem("monTableau", JSON.stringify(tab))


    // Récupération depuis le local storage (peut se faire après rechargemernt de page)
    tabRempli = JSON.parse(localStorage.getItem("monTableau"))

    for (let i = 0; i < tabRempli.length; i++) {
        console.log("élément " + i + " " + tabRempli[i])
    }
})

function auPassage(){
    titre1.classList.add("au-passage")
}
