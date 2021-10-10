// const BotaoContador = {
//     name: "BotaoContador",
//     template: `<button>Contador</button>`
// }
//
// export default BotaoContador;

export default {
    name: "BotaoContador",
    data(){
      return{
          total: 0
      }
    },
    template: `<button @click="total++">Contador - {{total}}</button>`
}
