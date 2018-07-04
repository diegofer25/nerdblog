<template>
  <v-dialog
      v-model="dialogUser.show"
      max-width="300"
    >
      <v-card>
        <v-card-title class="headline">
          {{ dialogUser.title }}
        </v-card-title>

        <v-card-text>
          {{ dialogUser.text }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="error"
            flat="flat"
            @click.stop="dialogUser.show = false">
            Não
          </v-btn>

          <v-btn
            color="success"
            flat="flat"
            @click.stop="confirm()">
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dialog',
  computed: {
    ...mapGetters('user', [
      'dialogUser'
    ])
  },
  methods: {
    confirm () {
      this.dialogUser.show = false
      this.dialogUser.action(this.dialogUser.data)
    }
  }
}
</script>
