<template>
  <v-layout row wrap>
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 mt-5>
      <v-card class="elevation-12">
        <v-toolbar color="primary">
          <v-toolbar-title>Login</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form">
            <v-text-field prepend-icon="person" name="email" v-model="form.email"
              label="E-mail" ref="email" type="email" autocomplete required counter="50"
              placeholder="Ex: email@domain.com">
            </v-text-field>
            <v-text-field prepend-icon="lock" name="password" v-model="form.password"
              label="Senha" ref="password" type="password" autocomplete required counter="16"
              placeholder="Informe sua senha">
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.prevent="requestLogin">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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

    requestLogin () {
      services.userService.login(this.form)
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
      this.$router.push('/poster/admin')
    }
  }
}
</script>
