<template>
  <div>
    <div id="app">{{mensagem}}</div>
    <HeaderPrincipal/>
  </div>
</template>

<script>
//import HeaderPrincipal from "./components/HeaderPrincipal.vue";

export default {
  components: {
    //HeaderPrincipal
  },
  data() {
    return {
      mensagem: "Essa é uma mensagem"
    };
  }
};
</script>

<style>
</style>
