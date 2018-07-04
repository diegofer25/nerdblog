export default {
  loginUser: ({
    commit
  }, payload) => {
    commit('loginUser', payload)
  },

  logoutUser: ({ commit }) => {
    commit('logoutUser')
  },

  alertUser: ({ commit }, payload) => {
    commit('alertUser', payload)
  }
}
