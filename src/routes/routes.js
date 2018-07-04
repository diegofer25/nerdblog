import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Nerd Blog',
    component: () => import('./../components/pages/nerd-blog'),
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('./../components/templates/Home')
    },
    {
      path: '/post/:post',
      name: 'PostReader',
      component: () => import('./../components/organims/PostReader')
    }, {
      path: '/category/:category',
      name: 'Category',
      component: () => import('./../components/organims/ShowByCategory')
    }]
  },
  {
    path: '/poster',
    name: 'Poster',
    component: () => import('./../components/templates/Poster'),
    children: [{
      path: '/poster/',
      name: 'LoginForm',
      component: () => import('./../components/organims/LoginForm')
    },
    {
      path: '/poster/admin',
      name: 'PosterAdmin',
      component: () => import('./../components/organims/PosterAdmin.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/poster/addpost',
      name: 'AddPost',
      component: () => import('./../components/organims/AddPost'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/poster/editpost/:_id',
      name: 'EditPost',
      component: () => import('./../components/organims/EditPost'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/poster/categories/',
      name: 'CategoryManager',
      component: () => import('./../components/organims/CategoryManager'),
      meta: {
        requiresAuth: true
      }
    }]
  },
  {
    path: '/error',
    name: '404',
    component: () => import('./../components/templates/404')
  }]
})
