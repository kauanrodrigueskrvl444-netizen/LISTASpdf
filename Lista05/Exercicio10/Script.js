document.getElementById(`btn`).addEventListener(`click`, function() {
  let texto = document.getElementById(`campo`).value;
  document.getElementById(`resultado`).innerText = texto;
});