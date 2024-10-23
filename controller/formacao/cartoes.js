import { excluirCartoes } from "../../services/servicoscartoes";
import { mostraTelaAtt } from "../../services/telaatt";

export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');

    try {
        const response = await fetch('http://localhost:3000/cartoes');
        const data = await response.json();
        const cartoes = data.cartoes;

        for (let i = 0; i < cartoes.length; i++) {

            let cartao = document.createElement('div');
            cartao.className = 'cartao';

            let h1 = document.createElement('h1');
            h1.textContent = cartoes.nome;

            let h3 = document.createElement('h3');
            h3.textContent = cartoes.descricao;

            let img = document.createElement('img');
            img.src = cartoes.imagem; // Define a fonte da imagem
            img.alt = cartoes.nome;   // Texto alternativo para a imagem
            img.className = 'imagem'; // Adicione uma classe para estilização, se necessário

            // let buttonContainer = document.createElement('div');
            // buttonContainer.style.display = 'flex';
            // buttonContainer.style.justifyContent = 'space-between';
            // buttonContainer.style.gap = '10px';

            // let button = document.createElement ('button');
            // button.className = 'btn_card';
            // button.textContent = 'EXCLUIR';
            // button.addEventListener('click', () => {
            //     excluirCartoes(i);
            // });   
            
            // let buttonAtt = document.createElement('button');
            // buttonAtt.className = 'btn_att_card';
            // buttonAtt.textContent = 'ATUALIZAR';
            // buttonAtt.addEventListener('click', () => {
            //     mostraTelaAtt(i);
            // });

            // buttonContainer.appendChild(button);
            // buttonAtt.appendChild(buttonAtt);
            // cartao.appendChild(img); // Adiciona a imagem ao cartão
            // cartao.appendChild(h1);
            // cartao.appendChild(h3);
            // cartao.appendChild(buttonContainer)

            sectionCartoes.appendChild(cartao); // Adiciona o cartão à seção
        };

        // let criarCartoes = document.createElement('button');
        // criarCartoes.className = "btn_add_card";
        // criarCartoes.textContent = '+';
        // criarCartoes.addEventListener('click', () => {
        // });

        // sectionCartoes.appendChild(criarCartoes);

    } catch (e) {
        alert(e);
    }

}
