import axios from '@/axios'
import router from '@/router'
import jwt_decode from "jwt-decode";

export default {
  state: {
    oneUser: null,
    user: null,
    userToken: null,
    loggedIn: false,
    errorLoggin: null,
    delUser: null,
    updateOneUser: null
  },
  getters: {
    user: state => {
      if(state.user) {
        let date = dateBuilder(new Date(state.user.created))
        let user = {
          ...state.user,
          created: date
        }
        return user
      }
      return state.user
    } ,
    oneUser: state => {
      if(state.oneUser) {
        let date = dateBuilder(new Date(state.oneUser.created))
        let oneUser = {
          ...state.oneUser,
          created: date
        }
        return oneUser
      }
      return state.oneUser
    } ,
    

    loggedIn: state => state.loggedIn,
    errorLoggin: state=> state.errorLoggin,
    delUser: state=> state.delUser
  },
  mutations: {
    GET_USER: (state, user) => {
      
      state.user = user
    },
    SET_USER: (state, token) => {
      if(token) {
        const user = jwt_decode(token)
        console.log(user)
        state.userToken = token
        state.loggedIn = true
      } else {
        state.userToken = null
        state.loggedIn = false
      }
    },
    CHECK_USER: state => {
      
      try {
        let token = localStorage.getItem('token')
        let decode = jwt_decode(token)
        let user = decode.user
        if(token) {
          state.oneUser = user
          state.userToken = token
          state.loggedIn = true
          
        } else {
          state.oneUser = null
          state.userToken = null
          state.loggedIn = false
        }
      }
      catch(err) {
        console.log(err)
      }
    },
    ERROR_USER: state => {
      state.errorLoggin = 'Email or password does not exist'  
    },
    SUCSSES_USER: state => {
      state.errorLoggin = null
    },
    DELETE_ONE_USER: (state, data) => {
      state.delUser = data
    },
    UPDATE_ONE_USER: (state, data) => {
      state.updateOneUser = data
    }
   
  },
  actions: {
    getOneUser: async ({commit}, _id) => {
      const res = await axios.get('/users/' + _id)
      commit('GET_USER', res.data)
    },
  

    register: async ({dispatch}, _user) => {
      const user = {
        email: _user.email,
        password: _user.password
      }
      await axios.post('/users/register', _user)
      dispatch('login', {user})
    },

    login: ({commit, dispatch}, payload) => {

      axios.post('/users/login', payload.user)
        .then(res => {
          if(res.status === 200) {
            
            localStorage.setItem('token', res.data.token)

           
            commit('SET_USER', res.data.token)
            dispatch('checkUser')
            commit('SUCSSES_USER')

            if(payload.route) {
              router.push(payload.route)
            } 

          } 

        })
        .catch(res =>{
          
          console.log(res)
          console.log('fel lösenord eller email')
          commit('ERROR_USER')
        })
    },
 
    checkUser: ({commit}) => {
      commit('CHECK_USER')
    },
    logout: ({commit}) => {
      let token = localStorage.getItem('token')
      if(token) {
        localStorage.removeItem('token')
        router.push({name: 'Home'}).catch(error => {
          if(error.name != "NavigationDuplicated") {
            throw error;
          }
        })
        commit('SET_USER', null)
      }
    },
    deleteOneUser: async ({commit}, _id) => {
      const res = await axios.delete('/users/' + _id)
      commit('DELETE_ONE_USER', res.data)
    },
    updateUser: async ({commit}, _user) => {
      await axios.patch('/users/' + _user._id, _user)

      commit('UPDATE_ONE_USER', _user)
    }

  },

}
const dateBuilder = (d) => {
  let year = d.getFullYear() 
  let month = d.getMonth() + 1
  let day = d.getDate()

  let date = `${year}-${month}-${day}`
  return date
}