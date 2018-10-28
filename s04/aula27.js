const texto = ".$+*?-";

// Os metacaracteres abaixo não precisam do escape dentro de conjuntos
console.log(texto.match(/[+.?*$]/g));
console.log(texto.match(/[+.?*$-]/g));
console.log(texto.match(/[-+.?*$]/g));
console.log(texto.match(/[+-.?*$]/g));
console.log(texto.match(/[+.-?*$]/g));
// console.log(texto.match(/[+.?-*$]/g)); // Erro devido ao intervalo ?-* ser inválido
console.log(texto.match(/[+.?*$]./g));

// O caractere '-' dentro de um conjunto deixa de ser um literal dentro de um conjunto
console.log(texto.match(/[$-?]/g));

// Pode precisar do escape - [ ] ^
console.log(texto.match(/[$\-?]/g)); // Não é um intervalo devido ao escape
