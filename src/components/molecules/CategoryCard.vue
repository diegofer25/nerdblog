<template>
  <v-flex xs12>
    <v-card dark hover class="white--text">
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex xs12 md7>
            <div>
              <div v-if="!editing" class="headline">
                {{ category.name }}
              </div>
              <div v-else>
                <v-text-field
                  v-model="newCategory.name">
                </v-text-field>
              </div>
              <div>{{ amount }} posts com esta categoria</div>
            </div>
          </v-flex>
          <v-flex xs5>
            <div v-if="!editing">
              <v-btn color="primary" @click.native.stop="editing = !editing">
                Editar </v-btn>
              <v-btn color="error" @click.native.stop="askDeleteCategory">
                Excluir </v-btn>
            </div>
            <div v-else>
              <v-btn color="error" @click.native.stop="editing = !editing">
                Cancelar </v-btn>
              <v-btn color="primary" @click.native.stop="updateCategory">
                Atualizar </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import services from './../../services/'
import { mapActions } from 'vuex'

export default {
  name: 'CategoryCard',
  props: [
    'category',
    'amount'
  ],
  data () {
    return {
      editing: false,
      newCategory: {
        _id: this.category._id,
        name: this.category.name
      }
    }
  },

  methods: {
    ...mapActions('user', [
      'setLoading',
      'alertUser',
      'dialogUser'
    ]),
    ...mapActions('blog', [
      'setCategories'
    ]),

    askDeleteCategory () {
      this.dialogUser({
        title: 'Confirmação',
        text: 'Deseja mesmo deletar a categoria ' + this.category.name,
        show: true,
        action: this.deleteCategory,
        data: null
      })
    },

    updateCategory () {
      this.setLoading(true)
      services.blogService.updateCategory(this.newCategory)
        .then((result) => {
          this.refreshCategories()
          this.alertUser({
            text: this.category.name + ' atualizado com sucesso!',
            color: 'success'
          })
        }).catch((err) => {
          console.log(err)
          this.setLoading(false)
          this.editing = !this.editing
        })
    },

    deleteCategory () {
      this.setLoading(true)
      services.blogService.deleteCategory(this.category._id)
        .then((result) => {
          this.refreshCategories()
          this.alertUser({
            text: this.category.name + ' deletada com sucesso!',
            color: 'success'
          })
        }).catch((err) => {
          console.log(err)
          this.setLoading(false)
        })
    },

    refreshCategories () {
      services.blogService.getAllCategories()
        .then((result) => {
          this.setCategories(result.categories)
          this.setLoading(false)
          this.editing = false
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
