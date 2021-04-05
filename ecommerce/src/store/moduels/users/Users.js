import axios from '@/axios'

export default {
  state: {
    users: []
  },
  getters: {
    users: state => state.users
  },
  mutations: {
    
    SET_USERS: (state, users) => {
      state.users = users
    }
  },
  actions: {

    getUsers: async ({commit}) => {
      const res = await axios.get('/users')
      commit('SET_USERS', res.data)
    }
   
  },

}