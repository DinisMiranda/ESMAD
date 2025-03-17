function calcularTMB() {
    let genero = prompt("Digite o seu gênero (M para masculino, F para feminino):").toUpperCase();
    let peso = parseFloat(prompt("Digite o seu peso em kg:"));
    let altura = parseFloat(prompt("Digite a sua altura em cm:"));
    let idade = parseInt(prompt("Digite a sua idade em anos:"));
    
    if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    
    let tmb;
    if (genero === "M") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else if (genero === "F") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    } else {
        alert("Gênero inválido. Digite M para masculino ou F para feminino.");
        return;
    }
    
    alert(`A sua Taxa Metabólica Basal (TMB) é de aproximadamente ${tmb.toFixed(2)} calorias por dia.`);
}

calcularTMB();
