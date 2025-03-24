generos=["M","F"];

genero= prompt("Qual é o seu género? (M/F)");

if (generos.includes(genero)) {
    altura= +prompt("Qual é a sua altura?");
    peso = +prompt("Qual é o seu peso?");
    idade = +prompt("Qual é a sua idade?");

    if (genero=="M") {
        tbm=(10*peso)+(6.25*altura)-(5*idade)+5;
    } else {
        tbm=(10*peso)+(6.25*altura)-(5*idade)-161;
    }
}
console.log(`O seu TMB é: $(tbm)`);