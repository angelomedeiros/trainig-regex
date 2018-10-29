const texto = `Os e-mails dos convidados são:
- fulano@gmail.com
- sicrano@hotmal.com
- beltrano@outlook.com.br
- thalita@yahoo.com
- angelo-medeiros@yahoo.com.teste
- angelO-Medeiros@yahoo.com.teste
- angelo_medeiros@cod3r.com.teste
`;

const regexEmail = /[\w.-]+@\w+\.[\w\d]{2,}\.?\w{0,}/g;
console.log(texto.match(regexEmail));
