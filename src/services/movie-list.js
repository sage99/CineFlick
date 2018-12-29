import HTTP from './http-handler'
const movieService = {
  getInTheatreMovies: (query) => {
    return HTTP.get('movie/now_playing', { params: { language: 'en-US', ...query } })
  },
  getPopularMovies: (query) => {
    return HTTP.get('movie/popular', { params: { language: 'en-US', ...query } })
  },
  getTopRatedMovies: (query) => {
    return HTTP.get('movie/top_rated', { params: { language: 'en-US', ...query } })
  },
  getMovieDetails: (query) => {
    return HTTP.get(`movie/${query.id}`, { params: { language: 'en-US', append_to_response: 'credits,videos,similar' } })
  }
}
export default movieService
