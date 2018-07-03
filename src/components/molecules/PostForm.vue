<template>
  <v-flex xs12 sm10 offset-sm1>
    <v-form ref="form">

      <v-text-field name="title" v-model="form.title"
        label="Título" ref="title" type="text" autocomplete required counter="100">
      </v-text-field>

      <v-text-field name="urlImage" v-model="form.urlImage"
        placeholder="http://algumsite.com/imagem.jpg"
        label="URL da imagem" ref="urlImage" type="text" autocomplete>
      </v-text-field>

      <img width="100%" v-if="form.urlImage.length > 10" :src="form.urlImage">

      <v-select
        :items="categories.map((category) => category.name)" item-value="value.name"
        v-model="form.category" label="Categoria">
      </v-select>

      <v-textarea ref="content" name="content" label="Conteúdo"
        auto-grow outline row-height="50" counter="5000"
        v-model="form.content">
      </v-textarea>
    </v-form>
  </v-flex>
</template>

<script>
export default {
  name: 'PostForm',
  props: [
    'form',
    'categories'
  ]
}
</script>
