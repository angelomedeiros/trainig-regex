const texto = "Pedrinho (filho do Pedro Silva) é doutor do Abcabc!";

console.log(texto.match(/[(abc)]/gi));
console.log(texto.match(/([abcp-t])/gi));
console.log(texto.match(/(abc)+/gi));
