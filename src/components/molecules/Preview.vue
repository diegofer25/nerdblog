<template>
  <v-dialog v-model="show" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-btn slot="activator" flat>Preview</v-btn>
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click.stop="show = !show">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>Preview</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout row wrap align-center>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
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
                  :editorOptions="{ readOnly: true }"/>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'Preview',
  props: [
    'post'
  ],
  data () {
    return {
      show: false
    }
  },
  components: {
    VueEditor
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
