const texto = "1,2,3,4,5,6, :a.b c!d?e";

const regexVirgula = /,/g; // ou /,/
console.log(texto.split(regexVirgula));
console.log(texto.match(regexVirgula));
console.log(texto.match(/A/g));
console.log(texto.match(/A/gi));
console.log(texto.match(/a/i));
console.log(texto.match(/.[,4]/gi));
