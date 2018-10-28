const texto = "lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3";
const quantidadeDeMatch = texto.match(/\.mp3/g).length;
const nomeMaisExtensao = texto.match(/\w+\.mp3/g);

console.log(quantidadeDeMatch);
console.log(nomeMaisExtensao);
