'use strict';
//parole da inserire da parte dell'utente
const parola1 = prompt("inserisci una parola");
const parola2 = prompt("inserisci un altra parola");

if (parola1.length < parola2.length) {
    console.log ('la parola più corta è', parola1, (parola1.length));
    console.log ('la parola più lunga è', parola2, (parola2.length))
} else if (parola2.length < parola1.length) {
    console.log ('la parola più corta è', parola2, (parola2.length));
    console.log ('la parola più lunga è', parola1, (parola1.length))
} else {
    console.log ('le parole hanno la stessa lunghezza')
}