/*

Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/


// Palindroma


function isPalindromo(stringa){
    let lunghezzaStringa = stringa.length; // assegno una variabile alla lunghezza della stringa
    for (let i = 0; i < lunghezzaStringa / 2; i++){ // tante iterazioni quanto la metà della lunghezza
        if (stringa[i] !== stringa[lunghezzaStringa - 1 - i]){ // se la prima metà della stringa è diversa dalla seconda
            return false; // non è palindroma
        }
    }
    return true; // altrimenti è palindroma
}

let userStringa = prompt("Inserisci una stringa di caratteri");
let risultato = isPalindromo(userStringa);

console.log(risultato);





// Pari o Dispari


let userGuess = prompt("Scegli tra 'Pari' o 'Dispari'")  // 
console.log(userGuess);

let numeroUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUser);


function getRandomNumber(min, max){  
    return Math.floor(Math.random()*(max-min+1)+min);
}


let numeroComputer = getRandomNumber(1,5);  // Genero un numero random tra 1 e 5
console.log(numeroComputer);


function pariODispari(numero){
    if ( numero % 2 == 0){
        return "Pari" 
    }
    return "Dispari"
}

let somma = numeroUser + numeroComputer;
console.log("somma" + " = " + somma);

let risultato = pariODispari(somma);
console.log("risultato" + " = " + risultato)

if (risultato == userGuess){
    console.log("Victory!")
    }    else {
    console.log("Defeat!")
}
