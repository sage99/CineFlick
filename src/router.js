import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MovieDetails from '@/components/MovieDetails'
import Login from '@/components/Login'
import MoviesFavourites from '@/components/MoviesFavourites'
import MoviesWatchlist from '@/components/MoviesWatchlist'
import TVShows from '@/components/TVShowsList'
import TVShowDetails from '@/components/TVShowDetails'
import TVFavourites from '@/components/TVFavourites'
import TVWatchlist from '@/components/TVWatchlist'
import Profile from '@/components/Profile'
import CastAndCrew from '@/components/Cast_Crew'
import SearchResult from '@/components/Intermediate-Search'
import Playlists from '@/components/Playlists'

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
      path: '/tv/:type',
      name: 'TVShows',
      component: TVShows
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      component: MovieDetails
    },
    {
      path: '/tv/:id',
      name: 'TVShowDetails',
      component: TVShowDetails
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
    },
    {
      path: '/favourite-tv-shows',
      name: 'TVFavourites',
      component: TVFavourites
    },
    {
      path: '/tv-watchlist',
      name: 'TVWatchlist',
      component: TVWatchlist
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/cast-and-crew',
      name: 'CastAndCrew',
      component: CastAndCrew
    },
    {
      path: '/search-results/:type',
      name: 'SearchResult',
      component: SearchResult
    },
    {
      path: '/playlists',
      name: 'Playlists',
      component: Playlists
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
