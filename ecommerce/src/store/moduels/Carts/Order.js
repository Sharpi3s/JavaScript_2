import axios from '@/axios'

export default {
  state: {
    order: null,
    newOrder: null,
    oneOrder: null,
    delOrder: null

  },
  getters: {
    order: state => {
      if(state.order) {
        let date = dateBuilder(new Date(state.order.createdAt))
        let order = {
          ...state.order,
          createdAt:date
        }
        return order
      }
      return state.order
    } ,
    newOrder: state => state.newOrder,
    delOrder: state => state.delOrder

  },
  mutations: {
    GET_A_ORDER: (state, order) => {
      state.order = order
    },
    ADD_ORDER: (state, newOrder) => {
      state.newOrder = newOrder
    },
    ONE_ORDER: (state, oneOrder) => {
      state.oneOrder = oneOrder
    },
    DELETE_A_ORDER: (state, order) => {
      state.delOrder = order
    },
   
    

  },
  actions: {
    getOneOrder: async ({commit}, _id) => {
      const res = await axios.get('/orders/' + _id)
      commit('GET_A_ORDER', res.data)
    },


    addOrder: async ({dispatch}, data) => {
      const newOrder = {
        userId: data.user._id,
        email: data.user.email,
        cart: data.cart,
    
        totalprice: data.totalPrice
      }
      await axios.post('/orders', newOrder)
      dispatch('myOrder', {newOrder})
    },

    /* försökte få tag på ordern direkt efter den skapats så jag kunde skriva ut den på en order detalj sida när orden skapats
    Men fungerade inte alls så som jag tänkt. Gjorde en provosorisk lösning istället där jag hämtar sisa tillagda ordern i min array */
    myOrder: async ({commit}, {newOrder}) => {
      commit('ADD_ORDER', {newOrder})
    },
  
    deleteOneOrder: async ({commit}, _id) => {
      const res = await axios.delete('/orders/' + _id)
      commit('DELETE_A_ORDER', res.data)
    },

  },

}

const dateBuilder = (d) => {
  let year = d.getFullYear() 
  let month = d.getMonth() + 1
  let day = d.getDate()

  let date = `${year}-${month}-${day}`
  return date
}