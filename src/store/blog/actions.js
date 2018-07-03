export default {
  setCategories: ({
    commit
  }, payload) => {
    commit('setCategories', payload)
  },

  setAuthorPosts: ({
    commit
  }, payload) => {
    commit('setAuthorPosts', payload)
  }
}
