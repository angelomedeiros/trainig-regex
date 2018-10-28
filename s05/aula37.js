const texto = `
  <div>
    Conteúdo 1
  </div><p>Conteúdo 2</p><div>Conteúdo 3</div>
  <p>Conteúdo 4</p>
  <div>Conteúdo 5</div>
  <span>Conteúdo 6</span>
`;

console.log(texto.match(/.+/));

// quantificadores SÃO gulosos (greedy)
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>[.\s]+<\/div>/g));
console.log(texto.match(/<div>[.\s]+?<\/div>/g));
console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<.+?>.+?<\/.+?>/g));
console.log(texto.match(/<.+?>.+?<\/.+?>/g));
console.log(texto.match(/<.+?>.+<\/.+?>/g));
console.log(texto.match(/<.+?>\n?|.+?\n|.+<\/.+?>/g));
