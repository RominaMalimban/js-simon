// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// variabili manipolazione DOM:
let listNum = document.querySelector(".numbers");

// creo lista di 5 numeri random servendomi della funzione numRandom e arrayRandom:
let myArray = arrayRandom (5, 1, 100);
console.log(myArray);
listNum.innerHTML = myArray;

// imposto timer di secondi e faccio scomparire la lista di numeri:
setTimeout(function(){
    listNum.style.display = "none";
}, 2000);
