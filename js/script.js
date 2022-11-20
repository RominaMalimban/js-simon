// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// variabili manipolazione DOM:
let listNum = document.querySelector(".numbers");
let timer = document.getElementById("timer");
let button = document.querySelector("button");
let input = document.getElementById("my-num");

// creo lista di 5 numeri random servendomi della funzione numRandom e arrayRandom:
let arrayNumRandom = arrayRandom(5, 1, 100);
listNum.innerHTML = arrayNumRandom;

// creo array vuoto che conterrà i numeri che inserirà l'utente:
let myArray = [];

// imposto timer di secondi:
let seconds = 30;

// imposto il timer tramite il setInterval:
let clock = setInterval(function(){

    if(seconds === -1){
        clearInterval(clock);
        listNum.style.display = "none";
        timer.style.display = "none";
        document.querySelector("h1").innerHTML = `Ora inserisci i numeri che hai memorizzato`;
        document.querySelector("#inputs").style.display = "block";

        // creo due variabili in cui salvo due array vuoti in cui inserisco i numeri corretti e quelli sbagliati:
        let numGiusti = [];
        let numSbagliati = [];

        // al click pusho i numeri inseriti da utente in array:
        button.addEventListener("click", 
            function(){

                let selections = parseInt(input.value);
                input.value = "";
                
                myArray.push(selections);

                // condizione: se utente inserisce 5 numeri sparisce l'input:
                if(myArray.length === 5){
                    input.style.display = "none";
                    button.style.display = "none";
                }
                
                // condizione: se i numeri inseriti da utente combaciano con quelli random li metto in array numGiusti, altrimenti in quello dei numSbagliati e metto a schermo il punteggio:
                if(arrayNumRandom.includes(selections)){
                    
                    numGiusti.push(selections);
                
                    let score = numGiusti.length;
                    document.querySelector("#score").innerHTML = `PUNTEGGIO: ${score} punti. Hai indovinato: ${numGiusti}`;

                }else{
                    numSbagliati.push(selections);
                    document.querySelector("#error").innerHTML = `Ops! Numeri sbagliati da te inseriti: ${numSbagliati}.`;

                    if(numSbagliati.length === 5){
                        document.querySelector("#zero").innerHTML = `Complimenti non hai azzeccato neanche un numero! Hai forse dei problemi di memoria?`;
                    }
                };
            }
        );


    }else{
        timer.innerHTML = seconds--;
    };

}, 1000);