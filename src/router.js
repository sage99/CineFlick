import Vue from 'vue'
import Router from 'vue-router'
// const Home = '@/components/Home'
// const MovieDetails = '@/components/Movie/MovieDetails'
// const Login = '@/components/Login'
// const MoviesFavourites = '@/components/Favourites/MoviesFavourites'
// const MoviesWatchlist = '@/components/Watchlist/MoviesWatchlist'
// const TVShows = '@/components/TV/TVShowsList'
// const TVShowDetails = '@/components/TV/TVShowDetails'
// const TVFavourites = '@/components/Favourites/TVFavourites'
// const TVWatchlist = '@/components/Watchlist/TVWatchlist'
// const Profile = '@/components/Profile'
// const CastAndCrew = '@/components/Cast_Crew'
// const SearchResult = '@/components/Search/Intermediate-Search'
// const Playlists = '@/components/Playlist/Playlists'
// const PlaylistDetails = '@/components/Playlist/PlaylistDetails'

// const blockstack = window.blockstack
Vue.use(Router)
const router = new Router({
  routes: [
    // { path: '/', redirect: blockstack.isUserSignedIn() ? '/movies/in-theatre' : '/login' },
    // {path: '/login', redirect: window.blockstack.isUserSignedIn() ? '/movies/in-theatre' : '/login'},
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ '@/components/Login')
      // component: Login
    },
    {
      path: '/movies/:type',
      name: 'Home',
      // component: Home
      component: () => import(/* webpackChunkName: "home" */ '@/components/Home')
    },
    {
      path: '/tv/:type',
      name: 'TVShows',
      // component: TVShows,
      component: () => import(/* webpackChunkName: "tvshowlist" */ '@/components/TV/TVShowsList')
    },
    {
      path: '/movie/:id',
      name: 'MovieDetails',
      // component: MovieDetails
      component: () => import(/* webpackChunkName: "movie_details" */ '@/components/Movie/MovieDetails')
    },
    {
      path: '/tv/:id',
      name: 'TVShowDetails',
      // component: TVShowDetails
      component: () => import(/* webpackChunkName: "tvshowdetails" */ '@/components/TV/TVShowDetails')
    },
    {
      path: '/favourite-movies',
      name: 'FavouriteMovies',
      // component: MoviesFavourites
      component: () => import(/* webpackChunkName: "movie_favourites" */ '@/components/Favourites/MoviesFavourites')
    },
    {
      path: '/movie-watchlist',
      name: 'MoviesWatchlist',
      // component: MoviesWatchlist
      component: () => import(/* webpackChunkName: "movie_watchlist" */ '@/components/Watchlist/MoviesWatchlist')
    },
    {
      path: '/favourite-tv-shows',
      name: 'TVFavourites',
      // component: TVFavourites
      component: () => import(/* webpackChunkName: "tvfavourites" */ '@/components/Favourites/TVFavourites')
    },
    {
      path: '/tv-watchlist',
      name: 'TVWatchlist',
      // component: TVWatchlist
      component: () => import(/* webpackChunkName: "tvwatchlist" */ '@/components/Watchlist/TVWatchlist')
    },
    {
      path: '/profile',
      name: 'Profile',
      // component: Profile
      component: () => import(/* webpackChunkName: "profile" */ '@/components/Profile')
    },
    {
      path: '/cast-and-crew',
      name: 'CastAndCrew',
      // component: CastAndCrew
      component: () => import(/* webpackChunkName: "cast_crew" */ '@/components/Cast_Crew')
    },
    {
      path: '/search-results/:type',
      name: 'SearchResult',
      // component: SearchResult
      component: () => import(/* webpackChunkName: "intermediate_search" */ '@/components/Search/Intermediate-Search')
    },
    {
      path: '/playlists',
      name: 'Playlists',
      // component: Playlists
      component: () => import(/* webpackChunkName: "playlists" */ '@/components/Playlist/Playlists')
    },
    {
      path: '/playlist/:id',
      name: 'Playlist',
      // component: PlaylistDetails
      component: () => import(/* webpackChunkName: "playlist_details" */ '@/components/Playlist/PlaylistDetails')
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
