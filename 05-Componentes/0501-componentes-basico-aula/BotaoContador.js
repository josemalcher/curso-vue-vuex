/*
const BotaoContadorMod = {
    name: "BotaoCotnador",
    template: `<button>Contador</button>`

}

export default BotaoContadorMod;
*/
export default {
    name: "BotaoCotnador",
    data() {
        return {
            total: 0,
        }
    },
    template: `<button @click="total++">Contador Module {{ total }}</button>`

}