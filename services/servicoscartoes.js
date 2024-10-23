import { criarCartoes } from "./../controller/formacao/cartoes.js";

export async function buscarCartoes() {
    try {
        const response = await fetch('http://localhost:3000/cartoes');
        if (response.status === 200) {
            const data = await response.json();
            const cartoes = data.cartoes;
            return cartoes;
        } else {
            alert('Erro ao carregar cartões');
            const cartoes = [];
            return cartoes;
        }
    }
    catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}

export async function excluirCartoes(index) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartao: index }),
        });

        if(response.status === 201){
            criarCartoes();
        }else{
            const data = response.json();
            alert(data.mensagem);
        }      
    }
    catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}

export async function cadastrarCartoes(nome, descricao, imagem) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                descricao: descricao,
                imagem: imagem,
            }),
        });
        
        if(response.status === 201){
            criarCartoes();
        }else{
            const data = response.json();
            alert(data.mensagem);
        }
    }
    catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}

export async function atualizarCartoes(nome, descricao, imagem) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                descricao: descricao,
                imagem: imagem,
            }),
        });
        if(response.status === 201){
            criarCartoes();
        }else{
            const data = response.json();
            alert(data.mensagem);
        }
    } catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}