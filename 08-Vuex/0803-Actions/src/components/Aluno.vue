<template>
  <div>
    <h1>Aluno</h1>
    <p>Aulas Assistidas:</p>
    <!--    <small><p>{{$store.state.aulasCompletas}}</p></small>-->
    <small><p>{{ aulasCompletas }}</p></small>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Aluno',
  computed: {
    ...mapState(['aulasCompletas'])
  }
}
</script>

<style scoped>

</style>
