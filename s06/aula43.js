const texto1 = "<b>Destaque</b><strong>Forte</strong><div>Conteúdo</div>";
console.log(texto1.match(/<(\w+)>.*<\/\1>/g));

const texto2 = "Mentemega é um filme mega legal sobre a mente";
console.log(texto2.match(/(mente)(mega).*\2.*\1/gi));
console.log(texto2.match(/(?:mente)(mega).*\1/gi)); // mente não é armazenado devido ao ?:
console.log(texto2.replace(/(mente)(mega)/gi, "$2$1"));
