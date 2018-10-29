const texto =
  "Romário era um excelente jogador\n, mas hpje é um político questionador";

console.log(texto.match(/^r.*r$/gi)); // problema do dotall
console.log(texto.match(/^r[\s\S]*r$/gi)); // implementando o dotall
