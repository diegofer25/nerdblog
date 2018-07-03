<template>
  <v-layout row wrap align-center>
    <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
      <div v-for="post in authorPosts" :key="post.title">
        <v-card class="my-3" hover>
          <v-card-media
            class="white--text"
            height="170px"
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
            <v-btn color="primary">Editar</v-btn>
            <v-btn color="red">Excluir</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat>Preview</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
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
      title: 'Painel do Editor'
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
    ])
  }
}
</script>
