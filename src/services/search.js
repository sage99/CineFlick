import HTTP from './http-handler'
const SearchService = {
  search: (query) => {
    return HTTP.get(`search/${query.type || 'multi'}`, { params: { language: 'en-US', ...query } })
  },
  trending: () => {
    return HTTP.get('trending/all/day')
  },
  searchMovieKeyword: (keyword) => {
    return HTTP.get(`discover/movie`, { params: { language: 'en-US', sort_by: 'popularity.desc', with_keywords: keyword } })
  },
  searchTVKeyword: (keyword) => {
    return HTTP.get(`discover/tv`, { params: { language: 'en-US', sort_by: 'popularity.desc', with_keywords: keyword } })
  },
  searchGenres: (query) => {
    return HTTP.get(`discover/movie`, { params: { language: 'en-US', ...query } })
  },
  getGenres: () => {
    return HTTP.get(`genre/movie/list`, { params: { language: 'en-US' } })
  }
}
export default SearchService
