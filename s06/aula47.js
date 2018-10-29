const texto = "João é calmo, mas no trânsito é nervoso.";

console.log(texto.match(/[\wÀ-ú]+/g));

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/g));
console.log(texto.match(/[\wÀ-ú]+(?=\.)/g));
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/g));

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/g));
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/g));
