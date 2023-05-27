export const state = () => ({
  shoppingCart: [],
  totalItems: null,
})

export const mutations = {
  ADD_PRODUCT(state, payload) {
    state.shoppingCart = [payload, ...state.shoppingCart]
  },
}

export const getters = {
  getShoppingCarts(state) {
    return state.shoppingCart
  },

  getTotalItems(state) {
    return state.totalItems
  },
}

export const actions = {
  addProduct({ commit }, payload) {
    commit('ADD_PRODUCT', payload)
  },
}
