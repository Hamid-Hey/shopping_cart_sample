export const state = () => ({
  shoppingCart: [],
  totalItems: null,
})

export const mutations = {
  ADD_PRODUCT(state, payload) {
    state.shoppingCart = [payload, ...state.shoppingCart]
  },

  REMOVE_PRODUCT(state, payload) {
    state.shoppingCart.splice(state.shoppingCart.indexOf(payload.id), 1)
  },

  SET_TOTAL_ITEMS(state, payload) {
    state.totalItems = payload
  },
}

export const getters = {
  getProduts(state) {
    return state.shoppingCart
  },

  getTotalItems(state) {
    return state.totalItems
  },
}

export const actions = {
  addProduct({ state, commit }, payload) {
    const previousData = localStorage.getItem('shoppingCart')
    const storedData = JSON.parse(previousData)

    commit('ADD_PRODUCT', payload)

    const a = JSON.stringify(state.shoppingCart)
    const b = JSON.parse(a)

    const finalData = b.concat(storedData)

    localStorage.setItem('shoppingCart', JSON.stringify(finalData))
  },

  removeProduct({ state, commit }, payload) {
    commit('REMOVE_PRODUCT', payload)
  },

  readNotification({ commit }, payload) {
    commit('SET_TOTAL_ITEMS', payload)
  },
}
