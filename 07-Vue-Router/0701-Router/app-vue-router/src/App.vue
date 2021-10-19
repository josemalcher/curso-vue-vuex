<template>
  <div id="app">
    <h2>LOGO</h2>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/cursos">Cursos</router-link>
<!--      <router-link to="/cursos/php">Curso PHP</router-link>-->
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
  border: 4px solid;
  margin: 20px;
  padding: 20px;
}

nav {
  padding: 20px 0;
}

a {
  padding: 10px;
}

.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}
</style>
