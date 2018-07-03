<template>
  <v-dialog
      v-model="dialog.show"
      max-width="300"
    >
      <v-card>
        <v-card-title class="headline">
          {{ dialog.title }}
        </v-card-title>

        <v-card-text>
          {{ dialog.text }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="error"
            flat="flat"
            @click.stop="dialog.show = false">
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
export default {
  name: 'Dialog',
  props: ['dialog'],
  methods: {
    confirm () {
      this.dialog.show = false
      this.dialog.action(this.dialog.data)
    }
  }
}
</script>
