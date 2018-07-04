<template>
  <v-dialog v-model="adding" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Criar Categoria</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 md-10 offset-md1>
              <v-text-field label="Informe uma categoria" required
                v-model="category.name">
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click.native="toogleCreation">Cancelar</v-btn>
        <v-btn color="primary" @click.native="createCategory">Criar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import services from './../../services'

export default {
  name: 'AddCategory',
  props: ['adding'],
  data () {
    return {
      category: {
        name: ''
      }
    }
  },

  methods: {
    ...mapActions('user', [
      'setLoading',
      'alertUser'
    ]),
    ...mapActions('blog', [
      'setCategories'
    ]),

    toogleCreation () {
      this.$emit('toogleCreation', !this.adding)
    },

    createCategory () {
      this.setLoading(true)
      services.blogService.postCategory(this.category)
        .then((result) => {
          services.blogService.getAllCategories()
            .then((result) => {
              this.setCategories(result.categories)
              this.setLoading(false)
              this.alertUser({
                text: this.category.name + ' criado com sucesso!',
                color: 'success'
              })
              this.toogleCreation()
            }).catch((err) => {
              console.log(err)
            })
        }).catch((err) => {
          console.log(err)
          this.setLoading(false)
          this.toogleCreation()
        })
    }
  }
}
</script>
