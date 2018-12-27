import HTTP from './http-handler'
const moviesListService = {
  getInTheatre: () => {
    return HTTP.get('movie/now_playing', { params: { api_key: '13e556517a6530f85508fc4c4c6e1a7d', language: 'en-US' } })
  }
}
export default moviesListService
