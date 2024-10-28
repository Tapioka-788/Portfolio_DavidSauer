import { excluirCartoes } from "../../services/servicoscartoes.js";
import { mostraTelaAtt } from "../../services/telaatt.js";

export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');
    sectionCartoes.innerHTML = ''; // Limpa a seção antes de adicionar novos cartões

    try {
        const response = await fetch('http://localhost:3000/cartoes');
        const data = await response.json();
        const cartoes = data.cartoes;

        for (let i = 0; i < cartoes.length; i++) {s
            let cartao = document.createElement('div');
            cartao.className = 'cartao';

            let h1 = document.createElement('h1');
            h1.textContent = cartoes[i].nome;  // Corrigido o acesso ao nome

            let h3 = document.createElement('h3');
            h3.textContent = cartoes[i].descricao;  // Corrigido o acesso à descrição

            let img = document.createElement('img');
            img.src = cartoes[i].imagem; // Define a fonte da imagem
            img.alt = cartoes[i].nome;   // Texto alternativo para a imagem
            img.className = 'imagem';

            let buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.justifyContent = 'space-between';
            buttonContainer.style.gap = '10px';

            let button = document.createElement('button');
            button.className = 'btn_card';
            button.textContent = 'EXCLUIR';
            button.addEventListener('click', () => {
                excluirCartoes(i);
            });   
            
            let buttonAtt = document.createElement('button');
            buttonAtt.className = 'btn_att_card';
            buttonAtt.textContent = 'ATUALIZAR';
            buttonAtt.addEventListener('click', () => {
                mostraTelaAtt(i);
            });

            buttonContainer.appendChild(button);
            buttonContainer.appendChild(buttonAtt);  // Corrigido para adicionar o botão de atualização
            cartao.appendChild(img);
            cartao.appendChild(h1);
            cartao.appendChild(h3);
            cartao.appendChild(buttonContainer);

            sectionCartoes.appendChild(cartao);  // Adiciona o cartão à seção
        }

        let criarCartoesBtn = document.createElement('button');
        criarCartoesBtn.className = "btn_add_card";
        criarCartoesBtn.textContent = '+';
        criarCartoesBtn.addEventListener('click', () => {
            // Evento para o botão de adicionar cartões
        });

        sectionCartoes.appendChild(criarCartoesBtn);

    } catch (e) {
        alert(e);
    }
}
