/**
 * Verifica se um usuário pode acessar o sistema.
 *
 * @example
 * podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }); // true
 * podeAcessar({ idade: 16, isAdmin: true, isBlocked: true });   // false
 *
 * @param {Object} usuario - objeto com as propriedades idade, isAdmin, e isBlocked.
 * @param {Number} usuario.idade - idade.
 * @param {Boolean} usuario.isAdmin - mostra se o usuário é administrador.
 * @param {Boolean} usuario.isBlocked - mostra se o usuário está bloqueado.
 * @returns {Boolean} retorna true se o usuário pode acessar, false caso contrário.
 */
const podeAcessar = ({ idade, isAdmin, isBlocked }) =>
    (idade > 18 || isAdmin) && !isBlocked;


  console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }));
  console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));
  console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: false }));
  console.log(podeAcessar({ idade: 17, isAdmin: false, isBlocked: false }));
  