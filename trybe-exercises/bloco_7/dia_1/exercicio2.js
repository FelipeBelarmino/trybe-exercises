const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemCrescente = (array) => `Os numeros ${array} se encontram de forma crescente: ${array.sort(function(a, b){return a-b})}` 

console.log(ordemCrescente(oddsAndEvens));
