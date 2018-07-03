<template>
  <v-navigation-drawer
    clipped fixed v-model="drawer"
    app v-if="user._id !== ''"
    mobile-break-point="900">
      <v-layout row wrap align-center>
        <v-flex xs12 mt-3>
          <div class="text-xs-center">
            <v-avatar size="155px">
              <img class="img-circle elevation-7 mb-1"
                src="./../../assets/profile.jpg">
            </v-avatar>
            <div class="headline">{{ user.fullName }}</div>
            <div class="subheading text-xs-center grey--text pt-1 pb-3">
              {{ user.email }}
            </div>
          </div>
        </v-flex>
      </v-layout>
    <v-list dense>
      <v-list-tile @click.stop="'#'">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click.stop="'#'">
        <v-list-tile-action>
          <v-icon>subject</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Posts</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click.stop="'#'">
        <v-list-tile-action>
          <v-icon>bookmarks</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Categorias</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation',
  props: [
    'user',
    'drawer'
  ]
}
</script>
