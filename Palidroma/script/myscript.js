
/**
 * 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 * 
 */

let parola = prompt("Inserisci una parola");

verificaStringaPalindroma(parola);

function verificaStringaPalindroma(word){
    let array = word.split("");
    console.log(array);

    let arrayReverse = array.reverse();
    console.log(arrayReverse);

    let wordReverse = arrayReverse.join("");
    console.log(wordReverse);

    if(word === wordReverse){
        console.log("La parola è palindroma");
        return true;
    }
    console.log("La parola non è palindroma");
    return false;
}