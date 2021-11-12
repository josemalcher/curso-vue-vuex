<template>
  <div>
    <h1>Aula</h1>
    <p>Usuário da Aula: {{user}}</p>
    <p>Total de Aulas Assistidas {{aulasCompletas}}</p>
    <button @click="mostrarNoConsole">Mostrar usuário Console</button>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Aula",
  computed: {
    ...mapState(['user','aulasCompletas']),
    nomeMaiusculo(){
      return this.nome.toString();
    }
  },
  data(){
    return{
      totalAulas: 25,
    }
  },
  methods:{
    mostrarNoConsole(){
      //console.log(this.$store.state.user)
      console.log(this.user)
      console.log(this.aulasCompletas)
    }
  }
}
</script>

<style scoped>

</style>
