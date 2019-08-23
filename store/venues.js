export const state = () => ({
  list: []
})

export const mutations = {
  set(state, venues) {
    state.list = venues.results
  }
}

export const getters = {
  getVenueBySlug: (state) => (slug) => {
    return state.list.find((venue) => venue.slug === slug)
  }
}

export const actions = {
  nuxtServerInit({ dispatch }) {
    dispatch('get')
  },
  async get({ commit }) {
    await this.$axios.get('venues/').then((res) => {
      if (res.status === 200) {
        commit('set', res.data)
      }
    })
  },
  async set({ commit }, venue) {
    await commit('set', venue)
  }
}
