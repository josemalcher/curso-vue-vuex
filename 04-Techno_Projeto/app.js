const vm = new Vue({
    el: "#app",
    data: {
        item: false,
        carrinho: [],
        produtos: [],
        mensagemAlerta: "Produto Adicionado",
        alertaAtivo: false
    },
    computed: {
        carrinhototal() {
            let total = 0;
            if (this.carrinho.length) {
                this.carrinho.forEach(item => {
                    total += item.preco;
                });
            }
            return total;
        }
    },
    methods: {
        fetchProdutos() {
            fetch("./api/produtos.json")
                .then(r => r.json())
                .then(r => {
                    this.produtos = r;
                })
        },
        // Em substuião dos filters
        formatPreco(valor) {
            return valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
        },
        fetchItem(id) {
            fetch(`./api/produtos/${id}/dados.json`)
                .then(r => r.json())
                .then(r => {
                    this.item = r
                })
        },
        abrirModal(id) {
            this.fetchItem(id);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        },
        fecharModal({target, currentTarget}) {
            if (target === currentTarget) this.item = false;
        },
        adicionarItem() {
            this.item.estoque--;
            //desestruturando
            const {id, nome, preco} = this.item;
            this.carrinho.push({id, nome, preco});
            this.alerta(`${nome} adicionado no carrinho.`);
        },
        removerItem(index) {
            this.carrinho.splice(index, 1);
        },

        checarLocalStorage() {
            if (window.localStorage.carrinho) {
                this.carrinho = JSON.parse(window.localStorage.carrinho);
            }
        },
        alerta(mensagem) {
            this.mensagemAlerta = mensagem;
            this.alertaAtivo = true;
            setTimeout(() => {
                this.alertaAtivo = false;
            }, 1500);
        },
        router(){
            const hash = document.location.hash;
            if(hash){
                this.fetchItem(hash.replace("#", ""));
            }
        }
    },
    created() {
        this.fetchProdutos();
        this.checarLocalStorage();
        this.router();
    },
    watch: {
        item() {
            document.title = this.item.nome || "Tecno";
            const hash = this.item.id || "";
            history.pushState(null, null, `#${hash}`)
        },
        carrinho() {
            window.localStorage.carrinho = JSON.stringify(this.carrinho);
        }
    },
    filters: {
        /*
        * 01 OCT 2016
        * Com a nova versão do Vue.js a possibilidade de aplicar filtros
        * no v-for deixou de existir. Porém esse recurso sempre trouxe
        * certa confusão e até mesmo perda de performance.
        * FONTE: https://vuejs-brasil.com.br/vue-js-2-filtros-em-listas/
        * */
        // numeroPreco(valor){
        //     return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        // }
    }
});