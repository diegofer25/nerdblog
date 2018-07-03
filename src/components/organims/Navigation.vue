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

      <v-list-tile @click.stop="$router.push('/poster/admin')">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-group
        prepend-icon="library_books"
        :value="false">
        <v-list-tile slot="activator">
          <v-list-tile-title>Posts</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list>
            <v-list-tile @click="$router.push('/poster/addpost')">
              <v-list-tile-action>
                <v-icon>library_add</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Criar um novo Post</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-list-tile>
      </v-list-group>

      <v-list-group
        prepend-icon="bookmark"
        :value="false">
        <v-list-tile slot="activator">
          <v-list-tile-title>Categorias</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list>
            <v-list-tile @click="$router.push('/poster/addcategory')">
              <v-list-tile-action>
                <v-icon>note_add</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Criar uma nova categoria</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-list-tile>
      </v-list-group>

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
