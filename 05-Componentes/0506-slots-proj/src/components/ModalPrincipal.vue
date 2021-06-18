<template>
  <div class="modal">

    <slot name="header" :logo_url="logo_url"></slot>

    <h1>Esse é o modal Principal</h1>
    <h2>{{user.nome}}</h2>
    <slot :user="user"></slot>


    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data(){
    return {
      logo_url: 'https://josemalcher.net/wp-content/uploads/2021/02/josemalcher.net-logo-redu-3-150x150.png',
      user:{
        nome: 'José Malcher Jr.'
      }
    }
  }
}
</script>

<style scoped>

</style>