import { criarCartoes } from "../controller/formacao/cartoes";

export async function pegarCartoes() {
    try {
        const response = await fetch('http://localhost:3000/cartoes');
        const data = await response.json();
        return data.cartoes;
    } catch (error) {
        console.error('Erro ao pegar os cartoes:', error);
    }
}

export async function excluirCartao() {
    try {
        await fetch('http://localhost:3000/cartoes', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Erro ao excluir os cartoes:', error);
    }
}

export async function cadastrarCartao (nome, descricao, imagem) {
    try {
        const response = await fetch('http://localhost:3000/cartoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                descricao,
                imagem,
            }),
        });
    } catch (error) {
        console.error('Erro ao cadastrar o cartao:', error);
    }};

    export async function atualizarCartao(nome, descricao, imagem) {
        try {
            const response = await fetch('http://localhost:3000/cartoes', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    descricao,
                    imagem,
                }),
            });
        } catch (error) {
            console.error('Erro ao atualizar o cartao:', error);
        }

    }