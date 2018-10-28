const texto1 = "De longe avistei o fogo e uma pessoa gritando: FOGOOOO!";
const texto2 = "There is a big fog in NYC";

// * -> zero ou mais
const regex = /fogo*/gi;
const regex2 = /fogo{0,}/gi;

console.log(texto1.match(regex));
console.log(texto2.match(regex));
console.log(texto1.match(regex2));
console.log(texto2.match(regex2));
