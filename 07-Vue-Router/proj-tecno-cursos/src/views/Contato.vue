<template>
  <div class="contato">
    <div v-if="loading">
      <PageLoading />
    </div>
    <div v-if="api">
      <h1>Contato</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>
<script>
import fetchData from '@/mixins/fetchData.js'
import PageLoading from '../components/PageLoading'

export default {
  name: 'Contato',
  components: { PageLoading },
  mixins: [fetchData],
  created () {
    this.fetchData('/contato')
  }

}
</script>
