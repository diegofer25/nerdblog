<template>
  <v-app id="inspire" dark>

    <navigation :drawer="drawer" />

    <v-toolbar app fixed clipped-left height="80px"
      color="primary">

      <v-toolbar-side-icon
        v-if="user._id !== ''"
        @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-flex pt-2>
          <img width="75px" src="./../../assets/nerd-logo.png">
        </v-flex>
      </v-toolbar-title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <v-toolbar-title>
        <span class="display-1 font-weight-black">
          <span class="nerd">Nerd</span>
          <span class="font-weight-black">Blog</span>
        </span>
      </v-toolbar-title>

    </v-toolbar>
    <v-content>

      <v-container fluid fill-height>
        <transition name="slide-fade">
          <router-view />
        </transition>
      </v-container>

    </v-content>
    <v-footer app fixed color="primary">
      <i>Nerd Blog &copy; {{ year }}</i>
    </v-footer>
    <nb-alert/>
    <nb-dialog/>
    <nb-loading/>
  </v-app>
</template>

<script>
import { Alert, Dialog, Loading } from './../molecules/'
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
      drawer: false,
      year: new Date().getFullYear()
    }
  },
  components: {
    'navigation': Navigation,
    'nb-alert': Alert,
    'nb-dialog': Dialog,
    'nb-loading': Loading
  }
}
</script>

<style>
  .slide-fade-enter-active {
    transition: .4s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-1000px);
    opacity: 0.5;
  }

  .nerd {
    font-weight: bold;
    color: lightgreen;
  }
</style>
