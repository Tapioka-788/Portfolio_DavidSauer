
import { criarCartoes } from "./cartoes.js";
import { escondeTelaCad } from "./../../services/telacad.js";
import { recolheDados } from "./../../services/telacad.js";
import { escondeTelaAtt } from "./../../services/telaatt.js";
import { recolheDadosAtt } from "./../../services/telaatt.js";

window.escondeTelaCad = escondeTelaCad;
window.recolheDados = recolheDados;
window.escondeTelaAtt = escondeTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;


document.addEventListener("DOMContentLoaded", function(){
    criarCartoes();
});