<template>
  <div id="app">
    <!--    <component :is="componenteAtivo"></component>
        <AulaDescricao></AulaDescricao>-->

    <button @click="componenteAtivo='AulaDownload'">Download</button>
    <button @click="componenteAtivo='AulaDescricao'">Descrição</button>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import AulaDescricao from "./components/AulaDescricao";
import AulaDownload from "./components/AulaDownload";

export default {
  name: 'App',
  data() {
    return {
      componenteAtivo: "AulaDescricao"
    }
  },
  components: {
    AulaDescricao, AulaDownload
  }
}
</script>

<style>

</style>
