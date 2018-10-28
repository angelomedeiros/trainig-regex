const texto = "áéíóú àèìòù âêîôû äëïöü ãẽĩõũ";

console.log(texto.match(/[À-ú]/g));
console.log(texto.match(/[À-ü]/g));
console.log(texto.match(/[À-ũ]/g));
console.log(texto.match(/[À-ẽ]/g));
