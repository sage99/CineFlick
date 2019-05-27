import axios from 'axios'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJqdGkiOiJlMDY4MWU2Mi03NzJjLTQzYzItOTU4OC04NGM4OWUwMjA2YjgiLCJpYXQiOjE1NTM0MTc0OTAsImV4cCI6MTU1NjA5NTg5MCwiaXNzIjoiZGlkOmJ0Yy1hZGRyOjE1THZ4WlJ6ZXVxekZtRkYyM3ZGdnNFTmhGUUc2ZHVIeGEiLCJwcml2YXRlX2tleSI6IjdiMjI2OTc2MjIzYTIyNjQzODMyMzgzODYxMzc2NjMwMzQzNDY2Mzk2MjM1Mzg2MTM0NjIzMTM0Mzg2MjYxMzg2NDM1NjE2MTYxMzQ2MjIyMmMyMjY1NzA2ODY1NmQ2NTcyNjE2YzUwNGIyMjNhMjIzMDMzMzE2NDY2MzM2MTM0MzAzNDY1NjI2MzYxNjQzMjY2MzAzMjM2MzAzNDM2MzU2NDM3MzQzNTM3MzUzMDM2NjYzMjM2Mzg2MjM2NjEzNTYyMzk2MTM3Mzc2MjM1MzQ2MjM4Mzc2MjM0MzczNDMyMzA2MzY0NjQ2MzMzMzUzMDMxMzEyMjJjMjI2MzY5NzA2ODY1NzI1NDY1Nzg3NDIyM2EyMjYyMzczNTM5MzY2NTM5MzQzMDYzNjI2NTY0MzI2MTM4MzMzOTY1MzUzMDM0MzY2NDM2MzIzNTMwNjE2NDM0MzMzNjM3MzEzMjM2MzYzMDM1MzgzNDM1MzI2NTM2NjQ2NDMxMzUzMjM4NjUzOTY2MzgzNTM5NjI2NTMzMzUzODMxNjMzNTY1MzQ2MTYzNjIzMzYyMzIzNjMwMzEzMjMzMzAzNTMxMzYzNzYyNjI2NTYzNjMzNzY1MzAzODYzNjI2MjYxNjEzODY0MzA2NTYzNjM2MzMyMzAzNDYzNjUzOTM4MzU2NTY0NjUzNzM0NjIzNDYyNjMzNjYxNjM2NjM4MzAzNDY1MzczMDM2Mzc2NjYyMzYzNjYyMzgzNzMzNjYzMzM4MzEzNDM1NjYzMjMxMzA2NjMyMzUzNDMyMzAzNzM0MjIyYzIyNmQ2MTYzMjIzYTIyMzk2NjY2MzI2MjM2NjYzNDYxMzU2MTY0MzEzNTM1MzU2MTYxMzYzMjY0MzIzNDM0NjMzODYxMzE2MzMxMzM2MTY1NjEzNDY0NjMzNjM2MzY2NjM1MzI2MTMyMzk2NTM4MzA2NTY2MzkzMzYyMzAzNTYxMzM2NDM4Mzg2NDYxMzkyMjJjMjI3NzYxNzM1Mzc0NzI2OTZlNjcyMjNhNzQ3Mjc1NjU3ZCIsInB1YmxpY19rZXlzIjpbIjAyNzFiZTE3ODRlMGQ5NzNiYmJhMGI0N2EzNGQ5MmY0NjNmN2RlNTNhOTVhYjA2NzMxODg1ZmFhMDViMzIzNTUyMSJdLCJwcm9maWxlIjpudWxsLCJ1c2VybmFtZSI6ImFrYXNoa2F1c2hpazMzLmlkLmJsb2Nrc3RhY2siLCJjb3JlX3Rva2VuIjpudWxsLCJlbWFpbCI6bnVsbCwicHJvZmlsZV91cmwiOiJodHRwczovL2dhaWEuYmxvY2tzdGFjay5vcmcvaHViLzE1THZ4WlJ6ZXVxekZtRkYyM3ZGdnNFTmhGUUc2ZHVIeGEvcHJvZmlsZS5qc29uIiwiaHViVXJsIjoiaHR0cHM6Ly9odWIuYmxvY2tzdGFjay5vcmciLCJibG9ja3N0YWNrQVBJVXJsIjpudWxsLCJhc3NvY2lhdGlvblRva2VuIjpudWxsLCJ2ZXJzaW9uIjoiMS4zLjEifQ.vVP_LqK5gpTjtfVyi9gW6xfuCFSFO8opyR9iA8OIYIIhW45GhoCGsk4VnOv5kKYh-46XsIErssXeJDUIEG9RfA_2bgthh2bft'

// common axios instance for all blockstack api calls with base Url
const HTTP = axios.create({
  baseURL: 'https://api.cineflick.net',
  // baseURL: 'http://localhost:3000',
  // params: {
  //   api_key: '13e556517a6530f85508fc4c4c6e1a7d'
  // },
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    // 'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  }
})

// axios interceptors for request and response,
// these can be used to perfrom some action based on requirement
// before response reached the fucntion calling the api
HTTP.interceptors.request.use(
  request => request,
  error => Promise.reject(error)
)

HTTP.interceptors.response.use(
  response => Promise.resolve(response),
  error => Promise.reject(error)
)

const cineflickService = {
  createPublicPlaylist: (playlist) => {
    console.log('playlist', playlist)
    return HTTP.post('/upload', playlist)
  },
  deletePublicPlaylist: (playlist) => {
    console.log('playlist', playlist)
    return HTTP.post('/delete', playlist)
  },
  getPublicPlaylist: () => {
    return HTTP.get('/getData')
  },
  getPublicPlaylistDetails: () => {
    return HTTP.get('/getData')
  }
}

export default cineflickService
