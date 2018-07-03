<template>
  <v-layout row wrap align-center>
    <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
      <div v-for="post in authorPosts" :key="post.title">
        <v-card class="my-3" hover>
          <v-card-media
            class="white--text"
            height="250px"
            :src="post.urlImage">
            <v-container fill-height fluid>
              <v-layout>
                <v-flex xs12 align-end d-flex>
                  <span class="headline">{{ post.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-text>
            {{ post.content }}
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary"
              @click="$router.push({
                path: '/poster/editpost/' + post._id
              })"> Editar
            </v-btn>
            <v-btn color="red" :disabled="loading" :loading="loading"
              @click="askDelete(post)"> Excluir
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat>Preview</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
    <nb-loading :loading="loading" />
    <nb-alert :alert="alert" />
    <nb-dialog :dialog="dialog" />
  </v-layout>
</template>

<script>
import { Alert, Loading, Dialog } from './../molecules/'
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
      alert: {
        text: '',
        color: 'success',
        show: false
      },
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
      this.alert = {
        text: result.post.title + ' deletado com sucesso!',
        color: 'primary',
        show: true
      }
    }
  },

  components: {
    'nb-alert': Alert,
    'nb-dialog': Dialog,
    'nb-loading': Loading
  }
}
</script>
