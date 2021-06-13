# Curso de VUE/VUEX

Restartando projeto Junho/2021

## <a name="indice">Índice</a>

1. [Vue.JS](#parte1)     
2. [Vue para iniciantes](#parte2)     
3. [Directivas e Hooks](#parte3)     
4. [Techno Projeto](#parte4)     
5. [Componentes](#parte5)     
6. [Animações](#parte6)     
7. [Vue Router](#parte7)     
8. [Vuex](#parte8)     
9. [Projeto Final](#parte9)     
10. [Considerações Finais](#parte10)     
---

## <a name="parte1">Vue.JS</a>

- [01-Vue-JS/0104-instalacao-do-vuejs.html](01-Vue-JS/0104-instalacao-do-vuejs.html)

```vue

<div id="app">
    {{nome}}, {{idade}}, {{faculdade.curso}}
</div>
<script>
    /*    options = {
            el: "#app",
            data: {
                nome: "José",
                idade: 35,
                faculdade: {
                    possui: "sim",
                    curso: "Analista de sistemas"
                }
            }
        }*/

    const vm = new Vue(
        {
            el: "#app",
            data: {
                nome: "José",
                idade: 35,
                faculdade: {
                    possui: "sim",
                    curso: "Analista de sistemas"
                }
            }
        }
    );
    console.log(vm);
</script>

```

- [01-Vue-JS/0105-reatividade-e-virtual-dom.html](01-Vue-JS/0105-reatividade-e-virtual-dom.html)

```vue

<div id="comercio">
    <p>Bermudas - R$ <span>{{preco}}</span></p>
    <button @click="total++">Adicionar</button>
    <button @click="total--">Remover</button>
    <span>{{total}}</span>
    <p>Total: <span>{{preco * total}}</span></p>
</div>

<div>
    <p>Camisas - R$ <span class="preco"></span></p>
    <button class="adicionar">Adicionar</button>
    <button class="remover">Remover</button>
    <span class="total"></span>
    <p>Total: <span class="precoTotal"></span></p>
</div>

<script>
    const vm = new Vue({
        el: "#comercio",
        data: {
            preco: 69,
            total: 0
        }
    });

    const dados = {
        preco: 49,
        total: 0
    }

    const preco = document.querySelector(".preco");
    const total = document.querySelector(".total");
    const precoTotal = document.querySelector(".precoTotal");
    const adicionar = document.querySelector(".adicionar");
    const remover = document.querySelector(".remover");

    preco.innerText = dados.preco;
    total.innerText = dados.total;
    precoTotal.innerText = dados.preco * dados.total;

    function incrementar() {
        dados.total++;
        atualizarUI();
    }

    function diminuir() {
        dados.total--;
        atualizarUI();
    }

    function atualizarUI() {
        total.innerText = dados.total;
        precoTotal.innerText = dados.total * dados.preco;
    }

    adicionar.addEventListener("click", incrementar);
    remover.addEventListener("click", diminuir);
</script>

```

- [01-Vue-JS/0106-template-e-diretivas.html](01-Vue-JS/0106-template-e-diretivas.html)

```vue

<div id="app">
    <h1>{{titulo}}</h1>
    <div v-show="comprou" :style="{background: cor}">
        <p>{{conteudo}}</p>
        <p>{{lado * lado - lado / 100}}</p>
        <p>{{comprou ? 'Sim ele Comprou' : 'Não comprou, compre aqui'}}</p>
        <input v-model="cor" type="color">
        {{cor}}
    </div>
    <a :href="comprou ? href : ''">{{href}}</a>
</div>
<script>
    new Vue({
        el: "#app",
        data: {
            titulo: "Curso de JavaScript",
            conteudo: "Esse é o conteúdo",
            lado: 5,
            comprou: true,
            href: "https://www.josemalcher.net",
            cor: "#333"
        }
    })
</script>

```

[Voltar ao Índice](#indice)

---


## <a name="parte2"> Vue para iniciantes</a>

- [02-Vue-para-iniciantes/0201-instancia-aula.html](02-Vue-para-iniciantes/0201-instancia-aula.html)
- [02-Vue-para-iniciantes/0201-instancia-exerc.html](02-Vue-para-iniciantes/0201-instancia-exerc.html)

```vue
<div id="app">
    {{nomeProduto}}
</div>
<script src="../lib/vue.js"></script>
<script>
    function VueClone(options) {
        this.options = options;
        this.$el = document.querySelector(options.el);
        this.data = options.data;
    }

    const vmClone = new VueClone({
        el: "#app",
        data: {
            nome: "Martelo",
        }
    });
    console.log(vmClone);

    const vm = new Vue({
        el: "#app",
        data: {
            instrumento: "Violão",
            cor: "Vermelho"
        },
        computed: {
            nomeProduto() {
                setTimeout(() => {
                    console.log('This do timeout:', this.instrumento);
                }, 1000)
                return this.instrumento + ' ' +  this.cor;
            }
        }
    });
    console.log(vm);

</script>
```

- [02-Vue-para-iniciantes/0202-data-aula.html](02-Vue-para-iniciantes/0202-data-aula.html)
- [02-Vue-para-iniciantes/0202-data-exerc.html](02-Vue-para-iniciantes/0202-data-exerc.html)

```vue
<div id="app">
    {{logado}}
</div>
<script src="../lib/vue.js"></script>
<script>
    const vm = new Vue({
        el: "#app",
        data: {
            logado: ""
        }
    })

    setTimeout(() => {
        vm.logado = "Sim"
    }, 1000);
</script>
```

- [02-Vue-para-iniciantes/0203-methods-aula.html](02-Vue-para-iniciantes/0203-methods-aula.html)
- [02-Vue-para-iniciantes/0203-methods-exerc.html](02-Vue-para-iniciantes/0203-methods-exerc.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue.js</title>
</head>
<body>
<div id="app">
    {{total}}
    <button @click="incrementar">Incrementar</button>
    <button @click="diminuir">Diminuir</button>
    <p>{{instrumento}}</p>
    <button @click="mudarNome('Violão')">Violão</button>
    <button @click="mudarNome('Guitarra')">Guittara</button>
    <button @click="verEvento">Evento</button>
</div>
<script src="../lib/vue.js"></script>
<script>
    const vm = new Vue({
        el: "#app",
        data: {
            total: 0,
            instrumento: ""
        },
        methods: {
            incrementar() {
                this.total++
                this.teste();
            },
            diminuir() {
                this.total--
                this.teste();
            },
            mudarNome(instrumento) {
                this.instrumento = instrumento;
            },
            verEvento(event) {
                console.log(event)
            },
            teste() {
                console.log("Método ativado")
            }
        }
    })
</script>
</body>
</html>
```


[Voltar ao Índice](#indice)

---


## <a name="parte3"> Directivas e Hooks</a>



[Voltar ao Índice](#indice)

---


## <a name="parte4"> Techno Projeto</a>



[Voltar ao Índice](#indice)

---


## <a name="parte5"> Componentes</a>



[Voltar ao Índice](#indice)

---


## <a name="parte6"> Animações</a>



[Voltar ao Índice](#indice)

---


## <a name="parte7"> Vue Router</a>



[Voltar ao Índice](#indice)

---


## <a name="parte8"> Vuex</a>



[Voltar ao Índice](#indice)

---


## <a name="parte9"> Projeto Final</a>



[Voltar ao Índice](#indice)

---


## <a name="parte10"> Considerações Finais</a>



[Voltar ao Índice](#indice)

---

