import ApiService from '@/services/ApiService'
export const state = () => ({
  currents: [],
})
export const mutations = {
  SET_CURRENTS(state, events) {
    state.currents = events
  },
}
export const actions = {
  fetchCurrents({ commit }) {
    return ApiService.getCurrent().then((response) => {
      commit('SET_CURRENTS', response.data)
    })
  },
}
