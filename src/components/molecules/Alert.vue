<template>
   <v-snackbar
      v-model="alertUser.show"
      :color="alertUser.color"
      :timeout="2500"
      right top>
      {{ alertUser.text }}
      <v-btn dark flat @click="alertUser.show = false">
        Fechar
      </v-btn>
    </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Alert',
  computed: {
    ...mapGetters('user', [
      'alertUser'
    ])
  }
}
</script>
