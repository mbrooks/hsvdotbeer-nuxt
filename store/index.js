export const actions = {
  nuxtServerInit({ dispatch }, context) {
    return Promise.all([dispatch('venues/nuxtServerInit', context)])
  }
}
