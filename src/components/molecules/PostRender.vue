<template>
  <v-card class="my-3" hover>
    <v-card-media
      class="white--text"
      height="250px"
      :src="post.urlImage">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <div class="post-info">
              <span class="headline">{{ post.title }}</span> <br>
              <span>
                Criado em: {{ new Date(post.createdAt).toLocaleDateString() }}
              </span>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>

    <v-flex px-2 pb-2>
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
        <nb-preview :post="post" />
      </v-card-actions>
    </v-flex>

  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { VueEditor } from 'vue2-editor'
import Preview from './Preview'
import services from './../../services'

export default {
  name: 'PostRender',
  props: [
    'post'
  ],
  computed: {
    ...mapGetters('user', [
      'loading'
    ]),
    ...mapGetters('blog', [
      'authorPosts'
    ])
  },
  data () {
    return {
      preview: false
    }
  },
  methods: {
    ...mapActions('user', [
      'alertUser',
      'dialogUser',
      'setLoading'
    ]),
    askDelete (post) {
      this.dialogUser({
        title: 'Confirmação',
        text: 'Deseja mesmo deletar o post ' + post.title,
        show: true,
        action: this.deletePost,
        data: post
      })
    },

    deletePost (post) {
      this.setLoading(true)
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
      this.setLoading(false)
      this.alertUser({
        text: result.post.title + ' deletado com sucesso!',
        color: 'success'
      })
    }
  },
  components: {
    VueEditor,
    'nb-preview': Preview
  }
}
</script>

<style>
  #render .ql-container {
    border: none !important;
  }

  #render .ql-toolbar {
    display: none !important;
    border: none !important;
  }

  .post-info {
    padding: 15px;
    width: 60%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.562);
  }

  @media screen and (max-width: 600px) {
    .post-info {
      width: 100%;
    }
  }
</style>
