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
  - é uma diretiva que permite observamos eventos nas tags.

```vue
 <div id="app">
        <!-- <button v-on:click="handleClick">Click aqui</button> -->
        <button @click="handleClick">Click aqui</button>
    </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data:{
          
          },
        methods: {
            handleClick(event){
              console.log(event);
            }

        },
      });
    </script>
```
 
  - não precisa ser necessariamente um método, podemos usar expressões dentro dos eventos.

```vue
 <div id="app2">
        <button @click="ativo = !ativo">Click aqui Segundo Exempli</button>
        <p :class="ativo ? 'verde': 'vermelho'">Texto de teste</p>
        <p v-if="ativo" >Mostra texto!</p>
  </div>
  <script>
  const vm2 = new Vue({
        el: "#app2",
        data:{
                ativo: true,
            },
        });
</script>
```

  - Modificadores: algumas directivas possuem modificadores. Estes são utilizados através do ".". No caso de eventos, event.preventDefault() pode ser adicionar com o elemento @click.prevent

```vue
    <div id="app3">
      <a @click.prevent="scrollSuave" href="#interno">Prevent</a>
      <a @click.once="scrollSuave" href="#interno">ONCE</a>
      <a @click.prevent.once="scrollSuave" href="#interno">Prevent ONCE</a>
    </div>
<script>
  const vm3 = new Vue({
          el:"#app3",
          methods:{
            scrollSuave(){
              //event.preventDefault();
              console.log("Scroll SUAVE");
            }
          }
        });
</script>
```

  - Outros eventos: podemos adicionar diversos eventos como @keyup @mouseenter, @change e mais...
  - 02-Vue-js_Para_Iniciantes\0205-v-on-aula.html


```js
  <div id="app4">
      <br>
      <div @mousemove="handleMousex"> Mouse X: {{mouse.x}}</div>
      <input @keyup="handleClickUp" type="text"><br>
      <!-- Evento dispara quando tem a letra f -->
      <input @keyup.f="handleClickUp" type="text"><label for="">Letra F</label><br>
      <!-- Evento dispara quando tecla Enter -->
      <input @keyup.enter="handleClickUp" type="text"><label for="">Enter</label><br>
    </div>  
    <script>
    const vm4 = new Vue({
          el:"#app4",
          data:{
              mouse: ""
          }, 
          methods:{
            handleClickUp(event){
                console.log(event);
            },
            handleMousex(event){
                this.mouse = event
            }
          }
        });
    </script>
```  

- 0206 v-if
  - é uma diretiva que permite utilizarmos condicionais para mostrar ou não um elemento. Podemos utilizar também o "v-else" que deve vir logo após o if para funcionar.

```vue
     <div id="app">
        <p v-if="logado">Logado</p>
        <p v-if="logado === 1">Logado 1</p>
        <p v-else-if="logado === 2">Logado 2 </p>
        <p v-else="logado">Deslogado</p>
    </div>

    <script>
        const vm = new Vue({
            el: "#app",
            data:{
                logado: 2,
            }
        });
    </script>
```
  - GRUPOS: poremos agrupar um conteúdo com a tag <template>

```vue
<div id="app">
        <template v-if="logado">
            <p>Você está Logado</p>
            <button @click="logado = false">Deslogar</button>
        </template>
        <template  v-else>
            <p>Você não está logado</p>
            <button @click="logado = true">Logar</button>
        </template>
    </div>

    <script>
        const vm = new Vue({
            el: "#app",
            data:{
                logado: true,
            }
        });
    </script>
```

  - v-show vs v-if: o v-if remove o elemento, v-show apenas adiciona o display:none; o v-show é preferido se você for mudar constantemente o estado, por ser mais rápido.

```vue
  <div id="app">
        <p v-show="logado">SHOW LOGADO</p>
        <p v-if="logado">if LOGADO</p>
    </div>

    <script>
        const vm = new Vue({
            el: "#app",
            data:{
                logado: false,
            }
        });
    </script>
```

- Exercício

```vue
<!DOCTYPE html>
<html lang="pt_BR">
  <head>
    <meta charset="UTF-8" />
    <title>Vue</title>
    <script src="vue.js"></script>
  </head>
  <body>
    <!-- 
            Simule a adição de um produto no carrinho
            este produto possui estoque de 7 itens
            (utilize a mesma ideia do contador)

            Ao atingir 7 itens mostre uma mensagem informando 
            não ser possível adicionar mais do que 7 itens

            Remova também o botão de adicionar itens.
       -->
    <div id="app">
      <p>Banana - Estoque = <big>{{estoqueBanana}}</big></p>
      <button v-show="estoqueBanana" @click="adicionarItem">[  +  ]</button>
      <p v-show="estoqueBanana === 0">Não temos mais Bananas no Estoque</p>
      <br><br>
      <button v-show="carrinho" @click="removerItem">[  -  ]</button>
      <p>Carrinho: <big>{{carrinho}}</big></p>
    </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          estoqueBanana: 7,
          carrinho: 0,
        },
        methods: {
            adicionarItem(){
                this.carrinho++;
                this.estoqueBanana--;
            },
            removerItem(){
                this.carrinho--;
                this.estoqueBanana++;
            }
        },
      });
    </script>
  </body>
</html>

```


- 0207 v-html e v-text
  - Renderiza conteúdo html dentro de uma TAG. Modifica o InnerHtml do elemento

```vue
  <div id="app">
        <div v-html="link2"></div>
        <div>{{link}}</div>
    </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
            link: "https://josemalcher.net",
            link2: "<a href='https://josemalcher.net'>Site José Malcher Jr.</a>"
        }
      });
```

  - v-text: Renderiza texto dentro de uma tag.

```vue
    <div id="app2">
        <div v-text="fruta"> Custa R$ 100,00 </div><!-- Não renderiza "Custa R$..." -->
        <div>{{fruta}}</div>
        <div>{{fruta2}}</div>
    </div>

    <script>
      const vm2 = new Vue({
        el: "#app2",
        data: {
            fruta: "Banana",
            fruta2: "<b>Banana</b>"
        }
      });
      </script>
<!-- 
Site José Malcher Jr.
https://josemalcher.net
Banana
Banana
<b>Banana</b>
 -->

```

  - V-once : Renderiza uma única vez o conteúdo e não rorna ele reativo

```vue
    <div id="app3"> 
        <p v-once>Valor inicial: R$ {{total - gasto}}</p>
        <button @click="gasto += 5" > Comprar Banana R$ 5</button>
        <p>Gasto: R$ {{gasto}}</p>
        <p>Saldo: R$ {{total - gasto}}</p>
    </div>

    <script>
      const vm3 = new Vue({
        el: "#app3",
        data: {
            total: 150,
            gasto:0
        }
      });
    </script>
```

  - Exercício

  ```vue
      <!-- 
        Renderize o conteudo, apenas uma vez (não torne o mesmo reativo)
        Lista "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
       -->
       
    <div id="app">
      <div v-html="lista" v-once></div>
    </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          lista: "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>"
        },
      });
    </script>
  ```


- 0208 v-for 1
  - Renderiza uma lista de itens. Assim como o loop, ele irá executar para cada item do array/objeto.

```vue
<div id="app">
        <ul>
            <li v-for="(curso, index) in cursos">{{index}} - {{curso}}</li>
        </ul>
    </div>

    <script>
        const vm = new Vue({
            el:"#app",
            data:{
                cursos: ["html", "css", "PHP", "Wordpress","SASS"]
            }
        });
    </script>
```

  - v-for Objetos

```vue
    <div id="app2">
        <div v-for="(estado, chave) in estados">
            <p>{{chave}} - {{estado.nome}} - {{estado.populacao}}</p>
        </div>
    </div>

    <script>
        const vm2 = new Vue({
            el:"#app2",
            data:{
                estados:{
                    sp:{
                        populacao: "45 milhões",
                        nome: "São Paulo"
                    },
                    pa:{
                        populacao: "2 milhoes",
                        nome: "Pará"
                    }
                }
            }
        });
    </script>
```

  - :key : cria uma identificação unica para o item. Sem o Key, bugs podem 
  ocorrer principalmente em componentes mais complexos

```vue
<div id="app3">
        <div v-for="fruta in frutas" :key="fruta.id">
            <p>{{fruta.id}} - {{fruta.nome}} - {{fruta.cor}}</p>
        </div>
    </div>

    <script>
        const vm3 = new Vue({
            el:"#app3",
            data:{
                frutas: [
                    {
                        id: "banana-1",
                        nome: "Banana",
                        cor: "Amarela",
                    },
                    {
                        id: "melancia-1",
                        nome: "Melancia",
                        cor:"Verde",
                    }
                ]
            }
        });
    </script>
```

  - numero in 10

```vue

    <div id="app4">
        <span v-for="numeto in 5">{{numero}}</span>
    </div>

    <script>

        const vm4 = new Vue({
            el:"#app4",
            data:{
               numero: " - Teste " ,
            }
        });
    </script>
```

  - Reatividade : modificar diretamente o valor de um array, não irá ativar a reatividade o Vue.

```vue
<div id="app5">
        <ul>
            <li v-for="item in lista">{{item}}</li>
        </ul>
        <button @click="removerItem">Remover</button>
        <button @click="mudarItem">Mudar</button>
    </div>

    <script>
        const vm5 = new Vue({
            el:"#app5",
            data:{
               lista: ["Item 1", "Item 2", "Item 3"]
            },
            methods: {
                removerItem(){
                    this.lista.pop(); // Ativa reatividade
                },
                mudarItem(){
                    // Verificar no console VUE
                    this.lista[0] = "Banana"; // não ativa Reatividade
                    
                    // Para executar a modificação:
                    //this.$set(this.lista, 0, "Banana");
                }
            },
        });
    </script>
```

- 0208 v-for 2

- Exercício Cursos

```vue
 <body>
      <!-- 
            Utilizando a API:
            http://viacep.com.br/ws/04538133/json

            Mostre o CEP, logradouro, complemento bairro, localidade, etc

            Use o arquivo json da aula, para listar os recursos e as matérias

       -->
    <div id="app">
        <button @click="puxarCursos">Puxar Cursos</button>
       <ul>
           <div v-for="curso in cursos">
               <h1><a :href="curso.link">{{curso.curso}}</a></h1>
               <ul>
                   <li v-for="{nome, tempo} in curso.aulas">
                        {{tempo}} - {{nome}}
                   </li>
               </ul>
           </div>
       </ul>
    </div>

    <script>
        const vm = new Vue({
            el:"#app",
            data:{
                cursos: {}
            },
            methods: {
                puxarCursos(){
                    fetch("./cursos.json")
                    .then(r => r.json())
                    .then(r => {
                        this.cursos = r;
                    })
                }
            },
        });

     
    </script>
  </body>
```

- Exercício CEP

```vue
<body>
      <!-- 
            Utilizando a API:
            http://viacep.com.br/ws/04538133/json

            Mostre o CEP, logradouro, complemento bairro, localidade, etc

            Use o arquivo json da aula, para listar os recursos e as matérias

       -->
    <div id="app">
        <button @click="puxarCEP">Puxar CEP</button>
       <!-- <div>{{local}}</div> -->
       <ul>
           <li v-for="dado, key in local">
               {{key}}: dado
           </li>
       </ul>
    </div>

    <script>
        const vm = new Vue({
            el:"#app",
            data:{
                local: {}
            },
            methods: {
                puxarCEP(){
                    fetch("http://viacep.com.br/ws/04538133/json")
                    .then(r => r.json())
                    .then(r => {
                        this.local = r
                    })
                }
            },
        });

     
    </script>
  </body>
```


- 0209 Computed e Watch 1

  - Computed: quando precisamos modificar um dado usando o JS, podemos utilizar uma propriedad dentro de computed.

```vue
<body>
    <div id="app">
      <p>{{total}}</p>
    </div>

    <div id="app2">
      <p v-for="carro in carrosAzuis">{{carro.marca}}</p>
    </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          preco: 50,
          desconto: 10
        },
        computed: {
          total() {
            return "R$ " + (this.preco - this.desconto);
          }
        }
      });

      const vm2 = new Vue({
        el: "#app2",
        data: {
          carros: [
            {
              marca: "VW",
              cor: "Azul"
            },
            {
              marca: "Ford",
              cor: "Preto"
            },
            {
              marca: "Renalt",
              cor: "Verde"
            }
          ]
        },
        computed: {
          carrosAzuis() {
            const filtro = this.carros.filter(({ cor }) => cor === "Azul");
            return filtro;
          }
        }
      });
    </script>
  </body>
```

  - Watch: é possível ativar uma função toda vez que um dado reativo é modificado. Para isso usamos uma propriedade dentro do watch.

```vue
    <div id="app3">
      <p>{{contador}}</p>
      <button @click="contador++">Adicionar</button>
    </div>

    <script>
  
      // Watch
      const vm3 = new Vue({
          el: "#app3",
          data:{
              contador: 0
          },
          watch: {
              contador(valorNovo, valorAntigo){
                  console.log(this.contador);
                  console.log(valorNovo);
                  console.log(valorAntigo);
              }
          },
      });
    </script>
  </body>
```

  - Watch assincrono: o watch se direfencia do computed principalmente pela sua capacidade de receber eventos assincronos.

```vue
<body>
   
    <div id="app4">
      <input type="text" placeholder="cep" maxlength="8" v-model="cep" />
      <h1>{{cep}}</h1>
      <ul>
        <li v-for="(valor, chave) in endereco">{{chave}}: {{valor}}</li>
      </ul>
    </div>

    <script>
   // watch assincrono
      const vm4 = new Vue({
        el: "#app4",
        data: {
          cep: "",
          endereco: {}
        },
        watch: {
          cep(valor) {
            if (valor.length === 8) {
              fetch(`https://viacep.com.br/ws/${valor}/json/`)
                .then(r => r.json())
                .then(r => {
                  this.endereco = r;
                });
            }
          }
        }
      });
    </script>
```


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

