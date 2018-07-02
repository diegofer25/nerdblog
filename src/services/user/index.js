import axios from 'axios'

export default {
  login: (user) => {
    const url = 'https://nerd-blog-api.azurewebsites.net/api/user/login'
    return axios.post(url, user)
      .then((result) => {
        return result
      }).catch((err) => {
        return err
      })
  }
}
