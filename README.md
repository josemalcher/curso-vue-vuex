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



- 0202 Data
- 0203 Methods
- 0204 v-bind
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

