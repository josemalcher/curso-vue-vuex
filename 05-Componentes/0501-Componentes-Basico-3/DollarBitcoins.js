export default {
    name: "DollarBitcoin",
    data() {
        return {
            valor: 0
        }
    },
    template: `<p>Valor do Bitcoin em Dollar = {{valor}} </p>`,
    methods:{
        puxarTempo(){
            fetch("https://www.metaweather.com/api/location/455819/")
                .then( r => r.json())
                .then(r => {
                    this.cidade = r.title
                    this.temperaturaMaxima = r.consolidated_weather[0].max_temp.toFixed(2);
                })
        }
    },
    created(){
        this.puxarTempo();
    }
}