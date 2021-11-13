import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    photos: null
  },
  mutations: {
    COMPLETAR_AULA (state, payload) {
      state.aulasCompletas.push(payload)
    },
    UPDATE_PHOTOS (state, payload) {
      state.photos = payload
    }
  },
  actions: {
    completarAula (context, payload) {
      context.commit('COMPLETAR_AULA', payload)
    },
    carregarPhotos (context) {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson)
          context.commit('UPDATE_PHOTOS', responseJson)
        })
    }
  },
  modules: {}
})
