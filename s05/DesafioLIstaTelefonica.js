const texto = `Lista telefônica:
- (11) 92412-1421
- 96453-3642
-92621-3332
-9482-2432
- 5482-2432
- (82) 97182-2432
`;

const regexTelefone = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g;
console.log(texto.match(regexTelefone));
