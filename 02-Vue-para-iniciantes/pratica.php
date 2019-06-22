<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="vue.js"></script>
</head>
<body>

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
</body>
</html>