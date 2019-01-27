import HTTP from './http-handler'
const TVService = {
  getOnAir: (query) => {
    return HTTP.get('tv/on_the_air', { params: { language: 'en-US', ...query } })
  },
  getLatest: (query) => {
    return HTTP.get('tv/latest', { params: { language: 'en-US', ...query } })
  },
  getAiringToday: (query) => {
    return HTTP.get('tv/airing_today', { params: { language: 'en-US', ...query } })
  },
  getPopular: (query) => {
    return HTTP.get('tv/popular', { params: { language: 'en-US', ...query } })
  },
  getTopRated: (query) => {
    return HTTP.get('tv/top_rated', { params: { language: 'en-US', ...query } })
  },
  getTVShowDetails: (query) => {
    return HTTP.get(`tv/${query.id}`, { params: { language: 'en-US', append_to_response: 'credits,videos,similar,seasons,reviews,keywords' } })
  }
}
export default TVService
