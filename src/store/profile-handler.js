const profileHandler = {
  state: {
    profileData: {}
  },
  mutations: {
    MUTATION_SET_PROFILE_DATA (state, payload) {
      state.profileData = payload
    }
  },
  actions: {},
  getters: {
    getProfileData: state => state.profileData
  }
}
export default profileHandler
