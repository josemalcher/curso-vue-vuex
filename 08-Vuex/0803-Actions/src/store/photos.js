export default {
  namespaced: true,
  state: {
    photos: null
  },
  mutations: {
    UPDATE_PHOTOS (state, payload) {
      state.photos = payload
    }
  },
  actions: {
    carregarPhotos (context) {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson)
          context.commit('UPDATE_PHOTOS', responseJson)
        })
    }
  }
}
