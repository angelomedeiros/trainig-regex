const texto1 = "dia diatomico diafragma media wikipedia bom_dia melodia radial";

console.log(texto1.match(/\bdia/gi));
console.log(texto1.match(/\bdia\w+/gi));
console.log(texto1.match(/\w+dia\b/gi));
console.log(texto1.match(/\w+dia\w+/gi));

// Borda é não \w ou seja \W = [^A-Za-z0-9_]
const texto2 =
  "dia diatômico diafragma, média wikipédia bom-dia melodia radial";
console.log(texto2.match(/\bdia\b/gi));
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)); // A vírgula entra
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÁ-ú-]*)?/gi));
