<template>
  <div>

    <div v-if="loading">
      <p>Loading....</p>
    </div>
    <div v-else>
      <p>Ação: {{ acaosimbolo }}</p>
      <div>{{ acao }}</div>
    </div>


  </div>
</template>

<script>
export default {
  name: "AcoesDados",
  props: ["acaosimbolo"],
  data() {
    return {
      loading: true,
      acao: null
    }
  },
  methods: {
    puxarAcao() {
      this.loading = true;
      this.acao = null;
      // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
      var url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.acaosimbolo}&interval=5min&apikey=PR2CM9XYLOA6MR81`
      fetch(url)
          .then(r => r.json())
          .then(r => {
            this.acao = r;
            this.loading = false
          });
    }
  },
  created() {
    this.puxarAcao()
  },
  watch: {
    $route: "puxarAcao"
  }
  /*  beforeRouteUpdate(to, from, next){
      this.puxarAcao(to.params.acaosimbolo);
      next()
    }*/

}
</script>

<style scoped>

</style>