const texto1 = "De longe avistei o fogo e uma pessoa gritando: FOGOOOO!";
const texto2 = "There is a big fog in NYC";

// + -> um ou mais
const regex = /fogo+/gi;
const regex2 = /fogo{1,}/gi;

console.log(texto1.match(regex));
console.log(texto2.match(regex));
console.log(texto1.match(regex2));
console.log(texto2.match(regex2));

const texto3 = "Números: 0123456789";
console.log(texto3.match(/[0-9]/g));
console.log(texto3.match(/[0-9]+/g));
console.log(texto3.match(/[3-9]+/g));
console.log(texto3.match(/[3-7]+/g));
