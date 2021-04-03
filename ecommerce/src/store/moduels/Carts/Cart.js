// import axios from 'axios'

export default {
  state: {
    cart: [],
    // total: 0
  },
  getters: {
    // cart: state => state.cart
    cart: state => {
      if(sessionStorage.getItem('shoppingCart') !== null) {
        state.cart = JSON.parse(sessionStorage.getItem('shoppingCart'))
      }
      return state.cart
    },
    cartItemCount: state => {
      let items = 0
      state.cart.forEach(item => {
        items += item.quantity
      })
      return items
    },
    cartPriceTotal: state => {
      let total = 0 
      state.cart.forEach(tot => {
        total += tot.amount
        // console.log(tot.amount)
      })
      return total
    }
    // total: state => state.total
  },
  mutations: {

    ADD_PRODUCT_TO_CART: (state, { product, quantity, size, amount}) => {
      let exists = state.cart.find(item => item.product._id === product._id && item.size === size)

      if(exists) {

        exists.quantity += quantity
        exists.amount += amount 
        sessionStorage.setItem('shoppingCart', JSON.stringify(state.cart))
        return
        
      }
      state.cart.push({product, quantity, size, amount})
      sessionStorage.setItem('shoppingCart', JSON.stringify(state.cart))
    }, 
 
    DELETE_ONE_CART_ITEM: (state, {product, size}) => {
      // state.cart = state.cart.filter(item => item.product._id !== product._id && item.size === size)
      // let exists = state.cart.find(item => item.size === size)
      const index = state.cart.findIndex( i => i.product._id === product._id && i.size === size);
      state.cart.splice( index, 1 );
      sessionStorage.setItem('shoppingCart', JSON.stringify(state.cart))
    },

    DELETE_CART: (state) => {
      state.cart = []
      sessionStorage.setItem('shoppingCart', JSON.stringify(state.cart))
    },

    ADD_ITEM: (state, {product, size} ) => {
      let exists = state.cart.find(item => item.product._id === product._id && item.size === size )
      if(exists) {

        exists.quantity += 1
        exists.amount += product.price 
        // state.cartPriceTotal 
        sessionStorage.setItem('shoppingCart', JSON.stringify(state.cart))
        return 
      }
      
    },

    SUB_ITEM: (state, {product, size} ) => {
      let exists = state.cart.find(item => item.product._id === product._id && item.size === size )
      if(exists && exists.quantity > 1) {

        exists.quantity -= 1
        exists.amount -= product.price 
        sessionStorage.setItem('shoppingCart', JSON.stringify(state.cart))
        return
      }
     
    },
   
 
  },
  actions: {

    addToCart: ({commit}, { product, quantity, size, amount }) => {
      commit('ADD_PRODUCT_TO_CART', { product, quantity, size, amount })
    },

    deleteOneCartItem: ({commit}, { product, quantity, size }) => {
      commit('DELETE_ONE_CART_ITEM', { product, quantity, size })
    },

    deleteCart: ({commit}) => {
      commit('DELETE_CART')
    },

    addItem: ({commit}, { product, size }) => {
      commit('ADD_ITEM', { product, size })
    },

    subItem: ({commit}, { product, size }) => {
      commit('SUB_ITEM', { product, size })
    },

  },
 
}

