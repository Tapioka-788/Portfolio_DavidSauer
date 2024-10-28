// Importações das funções necessárias
import { criarCartoes } from "./cartoes.js";
import { escondeTelaCad, recolheDados } from "./../../services/telacad.js";
import { escondeTelaAtt, recolheDadosAtt } from "./../../services/telaatt.js";

// Tornando as funções globais para uso direto no HTML, se necessário
window.escondeTelaCad = escondeTelaCad;
window.recolheDados = recolheDados;
window.escondeTelaAtt = escondeTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;

// Carrega os cartões quando o DOM está totalmente carregado
document.addEventListener("DOMContentLoaded", function(){
    criarCartoes();
});
