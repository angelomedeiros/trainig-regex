const texto =
  "Romário era um excelente jogador\n, mas hpje é um político questionador";

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); // ^ inicio da linha/string
console.log(texto.match(/r$/gi)); // $ final da linha/string

console.log(texto.match(/^r.*r$/gi)); // problema do dotall
