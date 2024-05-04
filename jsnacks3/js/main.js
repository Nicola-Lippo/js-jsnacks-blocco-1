'use strict';
//chiedo all utente di inserirmi 10 numeri

let somma = 0
let numeroInput = 10

for (let i = 1; i <= numeroInput; i++) {
    somma += Number(prompt('inserisci un numero'))
}

//monstro la somma dei valori inseriti in console 
console.log (somma);
