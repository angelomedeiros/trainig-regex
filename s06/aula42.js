const texto1 = "O josé é mané hahahaha";
console.log(texto1.match(/(ha)+/g));

const texto2 =
  "https://wwww.xvideos.com www.brasilumpaisfelizdenovo.org linkedin.com.br facebook.com http://angelomedeiros.com.br";
console.log(texto2.match(/(https?:\/\/)?(www)?\w+\.\w{2,}(\.\w{2,})?/g));
