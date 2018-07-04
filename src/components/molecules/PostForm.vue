<template>
  <v-flex xs12 pa-3>
    <v-form ref="form">

      <v-text-field name="title" v-model="form.title"
        label="Título" ref="title" type="text" autocomplete required counter="100">
      </v-text-field>

      <v-text-field name="urlImage" v-model="form.urlImage"
        placeholder="http://algumsite.com/imagem.jpg"
        label="URL da imagem cover" ref="urlImage" type="text" autocomplete>
      </v-text-field>

      <v-select
        :items="categories.map((category) => category.name)" item-value="value.name"
        v-model="form.category" label="Categoria">
      </v-select>

      <v-card light>
        <v-card-media v-if="form.urlImage !== '' && form.title !== ''"
          class="white--text"
          height="500px" :src="form.urlImage">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ form.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <vue-editor v-model="form.content" placeholder="Escreva aqui seu post incrível :D"></vue-editor>
        </v-card-title>
      </v-card>

    </v-form>
  </v-flex>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
  name: 'PostForm',
  props: [
    'form',
    'categories'
  ],
  components: {
    VueEditor
  }
}
</script>

<style>
  .ql-container {
    min-height: 300px;
  }
</style>
