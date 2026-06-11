let preco = parseFloat(prompt(`Digite o preço do produto:`));

let resultado = preco < 20 ? `Barato`
  : preco <= 100 ? `Médio`
  : `Caro`;

alert(`Classificação: ${resultado}`);