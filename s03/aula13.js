const texto = "Casa bonita é casa amarela da esquina com a rua ACASALAR";

const regex = /casa/gi;
console.log(texto.match(regex));
console.log(texto.match(/casa bonita/i));
console.log(texto.match(/casa/gi));
