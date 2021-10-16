<template>
  <div class="modal">
    <slot name="header" :logo="logo"></slot>
    <h1>Data Nome: {{user.nome}}</h1>
    <slot :user="user"></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data(){
    return{
      user: {
        nome: "José"
      },
      logo: 'Tecno'
    }
  }
}
</script>

<style scoped>

</style>