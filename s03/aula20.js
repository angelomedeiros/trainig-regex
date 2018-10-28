const texto = `
ca	r
r	o s!
`;

console.log(texto.match(/ca\tr\nr\to\ss!/)); // ou o de baixo \s equivale ao espaço
console.log(texto.match(/ca\tr\nr\to s!/));
