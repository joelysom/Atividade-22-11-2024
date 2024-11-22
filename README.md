# Atividade-22-11-2024

# Exercícios de JavaScript Documentados com JSDoc

Eu finalizei as funções usando o padrão **arrow functions**, e cada uma está documentada com **JSDoc**, detalhando sua funcionalidade, parâmetros e exemplos de uso.

---

## **Exercício 1: 
 ```Javascript
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

```



## **Exercício 2: definirDiaDaSemana**

### **Enunciado:**
Crie uma função chamada `definirDiaDaSemana` que recebe um Numero (1 a 7) representando os dias da semana. A função deve retornar o nome do dia correspondente:
- 1 para "Domingo"
- 2 para "Segunda-feira"
- e assim por diante até 7 para "Sábado".

Caso o Numero seja inválido, retorne "Numero inválido". Teste a função com os valores 3, 7 e 8.

```javascript
/**
 * Retorna o nome do dia da semana correspondente ao Numero fornecido.
 *
 * @example
 * definirDiaDaSemana(3); // "Terça-feira"
 * definirDiaDaSemana(7); // "Sábado"
 * definirDiaDaSemana(8); // "Numero inválido"
 *
 * @param {Number} dia - Numero do dia da semana (1 a 7).
 * @returns {String} Nome do dia correspondente ou "Numero inválido".
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
  return dias[dia - 1] || "Numero inválido";
};

console.log(definirDiaDaSemana(3));
console.log(definirDiaDaSemana(7));
console.log(definirDiaDaSemana(8));
```

---

## **Exercício 3: parOuImpar**

### **Enunciado:**
Implemente uma função chamada `parOuImpar` que recebe um Numero como parâmetro e utiliza um operador ternário para retornar:
- "Par" se o Numero for par
- "Ímpar" caso contrário.

Teste a função com os Numeros 10, 15 e 22.

```javascript
/**
 * Verifica se um numero é par ou ímpar.
 *
 * @example
 * parOuImpar(10); // "Par"
 * parOuImpar(15); // "Ímpar"
 * parOuImpar(22); // "Par"
 *
 * @param {Number} numero - o numero a ser verificado.
 * @returns {String} retorna "Par" ou "Ímpar".
 */
const parOuImpar = (numero) => (numero % 2 === 0 ? "Par" : "Ímpar");

console.log(parOuImpar(10)); 
console.log(parOuImpar(15)); 
console.log(parOuImpar(22));
```

---

## **Exercício 4: podeAcessar**

### **Enunciado:**
Implemente uma função chamada `podeAcessar` que verifica se um usuário pode acessar o sistema. O acesso é permitido se:
1. O usuário for maior de 18 anos OU for administrador (`isAdmin` verdadeiro).
2. A conta não estiver bloqueada (`isBlocked` deve ser falso).

A função deve receber um objeto com as propriedades `idade`, `isAdmin` e `isBlocked`. Teste a função com os seguintes exemplos:
- `{ idade: 20, isAdmin: false, isBlocked: false }` (resultado: `true`)
- `{ idade: 16, isAdmin: true, isBlocked: true }` (resultado: `false`)

```javascript
/**
 * Verifica se um usuário pode acessar o sistema.
 *
 * @example
 * podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }); // true
 * podeAcessar({ idade: 16, isAdmin: true, isBlocked: true });   // false
 *
 * @param {Object} usuario - objeto com as propriedades idade, isAdmin, e isBlocked.
 * @param {Number} usuario.idade - idade do usuário.
 * @param {Boolean} usuario.isAdmin - mostra se o usuário é administrador.
 * @param {Boolean} usuario.isBlocked - mostra se o usuário está bloqueado.
 * @returns {Boolean} retorna true se o usuário pode acessar, false caso contrário.
 */
const podeAcessar = ({ idade, isAdmin, isBlocked }) =>
  (idade > 18 || isAdmin) && !isBlocked;

console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); 
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: false }));
```

---

## **Exercício 5: calcularDesconto**

### **Enunciado:**
Crie uma arrow function chamada `calcularDesconto` que recebe dois argumentos:
1. O preço original de um produto (Numero).
2. A porcentagem de desconto (Numero).

A função deve retornar o preço com o desconto aplicado. Teste a função com os seguintes exemplos:
- Preço original: 100, Desconto: 10 (resultado: 90)
- Preço original: 250, Desconto: 20 (resultado: 200)

```javascript
/**
 * Calcula o preço final de um produto com base no desconto aplicado.
 *
 * @example
 * calcularDesconto(100, 10); // 90
 * calcularDesconto(250, 20); // 200
 *
 * @param {Number} preco - Preço original do produto.
 * @param {Number} desconto - Porcentagem de desconto.
 * @returns {Number} Preço final com desconto aplicado.
 */
const calcularDesconto = (preco, desconto) => preco - (preco * desconto) / 100;

console.log(calcularDesconto(100, 10));
console.log(calcularDesconto(250, 20));
console.log(calcularDesconto(300, 15));
```

---

## Notinha

Documentar precisa de criatividade, e eu preciso de tempo para adquiri-la...

---

# "A paciência é amarga, mas seu fruto é doce." – **Jean-Jacques Rousseau**
