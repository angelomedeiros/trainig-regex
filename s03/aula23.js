const texto = "Bom\ndia";
console.log(texto.match(/.../g));
console.log(texto.match(/Bom.dia/g)); // O ponto não engloba a quebra de linha o /n
console.log(texto.match(/..../g));

// O dotall em outras linguagens tem uma flag /exp/s
