<template>
  <div id="app">
    <ModalPrincipal>
      <!--      <template v-slot:header>-->
      <template v-slot:header="{logo}">
        <p>Esse é o header</p>
        <p>Logo: {{ logo }}</p>
      </template>

      <template v-slot:default="{ user }">
        <p>Esse é um teste: Data de Modal = {{user.nome}}</p>

        <button>Enviar!</button>
      </template>

      <template v-slot:footer>
        <p>Esse é o header</p>
      </template>
    </ModalPrincipal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal";

export default {
  name: 'App',
  components: {
    ModalPrincipal
  }
}
</script>

<style>

</style>
