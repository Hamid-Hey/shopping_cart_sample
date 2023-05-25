export const state = () => ({
  shoppingCart: [],
})

export const mutations = {
  ADD_PRODUCT(state, payload) {
    state.shoppingCart = [payload, ...state.shoppingCart]
  },
}

export const getters = {
  getProduts(state) {
    return state.shoppingCart
  }
}

export const actions = {
  addProduct({ commit }, payload) {
    commit('ADD_PRODUCT', payload)
  },
}
