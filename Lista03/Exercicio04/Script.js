let idadePessoa1 = parseInt(prompt(`Digite a idade da primeira pessoa:`));
let idadePessoa2 = parseInt(prompt(`Digite a idade da segunda pessoa:`));

let resultado = idadePessoa1 > idadePessoa2
  ? `A primeira pessoa é mais velha`
  : idadePessoa1 < idadePessoa2
  ? `A segunda pessoa é mais velha`
  : `As duas pessoas têm a mesma idade`;

alert(`Resultado: ${resultado}`);