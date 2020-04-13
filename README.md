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
            conteudo: "Esse curso é bom",
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
            conteudo: "Esse curso é bom",
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

  - Outros eventos: podemos adicionar diversos eventos como @keyup @mouseenter, @change e mais
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
        <div v-text="fruta"> Custa R$ 100,00 </div><!-- Não renderiza "Custa R$" -->
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

      você possui o nome e sobrenome do usuário em data,
      crie uma propriedade computed que retorne o nome completo

      Utilize a reat API para puxar as capitais dos paises.
      Use um campo Select, onde o usuário pode selecionar o país.
      http://restcountries.eu/rest/v2/all

      com uma junção watch, mude a capital de acordo com o país selecionado

      ex de campo select

      <select name="paises" id="paises" v-model="selecionado">
        <option v-for="pais in paises" :value="pais.name">
          {{pais.nome}}
        </option> 
      </select>


     -->

    <div id="app">
      {{nomeCompleto}}
    </div>
    <br />

    <div id="app2">
      <button @click="carregaPaises">Carregar Paises</button>
      <select name="paises" id="paises" v-model="paisSelecionado">
        <option v-for="pais in paises" :value="pais.name">
          {{pais.name}}
        </option> 
      </select>
      <br>
      <p>{{capital.capital}}</p>
    </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          nome: "José",
          sobrenome: "Stélio"
        },
        computed: {
          nomeCompleto() {
            return this.nome + " " + this.sobrenome;
          }
        }
      });

      const vm2 = new Vue({
        el: "#app2",
        data: {
          paises: {},
          paisSelecionado: "",
          capital: ""
        },
        methods: {
          carregaPaises() {
            fetch("http://restcountries.eu/rest/v2/all")
              .then(r => r.json())
              .then(r => {
                this.paises = r;
              });
          }
        },
        watch: {
          paisSelecionado(valor){
            this.capital = this.paises.find((pais)=> pais.name === valor)
          }
        },
      });
    </script>
  </body>
</html>

```


[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Directivas e Hooks</a>

- 0301 Arguments e Modifiers
  - https://br.vuejs.org/v2/api/index.html

![](imgs/argumentos-modifiers.png)


- 0302 Class e Style 1
  
  - :class - Manipulação de classes é comum quando desejamos criar efeitos com JavaScript. Por isso o vue.js trata a diretiva v-bind:class ou :class de forma diferente

```vue
<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <title>03 Diretivas e Hooks</title>
    <script src="vue.js"></script>
    <style>
        .azul{
            color: blue;
        }
    </style>
</head>
<body>
 <h1>03 Diretivas e Hooks</h1>
 <hr>

<div id="app">
    <p :class="cor">Texto AZUL</p>
</div>

<script>
    const vm = new Vue({
        el:"#app",
        data: {
            cor:"azul"
        }
    });
</script>
</body>
</html>
```

  - :class e objetos - Podemos passar objetos no :class. a propriedade que tiver valor "true" será adicionada como classe.

```vue
    <style>
        .azul{
            color: blue;
        }
        .verde{
            color: green;
        }
        .ativo{
            background-color: brown;
        }
    </style>


<div id="app2">
    <p :class="cor">Texto AZUL</p>
    <p :class="{ativo: estaAtivo, cor:possuiCor }">Texto AZUL</p>
    <button @click="estaAtivo = !estaAtivo" > Ativar/Desativar </button>
</div>

<script>
    const vm2 = new Vue({
        el:"#app2",
        data: {
            cor:"azul",
            estaAtivo: false,
            possuiCor: false,
        }
    });
</script>

```

  - :class e array - Array's devem ser utilizadas quando precisamos passar mais de uma classe.

```vue

<div id="app3">
    <p :class="[fundo, cor]">TEXTO ATIVO</p>
</div>

<script>
    const vm3 = new Vue({
        el:"#app3",
        data:{
            fundo: "ativo",
            cor: "azul"
        }
    });
</script>
```

  - :style - é possível passar um objeto com os estolos, quse como fazemos  com CSS direto. Utilizar camelCase, ao invés de font-size use fontSiza, até dá para usar font-size mas teria que ser antes das aspas.

```vue

<div id="app4">
    <p :style="{background: bgColor, color: textColor, fontSize: tamanho +  'px'}">Texto ATIVO</p>
    <button @click="tamanho++">Aumentar</button>
</div>

<script>
    
    const vm4 = new Vue({
        el: "#app4",
        data:{
            bgColor: "tomato",
            textColor: "#FFF",
            tamanho: 20
        }
    });
</script>

```

  - :style e objetos - O objeto não precisa ser escrito diretamente no style.

```vue

<div id="app5">
    <p :style="estiloBotao">TEXTO - Style e Objetos</p>
    <p :style="estiloParagrafo">TEXTO - Style e Objetos</p>
</div>

<script>
    const vm5 = new Vue({
        el:"#app5",
        data:{
            estiloBotao: {
                background: "tomato",
                color: "#FFF",
                fontSize:"10px"
            }
        },
        computed: {
            estiloParagrafo(){
                const tamanho = Math.random() * 20;
                return {
                    fontSize: tamanho + 'px',
                }
            }
        },
    });
</script>
```

- 0302 Class e Style 2
  - \03-Diretivas_e_Hooks\0302-Class_e_Style_2-exerc.html

```vue
<body>
<!-- 

    Crie um botão que troque a orientação da lista, ou seja, ao invés de 4 colunas, 
    uma unica coluna de 4 linhasbundleRenderer.renderToStream
    
     O botão será responsável por trocar para lista e também responsável por reverter esse processo.
     Utilize adição/remoção de classe para atingir este efeitobundleRenderer.renderToStream

     A classe clumn já está criad, basta utilizar.

 -->
<h2>03 Diretivas e Hooks</h2>
<hr>

<div id="app">
    <button @click="colunaAtiva = !colunaAtiva" >Mudar Coluna</button>
    <ul :class="{column: colunaAtiva}" @click="geraCor">
        <li :style="{background: bgColor}">Sobre</li>
        <li :style="{background: bgColor}">Produtos</li>
        <li :style="{background: bgColor}">Serviços</li>
        <li :style="{background: bgColor}">Contato</li>
    </ul>
</div>


<script>
    const vm = new Vue({
        el:"#app",
        data:{
            colunaAtiva: false,
            bgColor: "",
        },
        methods: {
            geraCor(){
                const color = `hsl(${Math.random() * 360}, 100%, 50% )`;
                this.bgColor = color
            }
        },
    });
</script>

<style>
 ul {
      display: flex;
      flex-wrap: wrap;
      font-family: monospace;
      list-style: none;
      padding: 0px;
      margin: 0px;
    }
    .column {
      flex-direction: column;
    }
    li {
      padding: 20px;
      background: #84e;
      color: white;
      border-radius: 4px;
      margin: 10px;
      flex: 1;
      text-align: center;
    }
</style>
</body>
```

- 0303 v-model 1

  - v-model: é utilizado para tornar reativo o consteúdo de formulários. Chamado de two-way data binding

```vue
<div id="app">
    <input v-model="nome" />
    <textarea v-model="mensagem"></textarea>
    <p>{{nome}}</p>
    <p>{{mensagem}}</p>
</div>

<script>
const vm = new Vue({
    el:"#app",
    data:{
        nome: "",
        mensagem: ""
    }
});
</script>
```

  - Two-way vs One-way: Por padrão todo o conteúdo VUE.js é One-way, isso significa que mudança no JS criam mudanças no DOM. Já no two-way, tanto mudanças no DOM como no JS, mudam o conteúdo.

```vue
<div id="app2">
    <input v-model="texto" />
    <input :value="texto" />
    <p>{{texto}}</p>
</div>

<script>
const vm2 = new Vue({
    el:"#app2",
    data:{
        texto:""
    }
});
</script>
```

  - Checkbox : retorna um valor true ou false.

```vue

<div id="app3">
    <input type="checkbox" v-model="receberEmail" id="receberEmail" />
    <label for="receberEmail">Receber Email</label> <br>
    <input type="checkbox" v-model="termos" id="termos" />
    <label for="termos">Termos e Condições</label>

    <p>Receber Email: {{receberEmail}}</p>
    <p>Leu os Termos: {{termos}}</p>
</div>

<script>
const vm3 = new Vue({
    el:"#app3",
    data:{
        receberEmail: true,
        termos: false
    }
});
</script>
```

  - Radio : Retorna o valor do campo seleciona.

```vue
<div id="app4">
    <input name="cor" type="radio" v-model="cor" id="azul" value="Azul">
    <label for="azul">Azul</label> <br>
    <input name="cor" type="radio" v-model="cor" id="vermelho" value="Vermelho">
    <label for="vermelho">Vermelho</label> <br>
    <p>cor: {{cor}}</p>
</div>

<script>
const vm4 = new Vue({
    el:"#app4",
    data: {
        cor: ""
    }
});
</script>
```

  - Select : é imporatante colocar uma opção inicial desabilitada com o valor vazio, para resolver um bug no IOS.

```vue
<div id="app5">
    <select id="fruta" v-model="fruta">
        <option disabled value="">Selecione uma fruta</option>
        <option value="banana">Banana</option>
        <option value="morango">Morango</option>
        <option value="uva">Uva</option>
    </select>
    <p>FRUTA: {{fruta}}</p>
</div>

<script>
const vm = new Vue({
    el:"#app",
    data:{
        nome: "",
        mensagem: ""
    }
});

const vm2 = new Vue({
    el:"#app2",
    data:{
        texto:""
    }
});

const vm3 = new Vue({
    el:"#app3",
    data:{
        receberEmail: true,
        termos: false
    }
});

const vm4 = new Vue({
    el:"#app4",
    data: {
        cor: ""
    }
});

const vm5 = new Vue({
    el: "#app5",
    data:{
        fruta: ""
    }
});
</script>
```

  - Modifiers : Com o .lazy, a reatividade só acontecendo ao change(quando o usuário muda o campo). O ".number" irá automaticamente transformar o input em número e não string. O ".trim" automaticamente elima espaços em branco.

```vue
<div id="app6">
    <textarea v-model.lazy="mensagem" name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
    <input v-model.number="total" />
    <input v-model.trim="email" />

    <p>Mensagem: {{mensagem}}</p>
    <p>Numero: {{total}}</p>
    <p>Email: {{email}}</p>
</div>

<script>

const vm6 = new Vue({
    el: "#app6",
    data: {
        mensagem: "",
        total: 0,
        email: ""
    }
});
</script>
```

- 0303 v-model 2

```vue
<!DOCTYPE html>
<html lang="pt_BR">
  <head>
    <meta charset="UTF-8" />
    <title>03 Diretivas e Hooks</title>
    <script src="./vue.js"></script>
  </head>
  <body>
    <!-- 

        1 - Crie um criador de botões

        O usuario poderá definir:
        width, height,
        font-size, font-family
        text-align, background,
        color, border-radius,

        As escolhas serão feitas em campos de formulario.
        Cada escolha deverá ser refletida em um elemento (o botão).

        2 - Crie um formulário com, nome, email, telefone e mensagem.
        Ao clicar em enviar, as ifnrmações preenchidas no formulário
        devem aparecer abaixo do mesmo.
        (previna o comportamento padrão do botão enviar)

     -->
    <div id="app">
      <input type="color" v-model="btn.background" />
      <label for="width">Width</label>
      <input id="width" type="text" v-model="btn.width" />
      <label for="height">Height</label>
      <input id="height" type="text" v-model="btn.height" />
      <label for="fontSize">Font Size</label>
      <input id="fontSize" type="text" v-model="btn.fontSize" />
      <label for="fontFamily">Font Family</label>
      <input id="fontFamily" type="text" v-model="btn.fontFamily" />
      {{btn.background}}
      <a :style="btn" href="">Clique Aqui</a>
    </div>
    <br>
    <hr>
    <div id="app2">
        <form>
          <label for="nome">Nome</label>
          <input type="text" name="nome" id="nome" v-model="nome">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email">
          <label for="telefone">Telefone</label>
          <input type="text" name="telefone" id="telefone" v-model="telefone">
          <label for="mensagem">Mensagem</label>
          <textarea name="mensagem" id="mensagem" v-model="mensagem"></textarea>
          <br>
          <input @click.prevent="enviarFormulario" type="submit">
        </form>
        <div>
          <ul>
            <li v-for="(valor, chave) in resultado">
              {{chave}}: {{valor}}
            </li>
          </ul>
        </div>
      </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          btn: {
            background: "#000",
            width: "100px",
            height: "40px",
            fontSize: "20px",
            fontFamily: "monospace"
          }
        }
      });
     
      const vm2 = new Vue({
      el: "#app2",
      data: {
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
        resultado: {}
      },
      methods: {
        enviarFormulario() {
          this.resultado = {
            nome: this.nome,
            email: this.email,
            telefone: this.telefone,
            mensagem: this.mensagem,
          }
        }
      }
    });
    </script>

    <style>
      label {
        display: block;
      }

      a {
        margin-top: 100px;
        display: block;
      }
    </style>
  </body>
</html>

```


- 0304 v-on e Eventos Globais
  
  - v-on:key : podemos utilizar modificadores diretamente no evento, para identificarmos a tecla clicada

```vue

<div id="app">
   <input @keyup="ativar" type="text">
   <input @keyup.enter="ativar" type="text">
   <input @keyup.esc="ativar" type="text">
   <input @keyup.up="ativar" type="text">
</div>

<script>
const vm = new Vue({
    el:"#app",
    data:{

    },
    methods: {
        ativar(event){
            event.currentTarget.style.border = "4px solid blue";
        }
    },
});
</script>
```

  - v-on:click

```vue
<div id="app2">
    <p @click="ativar">CLICK</p>
    <p @click.alt="ativar">CLICK ALT</p>
    <p @click.left="ativar">CLICK ESQUERDO</p>
    <p @click.right="ativar">CLICK DIREITO</p>
    <p @click.middle="ativar">CLICK Meio</p>
</div>

<script>
const vm2 = new Vue({
    el:"#app2",
    data:{

    },
    methods: {
        ativar(event){
            event.currentTarget.style.color = "blue";
        }
    },
});
</script>
```

  - Eventos globais : com o vue.js você não consegue adicionar diretamente eventos ao body utilizando diretivas. Para isso utilize JS normal.

```vue

<div id="app3">
    <p style="position: fixed">{{totalScroll}}</p>
</div>

<script>
const vm3 = new Vue({
    el:"#app3",
    data:{
        totalScroll: 0
    },
    methods:{
        handleScroll(){
            this.totalScroll = window.scrollY;
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
});
</script>
   
<style>
 body{
        height: 2500px;
    }
</style>
```

- 0305 Lifecycle Hooks 1

  - Métodos que são ativados durante o ciclo de um componente vue.js. 
  - https://br.vuejs.org/v2/guide/instance.html

![Ciclo de vida](imgs/lifecycle.png)

  - Created > O "beforeCreate" é o primeiro método ativado, ele é ativado antes mesmo das propriedades de data se tornarem Reativas. Já no "created", é possível ter acesso aos dados reativos.
  "created" é o Hook ideal para iniciarmos requisições fetch.

  - Mounted - O "beforeMount" acontece após o created. Em seguida o hook "mounded" acontece, durante essa fase o virtual dom é criado e podemos ter acesso ao this.$el.
  Ideal para quando queremoso modificar o DOM ou adicionar eventos globais (scroll, keyup e outros)

```vue
<script>
      const vm = new Vue({
        el: "#app",
        data: {
          mensagem: "Mensagem no DATA",
          github : {}
        },
        methods: {
          puxarGithub() {
            fetch("https://api.github.com/users/josemalcher")
              .then(r => r.json())
              .then(resposta => {
                this.github = resposta;
              }); 
          }
        },
        beforeCreate() {
          console.log("BeforeCreated: ", this.mensagem);
          console.log("ANTES da CRIAÇÃO");
        },
        created() {
          console.log("Created: ", this.mensagem);
          console.log("FOI CRIADO");
          this.puxarGithub();
          console.log("ELEMENTO: ", this.$el); // ELement Undefined
        },
        beforeMount() {
          console.log("BeforMounted: ", this.mensagem);
          console.log("ELEMENTO BeforMounted: ", this.$el); // ELemento criado mas não reativo
        },
        mounted() {
            console.log("Mounted: ", this.mensagem);
            console.log("ELEMENTO Mounted: ", this.$el); // ELemento criado e populado
        },
      });
    </script>
```

  - Updated : o "beforeUpdate" acontece sempre que houver uma mudança em um dado reativo. Em seguida o hook "updated" acontece, este após o dom ser modificado.

```vue
  <div id="app2">
        <button @click="contador++">Add - {{contador}}</button>
    </div>

    <script>
        const vm2 = new Vue({
          el:"#app2",
          data:{
              contador: 0
          },
          beforeUpdate() {
              console.log("TESTE");
          },
          updated() {
              console.log("UPDATE OK");
          },
      });
    </script>
```

  - destroyed - O "beforeDestroy acontece antes do componente ser destruido.
  Em seguida o hook "destroyed" acontece, este após o componente ser detruído.
  É utilizado quando dividimos a interface em componentes, como veremos mais adiante.

```vue
  <div id="app3">
        <button @click="contador++">Add - {{contador}}</button>
        <button @click="destruir">Destruir</button>
    </div>

    <script>
      const vm3 = new Vue({
          el:"#app3",
          data:{
              contador: 0
          },
          methods: {
            destruir(){
                this.$destroy();
            }
          },
          beforeUpdate() {
              console.log("TESTE");
          },
          updated() {
              console.log("UPDATE OK");
          },
          beforeDestroy() {
              console.log("Vai DESTRUIR");
          },
          destroyed() {
              console.log("DESTRUIU")
          },
      });
    </script>
```


- 0305 Lifecycle Hooks 2

```vue
<!DOCTYPE html>
<html lang="pt_BR">
  <head>
    <meta charset="UTF-8" />
    <title>03 Diretivas e Hooks</title>
    <script src="./vue.js"></script>
  </head>
  <body>
    <!-- 

<!-- 
  
  Utilize a api do github para
  mostrar todos os seus dados na tela.
  Faça o fetch das informações utilizando
  um dos hooks do vue:

  https://api.github.com/users/origamid (utilize o seu usuário)

  Crie um contador, onde seja possível clicar em
  um botão e adicionar +1 ao número.

  Toda vez que o contador mudar, mude o título da página
  para o total do contador. Utilize um hook para isso
 
-->

    <div id="app">
      <button @click="contador++">Adicionar {{contador}}</button>
      <hr />
      <ul>
        <li v-for="(valor, chave) in github">{{chave}}: {{valor}}</li>
      </ul>
    </div>
    <hr />

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          github: {},
          contador: 0
        },
        methods: {
          puxarGithub() {
            fetch("https://api.github.com/users/josemalcher")
              .then(r => r.json())
              .then(resposta => {
                this.github = resposta;
              });
          }
        },
        updated() {
          document.title = this.contador;
        },
        created() {
          this.puxarGithub();
        }
      });
    </script>

    <style></style>
  </body>
</html>

```

[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Techno Projeto</a>

- 0401 Projeto Introdução
- 0402 Projeto API
- 0403 Lista Produtos
- 0404 Filters

  - 04-Techno_Projeto\index.html

```html
<!doctype html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="vue.js"></script>
<!--    <link href="https://fonts.googleapis.com/css?family=Noto+Serif:400,700&display=swap" rel="stylesheet">-->
    <link rel="stylesheet" href="style.css">
    <title>Proj. Prático - Loja</title>
</head>
<body>
<div id="app">
    <section class="produtos">
        <div v-for="produto in produtos" :key="produto.id" class="produto">
            <img :src="produto.img" :alt="produto.nome" class="produto_img">
            <div class="produto_info">
                <span class="produto_preco">{{formatPreco(produto.preco)}}</span>
                <h2 class="produto_titulo">{{produto.nome}}</h2>
            </div>
        </div>
    </section>
</div>

<script src="app.js"></script>
</body>
</html>
```

  - 04-Techno_Projeto\app.js

```vue
const vm = new Vue({
    el: "#app",
    data: {
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
        }
    },
    created() {
        this.fetchProdutos();
    }
});
```

- 0405 Fetch Produto
- 0406 Modal Produto
- 0407 Estilo Produto
- 0408 Fechar Produto
- 0409 Carrinho

```vue
<script >
const vm = new Vue({
    el: "#app",
    data: {
        item: false,
        carrinho: [],
        produtos: []
    },
    computed:{
        carrinhototal(){
            let total = 0;
            if(this.carrinho.length){
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
            this.carrinho.push({id, nome, preco})
        },
        removerItem(index){
            this.carrinho.splice(index, 1);
        }
    },
    created() {
        this.fetchProdutos();
    }
    ,
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
</script>
```

- 0410 Localstorage Carrinho
- 0411 Alerta
- 0412 Router
- 0413 Estilo Carrinho
- 0414 Controle Estoque
- 0415 Responsivo

[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Componentes</a>

- 0501 Componentes Básico 1
  - Vue.component() - é possível registrar componentes utilizando o método "Vue.component()". 
  Compoenentes podem ser utilizados em uma instância vue. 
  Dois argumentos devem ser utilizados, uma string com o nome e um objeto com as opções.
  
  - Template é a pripriedade que possui o código HTML do componente. Template deve possuir sempre apenas um elemento pai, caso seja um elemento completo, envolva todo ele em uma tag div por exemplo.

```vue
<body>
<div id="app">
    <p>{{mensagem}}</p>
    <botao-contador></botao-contador>
</div>
<script>

    Vue.component("BotaoContador", {
        data() {
            return {
                mensagem: "Mensagem aqui!",
                total: 0,
            };
        },
        template: `<button @click="mostrarConsole">TOTAL:  {{total}}</button>`,
        methods: {
            mostrarConsole(){
                console.log("ATIVOU!!!");
            }
        }
    });

    const vm = new Vue({
        el: "#app",
        data:{
            mensagem: "Mensagem de DATA"
        }
    });
</script>
</body>
```

  - Global vs Local - Componentes globais podem ser utilizados em qualquer instância Vue.js e são registrados com
  Vue.component(). Componentes locais são registrados na propriedade components.
  
 ```vue
<body>
<div id="app2">
    <componente-global></componente-global>
    <componente-local></componente-local>
    <componente-local2></componente-local2>
</div>

<script>
    // ----------- Global vs Local ----------------------------------------------

    Vue.component("ComponenteGlobal",{
        template: `<p>GLOBAL</p>`
    });

    const ComponenteLocal = {
        name:"ComponenteLocal",
        template: `<p>Local</p>`
    };
    const ComponenteLocal2 = {
        name:"ComponenteLocal2",
        data(){
            return{
                contar: 2
            }
        },
        template: `<div>
                    <p>Local 2</p>
                    <p>Local ELementos - DOBRO {{contarDobro}} </p>
                    <p>global dentro do componente: </p><componente-global></componente-global>
                   </div>`, // adicionando componente GLOBAL
        computed:{
            contarDobro(){
                return this.contar * 2;
            }
        }
    };

    // Para adicionar componente LOCAL, como um global,  é necessário registrar
    Vue.component("ComponenteLocal2", ComponenteLocal2);

    const vm2 = new Vue({
        el: "#app2",
        components: {
            //ComponenteLocal: ComponenteLocal
            ComponenteLocal,
            ComponenteLocal2
        }
    });
</script>


</body>
```

- 0501 Componentes Básico 2

  - PascalCase vs Kebab-case - Regras de estilo, sempre utilize PascalCase ou Keb-case para nomear componentes. É importante
  ter consistência no estilo escolhido. Sempre utilize nomes compostos para os componentes, assim você evita conflitos com tags HTML;
  
```vue
<div id="app">
    <componente-local></componente-local>
    <componente-global></componente-global>
</div>
<script>
    const ComponenteLocal = {
        name: "ComponenteLocal",
        template: `<p>Local</p>` 
    };
    
    Vue.component("ComponentGlobal", {
        template: `<p>GLOBAL</p>`
    });
    
    const vm = new Vue({
        el:"#app",
        component:{
            ComponenteLocal
        }
    });

</script>
```  
  - Module Import/Export - É comum Criarmos cada componentes em seu próprio arquivo assim fica mais simples fazer a manutenção

```vue
<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <title>Vue - COmpoenntes</title>
    <script src="vue.js"></script>
</head>
<body>

<div id="app">
    <botao-contador></botao-contador>
    <menu-principal></menu-principal>
</div>

<script type="module">

    import BotaoContador from "./BotaoContador.js";
    import MenuPrincipal from "./MenuPrincipal.js";

    //Vue.component("BotaoContador", BotaoContador); // global
    Vue.component("MenuPrincipal", MenuPrincipal);

    const vm = new Vue({
        el:"#app",
        components: {
            BotaoContador // LOCAL
        }
    });
</script>
</body>
</html>
```

```vue
/*
const BotaoContador = {
    name:"BotaoContador",
    template: `<button>Contador</button>`
};

export default BotaoContador;
*/

export default {
    name: "BotaoContador",
    data(){
        return {total: 0}
    },
    template: `<button @click="total++">Contador {{total}}</button>`
}
```

  - Componentes dentro de Componente - Para acessar um componente dentro de outro componente, 
  é preciso registrar ele Globalmente e no componente


```vue
import BotaoContador from "./BotaoContador.js";

export default {
    name: "MenuPrincipal",
    template: `
                <ul>
                    <li>Home</li>
                    <li>Contado</li>
                    <li><botao-contador></botao-contador></li>
                </ul>
    
    `,
    components:{
        BotaoContador
    }
}
```

  - Entenda a Sintax JS
  
```vue
function component(){
    // codigo da função
}
const OpcoesComponente = {
    template:`<p>Menu 1</p>` 
}
component("MenuPrincipal", OpcoesComponente)
```  


- 0501 Componentes Básico 3

```vue
<!DOCTYPE html>
<html lang="pt_BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="./vue.js"></script>
    <title>Vue.js</title>
</head>

<body>
<!--
  Crie uma tela com 3 diferentes Componentes.

  1 - Mostre o tempo do dia usando a API:
  https://www.metaweather.com/api/location/455825/ (Código do Rio de Janeiro)

  2 - Mostre a relação dolar/real
  https://api.exchangeratesapi.io/latest?base=USD

  3 - Mostre o valor de mercado da Apple (marketCap)
  https://api.iextrading.com/1.0/stock/aapl/quote

  Crie os componentes em arquivos separados e utilize import/export
  O componente 1 deve ser registrado globalmente
  O componente 2 deve ser registrado localmente dentro do componente 3.
  O componente 3 deve ser registrado localmente da instância Vue.js
 -->


<div id="app">
    <tempo-hoje></tempo-hoje>
    <acao-hoje></acao-hoje>
</div>

<script type="module">
    import TempoHoje from "./componentes/TempoHoje.js";
    import AcaoHoje from "./componentes/AcaoIbmHoje.js";


    Vue.component("TempoHoje", TempoHoje);

    const vm = new Vue({
        el: "#app",
        components: {
            AcaoHoje
        }
    })
</script>

</body>
</html>
```

```js
export default {
    name: "TempoHoje",
    data(){
        return {
            temperaturaMaxima: 0,
        }
    },
    template: `<p>RJ, máxima de: {{temperaturaMaxima}}</p>`,
    methods:{
        puxarTempo(){
            fetch("https://www.metaweather.com/api/location/455825/")
                .then(r => r.json())
                .then(r=>{
                    this.temperaturaMaxima = r.consolidated_weather[0].max_temp.toFixed(2);
                })
        }
    },
    created(){
        this.puxarTempo();
    }
}
```

```js
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
```

```js
import DolarHoje from "./DolarHoje.js";

export default {
    name: "AcaoHoje",
    components: {
        DolarHoje
    },
    data() {
        return {
            valorMercado: 0
        }
    },
    template: `
        <div>
            <p>Valor de Mercado: {{valorMercado}}</p>
            <dolar-hoje></dolar-hoje>
        </div>
    `,
    methods: {
        // API FORA DO AR
        puxaAcao() {
            this.valorMercado = 20000
        }
    },
    created() {
        this.puxaAcao();
    }
}
```


- 0502 Props 1
- 0502 Props 2
- 0503 Events
- 0504 Vue CLI
- 0505 Vue Estrutura
- 0506 Slots
- 0507 Dynamic
- 0508 Async

[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Animações</a>

- 0601 Transition 1
- 0601 Transition 2
- 0602 Components 
- 0603 List


[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Vue Router</a>

- 0701 Router
- 0702 Dynamic Route
- 0703 Navigation Guard
- 0704 Transitions
- 0705 Fetch
- 0706 Mais Router
- 0707 JSON Server
- 0708 Projeto Header
- 0709 Mixins
- 0710 Loading
- 0711 Home
- 0712 Contato
- 0713 Cursos
- 0714 Aula 

[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Vuex</a>

- 0801 State
- 0802 Mutations 1
- 0802 Mutations 2
- 0803 Actions
- 0804 Getters
- 0805 Modules 

[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Projeto Final</a>

- 0901 Ranek Início
- 0902 Header e Footer
- 0903 Home
- 0904 Produtos
- 0905 Axios 
- 0906 Busca
- 0907 Produtos Estilo
- 0908 Input Estilo
- 0909 Paginação
- 0910 Paginacao Range
- 0911 Transição
- 0912 Produto Filter
- 0913 Login
- 0914 Vuex Login 
- 0915 Usuário Formulário
- 0916 Vuex Formulário
- 0917 CEP API
- 0918 POST Usuário
- 0919 Usuário Router
- 0920 Usuário Estilo
- 0921 Usuário Produtos
- 0922 Produto Adicionar
- 0923 Produto Deletar
- 0924 Usuário Atualizar
- 0925 Transação
- 0926 Compras e Vendas
- 0927 REST API
- 0928 JWT JSON Web Token
- 0929 Criar e Logar
- 0930 Fotos Upload 
- 0931 Catch Error
- 0932 Navigation Guard
- 0933 Estilo Responsivo
- 0934 API Servidor
- 0935 Vue.js Servidor
- 0936 Title e Mais 

[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Considerações Finais</a>

- 1001 Vue.js

[Voltar ao Índice](#indice)

---
