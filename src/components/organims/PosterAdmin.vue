<template>
  <v-layout row wrap align-center>
    <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
      <div v-for="post in posts" :key="post.title">
        <v-card class="my-3" hover>
          <v-card-media
            class="white--text"
            height="170px"
            :src="post.imgUrl">
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
export default {
  name: 'PosterAdmin',
  data () {
    return {
      title: 'Painel do Editor',
      posts: [/*{
        title: 'Star Wars',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: 'https://complemento.veja.abril.com.br/entretenimento/a-forca-de-star-wars/img/abre.jpg'
      },
      {
        title: 'Game of Thrones',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: 'http://hdqwalls.com/wallpapers/game-of-thrones-season-7-drogon-and-khaleesi-im.jpg'
      },
      {
        title: 'Vestibulum condimentum quam',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
      }*/]
    }
  }
}
</script>
