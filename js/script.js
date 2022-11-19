// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// variabili manipolazione DOM:
let listNum = document.querySelector(".numbers");
let timer = document.getElementById("timer");
let indovina = document.getElementById("indovina");
let button = document.querySelector("button");
let input = document.getElementById("my-num");

// creo lista di 5 numeri random servendomi della funzione numRandom e arrayRandom:
let arrayNumRandom = arrayRandom(5, 1, 100);
console.log(arrayNumRandom);
listNum.innerHTML = arrayNumRandom;

// creo array vuoto che conterrà i numeri che inserirà l'utente:
let myArray = [];

// imposto timer di secondi:
let seconds = 2;

// imposto il timer tramite il setInterval:
let clock = setInterval(function(){
    console.log(seconds);

    if(seconds === -1){
        clearInterval(clock);
        listNum.style.display = "none";
        timer.style.display = "none";
        indovina.style.display = "block";
        document.querySelector("#inputs").style.display = "block"

        
        let numGiusti = [];
        let numSbagliati = [];
        // click:
        button.addEventListener("click", 
            function(){
                let selections = parseInt(input.value);
                input.value = "";
                
                myArray.push(selections);
                console.log("Array numeri selezionati da utente" , myArray);

                // condizione: dopo 5 click faccio sparire l'input:
                if(myArray.length === 5){
                    input.style.display = "none";
                    button.style.display = "none";
                }
                
                // condizione: se i numeri inseriti da utente combaciano con quelli random li metto in un altro array e metto a schermo il punteggio:
                if(arrayNumRandom.includes(selections)){
                    
                    numGiusti.push(selections);
                    console.log("Array numeri giusti: ", numGiusti)
                
                    let score = numGiusti.length;
                    document.querySelector("h2").innerHTML = `PUNTEGGIO: ${score} punti. Hai indovinato il numero:${numGiusti}`

                }else{
                    numSbagliati.push(selections);
                    document.querySelector("h3").innerHTML = `Ops! Numeri sbagliati ${numSbagliati}.`
                }
            }
        );


    }else{
        timer.innerHTML = seconds--;
    }

}, 1000)




   

