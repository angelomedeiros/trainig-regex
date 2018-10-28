const texto = "1,2,3,4,5,6,7,8,9,10,a.b C!d?e[f";

console.log(texto.match(/[0-9]/g));
console.log(texto.match(/[a-g]/g));
console.log(texto.match(/[A-G]/g));
console.log(texto.match(/[A-G5-9]/g));
console.log(texto.match(/[A-Ga-g5-9]/g));
