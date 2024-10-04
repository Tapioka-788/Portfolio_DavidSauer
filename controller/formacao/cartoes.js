let cartoes = [
    {
        nome: 'cartao 1',
        valor: '10pila',
        imagem: 'https://www.sigmaaldrich.com/content/dam/sigma-aldrich/product0/071/a5752-25mg_0057134_btl.tif/_jcr_content/renditions/a5752-25mg_0057134_btl-large'
    },
    {
        nome: 'cartao 2',
        valor: '48,89cents',
        imagem: 'https://images-americanas.b2w.io/produtos/01/00/img/3769059/8/3769059896_1GG.jpg'
    },
    {
        nome: 'cartao 3',
        valor: 'fiftcent',
        imagem: 'https://cdn.awsli.com.br/600x450/1810/1810043/produto/88385637/c76fbaa43e.jpg'
    },
    {
        nome: 'cartao 4',
        valor: '2dól',
        imagem: 'https://cdn.sistemawbuy.com.br/arquivos/3d031251600db30f801738111450cdd4/produtos/65553c13c7c0c/20240205_170005-1-65c37c57574dc.jpg'
    },
    {
        nome: 'cartao 5',
        valor: 'dé real',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBfYx2M6FgW3A1rChG5lJykCOtND77CrZfA&simagem5.jpg'
    },
    {
        nome: 'cartao 6',
        valor: '2kg de sal',
        imagem: 'https://static.vecteezy.com/ti/vetor-gratis/p1/21860828-quimico-molecular-modelo-do-cesio-cesio-137-quimico-formulas-perigoso-cesio-137-nuclear-ilustracao-plano-projeto-elemento-para-local-na-rede-internet-ou-aplicativo-grafico-logotipo-social-meios-de-comunicacao-movel-aplicativo-vetor.jpg'
    },
    {
        nome: 'cartao 7',
        valor: '100pila',
        imagem: 'https://data.pixiz.com/output/user/frame/preview/400x400/0/8/8/3/1163880_6ec48.jpg'
    },
    {
        nome: 'cartao 8',
        valor: 'babao',
        imagem: 'https://s2.glbimg.com/Lq8w2N7tsI1ZFasuBS10g3njg98=/300x225/s.glbimg.com/jo/g1/f/original/2016/01/07/presos2.jpg'
    },
    {
        nome: 'cartao 9',
        valor: '3 socos no beto',
        imagem: 'https://s2-g1.glbimg.com/pyaQfNy0sKtOxORKMltd9untQQ0=/0x0:1280x777/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/I/B/DMFYzSRBAAdU9jFsWtDQ/38.jpg'
    },
    {
        nome: 'passaportes thailandes fake',
        valor: 'molestar o pedro',
        imagem: 'https://thumbs.dreamstime.com/b/passaporte-tailand%C3%AAs-24720849.jpg'
    },
    {
        nome: 'c4',
        valor: 'lagrima de jacaré',
        imagem: 'https://www.ecured.cu/images/7/74/C-4.jpg'
    },
    {
        nome: 'quadro de um senhor...',
        valor: 'troco no livro manifesto comunista',
        imagem: 'https://static.dw.com/image/47221697_803.jpg'
    }
];

export function criarCartoes() {
    let sectionCartoes = document.getElementById('cartoes');

    cartoes.forEach(c => {
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
    });
}
