/**
 * Verifica se um número é par ou ímpar.
 *
 * @example
 * parOuImpar(10); // "Par"
 * parOuImpar(15); // "Ímpar"
 * parOuImpar(22); // "Par"
 *
 * @param {Number} numero - O número a ser verificado.
 * @returns {String} Retorna "Par" ou "Ímpar".
 */
const parOuImpar = (numero) => (numero % 2 === 0 ? "Par" : "Ímpar");

console.log(parOuImpar(10));
console.log(parOuImpar(15));
console.log(parOuImpar(22)); 
