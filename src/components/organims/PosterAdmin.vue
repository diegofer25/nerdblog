<template>
  <v-layout row wrap align-center>
    <v-flex xs12 sm10 offset-sm1>
      <div v-for="post in authorPosts" :key="post.title">
        <nb-post-render :post="post" :loading="loading"/>
      </div>
    </v-flex>
    <nb-loading :loading="loading" />
    <nb-dialog :dialog="dialog" />
  </v-layout>
</template>

<script>
import { Loading, Dialog, PostRender } from './../molecules/'
import { mapActions, mapGetters } from 'vuex'
import services from './../../services'

export default {
  name: 'PosterAdmin',
  computed: {
    ...mapGetters('user', [
      'user'
    ]),
    ...mapGetters('blog', [
      'authorPosts'
    ])
  },
  data () {
    return {
      title: 'Painel do Editor',
      loading: false,
      dialog: {
        title: '',
        text: '',
        show: false,
        action: () => {},
        data: {}
      }
    }
  },
  mounted () {
    services.blogService.getAuthorPosts(this.user._id)
      .then((result) => {
        this.setAuthorPosts(result.post)
      }).catch((err) => {
        console.log(err)
      })
  },
  methods: {
    ...mapActions('blog', [
      'setAuthorPosts'
    ]),
    ...mapActions('user', [
      'alertUser'
    ]),
    askDelete (post) {
      this.dialog = {
        title: 'Confirmação',
        text: 'Deseja mesmo deletar o post ' + post.title,
        show: true,
        action: this.deletePost,
        data: post
      }
    },

    deletePost (post) {
      this.loading = !this.loading
      services.blogService.deletePost(post._id)
        .then((result) => {
          if (result.itsOk) {
            this.processReponse(result)
          }
        }).catch((err) => {
          console.log(err)
        })
    },

    processReponse (result) {
      const attPost = this.authorPosts.filter((post) => post._id !== result.post._id)
      this.setAuthorPosts(attPost)
      this.loading = !this.loading
      this.alertUser({
        text: result.post.title + ' deletado com sucesso!',
        color: 'success'
      })
    }
  },

  components: {
    'nb-dialog': Dialog,
    'nb-loading': Loading,
    'nb-post-render': PostRender
  }
}
</script>
