export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');

    try {
        const response = await fetch('http://localhost:3000/cartoes');
        const data = await response.json();
        const cartoes = await data.cartoes;

        for (let i = 0; i < cartoes.lenght; i++) {

            let cartao = document.createElement('div');
            cartao.className = 'cartao';

            let h1 = document.createElement('h1');
            h1.textContent = c.nome;

            let h3 = document.createElement('h3');
            h3.textContent = c.valor;

            let img = document.createElement('img');
            img.src = c.imagem; // Define a fonte da imagem
            img.alt = c.nome;   // Texto alternativo para a imagem
            img.className = 'imagem'; // Adicione uma classe para estilização, se necessário

            let p = document.createElement('p');
            p.textContent = 'eitaaa';

            // Adiciona os elementos ao cartão
            cartao.appendChild(img); // Adiciona a imagem ao cartão
            cartao.appendChild(h1);
            cartao.appendChild(h3);
            cartao.appendChild(p);

            sectionCartoes.appendChild(cartao); // Adiciona o cartão à seção
        };

    } catch (e) {
        alert(e);
    }

}
