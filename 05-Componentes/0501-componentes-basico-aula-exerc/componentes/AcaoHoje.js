import DolarHoje from "./DolarHoje.js";

export default {
    name: "AcaoHoje",
    components: {
        DolarHoje
    },
    data() {
        return {
            valorMercado: 0,
        }
    },
    template: `
    <div>
      <p>Valor da EURO/REAL: {{valorMercado}}</p>
      <dolar-hoje></dolar-hoje>
    </div>
  `,
    methods: {
        puxarAcao() {
            fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
                .then(r => r.json())
                .then(r => {
                    console.log(r);
                    this.valorMercado = r.EURBRL.high;
                })
        }
    },
    created() {
        this.puxarAcao();
    }
}