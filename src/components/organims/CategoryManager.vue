<template>
  <v-layout row wrap align-center>
    <v-flex xs12 sm10 offset-sm1>
      <v-card color="primary">
        <v-card-title>
          <span class="title">Categorias</span>
        </v-card-title>
        <v-container fluid grid-list-lg >
          <v-layout row wrap>
            <category-card v-for="category in categories" :key="category._id"
              :category="category"
              :amount="authorPosts.filter((post) => post.category == category.name).length"/>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-tooltip top>
      <v-btn large slot="activator" color="primary"
        dark fab fixed
        bottom right @click.stop="adding = !adding">
        <v-icon>book</v-icon>
      </v-btn>
      <span>Criar Categoria</span>
    </v-tooltip>

    <add-category :adding="adding" v-on:toogleCreation="toogleCreation"/>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { CategoryCard, AddCategory } from './../molecules'
import services from './../../services'

export default {
  name: 'CategoryManager',
  computed: {
    ...mapGetters('blog', [
      'categories',
      'authorPosts'
    ]),
    ...mapGetters('user', [
      'user'
    ])
  },

  data () {
    return {
      adding: false
    }
  },

  mounted () {
    this.initCaseRestart()
  },

  methods: {
    ...mapActions('blog', [
      'setCategories',
      'setAuthorPosts'
    ]),

    toogleCreation (value) {
      this.adding = value
    },

    initCaseRestart () {
      if (this.categories.length === 0) {
        services.blogService.getAllCategories()
          .then((result) => {
            this.setCategories(result.categories)
          }).catch((err) => {
            console.log(err)
          })
      }
      if (this.authorPosts.length === 0) {
        services.blogService.getAuthorPosts(this.user._id)
          .then((result) => {
            this.setAuthorPosts(result.post)
          }).catch((err) => {
            console.log(err)
          })
      }
    }
  },

  components: {
    'category-card': CategoryCard,
    'add-category': AddCategory
  }
}
</script>
