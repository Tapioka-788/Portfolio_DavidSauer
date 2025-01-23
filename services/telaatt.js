import { atualizarCartoes } from "./servicoscartoes.js";

let id;
let telaAtt = document.getElementById('telaAtt'); 


export function escondeTelaAtt() {
    telaAtt.style.left = '-200vw'; 
}

// Função para mostrar a tela de atualização
export function mostraTelaAtt(i) {
    id = i; // Armazena o ID do cartão a ser atualizado
    telaAtt.classList.add('modal-show'); // Exibe o modal
    telaAtt.classList.remove('modal-hide'); // Remove a classe que esconde o modal
}

// Função para recolher os dados e atualizar o cartão
export function recolheDadosAtt() {
    let nomes = document.getElementById('nomesAtt'); 
    let descricao = document.getElementById('descricaoAtt'); 

  
    if (nomes.value && descricao.value) {
        // Chama a função para atualizar o cartão com o ID e os novos valores
        atualizarCartoes(id, nomes.value, descricao.value);
        escondeTelaAtt(); 

        resetInputs(nomes); 
        resetInputs(descricao); 
    } else {
        alert('Por favor, preencha todos os campos.'); // Alerta caso algum campo esteja vazio
    }
}


function resetInputs(input) {
    input.value = ''; 
}
