import HTTP from './http-handler'
const SearchService = {
  search: (query) => {
    return HTTP.get('search/multi', { params: { language: 'en-US', ...query } })
  },
  trending: () => {
    return HTTP.get('trending/all/day')
  }
}
export default SearchService
