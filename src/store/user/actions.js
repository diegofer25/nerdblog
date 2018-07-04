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
  },

  dialogUser: ({ commit }, payload) => {
    commit('dialogUser', payload)
  },

  setLoading: ({ commit }, payload) => {
    commit('setLoading', payload)
  },

  toogleDrawer: ({ commit }, payload) => {
    commit('toogleDrawer', payload)
  }
}
