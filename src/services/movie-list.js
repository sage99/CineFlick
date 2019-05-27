import HTTP from './http-handler'
const movieService = {
  getInTheatreMovies: (query) => {
    return HTTP.get('movie/now_playing', { params: { language: 'en-US', ...query, region: 'US', sort_by: 'popularity.desc' } })
    // let d = new Date()
    // let oneMonthOldDate = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0] // `${new Date().getYear()}-${new Date().getMonth() - 1}-${new Date().getDay()}`  // new Date(new Date().setMonth(new Date().getMonth() - 1)).toDateString()
    // let currentDate = new Date().toISOString().split('T')[0] // new Date(new Date().setMonth(new Date().getMonth() - 1)).toDateString()
    // console.log('yoooo', oneMonthOldDate)
    // return HTTP.get(`discover/movie`, { params: { language: 'en-US', ...query, region: 'US', sort_by: 'popularity.desc', 'primary_release_date.gte': oneMonthOldDate, 'primary_release_date.lte': currentDate, 'with_release_type': '2| 3| 4' } })
    // return HTTP.get('movie/now_playing', { params: { language: 'en-US', ...query, region: 'US' } })
    // let d = new Date()
    // let oneMonthOldDate = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0] // `${new Date().getYear()}-${new Date().getMonth() - 1}-${new Date().getDay()}`  // new Date(new Date().setMonth(new Date().getMonth() - 1)).toDateString()
    // let currentDate = new Date().toISOString().split('T')[0] // new Date(new Date().setMonth(new Date().getMonth() - 1)).toDateString()
    // console.log('yoooo', oneMonthOldDate)
    // return HTTP.get(`discover/movie`, { params: { language: 'en-US', ...query, region: 'US', sort_by: 'popularity.desc', 'primary_release_date.gte': oneMonthOldDate, 'primary_release_date.lte': currentDate, 'with_release_type': '2| 3| 4' } })
    // return HTTP.get('movie/now_playing', { params: { language: 'en-US', ...query, region: 'US' } })
  },
  getPopularMovies: (query) => {
    return HTTP.get('movie/popular', { params: { language: 'en-US', ...query } })
  },
  getTopRatedMovies: (query) => {
    return HTTP.get('movie/top_rated', { params: { language: 'en-US', ...query } })
  },
  getMovieDetails: (query) => {
    return HTTP.get(`movie/${query.id}`, { params: { language: 'en-US', append_to_response: 'credits,videos,similar,reviews,keywords' } })
  }
}
export default movieService
