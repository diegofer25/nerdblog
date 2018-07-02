import axios from 'axios'

export default {
  login: (user) => {
    const url = 'http://nerd-blog-api.azurewebsites.net/api/user/login'
    return axios.post(url, user)
      .then((result) => {
        return result
      }).catch((err) => {
        return err
      })
  }
  /* return axios({
      async: true,
      crossDomain: true,
      url: 'http://nerd-blog-api.azurewebsites.net/api/user/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        email: user.email,
        password: user.password
      }
    })
      .then(function (response) {
        console.log(response)
        return response
      })
      .catch(function (error) {
        return error
      })
  } */
}
