export default {
    name: "ImagemDog",
    data() {
        return {
            dogDeHoje: "",
        }
    },
    template: `        
        <div>
            <img style="height: 350px" :src="dogDeHoje">
        </div>
`,
    methods: {
        puxarDog(){
            fetch("https://dog.ceo/api/breeds/image/random")
                .then(r => r.json())
                .then(r => {
                    console.log(r);
                    if (r.status === 'success') {
                        this.dogDeHoje = r.message;
                    }
                })
        }
    },
    created(){
        this.puxarDog();
    }

}