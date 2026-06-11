let v1 = parseFloat(prompt("Digite o primeiro valor:")); 
let v2 = parseFloat(prompt("Digite o segundo valor:")); 
let v3 = parseFloat(prompt("Digite o terceiro valor:"));

let media = (v1 + v2 + v3) / 3;

let formatado = media.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  console.log(`Média: ${formatado}`);