/**
 * Retorna o nome do dia da semana correspondente ao numero fornecido.
 *
 * @example
 * definirDiaDaSemana(3); // "Terça-feira"
 * definirDiaDaSemana(7); // "Sábado"
 * definirDiaDaSemana(8); // "numero 8"
 *
 * @param {Number} dia - Numero do dia da semana (1 a 7).
 * @returns {String} Nome do dia correspondente ou "Nmero 8".
 */

const definirDiaDaSemana = (dia) => {
    const dias = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return dias[dia - 1] || "Número inválido";
  };
  

  console.log(definirDiaDaSemana(3));
  console.log(definirDiaDaSemana(7));
  console.log(definirDiaDaSemana(8));
  