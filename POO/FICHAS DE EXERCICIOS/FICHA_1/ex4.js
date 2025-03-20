let num = parseInt(prompt("Insira um número:"));

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    return sum === num;
}

if (isPerfectNumber(num)) {
    console.log(`${num} é um número perfeito.`);
}
    else {
        console.log(`${num} não é um número perfeito.`);
   }


