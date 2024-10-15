import  { atualizarCartao } from "../services/servicoscartoes/atualizar_cartao"; 

let telaCad = document.getElementById("telaAtt");
export function escondetelaAtt(){
    telaCad.style.right = '-100vw';
}
export function mostrartelaAtt(){
    telaCad.style.right = '0';
}  

export function recolheDadosAtt(){
    let nome = document.getElementById("nomeAtt");
    let descricao = document.getElementById("descricaoAtt");
    let id = document.getElementById("idAtt");

    atualizarCartao(nome.value, descricao.value, id.value);
    escondetelaAtt();
}

nome.value = '';
descricao.value = '';
id.value = '';