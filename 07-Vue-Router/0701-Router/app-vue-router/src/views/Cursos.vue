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
  methods: {
    puxarDados() {
      console.log("Puxei a API...");
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.puxarDados()
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarDados()
    next();
  },
  beforeRouteLeave(to, from, next) {
    const confirmar = confirm("Voce deseja sair mesmo?");
    if(confirmar){
      next();
    }
  }
};
</script>

<style scoped>

</style>