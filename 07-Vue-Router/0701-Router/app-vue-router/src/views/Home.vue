<template>
  <div>
    <h1 @click="navegaCursos">Página inicial</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    navegaCursos(){
      setTimeout(()=>{
        this.$router.push('acoes')
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
