export default {
    name: "DolarHoje",
    data() {
        return {
            valorDolar: 0,
        }
    },
    template: `<p>Valor dolar/real: {{valorDolar}}</p>`,
    methods: {
        puxarDolar() {
            fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
                .then(r => r.json())
                .then(r => {
                    this.valorDolar = r.USDBRL.high;
                })
        }
    },
    created() {
        this.puxarDolar();
    }
}