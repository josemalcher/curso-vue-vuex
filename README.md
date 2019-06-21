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
        <p :style="{backgroundColor: color}" ></p>
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

