import { criarCartoes } from "./../controller/formacao/cartoes.js";

export async function buscarCartoes() {
    try {
        const response = await fetch('https://backend-portifolio-psi.vercel.app/cartoes');
        if (response.status === 200) {
            const data = await response.json();
            return data.cartoes;
        } else {
            alert('Erro ao carregar cartões');
            return [];
        }
    } catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
        return [];
    }
}

export async function excluirCartoes(index) {
    try {
        const response = await fetch('https://backend-portifolio-psi.vercel.app/cartoes', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cartao: index }),
        });

        if (response.status === 200) {
            criarCartoes();
        } else {
            const data = await response.json();
            alert(data.mensagem);
        }
    } catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}

export async function cadastrarCartoes(nome, descricao, ) {
    try {
        const response = await fetch('https://backend-portifolio-psi.vercel.app/cartoes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, descricao,  }),
        });
        
        if (response.status === 201) {
            criarCartoes();
        } else {
            const data = await response.json();
            alert(data.mensagem);
        }
    } catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}

export async function atualizarCartoes(id, nome, descricao, ) {
    try {
        const response = await fetch(`https://backend-portifolio-psi.vercel.app/cartoes/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, descricao,  }),
        });

        if (response.status === 200) {
            criarCartoes();
        } else {
            const data = await response.json();
            alert(data.mensagem);
        }
    } catch (e) {
        console.log('Erro ao se comunicar com o Server: ' + e);
    }
}
