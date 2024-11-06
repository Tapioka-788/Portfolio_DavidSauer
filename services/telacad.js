import { cadastrarCartoes } from "./servicoscartoes.js";

let telaCad = document.getElementById('telaCad');

export function escondeTelaCad() {
    telaCad.style.left = '-100vw';
}

export function mostraTelaCad() {
    telaCad.style.left = '0vw';
}

export function recolheDados() {
    let nome = document.getElementById('nome');
    let descricao = document.getElementById('descricao');

    if (nome.value === '' || descricao.value === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        cadastrarCartoes(nome.value, descricao.value);
        escondeTelaCad();

        nome.value = '';
        descricao.value = '';
    }
}
