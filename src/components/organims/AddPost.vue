<template>
  <v-layout row wrap>
    <v-flex xs12 sm10 offset-sm1 mt-5>

      <v-card class="elevation-12">
        <v-toolbar color="primary">
          <v-toolbar-title>Novo Post</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <post-form :form="form" :categories="categories" />
        </v-card-text>

        <v-flex px-4 pb-2>
          <v-card-actions pa-3>
            <v-btn color="red" :disabled="loading" :loading="loading"
              @click.stop="$router.push('/poster/admin')">
              Cancelar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.prevent="postPost">Postar</v-btn>
          </v-card-actions>
        </v-flex>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import PostForm from './../molecules/PostForm'
import { mapGetters, mapActions } from 'vuex'
import services from './../../services'

export default {
  name: 'AddPost',
  computed: {
    ...mapGetters('blog', [
      'categories'
    ]),
    ...mapGetters('user', [
      'user'
    ])
  },
  mounted () {
    if (this.categories.length === 0) {
      services.blogService.getAllCategories()
        .then((result) => {
          this.setCategories(result.categories)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  data () {
    return {
      form: {
        title: '',
        urlImage: '',
        content: '',
        category: '',
        comments: []
      }
    }
  },
  methods: {
    ...mapActions('blog', [
      'setCategories'
    ]),
    postPost () {
      var post = this.form
      post['authorId'] = this.user._id
      post['authorName'] = this.user.fullName

      services.blogService.postToBlog(post)
        .then((result) => {
          this.form = { title: '', urlImage: '', content: '', category: '', comments: [] }
          alert('"' + result.post.title + '" postado com sucesso!')
          this.$router.push('/poster/admin')
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  components: {
    'post-form': PostForm
  }
}
</script>
