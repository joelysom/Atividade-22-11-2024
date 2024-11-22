/**
 * Calcula o preço final de um produto com base no desconto.
 *
 * @example
 * calcularDesconto(100, 10); // 90
 * calcularDesconto(250, 20); // 200
 *
 * @param {Number} preco - preço original.
 * @param {Number} desconto - % de desconto.
 * @returns {Number} preço final com desconto aplicado.
 */
const calcularDesconto = (preco, desconto) => preco - (preco * desconto) / 100;

console.log(calcularDesconto(100, 10)); 
console.log(calcularDesconto(250, 20)); 
console.log(calcularDesconto(300, 15));
