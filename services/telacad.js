import { cadastrarCartoes } from "./servicoscartoes.js";

let telaCad = document.getElementById('telaCadastro');
export function escondeTelaCad() {
    telaCad.style.left = '-100vw';
}
export function mostraTelaCad() {
    telaCad.style.left = '0';
}

export function recolheDados() {
    let nome = document.getElementById('nome');
    let descricao = document.getElementById('descricao');
    let imagem = document.getElementById('imagem');

    cadastrarCartoes(nome.value, descricao.value, imagem.value);
    escondeTelaCad();

    resetInputs(nome);
    resetInputs(descricao);
    resetInputs(imagem)

}