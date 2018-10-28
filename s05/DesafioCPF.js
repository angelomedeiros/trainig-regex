const texto = `CPF dos aprovados:
- 102.298.543-12
- 930.843.204-32
- 231.516.636-90`;

const regexCPF = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
console.log(texto.match(regexCPF));
