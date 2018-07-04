export default {
  setCategories: (state, categories) => {
    state.categories = categories
  },

  setAuthorPosts: (state, authorPosts) => {
    state.authorPosts = authorPosts
  },

  setAllPosts: (state, posts) => {
    state.allPosts = posts.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt)
    })
  }
}
