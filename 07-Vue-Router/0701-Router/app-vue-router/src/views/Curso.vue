<template>
  <div>
    <h1>Cursos</h1>
    <router-link :to="{name: 'descricao'}">Descrição</router-link>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Curso",
  props: ["curso"],
  created() {
    console.log("Esse componente foi craido!")
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  computed: {
  },
}
</script>

<style scoped>

</style>