// Importações das funções necessárias
import { excluirCartoes, buscarCartoes } from "../../services/servicoscartoes.js";
import { mostraTelaAtt } from "../../services/telaatt.js";
import { mostraTelaCad } from "../../services/telacad.js";

let section = document.getElementById('cartoes'); 

export async function criarCartoes() {
    section.innerHTML = ''; // Limpa o conteúdo atual da seção

    const cards = await buscarCartoes(); 

    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';

        let h3 = document.createElement('h3');
        h3.textContent = cards[i].mensagem;

        let buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'space-between';
        buttonContainer.style.gap = '10px';

        // Botão para excluir
        let button = document.createElement('button');
        button.className = 'btn_card';
        button.textContent = 'EXCLUIR';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.addEventListener('click', () => {
            excluirCartoes(i);
        });

        // Botão para atualizar
        let buttonAtt = document.createElement('button');
        buttonAtt.className = 'btn_att_card';  
        buttonAtt.textContent = 'ATUALIZAR';
        buttonAtt.addEventListener('click', () => {
            mostraTelaAtt(i); // Passando o índice para a tela de atualização
        });

        // Adiciona botões ao container de botões
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(buttonAtt);

        // Adiciona elementos ao cartão
        card.appendChild(h3);
        card.appendChild(buttonContainer);

        // Adiciona o cartão à seção
        section.appendChild(card);
    }

    // Botão de adicionar novo cartão
    let cardAdd = document.createElement('button');
    cardAdd.className = 'btn_add_card';
    cardAdd.textContent = '+';
    cardAdd.addEventListener('click', () => {
        mostraTelaCad(); // Abre a tela de cadastro
    });

    section.appendChild(cardAdd);
}
