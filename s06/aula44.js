const texto = "supermercado hipermercado minimercado mercado";
console.log(texto.match(/(hiper|super|mini)?mercado/g));
console.log(texto.match(/((hi|su)per|mini)?mercado/g));
