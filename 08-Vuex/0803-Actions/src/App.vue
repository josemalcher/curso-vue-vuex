<template>
  <div id="app">
    <Aluno/>
    <Curso/>
    <hr>
    <ul>
      <li v-for="foto in $store.state.photos" :key="foto.id">
        <p>{{foto.title}}</p>
        <img :src="foto.thumbnailUrl" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import Aluno from './components/Aluno'
import Curso from './components/Curso'

export default {
  components: { Curso, Aluno },
  created () {
    this.$store.dispatch('carregarPhotos')
  }
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
