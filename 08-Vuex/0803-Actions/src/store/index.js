import Vue from 'vue'
import Vuex from 'vuex'

import photos from './photos.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    photos
  },
  state: {
    aulasCompletas: [],
    // photos: null,
    livros: [
      {
        nome: 'O Senhor dos Anéis',
        lido: true
      },
      {
        nome: 'Harry Potter',
        lido: true
      },
      {
        nome: 'As Crônicas de Gelo e Fogo',
        lido: false
      }
    ]
  },
  getters: {
    livrosLidos: state => lido => state.livros.filter(livro => livro.lido === lido)
  },
  mutations: {
    COMPLETAR_AULA (state, payload) {
      state.aulasCompletas.push(payload)
    }
    // UPDATE_PHOTOS (state, payload) {
    //   state.photos = payload
    // }
  },
  actions: {
    completarAula (context, payload) {
      context.commit('COMPLETAR_AULA', payload)
    }
    // carregarPhotos (context) {
    //   fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then(response => response.json())
    //     .then(responseJson => {
    //       console.log(responseJson)
    //       context.commit('UPDATE_PHOTOS', responseJson)
    //     })
    // }
  }
})
