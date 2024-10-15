import { criarCartoes } from "./cartoes.js";
import { escondetelaAtt } from "./telaatt.js";
import { recolheDadosAtt } from "./telacad.js"; 
import { escondetelaCad} from "./telacad.js";
import { recolheDadosAtt } from "../../services/telaatt.js";

window.escondetelaAtt = escondetelaAtt;
window.recolheDadosAtt = recolheDadosAtt;
window.escondetelaCad = escondetelaCad;
window.recolhedadosCad = recolhedadosCad;


document.addEventListener("DOMContentLoaded",()=>{
    criarCartoes();
});