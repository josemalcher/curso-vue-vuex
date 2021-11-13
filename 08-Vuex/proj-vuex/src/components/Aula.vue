<template>
  <div>
    <h1>Aula</h1>
    <p>Usuário da Aula: {{ user }}</p>
    <p>Total de Aulas Assistidas {{ aulasCompletas }}</p>
    <button @click="mostrarNoConsole">Mostrar usuário Console</button>
    <button @click="COMPLETAR_AULA">Aula Assistirda </button>
    <button @click="mudarNomeUsuario">Mudar Nome Usuário</button>
    <input type="text" v-model="novoUser">
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "Aula",
  computed: {
    ...mapState(['user', 'aulasCompletas']),
    nomeMaiusculo() {
      return this.nome.toString();
    }
  },
  data() {
    return {
      totalAulas: 25,
      novoUser: ''
    }
  },
  methods: {
    ...mapMutations(['CHANGE_USER', 'COMPLETAR_AULA']),
    mostrarNoConsole() {
      //console.log(this.$store.state.user)
      console.log(this.user)
      console.log(this.aulasCompletas)
    },
    mudarNomeUsuario() {
      // this.$store.commit('changeUser', this.novoUser)
      this.CHANGE_USER({
        user: this.novoUser,
        totalAulas: this.totalAulas
      })
    },
    // aulaAssistida() {
    //   this.$store.commit('completarAula')
    // }
  }
}
</script>

<style scoped>

</style>
