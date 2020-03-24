import BotaoContador from "./BotaoContador.js";

export default {
    name: "MenuPrincipal",
    template: `
                <ul>
                    <li>Home</li>
                    <li>Contado</li>
                    <li><botao-contador></botao-contador></li>
                </ul>
    
    `,
    components:{
        BotaoContador
    }
}