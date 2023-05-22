
/**
 * 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 * 
 */

let scelta = prompt("Inserisci se vuoi pari o dispari");
scelta = scelta.toLocaleLowerCase();
console.log(scelta);

let sceltanumero = parseInt(prompt("Inserisci numero da 1 a 5"));

PariDispari(scelta,sceltanumero);



function PariDispari(choice,number){
    console.log("Hai scelto: " + choice);
    console.log("Il numero che hai scelto è: " + number);
    let numRandom = NumeroRandomico(1, 5);
    console.log("Il numero randomico è: " + numRandom);
    let somma;

    somma = number + numRandom;
    console.log("La somma dei numeri è : " + somma);
/*
    if(choice === "pari"){
        console.log(messaggio);
        if((somma % 2) == 0){
            console.log("Hai vinto");
        }
        else{
            console.log("Hai perso");
        }
        
        
    }
    else if(choice === "dispari"){
        console.log(messaggio);
        if((somma % 2) == 1){
            console.log("Hai vinto");
        }
        else{
            console.log("Hai perso");
        }
    }
*/
}


function NumeroRandomico(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}

