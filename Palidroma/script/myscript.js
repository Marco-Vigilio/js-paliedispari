
/**
 * 
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 * 
 */

let parola = prompt("Inserisci una parola");

let verifica;

verificaStringaPalindroma(parola);

function verificaStringaPalindroma(word){
    let array = word.split("");
    console.log(array);

    let arrayReverse = array.reverse();
    console.log(arrayReverse);

    let wordReverse = arrayReverse.join("");
    console.log(wordReverse);

    if(word === wordReverse){
        verifica = true;
        return true;
    }
    verifica = false;
    return false;
}

if(verifica === true){
    console.log("La parola è Palindroma")
}
else{
    console.log("La parola non è Palindroma");
}