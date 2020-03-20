const vm = new Vue({
    el: "#app",
    data: {
        item: false,
        produtos: []
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
        formatPreco(valor){
          return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        },
        fetchItem(id){
            fetch(`./api/produtos/${id}/dados.json`)
            .then(r => r.json())
            .then(r => {
                this.item = r
            })
        },
        abrirModal(id){
            this.fetchItem(id);
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        },
        fecharModal({ target, currentTarget }) {
            if (target === currentTarget) this.item = false;
          }
    },
    created() {
        this.fetchProdutos();
    }
});