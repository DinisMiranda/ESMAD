
// Importa modulo data.js
import * as data from "./data.js";


let listUsers = []
listUsers=  data.init();
console.log(listUsers)


function listarNivel(nivel) {
    let tabelaNivel = listUsers.filter(element => element.nivel == nivel);
    let texto="users no nivel ${nivel}:"
    for (letjogador of tabelaNivel) {
        texto += `
        ${jogador.nome}`
    }
    alert(texto);
}


function somarPontos(nivel) {
    let tabelaNivel = listUsers.filter(element => element.nivel == nivel);
    let soma=0;
    for (let jogador of tabelaNivel) {
        soma += jogador.pontos;
    }
    alert(`Soma dos pontos no nivel ${nivel}: ${soma}`);
}

function VerificarNivel(nivel) {
    let tabelaNivel = listUsers.filter(element => element.nivel == nivel);
    let texto = "users no nivel ${nivel}:"
    for (let jogador of tabelaNivel) {
        texto += `
        ${jogador.nome}`
    }
    alert(texto);
}

function pesquisarColecionaveis(colecionavel){
    let tabelaColecionavel = listUsers.filter(element => element.colecionaveis == colecionavel);
    let texto = "users com o coleccionavel ${colecionavel}:"
    for (let jogador of tabelaColecionavel) {
        texto += `
        ${jogador.nome}`
    }
    alert(texto);
}

function mostrarJogadores(coleccionavel) {
    let tabelaColecionavel = listUsers.filter(element => element.colecionaveis == coleccionavel);
    let texto = "users com o coleccionavel ${coleccionavel}:"
    for (let jogador of tabelaColecionavel) {
        texto += `
        ${jogador.nome}`
    }
    alert(texto);

}


