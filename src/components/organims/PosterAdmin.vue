<template>
  <v-layout row wrap align-center>
    <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
      <div v-for="post in authorPosts" :key="post.title">
        <nb-post-render :post="post"/>
      </div>

      <v-tooltip top>
        <v-btn large slot="activator"
          color="primary"
          dark fab fixed
          bottom right @click.stop="$router.push('/poster/addpost')" >
          <v-icon>edit</v-icon>
        </v-btn>
        <span>Novo Post</span>
      </v-tooltip>
    </v-flex>
  </v-layout>
</template>

<script>
import { PostRender } from './../molecules/'
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
  },

  components: {
    'nb-post-render': PostRender
  }
}
</script>
