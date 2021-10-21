<template>
  <div>
    <h1>Cursos</h1>
    <router-link :to="{name: 'descricao'}">Descrição</router-link>
    <router-link :to="{name: 'aulas'}">Aulas</router-link>
    <transition mode="out-in" name="topDown">
      <router-view></router-view>
    </transition>
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
.topDown-enter,
.topDown-leave-to {
  transform: translate3d(0, -40px, 0) scale(0.2);
  opacity: 0;
}
.topDown-enter-active,
.topDown-leave-active {
  transition: all 0.3s;
}
</style>