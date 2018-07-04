<template>
  <v-layout row wrap>
    <v-flex xs12 sm10 offset-sm1 mt-5>

      <v-card class="elevation-12" v-if="authorPosts.length > 0">
        <v-toolbar color="primary">
          <v-toolbar-title>Editar Post</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <post-form :form="authorPosts.filter((post) => post._id === $route.params._id)[0]"
            :categories="categories"/>
        </v-card-text>

        <v-flex px-4 pb-2>
          <v-card-actions pa-3>

            <v-spacer></v-spacer>
            <v-btn color="red" @click.stop="$router.push('/poster/admin')">
              Cancelar
            </v-btn>
            <v-btn color="primary" @click.prevent="savePost">Salvar</v-btn>

          </v-card-actions>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { PostForm } from './../molecules/'
import services from './../../services'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EditPost',
  computed: {
    ...mapGetters('blog', [
      'authorPosts',
      'categories'
    ]),
    ...mapGetters('user', [
      'user'
    ])
  },
  data () {
    return {
      alert: {
        text: '',
        color: 'success',
        show: false
      }
    }
  },
  mounted () {
    this.initCaseRestart()
  },
  methods: {
    ...mapActions('blog', [
      'setCategories',
      'setAuthorPosts'
    ]),
    ...mapActions('user', [
      'alertUser'
    ]),

    savePost () {
      const post = this.authorPosts.filter((post) => post._id === this.$route.params._id)[0]
      services.blogService.updatePost(post)
        .then((result) => {
          if (result.itsOk) {
            this.alertUser({
              text: 'Post atualizado com sucesso',
              color: 'success'
            })
            this.$router.push('/poster/admin')
          }
        })
    },

    initCaseRestart () {
      if (this.categories.length === 0) {
        services.blogService.getAllCategories()
          .then((result) => {
            this.setCategories(result.categories)
          }).catch((err) => {
            console.log(err)
          })
      }
      if (this.authorPosts.length === 0) {
        services.blogService.getAuthorPosts(this.user._id)
          .then((result) => {
            this.setAuthorPosts(result.post)
          }).catch((err) => {
            console.log(err)
          })
      }
    }
  },
  components: {
    'post-form': PostForm
  }
}
</script>
