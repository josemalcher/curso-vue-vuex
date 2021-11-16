<template>
  <div id="app">
    <Aluno/>
    <Curso/>
    <hr>
    <ul>
      <li v-for="livro in $store.state.livros" :key="livro.nome">
        {{ livro.nome }}
      </li>
    </ul>
    <p>Livros não lidos:</p>
    <ul>
      <li v-for="livro in $store.getters.livrosLidos(false)" :key="livro.nome">
        {{ livro.nome }}
      </li>
    </ul>
    <hr>
    <ul>
      <li v-for="foto in $store.state.title" :key="foto.id">
        <p>{{ foto.title }}</p>
        <img :src="foto.thumbnailUrl" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import Aluno from './components/Aluno'
import Curso from './components/Curso'
import { mapGetters } from 'vuex'

export default {
  components: { Curso, Aluno },
  created () {
    this.$store.dispatch('carregarPhotos')
  },
  computed: {
    ...mapGetters(['livrosLidos'])
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
