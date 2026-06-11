function formatarTexto(texto) {
  return `${texto.toUpperCase()} (${texto.length} caracteres)`;
}

document.getElementById(`btn`).addEventListener(`click`, function() {
  let texto = prompt(`Digite um texto:`);
  document.getElementById(`resultado`).innerText = formatarTexto(texto);
});