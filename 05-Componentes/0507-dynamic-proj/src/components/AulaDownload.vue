<template>
  <div>
    <p>Faça o Dowload dos arquivos</p>
    <button>DOWNLOAD!</button>
  </div>
</template>

<script>
export default {
  name: "AulaDownload",
  created() {
    console.log('Dowload CRIADO');
  },
  destroyed() {
    console.log("DOWLOAD DESTRUIDO!");
  }
}
</script>

<style scoped>

</style>