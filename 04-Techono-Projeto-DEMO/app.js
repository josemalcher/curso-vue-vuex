const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false,
    carrinho: [],
    carrinhoAtivo: false,
    mensagemAlerta: "Mensagem",
    alertaAtivo: false,
  },
  filters: {
    numberToPrice(valor) {
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }
  },
  computed: {
    carrinhoTotal() {
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
    fetchProduto(id) {
      fetch(`./api/produtos/${id}/dados.json`)
        .then(r => r.json())
        .then(r => {
          this.produto = r;
        })
    },
    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    clickForaModal({ currentTarget, target }) {
      if (currentTarget === target) this.produto = false;
    },
    clickForaCarrinho({ currentTarget, target }) {
      if (currentTarget === target) this.carrinhoAtivo = false;
    },
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({ id, nome, preco });
      this.alerta(`${nome} adicionado ao carrinho.`);
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500)
    },
    checarLocalStorage() {
      if (window.localStorage.carrinho)
        this.carrinho = JSON.parse(window.localStorage.carrinho);
    },
    compararEstoque() {
      const items = this.carrinho.filter(({ id }) => id === this.produto.id)
      this.produto.estoque -= items.length;
    },
    router() {
      const hash = document.location.hash;
      if (hash)
        this.fetchProduto(hash.replace("#", ""));
    }
  },
  watch: {
    produto(value) {
      document.title = this.produto.nome || "Techno";
      const hash = this.produto.id || "";
      history.pushState(null, null, "#" + hash);
      if (value) {
        this.compararEstoque();
      }
    },
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
  },
  created() {
    this.fetchProdutos();
    this.router();
    this.checarLocalStorage();
  }
});