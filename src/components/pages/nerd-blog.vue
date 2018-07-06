<template>
  <v-app id="inspire" dark>

    <v-navigation-drawer fixed app clipped
      stateless v-model="navigator">

      <v-list>
        <v-list-tile @click="$router.push('/home/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          prepend-icon="explore"
          :value="false"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Explorar</v-list-tile-title>
          </v-list-tile>

          <v-list-group
            no-action
            sub-group
            :value="false"
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Categorias</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="category in categories"
              :key="category._id"
              @click="$router.push('/category/' + category.name.split(' ').join('-'))" >
              <v-list-tile-title v-text="category.name"></v-list-tile-title>
            </v-list-tile>
          </v-list-group>

        </v-list-group>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left height="80px" color="primary">
      <v-toolbar-side-icon @click.native.stop="navigator = !navigator">
      </v-toolbar-side-icon>

      <v-toolbar-title>
        <v-flex pt-2>
          <img width="75px" src="./../../assets/nerd-logo.png">
        </v-flex>
      </v-toolbar-title>
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <v-toolbar-title>
        <span class="display-1 font-weight-black">
          <span class="nerd">Nerd</span>
          <span class="font-weight-black">Blog</span>
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        v-model="menu">
        <v-btn
          icon slot="activator" color="primary" dark>
          <v-icon flat>person</v-icon>
        </v-btn>

        <v-card>
          <v-list>
            <v-list-tile>

              <v-list-tile-content>
                <v-list-tile-title>
                  Faça o Login
                </v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-card-text>
            <v-flex pa-1>
              <v-form ref="form">
                <v-text-field prepend-icon="mail_outline" name="email"
                  label="E-mail" ref="email" type="email" autocomplete required counter="50"
                  placeholder="Ex: email@domain.com">
                </v-text-field>
                <v-text-field prepend-icon="lock_outline" name="password"
                  label="Senha" ref="password" type="password" autocomplete required counter="16"
                  placeholder="Informe sua senha">
                </v-text-field>
              </v-form>
            </v-flex>
          </v-card-text>

          <v-card-actions>
            <v-flex pa-2>
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                crossorigin="anonymous">
              <v-btn icon color="blue darken-3">
                <i class="fa fa-facebook"></i>
              </v-btn>
              <v-btn icon color="blue">
                <i class="fa fa-twitter"></i>
              </v-btn>
              <v-btn icon color="error">
                <i class="fa fa-google"></i>
              </v-btn>
            </v-flex>
            <v-btn color="primary" @click="''">Cadastrar</v-btn>

            <v-spacer></v-spacer>
            <v-btn color="teal" @click="''">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>

    </v-toolbar>

    <v-flex mb-5>
      <v-content>
        <v-container fluid>
          <transition name="slide-fade">
            <router-view />
          </transition>
        </v-container>
      </v-content>
    </v-flex>

    <v-flex mt-5>
      <v-footer
        dark
        height="auto" >
        <v-card flat tile color="primary" class="white--text text-xs-center" >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon" class="mx-3 white--text" icon >
              <v-icon size="24px">{{ icon }}</v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            &copy;2018 — <strong>NerdBlog</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-flex>

  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import services from './../../services'

export default {
  name: 'NerdBlog',
  computed: {
    ...mapGetters('blog', [
      'categories'
    ])
  },
  data () {
    return {
      navigator: false,
      menu: false,
      icons: [
        'fa fa-facebook',
        'fa fa-twitter',
        'fa fa-google-plus',
        'fa fa-linkedin',
        'fa fa-instagram'
      ]
    }
  },
  methods: {
    ...mapActions('blog', [
      'setAllPosts',
      'setCategories'
    ]),

    firstRequest () {
      services.blogService.getAllPosts()
        .then((result) => {
          this.setAllPosts(result.posts)
        }).catch((err) => {
          console.log(err)
        })
      services.blogService.getAllCategories()
        .then((result) => {
          this.setCategories(result.categories)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.firstRequest()
  }
}
</script>

<style>
  .slide-fade-enter-active {
    transition: .4s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-1000px);
    opacity: 0.5;
  }

  .nerd {
    font-weight: bold;
    color: lightgreen;
  }
</style>
