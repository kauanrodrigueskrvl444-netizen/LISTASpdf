let nome = prompt("Digite seu nome completo:");
let semEspacos = nome.replace(/ /g, "");

console.log(`Total de letras: ${semEspacos.length}`);