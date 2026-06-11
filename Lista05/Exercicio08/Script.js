function somar(n1, n2) {
  return n1 + n2;
}

document.getElementById(`btn`).addEventListener(`click`, function() {
  let n1 = parseFloat(prompt(`Digite o primeiro número:`));
  let n2 = parseFloat(prompt(`Digite o segundo número:`));
  let resultado = somar(n1, n2);
  document.getElementById(`resultado`).innerText = `Soma: ${resultado}`;
});