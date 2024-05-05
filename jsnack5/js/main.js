'use strict'

//Crea un array vuoto per contenere i numeri dispari
const listaDispari = [];
//Crea un array vuoto per contenere gli inserimenti
const listaInserimenti = []
//Definisco il numero degli inserimenti
const numInserimenti = 6
//Chiedi per 6 volte all’utente di inserire un numero.
for (let i = 0; i < numInserimenti; i++) {
    let buffer = prompt(`Inserisci il numero ${i + 1} di ${numInserimenti}`);
    if(!isNaN (Number(buffer))) {
        listaInserimenti[i] = buffer;
        console.log(listaInserimenti[i]);
    } else {
        console.log('Non hai inserito un numero');
        i--;
    }
}
//Se è dispari inseriscilo nell’array.
for (let i = 0; i < 6; i++) {
    if (listaInserimenti[i] % 2 != 0) {
        listaDispari.push(listaInserimenti[i]);
    }
}
//Stampa in console l'array risultante.
console.log(listaDispari);