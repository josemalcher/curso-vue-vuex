<template>
  <div class="cursos">
    <div v-if="loading">
      <PageLoading/>
    </div>
    <div v-if="api">
      <h1>Cursos</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>
<script>
import fetchData from '@/mixins/fetchData'
import PageLoading from '@/components/PageLoading'

export default {
  name: 'Cursos',
  components: { PageLoading },
  mixins: [fetchData],
  created () {
    this.fetchData('/cursos')
  }
}
</script>
