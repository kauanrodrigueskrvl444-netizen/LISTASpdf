document.getElementById(`btn`).addEventListener(`click`, function() {
  let texto = document.getElementById(`campo`).value;
  let novoItem = document.createElement(`li`);
  novoItem.innerText = texto;
  document.getElementById(`lista`).appendChild(novoItem);
  document.getElementById(`campo`).value = ``;
});