<template>
  <div>
    <div v-if="loading">
      <PageLoading/>
    </div>
    <div v-if="api">
      <h1>Home</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import fetchData from '@/mixins/fetchData.js'
import PageLoading from '@/components/PageLoading'

export default {
  name: 'Home',
  mixins: [fetchData],
  created () {
    this.fetchData('/home')
  },
  components: { PageLoading }
}
</script>
