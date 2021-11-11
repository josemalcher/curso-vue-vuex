<template>
  <div class="cursos">
    <div v-if="loading">
      <p>Carregando...</p>
    </div>
    <div v-if="api">
      <h1>Cursos</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>
<script>
import fetchData from '../mixins/fetchData'

export default {
  name: 'Cursos',
  mixins: [fetchData],
  created () {
    this.fetchData('/cursos')
  }
}
</script>
