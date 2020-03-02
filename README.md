# Vue - Router - Vuex - Projeto

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


## <a name="parte1">1 - Vue.JS</a>

#### 0104 Instalação do Vuejs

- vuejs\index.html

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue - Hello word</title>
    <script src="vue.js"></script>
</head>
<body>
    <div id="app">
        {{nome}}, {{idade}}, {{faculdade.possui}}
    </div>
<script>
    const vm = new Vue({
        el:"#app",
        data:{
            nome: "José",
            idade: 35,
            faculdade:{
                possui: "SIM",
                curso: "Design"
            }
        }
    });
</script>

</body>
</html>
```

#### Expressões

```vue
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Vue - Hello word</title>
    <script src="vue.js"></script>
</head>
<body>

<div id="app">
    <p>Área do Quadrado: {{lado * lado}}</p>
    <p>Perímetro quadrado: {{lado * 4}}</p>
    <p>Curso Liberado: {{comprou ? 'Sim' : 'Não'}}</p>
</div>
<script>
    new Vue({
        el: "#app",
        data:{
            titulo: "Curso de JS",
            conteudo: "Esse curso é bom...",
            lado: 5,
            comprou: false,
        }
    });
</script>
</body>
</html>
```

#### Diretivas

```vue
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Vue - Hello word</title>
    <script src="vue.js"></script>
</head>
<body>

<div id="app">
    <h1>{{titulo}}</h1>
    <div v-show="comprou" :style="{background: cor}">
        <p>Área do Quadrado: {{lado * lado}}</p>
        <p>Perímetro quadrado: {{lado * 10}}</p>
        <p>Curso Liberado: {{comprou ? 'Sim' : 'Não'}}</p>
        <input type="cor" v-model="cor">
    </div>
    <a :href="comprou ? href : ''">{{href}}</a>
</div>
<script>
    new Vue({
        el: "#app",
        data: {
            titulo: "Curso de JS",
            conteudo: "Esse curso é bom...",
            lado: 5,
            comprou: true,
            cor: "#333",
            href: "www.josemalcher.net"
        }
    });
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte2">2 - Vue para iniciantes</a>

- 0201 Instância - Aula

```vue
<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
    <script src="vue.js"></script>
</head>
<body>
 <div id="app">
        {{instrumento}} {{cor}}
 </div>
<script>
    function VueClone(option){
        this.option = option
        this.el     = document.querySelector(option.el)
        this.data   = option.data;
    }

    const vmClone = new VueClone({
        el: "#app",
        data:{
            produto: "Camisa"
        }
    });
    console.log(vmClone);

    const vm = new Vue({
        el:"#app",
        data: {
            instrumento: "violão",
            cor: "Vermelho",
        },
        computed: {
            nomeProduto(){
                setTimeout(()=>{
                    console.log('Aqui é o TimeOut: ', this.instrumento);
                },1000)
                return this.instrumento + ' ' + this.cor;
            }
        },
    });
    console.log(vm);
</script>
</body>
</html>
```

- 0201 Instância - Exercício

```vue
<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
    <script src="vue.js"></script>
</head>
<body>

    <div id="app">
        {{nome}}
    </div>
    
    <div id="app1">
        <p>{{ferramenta}} e {{ferramenta_2}}</p>
        
    </div>

    <div id="app2">
        {{instrumento}}
    </div>

<script>
// Crie uma tag com o id app e inicie uma instência de Vue
// Faça o HTML abaixo funcionar com VUE
const vm  = new Vue({
    el:"#app",
    data:{
        nome: "Martelo"
    }
});
const vm1 = new Vue({
    el:"#app1",
    data:{
        ferramenta: "Furadeira",
        ferramenta_2: vm.nome
    }
});
const vm2 = new Vue({
    el:"#app2",
    data:{
        instrumento: "Violão"
    }
});
</script>
</body>
</html>
```


- 0202 Data
  - Data: A propriedade data é responsável por dar reatividade aos estados definindo os seus getters e setters. Ela recebe um objeto ou uma função
  
```vue
<div id="app">
    {{cor}}
</div>

<script>
const vm  = new Vue({
    el:"#app",
    data:{
        cor:"Vermelho"
    }
});
```


  - Proxy: Toda propriedade dentro de data, é também representada diretamente no objeto Vue(proxy). Se começar com $ ou "-" não é feito proxy para evitar conflito com as propriedades de Vue.

```vue
  <div id="app">
    {{cor}}
  </div>
  <div id="app2">
    <p>{{titulo}}</p>
    <p>{{$preco}}</p>
  </div>

<script>
  const vm  = new Vue({
    el:"#app",
    data:{
      cor:"Vermelho",
    }
  });
  const vm2 = new Vue({
    el: "#app2",
    data:{
      titulo: "Vue completo!",
      $preco: 390,
    }
  });
  /* 
  vm2.$data.titulo; // Vue completo
  vm2.titulo; // Vue completo

  vm2.$data.$preco // 59
  vm2.$preco/ // undefined
  */

```

  - Sempre Definir: Sempre defina os estados no data, mesmo que ainda não possua o valor. É o registro no data que garante a reatividade.

```vue
 <div id="app3">
    <h2>{{logado}}</h2>
  </div>

<script>
const vm3 = new Vue({
  el: "#app3",
  data:{
    logado: ""
  }
});
setTimeout(()=>{
  vm3.logado = "SIM"
}, 4000 );
```

  - Diferentes Tipos: Qualquer tipo de dado aceito por uma propriedade, pode ser utilizado em data.

```vue
  <div id="app4">
    <p>{{frutas[0]}}</p>
    <p>{{frutas[1]}}</p>
    <p>{{objeto.item}}</p>
    <p>{{comprou}}</p>
  </div>
  <script>
  
  
  const vm4 = new Vue({
  el:"#app4",
  data: {
    comprou: true,
    tatal: 55,
    vitalicio: null,
    objeto:{
      item: "Item 1"
    },
    frutas:["Banana", "Uva"]
  }
});
</script>
```

- 02-Vue-js_Para_Iniciantes\0202-Data-exerc.html

```vue
  <div id="app">
    <h1>{{empresa}}</h1>
    <p>{{produto}}</p>
  </div>
  <div id="quadrado">
    <p>Lado = {{lado}}</p>
    <p>Perímetro = {{lado * 4}}</p>
    <p>Área = {{lado * lado}}</p>
  </div>

<script>

const vm = new Vue({
  el:"#app",
  data:{
    empresa: "Apple",
    produto:"iphone"
  }
});

const vm2 = new Vue({
  el: "#quadrado",
  data:{
    lado: 30,
  }
});
 
</script>
```


- 0203 Methods
  
  - Mehotdos: Métodos podem ser criados para serm utilizados na instância e também em diretivas. Lembrando que métodos são funções

```vue
<div id="app">
    <p>{{contador}}</p>
      <button @click="incrementar">Incrementar</button>
      <button @click="decrementar">Decrementar</button>
</div>
<script>
const vm = new Vue({
  el:"#app",
  data:{
      contador: 0
  },
    methods:{
        incrementar() {
            this.contador++;
        },
        decrementar () {
            this.contador--;
        }
    }
});
</script>
```

  - Parâmetros e argumentos: podemos passar parâmetros dentro dos métodos.

```vue
  <div id="app2">
      <p>{{compra}}</p>
      <button @click="mudarCompra('Guitarra')">Guitarra</button>
      <button @click="mudarCompra('Violão')">Violão</button>
      <button @click="verEvento">Evento</button>
  </div>

<script>
const vm2 = new Vue({
    el:"#app2",
    data:{
        compra: "",
    },
    methods:{
        mudarCompra(intrumento){
            this.compra = intrumento;
        },verEvento(event){
          console.log(event)
        }

    }
});
</script>

```
  - Método dentro do método: O this possui acesso aos métodos também.
  
```vue
  <div id="app3">
      <p>{{preco}}</p>
      <button @click="adicionarCupom" >Adicionar Copom</button>
      <p>{{alerta}}</p>
  </div>
<script>
const vm3 = new Vue({
    el: "#app3",
    data:{
        preco: 0,
        alerta: " "
    },methods:{
        adicionarCupom(){
            this.preco *= 0.9;
            this.aletaCopom();
        },
        aletaCopom(){
            this.alerta = "Cupom Adicionado";
        }
    }
});
</script>
```

  - Exercício: 

```vue
<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <title>Vue</title>
    <script src="vue.js"></script>
</head>
<body>
<!--
Utilizando a API

Crie um método que faça um fetch da resposta acima
O método deve ser ativado ao clique no botão Ver Preço

Coloque a resposta do JSON do Fetch em uma data e mostre o valor
de lalestPrice, latestTime e o companyName na interface
-->
<div id="app">
    <h2>{{salmos.book.name}}</h2>
    <button @click="puxarSalmos(20)">Salmo</button>
</div>

<script>
    const vm = new Vue({
        el: "#app",
        data() {
            return {
                salmos: {book: {}}
            }
        },
        mounted() {
            this.puxarSalmos(20)
        },
        methods: {
            puxarSalmos(salmo) {
                fetch(`https://bibleapi.co/api/verses/nvi/sl/${salmo}`)
                    .then(response => response.json())
                    .then(json => {
                        this.salmos = json;
                        console.log(this.salmos.verses[0].text);
                    })
            }
        }
    });

</script>
</body>
</html>
```

- 0204 v-bind

  - Ov-bind é uma diretiva que permite a utilização de expressões dentro de atributos html.
  
  - Podemos utilizar os Atributos:  é possivel utilizar os atributos normais junto com as diretivas. Se o atributo permitir apenas um valor, o último será o utilizado.

```vue
<div id="app">
    <a v-bind:href="link">Link do GOogle</a>
    <p :class="cor">Parágrafo</p>
    <p :class="cor" class="ativo">Parágrafo</p>
</div>

<script>

const vm = new Vue({
    el:"#app",
    data:{
        link: "http://google.com",
        cor: "azul"
    }

});
```

  - Expressões em Diretivas: podem ser utilizados dentro dos valores

```vue
   <p :class="comprou ? 'verde' : 'vermelho'">COMPROU</p>
<script>
const vm = new Vue({
    el:"#app",
    data:{
        comprou: true,
    }

});
</script>

```  


- 0205 v-on
- 0206 v-if
- 0207 v-html e v-text
- 0208 v-for 1
- 0208 v-for 2
- 0209 Computed e Watch 1
- 0209 Computed e Watch 2


[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Directivas e Hooks</a>



[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Techno Projeto</a>



[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Componentes</a>



[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Animações</a>



[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Vue Router</a>



[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Vuex</a>



[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Projeto Final</a>



[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Considerações Finais</a>



[Voltar ao Índice](#indice)

---

