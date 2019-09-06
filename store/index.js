export const actions = {
  nuxtServerInit ({ dispatch }, context) {
    dispatch('venues/load', context)
  }
}

export const state = () => ({
  show_modal: false,
  modal_venue: {}
})

export const mutations = {
  SHOW_MODAL: (state, venue) => {
    state.modal_venue = venue
    state.show_modal = true
  },
  HIDE_MODAL: (state) => {
    state.modal_venue = {}
    state.show_modal = false
  }
}
