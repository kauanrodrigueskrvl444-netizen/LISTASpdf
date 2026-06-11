let idade = parseInt(prompt(`Digite sua idade:`));

let brasil = idade >= 18 ? `Maior de idade no Brasil` : `Menor de idade no Brasil`;
let eua    = idade >= 21 ? `Maior de idade nos EUA`   : `Menor de idade nos EUA`;

alert(`${brasil}\n${eua}`);