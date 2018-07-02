<template>
  <div>
    <h4>Login</h4>
    <form @submit.prevent="requestLogin">
      <div>
        <label for="email">Email: </label>
        <input v-model="form.email" type="email" autocomplete required>
      </div>
      <div>
        <label for="password">Senha: </label>
        <input v-model="form.password" type="password" autocomplete required>
      </div>
      <div>
        <input value="Logar" type="submit">
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import services from './../../services'

export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'loginUser'
    ]),

    requestLogin (form) {
      services.userService.login(form)
        .then((result) => {
          this.processLogin(result.data)
        }).catch((err) => {
          console.log(err)
        })
    },

    processLogin (response) {
      if (response.itsOk) {
        if (response.user.isPoster) {
          this.authenticated(response.user)
        } else {
          alert('Você não tem permissão para acessar esta área')
        }
      } else {
        alert(response.message)
      }
    },

    authenticated (user) {
      this.loginUser(user)
      alert('logado')
    }
  }
}
</script>
