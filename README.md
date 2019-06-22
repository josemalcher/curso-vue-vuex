# Curso de VUE/VUEX

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

- https://vuejs.org/

```vue
<!doctype html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="vue.js"></script>
    <title>Curso Vue</title>
</head>
<body>

<div id="app">
    {{nome}}, {{idade}}, {{faculdade.possui}} de {{faculdade.curso}}
</div>

<script>
    const vm = new Vue({
        el: "#app",
        data: {
            nome: "José Malcher",
            idade: 34,
            faculdade: {
                possui:"sim",
                curso:"Analista de Sistemas"
            }
        }
    });
    
    vm.nome = "José Junior";

    console.log(vm);

</script>
</body>
</html>
```

- ex de Reatividade : 01-VueJS/exemplo-reatividade.html

```vue
<!doctype html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="vue.js"></script>
    <title>Curso Vue</title>
</head>
<body>

<div id="app">
    <p>Computador - R$<span>{{preco}}</span></p>
    <button @click="total++">Adicionar</button>
    <button @click="total--">Remover</button>
    <span>{{total}}</span>
    <p>Total = R$ <span>{{preco * total}}</span></p>
</div>
<script>
    const vm = new Vue({
        el: "#app",
        data: {
            preco: 1500,
            total: 0
            }
    });
</script>
</body>
</html>
```

- Expressões 

```vue

<div id="app">
    <h1>{{titulo}}</h1>
    <p>{{conteudo}}</p>
    <p>{{lado * lado / 100}}</p>
    <p>{{comprou ? 'POSTIVO' : 'NEGATIVO...'}}</p>
</div>

<script>
    new Vue({
        el: "#app",
        data: {
            titulo: "Curso De JS VUE",
            conteudo: "JS e Vue.js",
            lado: 200,
            comprou: false,
        }
    });

</script>
```

- Template e diretivas

```vue
<!doctype html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="vue.js"></script>
    <title>Curso Vue</title>
</head>
<body>

<div id="app">
    <h1>{{titulo}}</h1>
    <p>{{conteudo}}</p>
    <p>{{lado * lado / 100}}</p>
    <p>{{comprou ? 'POSTIVO' : 'NEGATIVO...'}}</p>
</div>

<div id="cliente">
    <p>Cliente PRO: {{comprou}}</p>
    <div v-if="comprou" :style="{background: cor}">
        <input v-model="cor" type="color"> {{cor}}
        <!--<p v-bind:style="{backgroundColor: color}" ></p>-->
        <p :style="{backgroundColor: cor}" ></p>
        <a :href="comprou ? href : ''">{{href}}</a>
    </div>
</div>

<script>

    new Vue({
        el: "#cliente",
        data: {
            cor: "#444",
            comprou: true,
            href:"https://josemalcher.net"
        }
    });

    new Vue({
        el: "#app",
        data: {
            titulo: "Curso De JS VUE",
            conteudo: "JS e Vue.js",
            lado: 200,
            comprou: false,
        }
    });

</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---


## <a name="parte2"> Vue para iniciantes</a>

- função construtora, Instância e this 

```vue
<div id="app">

<!--    {{instrumento}}-->
    {{nomeProduto}}

</div>

<script>
 /*   function vueClone(options) {
        this.options = options;
        this.el = document.querySelector(options.el);
        this.data = options.data;
    }
    const vm = new vueClone({
        el:"#app",
        data:{
            produto: "Camisa"
        }
    });
    console.log(vueClone());*/

    const vmv = new Vue({
        el:"#app",
        data:{
            instrumento: "Violão",
            cor: "Marrom"
        },
        computed:{
            nomeProduto(){
                //console.log(this.cor);
                return this.instrumento + ' ' + this.cor;
            }
        }


    });


</script>
```

- Prática

```vue
<div id="app1">
    {{ferramenta}}, {{cor}}
</div>
<div id="app2">
    {{instrumento}}, {{cor}}
</div>

<script>
    const vm1 = new Vue({
        el:"#app1",
        data:{
            ferramenta: "Martelo",
            cor: "Marrom"
        },
    });

    const vm2 = new Vue({
        el:"#app2",
        data:{
            instrumento: "Violino",
            cor: vm1.cor,
        },
    });


</script>
```

- A propriedade data é responsável por dar a reatividade aos estados definidos os seus getters e setters.
Ela recebe um objeto ou uma função

```js
<div id="app">
    <h1>{{cor}}</h1>
</div>

<script>
    const vm = new Vue({
        el:"#app",
        data:{
            cor:"vermelho"
        }
    });

</script>
```

- Proxy

Toda propriedade dentro de data, é também representada diretamente no objeto Vue(proxy). Se começar com $ ou _ não é feito proxy para envitar conflito com as propriedades de Vue.


```js
<div id="app2">
    <h1>{{titulo}}</h1>
    <h1>{{preco}}</h1>
    <!-- <h1>{{$data.$preco}}</h1> -->
</div>

<script>
    const vm2 = new Vue({
        el:"#app2",
        data:{
            titulo: "Vue.js completo",
            $preco: 60,
        }
    });
    vm2.$data.titulo; // Vue.js completo
    vm2.titulo; // Vue.js completo
    
    vm2.$data.$preco;  // 60
    vm2.$preco;  // undefined

</script>
```

- Sempre definir

Sempre definir os estados na data, mesmo que ainda não possua o valor. É o registro no data que garante a reatividade.

```js
<div id="app3">
    <p>{{logado}}</p>
</div>

<script>
      const vm3 = new Vue({
        el: "#app3",
        data: {
            logado: ""
        }
    });

    setTimeout(()=>{
        vm3.logado = "SIM, Logado agora"
    }, 2000);

</script>
```

- Diferentes tipos

Qualquer tipo de dado aceito por uma propriedade, pode ser utilizado em data.

```js
<div id="app4">
    <p>{{frutas[0]}}</p>
    <p>{{frutas[1]}}</p>
    <p>{{objeto.item}}</p>
    <p>{{comprou}}</p>
</div>

<script>
    const vm4 = new Vue({
        el:"#app4",
        data:{
            comprou: true,
            total: 49,
            vitalicio: null,
            objeto:{
                item: "Item 1"
            },
            frutas: ["Banana","Melão"]
        }
    });

</script>
```

### Methods

Métodos pode ser criados para serem utilizados na instância e também em diretivas. Lembrando que métodos são funções.

```js
<div id="app">
    <h1>{{total}}</h1>
    <button @click="incrementar">Imcrementar +1</button>
    <button @click="diminuir">Decrementar -1</button>
</div>

<script>
    const vm = new Vue({
        el: "#app",
        data:{
            total: 0
        },
        methods: {
            incrementar(){
                this.total++;
            },
            diminuir(){
                this.total--;
            }

        },  
    })
</script>
```

- Parâmetros e Argumentos

Podemos utilizar parâmetros dentro dos métodos.

```js
<div id="app2">
    <h1>{{comprar}}</h1>
    <button @click="mudarCompra('guitarra')">Guitarra</button>
    <button @click="mudarCompra('violão')">Violão</button>
    <button @click="verEvento">Evento</button>
</div>


<script>
    const vm2 = new Vue({
        el: "#app2",
        data:{
            comprar:"",
        },
        methods: {
            mudarCompra(instrumento){
                this.comprar = instrumento;
            },
            verEvento(event){
                console.log(event);
            }
        },
    });

</script>
```

- Método dentro de Método

O this possui acesso aos métodos também

```js
<div id="app3">
    <p>{{preco}}</p>
    <button @click="adicionarCopom">Adicionar Cupom</button>
    <p>{{alerta}}</p>
</div>

<script>
    const vm3 = new Vue({
        el: "#app3",
        data:{
            preco:100,
            alerta:"",
        },
        methods: {
            adicionarCopom(instrumento){
                this.preco *= 0.9;
                this.alertaCopom();
                this.teste();
            },
            alertaCopom(){
                this.alerta = "Copom Adicionado"
                this.teste();
            },
            teste(){
                console.log("Método ativado")
            }
        },
    });

</script>
```

- Prática:

Utilizando a API: 
https://api.iextrading.com/1.0/stock/aapl/quote

Crie um método que faça o fetch da resposta acima
O método deve ser ativado ao clique no botão Ver o Preço

Coloque a resposta json do feth em uma data e mostre o valor de latestPrice, latestTime e 
o companyName na interface.

```js
<div id="app">
    <p>latest TIme: {{acoes.latestTime}}</p>
    <p>latest Price: {{acoes.latestPrice}}</p>
    <p>latest Name: {{acoes.companyName}}</p>
</div>


<script>
const vm = new Vue({
    el: "#app",
    data{
        acoes: {},
    },
    methods:{
        puxarAcoes(){
            fetch("")
                .then(response => response.json())
                .then(json => {
                    this.acoes = json;
                })
        }
    }
});

</script>
```

- v-bond

O v-bind é uma diretiva que permite a utilização de expressões dentro de atributos html

```js
<div id="app">
    <a v-bind:href="link">Link Google</a>
    <p v-bind:class="cor">Paragrafo</p>
</div>

<script>
    const vm = new Vue({
        el:"#app",
        data: {
            link: "https://www.google.com.br",
            cor: "azul"
        }
    });
</script>
```

- Podemos utilizar os atributos

É possível utilizar os atrivutos normais juntos com as directivas. Se o 
atributo permitir aepnas um valor, o último será utilizado.

```js
<div id="app">
    <a v-bind:href="link" href="http://josemalcher.net">Link Google</a>
    <p v-bind:class="cor" class="p1">Paragrafo</p>
</div>

<script>
    const vm = new Vue({
        el:"#app",
        data: {
            link: "https://www.google.com.br",
            cor: "azul"
        }
    });
</script>
```

- Expressões podem ser utilizados dentro dos valores

```js
<div id="app2">
    <p :class="comprou? 'verde' : 'vermelho'">COMPROU</p>
</div>

<script>
    const vm2 = new Vue({
        el:"#app2",
        data: {
            comprou: false,
        }
    });
</script>
```


- Prática
- 02-Vue-para-iniciantes/pratica-vbind.html


- **v-on**

- O v-on é um diretiva que permite observarmos eventos nas tags; "@"

- Modificacores: Algumas diretivas possuem modificadores. Estes são utilizados através do ".". No caso de eventos, event.preventDefault() pode ser adicionado com o @click.prevent.
  
```js
<div id="app">
        <button @click="contador++">Clique Aqui</button>
        {{contador}}
        <button @click="ativo = !ativo">Toggle</button>
        <p v-if="ativo">Mostrar texto</p>
        {{ativo}}
        <a href="#interno" @click.prevent.once="handleClick">Link Interno</a>
        <input type="text" @keyup.enter="handleClick">
        <p @mousemove="handleMove">Esse é o mouse x: {{mouse.x}}</p>
    </div>

    <script>
        const vm = new Vue({
            el: "#app",
            data: {
                contador: 0,
                ativo: true,
                mouse: ""
            },
            methods: {
                handleClick(event) {
                    console.log(event.key);
                },
                handleMove(event) {
                    this.mouse = event;
                }
            }
        })
    </script> 
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

