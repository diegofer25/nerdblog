<template>
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
      <div id="render">
      <vue-editor v-model="post.content" :editorToolbar="[]"
        :editorOptions="{ readOnly: true}"/>
      </div>
    </v-card-text>

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
        <nb-preview :show="false" :post="post" />
      </v-card-actions>
    </v-flex>

  </v-card>
</template>

<script>
import Preview from './Preview'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'PostRender',
  props: [
    'post',
    'loading'
  ],
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
</style>
