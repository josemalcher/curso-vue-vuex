<template>
  <div id="app">
    <Aluno/>
    <Curso/>
  </div>
</template>
<script>
import Aluno from './components/Aluno'
import Curso from './components/Curso'

export default {
  components: { Curso, Aluno }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
