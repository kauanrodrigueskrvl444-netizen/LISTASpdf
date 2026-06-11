let idade = parseInt(prompt(`Digite sua idade:`));

let resultado = idade >= 18 && idade <= 70
  ? `Você é obrigado a votar`
  : `Você não é obrigado a votar`;

alert(`${resultado}`);