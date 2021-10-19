<template>
  <div id="app">
    <h2>LOGO</h2>
    <nav>
      <router-link to="home">Home</router-link> |
      <router-link to="cursos">Cursos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
