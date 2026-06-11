document.getElementById(`btn`).addEventListener(`click`, function() {
  let novoItem = document.createElement(`li`);
  novoItem.innerText = `Novo Item`;
  document.getElementById(`lista`).appendChild(novoItem);
});