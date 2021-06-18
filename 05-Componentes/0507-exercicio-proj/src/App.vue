<template>
  <div id="app">
    <ul>
      <li @click="componenteAtivo = 'SobreEmpresa'">Sobre</li>
      <li @click="componenteAtivo = 'ServicosEmpresa'">Serviços</li>
      <li @click="componenteAtivo = 'ContatoEmpresa'">Contato</li>
    </ul>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import SobreEmpresa from "./components/SobreEmpresa.vue";
import ContatoEmpresa from "./components/ContatoEmpresa.vue";
import ServicosEmpresa from "./components/ServicosEmpresa.vue";

export default {
  name: 'App',
  components: {
    SobreEmpresa, ServicosEmpresa, ContatoEmpresa
  },
  data() {
    return {
      componenteAtivo: "SobreEmpresa"
    }
  }
}
</script>

<style>
</style>
