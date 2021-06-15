import BotaoContador from "./BotaoContador.js";

export default {
    name: "MenuPrincipal",
    template: `
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <botao-contador></botao-contador>
        </ul>
    `,
    components: {
        BotaoContador
    }
}