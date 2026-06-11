function digaOla(nome) {
  return `Olá, ${nome}!`;
}

document.getElementById(`btn`).addEventListener(`click`, function() {
  let nome = prompt(`Digite seu nome:`);
  document.getElementById(`mensagem`).innerText = digaOla(nome);
});