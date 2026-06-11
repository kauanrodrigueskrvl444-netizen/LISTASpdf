let frutas = [`Maçã`, `Banana`, `Laranja`, `Uva`];
frutas.push(`Abacaxi`);    // 1. adiciona no final
frutas.pop();              // 2. remove o último
frutas.shift();            // 3. remove o primeiro
frutas.unshift(`Abacate`); // 4. adiciona no início
console.log(`Ex20 - Quantidade:`, frutas.length);
console.log(`Ex20 - Tem Abacate?`, frutas.includes(`Abacate`));