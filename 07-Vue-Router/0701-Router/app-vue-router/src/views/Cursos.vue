<template>
  <div>
    <h1>Cursos</h1>
    <ul>
      <nav>
        <router-link :to="{name: 'curso', params: {curso:'js'}}">JS</router-link>
        <router-link to="/cursos/php">PHP</router-link>
        <router-link to="/cursos/java">Java</router-link>
      </nav>
    </ul>
    <hr>
    <h2>Curso Ativo: {{ curso }}</h2>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Cursos",
  props: ["curso"],
  computed: {
    /*curso() {
      return this.$route.params.curso;
    }*/
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to.params.curso, from);
    next()
  }
}
</script>

<style scoped>

</style>