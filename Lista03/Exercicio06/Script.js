let peso = parseFloat(prompt(`Digite seu peso (kg):`));
let altura = parseFloat(prompt(`Digite sua altura (ex: 1.75):`));

let imc = peso / (altura * altura);

let resultado = imc < 18.5 ? `Abaixo do peso`
  : imc <= 24.9 ? `Peso normal`
  : imc <= 29.9 ? `Sobrepeso`
  : `Obesidade`;

alert(`IMC: ${imc.toFixed(2)} - ${resultado}`);