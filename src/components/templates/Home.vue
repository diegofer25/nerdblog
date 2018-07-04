<template>
   <v-layout row>
    <v-flex xs12>
        <v-layout row>
          <v-flex xs4>
            <span class="headline">Últimos Posts do Blog</span>
          </v-flex>
          <v-flex xs6 offset-xs2>
            <v-text-field
              class="mx-3" flat label="Buscar Post"
              prepend-inner-icon="search" solo-inverted
              v-model="search">
            </v-text-field>
          </v-flex>
        </v-layout>
      <v-card>
        <v-container fluid grid-list-sm>
          <v-layout row wrap justify-space-around fill-height>
            <v-flex
              v-for="(post, index) in filteredPosts()"
              xs12 :key="post._id"
              v-bind="{ [`md${randomWidth((index), filteredPosts().length)}`]: true }">
              <v-card hover>
                <v-card-media
                  :src="post.urlImage"
                  height="300px">
                  <v-container
                    fill-height
                    fluid
                    pa-2>
                    <v-layout align-end>
                      <v-flex flexbox
                        v-bind="{ [`md${randomWidth(filteredPosts().length - (index + 1), filteredPosts().length)}`]: true }">
                        <div class="post-info">
                          <span class="title white--text" v-html="post.title"></span>
                          <p>
                            Postado em: {{ new Date(post.createdAt).toLocaleDateString() }}
                            as {{ new Date(post.createdAt).toLocaleTimeString().split(':').splice(0,2).join('h') }}
                          </p>
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>

                <v-card-actions>
                  <v-spacer></v-spacer>
                    Ler mais
                    <v-btn icon slot="activator"
                      @click.native.stop="$router.push('/post/' + post.title.split(' ').join('-'))">
                      <v-icon> notes </v-icon>
                    </v-btn>
                </v-card-actions>
              </v-card>

            </v-flex>
          </v-layout>
        </v-container>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters('blog', [
      'allPosts'
    ])
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions('blog', [
      'setAllPosts'
    ]),

    randomWidth (index, tamanho) {
      const percent = (index / tamanho) * 100
      if (percent <= 10) return 12
      if (percent <= 50) return 6
      if (percent <= 80) return 4
      return 3
    },

    filteredPosts () {
      return this.allPosts.filter((post) => post.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>

<style>
  .post-info {
    padding: 15px;
    min-width: 100%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
