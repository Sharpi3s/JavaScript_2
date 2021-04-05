import axios from '@/axios'


export default {
  state: {
    orders: [],
    userOrder: null,
    lastOrder: null
    
  },
  getters: {
    orders: state => state.orders,
    userOrder: state => state.userOrder,
    lastOrder: state => state.lastOrder

  },
  mutations: {
    GET_ORDERS: (state, orders) => {
        // state.orders = orders.reverse()

        let ordersDate = orders.map(order => {
          order.createdAt = dateBuilder(new Date(order.createdAt))
          return order
        })
        state.orders = ordersDate.reverse()
    },
    GET_ONE_ORDER: (state, result) => {
      // state.userOrder = resultat.reverse()
      let ordersDate = result.map(order => {
        order.createdAt = dateBuilder(new Date(order.createdAt))
        return order
      })
      state.userOrder = ordersDate.reverse()
    },
    LAST_ORDER: (state, lastOrder) => {
      state.lastOrder = lastOrder
    }


  },
  actions: {
    getOrders: async ({commit}) => {
      const res = await axios.get('/orders')
      commit('GET_ORDERS', res.data)
    },
    findUserOrder: async ({commit}, id) => {
      const res = await axios.get('/orders')
      const resultat = await res.data.filter(order => order.userId === id)
      commit('GET_ONE_ORDER', resultat)
    },
    /* För att få till en tacksida med order detaljer hämtar jag sista ordern som är tillagd i arrayen. 
    Fungerar inte helt felfritt men blir den effekten jag ville komma åt när det väl fungerar */
    getLastOrder: async ({commit}) => {
      const res = await axios.get('/orders')
      let lastOrder = await res.data.slice(-1)[0]
      commit('LAST_ORDER', lastOrder)
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