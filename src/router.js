import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MovieDetails from '@/components/MovieDetails'
import Login from '@/components/Login'
import MoviesFavourites from '@/components/MoviesFavourites'
import MoviesWatchlist from '@/components/MoviesWatchlist'

Vue.use(Router)
export default new Router({
  routes: [
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
