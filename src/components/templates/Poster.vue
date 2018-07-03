<template>
  <div>
    <navigation :user="user" :drawer="drawer"/>
    <v-toolbar app fixed clipped-left
      color="primary">
      <v-toolbar-side-icon
        v-if="user._id !== ''"
        @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view/>
      </v-container>
    </v-content>
    <v-footer app fixed color="primary">
      <i>Nerd Blog &copy; {{ year }}</i>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from './../organims/Navigation'

export default {
  name: 'Poster',
  computed: {
    ...mapGetters('user', [
      'user'
    ])
  },
  data () {
    return {
      title: 'Nerd Blog Editor',
      drawer: true,
      year: new Date().getFullYear()
    }
  },
  components: {
    'navigation': Navigation
  }
}
</script>
