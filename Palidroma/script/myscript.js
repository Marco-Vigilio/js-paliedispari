
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
    let wordReverse;
    /*
    let array = word.split("");
    console.log(array);

    let arrayReverse = array.reverse();
    console.log(arrayReverse);

    wordReverse = arrayReverse.join("");
    console.log(wordReverse);
    */
    
    let wordLunghezza = word.length;
    let parolaNormale = "";
    let parolaAlContrario = "";

    for(let i = 0; i < wordLunghezza; i++){
        console.log(word.charAt(i));
        parolaNormale += word.charAt(i);
    }
    console.log(parolaNormale);
    console.log();

    console.log(word);
    console.log("La lunghezza della parola è " + wordLunghezza);

    let posizione = 0;
    for(let i = (wordLunghezza - 1); i >= 0; i=i-1){
        console.log(word.charAt(i));
        parolaAlContrario += word.charAt(i);
        posizione++;
    }
    console.log(parolaAlContrario);



    if(parolaNormale == parolaAlContrario){
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