export default {
    name: "DolarHoje",
    data(){
        return{
            valorDolar: 0,
        }
    },
    template:
        `<p>Dollar/Real: {{valorDolar}}</p>`
    ,
    methods: {
        puxarDola(){
            fetch("https://api.exchangeratesapi.io/latest?base=USD")
                .then(r => r.json())
                .then(r => {
                    this.valorDolar = r.rates.BRL
                })
        }
    },
    created(){
        this.puxarDola()
    }

}