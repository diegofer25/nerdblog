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
  },

  updatePost: (post) => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/post'
    return axios.put(url, post)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  },

  deletePost: (postId) => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/post?_id=' + postId
    return axios.delete(url)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  }
}
