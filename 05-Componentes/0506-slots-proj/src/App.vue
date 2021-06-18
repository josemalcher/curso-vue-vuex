<template>
  <div id="app">
    <modal-principal>

      <template #header="{logo_url}">
        <div>
          <h2>Esse é o Header</h2>
          <p>{{logo_url}}</p>
        </div>
      </template>

      <template #default="{user}">
        <p>Esse é um DEFAULT</p>
        <h2>Usuário: {{ user.nome }}</h2>
        <button>Button TEste in default</button>
      </template>

      <template #footer>
        <p>Footer aqui!!!</p>
      </template>

    </modal-principal>
  </div>
</template>
<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";

export default {
  name: 'App',
  components: {
    ModalPrincipal
  }
}
</script>

<style>
</style>
