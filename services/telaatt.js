import { atualizarCartoes } from "./servicoscartoes.js";

let id;

let telaCad = document.getElementById('telaAtt');

export function escondeTelaAtt() {
    telaCad.style.right = '-100vw';
}

export function mostraTelaAtt(i) {
    id = i;
    telaCad.style.right = '0';
}

export function recolheDadosAtt() {
    let nomes = document.getElementById('nomesAtt');
    let descricao = document.getElementById('descricaoAtt');
    let imagem = document.getElementById('imagemAtt');

    atualizarCartoes(id, nomes.value, descricao.value, imagem.value);
    escondeTelaAtt();

    resetInputs(nomes);
    resetInputs(descricao);
    resetInputs(imagem);
}

// Função para limpar os campos de entrada
function resetInputs(input) {
    input.value = '';
}
