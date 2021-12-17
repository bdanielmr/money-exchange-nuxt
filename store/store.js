import ApiService from '@/services/ApiService'
export const state = () => ({
  currents: [],
  currentConverter: [],
})
export const mutations = {
  SET_CURRENTS(state, events) {
    state.currents = events
  },
  CONVERTER(state, wallet) {
    const solToDolar = Number(wallet.target) / Number(state.currents.sale_price)
    const dolarToSol =
      Number(wallet.target) * Number(state.currents.purchase_price)
    state.currentConverter = {
      wallet: {
        ...wallet,
        exchange:
          wallet?.inputCurrent === 'Dolares'
            ? dolarToSol?.toString()
            : solToDolar?.toString(),
      },
      done: false,
      solToDolar,
      dolarToSol,
    }
  },
  CHANGE(state) {
    const auxSale =
      Number(state.currentConverter?.wallet?.target) /
      Number(state.currents.sale_price)
    const auxPrice =
      Number(state.currentConverter?.wallet?.target) *
      Number(state.currents.purchase_price)
    state.currentConverter = {
      ...state.currentConverter,
      wallet: {
        ...state.currentConverter.wallet,
        inputCurrent:
          state.currentConverter.wallet?.inputCurrent === 'Dolares'
            ? 'Soles'
            : 'Dolares',
        exchange:
          state.currentConverter.wallet?.inputCurrent === 'Dolares'
            ? auxSale?.toString() === 'NaN'
              ? ''
              : auxSale?.toString()
            : auxPrice?.toString() === 'NaN'
            ? ''
            : auxPrice?.toString(),
      },
    }
  },
  DONE(state) {
    state.currentConverter = { ...state.currentConverter, done: true }
  },
}
export const actions = {
  fetchCurrents({ commit }) {
    return ApiService.getCurrent().then((response) => {
      commit('SET_CURRENTS', response.data)
    })
  },
}
