<template>
<div>
  <h2>Ações</h2>
  <router-link to="/acoes/aapl">Apple</router-link>
  <router-link to="/acoes/fb">Facebook</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: "Acoes",

}
</script>

<style scoped>

</style>