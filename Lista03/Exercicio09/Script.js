let horas = parseInt(prompt(`Digite a hora atual (0-23):`));

let resultado = horas >= 5 && horas <= 11 ? `Manhã`
  : horas >= 12 && horas <= 17 ? `Tarde`
  : horas >= 18 && horas <= 23 ? `Noite`
  : `Madrugada`;

alert(`Período: ${resultado}`);