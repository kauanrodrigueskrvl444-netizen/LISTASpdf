let numero = Number(prompt("Digite um número: "))
let tabuada = ""

for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`
}

alert(`A tabuada de ${numero} é:\n${tabuada}`)