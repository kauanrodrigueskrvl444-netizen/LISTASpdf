let valor = prompt("Digite um valor numérico:");
let numero = parseFloat(valor);
let formatado = numero.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
 
console.log(`Valor formatado: ${formatado}`);
