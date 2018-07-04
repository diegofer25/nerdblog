<template>
   <v-snackbar
      v-model="alert.show"
      :color="alert.color"
      :timeout="2500"
      right top>
      {{ alert.text }}
      <v-btn dark flat @click="alert.show = false">
        Fechar
      </v-btn>
    </v-snackbar>
</template>

<script>
export default {
  name: 'Alert',
  props: ['alert']
}
</script>
