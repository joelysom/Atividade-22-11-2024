/**
 * Função para verificar a idade de uma pessoa.
 *
 * @example
 * verificarIdade(15); // "Menor de idade"
 * verificarIdade(18); // "Maior de idade"
 * verificarIdade(21); // "Maior de idade"
 *
 * @param {Number} idade - A idade da pessoa a ser verificada.
 * @returns {String} Retorna "Menor de idade" ou "Maior de idade".
 */

const verificarIdade = (idade) => {
    return idade <18 ? "Menos de idade" : "Maior de idade";
};

console.log(verificarIdade(15));
console.log(verificarIdade(18));
console.log(verificarIdade(21));