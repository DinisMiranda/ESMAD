let num1 = parseInt(prompt("Insira o primeiro número: "));
let num2 = parseInt(prompt("Insira o segundo número: "));

let inicio = Math.min(num1, num2);
let fim = Math.max(num1, num2);

let soma = 0;

for (let i = inicio; i <= fim; i++) {
    soma += i;
}
console.log(`A soma dos números entre ${inicio} e ${fim} é ${soma}.`);