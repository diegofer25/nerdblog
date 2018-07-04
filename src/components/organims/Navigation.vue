<template>
  <v-navigation-drawer
    clipped fixed v-model="drawer"
    app v-if="user._id !== ''"
    stateless>
    <v-layout row wrap align-center>
      <v-flex xs12 mt-3>
        <div class="text-xs-center">
          <v-avatar size="155px">
            <img class="img-circle elevation-7 mb-1"
              src="./../../assets/profile.jpg">
          </v-avatar>
          <div class="headline">{{ user.fullName }}</div>
          <div class="subheading text-xs-center grey--text pt-1 pb-3">
            {{ user.email }}
          </div>
        </div>
      </v-flex>
    </v-layout>
    <v-list dense>

      <v-list-tile @click.stop="$router.push('/poster/admin')">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-group
        prepend-icon="library_books"
        :value="false">
        <v-list-tile slot="activator">
          <v-list-tile-title>Posts</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list>
            <v-list-tile @click="$router.push('/poster/addpost')">
              <v-list-tile-action>
                <v-icon>library_add</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Criar um novo Post</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-list-tile>
      </v-list-group>

      <v-list-group
        prepend-icon="bookmark"
        :value="false">
        <v-list-tile slot="activator">
          <v-list-tile-title>Categorias</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list>
            <v-list-tile @click="$router.push('/poster/categories')">
              <v-list-tile-action>
                <v-icon>book</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Gerenciar Categorias</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-list-tile>
      </v-list-group>

      <v-list-tile @click.stop="askLogout">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Sair</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Navigation',
  props: ['drawer'],
  computed: {
    ...mapGetters('user', [
      'user'
    ])
  },
  methods: {
    ...mapActions('user', [
      'logoutUser',
      'dialogUser'
    ]),

    askLogout () {
      this.dialogUser({
        title: 'Confirmar Logout',
        text: 'Deseja mesmo fazer logout?',
        show: false,
        action: this.logout,
        data: null
      })
    },

    logout () {
      localStorage.removeItem('user')
      this.logoutUser()
        .then(() => {
          this.$router.push('/poster')
        })
    }
  }
}
</script>
