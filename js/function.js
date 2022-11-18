// Funzione per creare numeri randomici con min e max:
function numRandom (min, max){
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}

// Funzione per creare un array di 5 numeri randomici:
function arrayRandom (quantita, numMin, numMax){
    
    let array = [];

    while(array.length < quantita){
        let newNum = numRandom (numMin, numMax);

        if(!array.includes(newNum)){
            array.push(newNum)
        }
    }
    return array;
}