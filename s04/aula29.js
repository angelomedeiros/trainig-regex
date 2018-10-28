const texto = `1,2,3,4,5,6,10,a.b c!d?e	-[]ãabx
f_g`;

console.log(texto.match(/\d/g)); // Shorthand para digitos
console.log(texto.match(/\D/g)); // Shorthand para NÃO digitos
console.log(texto.match(/\w/g)); // Shorthand para caracteres [a-zA-z0-9_]
console.log(texto.match(/\W/g)); // Shorthand para NÃO caracteres [a-zA-z0-9_]
console.log(texto.match(/\s/g)); // Shorthand para espaços em branco, tab e quebra de linha
console.log(texto.match(/\S/g)); // Shorthand para NÃO espaços em branco, tab e quebra de linha /s /n /t /r /f

const texto2 = "Angelo \rMedeiros \fNóbrega \nOLá Mun\rd\fo";
console.error(texto2);
console.log(texto2.match(/\s/g)); // Shorthand para espaços em branco, tab e quebra de linha
