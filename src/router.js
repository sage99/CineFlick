import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MovieDetails from '@/components/MovieDetails'
import Login from '@/components/Login'
import MoviesFavourites from '@/components/MoviesFavourites'
import MoviesWatchlist from '@/components/MoviesWatchlist'

// const blockstack = window.blockstack
Vue.use(Router)
const router = new Router({
  routes: [
    // { path: '/', redirect: blockstack.isUserSignedIn() ? '/movies/in-theatre' : '/login' },
    // {path: '/login', redirect: window.blockstack.isUserSignedIn() ? '/movies/in-theatre' : '/login'},
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/movies/:type',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails
    },
    {
      path: '/favourite-movies',
      name: 'FavouriteMovies',
      component: MoviesFavourites
    },
    {
      path: '/movie-watchlist',
      name: 'MoviesWatchlist',
      component: MoviesWatchlist
    }
    // {
    //   path: '/po',
    //   name: 'Home',
    //   component: Home
    // }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && window.blockstack.isUserSignedIn()) {
    router.push({ name: 'Home', params: { type: 'in-theatre' } })
  } else if (to.name === 'Home' && !window.blockstack.isUserSignedIn()) {
    router.push({ name: 'Login' })
  } else next()
})

export default router
