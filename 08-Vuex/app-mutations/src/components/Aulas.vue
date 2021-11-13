<template>
  <div>
    <h1>Aulas</h1>
    <ul>
      <li v-for="aula in aulas" :key="aula.nome">
        <p>{{ aula.nome }} - {{ aula.duracao }} |
          <button @click="COMPLETAR_AULA(aula)">Aula Assistida</button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'Aulas',
  data () {
    return {
      aulas: [
        {
          nome: 'HTML e CSS',
          duracao: 15
        },
        {
          nome: 'JavaScript',
          duracao: 30
        },
        {
          nome: 'UX Design',
          duracao: 20
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['COMPLETAR_AULA']),
    completarAula (aula) {
      // this.$store.commit('COMPLETAR_AULA', aula)
      // this.COMPLETAR_AULA(aula)
    }
  }
}
</script>

<style scoped>

</style>
