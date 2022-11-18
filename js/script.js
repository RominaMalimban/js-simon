// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// variabili manipolazione DOM:
let listNum = document.querySelector(".numbers");
let timer = document.getElementById("timer");
let indovina = document.getElementById("indovina");


// creo lista di 5 numeri random servendomi della funzione numRandom e arrayRandom:
let arrayNumRandom = [1,2,3,4,5];
console.log(arrayNumRandom);
listNum.innerHTML = arrayNumRandom;

// imposto timer di secondi:
let seconds = 5;

let clock = setInterval(function(){
    console.log(seconds);
    if(seconds === -1){
        clearInterval(clock);
        listNum.style.display = "none";
        indovina.style.display = "block";
        timer.style.display = "none"
    }else{
        timer.innerHTML = seconds--;
    }

}, 1000)

let myArray = [];

for (let i = 0; i < arrayNumRandom.length; i++){
    let selections = parseInt(prompt("Inserisci i numeri"));

    if(arrayNumRandom.includes(selections)){
        myArray.push(selections);
        console.log(`Bravo hai totalizzato ${myArray.length} punti`);
    }else{
        console.log("Non hai indovinato neanche un numero! Pessima memoria!")
    }
}
