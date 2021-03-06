import axios from 'axios'

export default {
  getAllPosts: () => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/post/all'
    return axios.get(url)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  },

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
  },

  postCategory: (category) => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/category'
    return axios.post(url, category)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  },

  updateCategory: (category) => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/category'
    return axios.put(url, category)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  },

  deleteCategory: (categoryId) => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/category?_id=' + categoryId
    return axios.delete(url)
      .then((result) => {
        return result.data
      }).catch((err) => {
        return err
      })
  }
}
