import DolarHoje from "./DolarHoje.js";

export default {
    name: "AcaoHoje",
    components: {
        DolarHoje
    },
    data() {
        return {
            valorMercado: 0
        }
    },
    template: `
        <div>
            <p>Valor de Mercado: {{valorMercado}}</p>
            <dolar-hoje></dolar-hoje>
        </div>
    `,
    methods: {
        // API FORA DO AR
        puxaAcao() {
            this.valorMercado = 20000
        }
    },
    created() {
        this.puxaAcao();
    }
}