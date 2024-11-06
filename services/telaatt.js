import { atualizarCartoes } from "./servicoscartoes.js";

let id;
let telaAtt = document.getElementById('telaAtt');

export function escondeTelaAtt() {
    telaAtt.style.right = '-100vw';
}

export function mostraTelaAtt(i) {
    id = i;
    telaAtt.style.right = '0';
}

export function recolheDadosAtt() {
    let nomes = document.getElementById('nomesAtt');
    let descricao = document.getElementById('descricaoAtt');

    if (nomes.value && descricao.value) {
        atualizarCartoes(id, nomes.value, descricao.value);
        escondeTelaAtt();

        resetInputs(nomes);
        resetInputs(descricao);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}


// Função para limpar os campos de entrada
function resetInputs(input) {
    input.value = '';
}
