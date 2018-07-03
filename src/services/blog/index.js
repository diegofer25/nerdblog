import axios from 'axios'

export default {
  getAllCategories: () => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/category/all'
    return axios.get(url)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  },

  postToBlog: (post) => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/post'
    return axios.post(url, post)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  },

  getAuthorPosts: (authorId) => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/post?authorId=' + authorId
    return axios.get(url)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  }
}
