// import axios from 'axios'

export default {
  state: {
    cart: [],
    // total: 0
  },
  getters: {
    // cart: state => state.cart
    cart: state => {
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

    // ADD_PRODUCT_TO_CART: (state, { product, quantity, size, amount}) => {
    //   let exists = state.cart.find(item => item.product._id === product._id)

    //   if(exists && exists.size === size) {

    //     exists.quantity += quantity
    //     exists.amount += amount 
    //     return
        
    //   }

    //   state.cart.push({product, quantity, size, amount})
    // },


    ADD_PRODUCT_TO_CART: (state, { product, quantity, size, amount}) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      
      
      // console.log(exists)

      if(exists) {
        
          console.log(size)
         
          
    
         
          // if(size === 'Small') {
            exists.quantity += quantity
            exists.amount += amount 
            return
          // }
          // if(size === 'Medium') {
          //   exists.quantity += quantity
          //   exists.amount += amount 
          //   return
          // }
          // if(size === 'Large') {
          //   exists.quantity += quantity
          //   exists.amount += amount 
          //   return
          // }

      }
      // if(exists && size === 'Medium') {
      //   // if(sizeExist) {
      //   // console.log(sizeExist.size)
      //   exists.quantity += quantity
      //   exists.amount += amount 
      //   return
      //   // console.log(exists.size)
      //   // }
        
      // }
      // if(exists && size === 'Large') {
      //   // if(sizeExist) {
      //   // console.log(sizeExist.size)
      //   exists.quantity += quantity
      //   exists.amount += amount 
      //   return
      //   // console.log(exists.size)
      //   // }
        
      // }

      state.cart.push({product, quantity, size, amount})
    },
 
    DELETE_ONE_CART_ITEM: (state, {product, size}) => {

      let exists = state.cart.find(item => item.product._id === product._id)
      // console.log(exists)
      if(exists && size === 'Medium') {
        state.cart = state.cart.filter(item => {
          console.log(size)
          return item.product._id !== product._id
        })
      }


      // if(quantity < 2 && size === 'Small') {
      //   state.cart = state.cart.filter(item => {
      //     console.log(size)
      //     return item.product._id !== product._id
      //   })
      // } 
      // else if(quantity < 2 && size === 'Medium') {
      //   state.cart = state.cart.filter(item => {
      //     console.log(size)
      //     return item.product._id !== product._id
      //   })
      // } 
      // else if(quantity < 2 && size === 'Large') {
      //   state.cart = state.cart.filter(item => {
      //     console.log(size)
      //     return item.product._id !== product._id
      //   })
      // } 

      // if(exists) {
      //   // else {
      //   //   exists.quantity -= 1
      //   //   exists.amount -= product.price
      //   // }  
      //   // if(quantity < 2) {
      //   //   state.cart = state.cart.filter(item => {
      //   //     console.log(size)
      //   //     return item.product._id !== product._id
      //   //   })
      //   // } 
      //   // else {
      //   //   exists.quantity -= 1
      //   //   exists.amount -= product.price
      //   // }  
      // }
    },
    DELETE_ONE_CART_ITEM_NAV: (state, {product}) => {
      let exists = state.cart.find(item => item.product._id === product._id)
      if(exists) {
        state.cart = state.cart.filter(item => {
          return item.product._id !== product._id
        })
      }

    },
    DELETE_CART: (state) => {
      state.cart = []
    }
 
  },
  actions: {

    addToCart: ({commit}, { product, quantity, size, amount }) => {
      commit('ADD_PRODUCT_TO_CART', { product, quantity, size, amount})
    },
    
    // deleteOneCartItem: ({commit}, {product, quantity}) => {
    //   commit('DELETE_ONE_CART_ITEM', {product, quantity})
    // }
    deleteOneCartItem: ({commit}, {product, quantity, size}) => {
      commit('DELETE_ONE_CART_ITEM', {product, quantity, size})
    },
    deleteOneCartItemNav: ({commit}, {product, quantity, size}) => {
      commit('DELETE_ONE_CART_ITEM_NAV', {product, quantity, size})
    },
    deleteCart: ({commit}) => {
      commit('DELETE_CART')
    }
  

  },
 
}


// ALLA OLIKA TEST TILL ATT LÄGGA TILL PRODUKTER I SAMMA STORLEK //

// ADD_PRODUCT_TO_CART: (state, { product, quantity, size, amount}) => {
//   let exists = state.cart.find(item => item.product._id === product._id)
//   // let sizeExist = state.cart.find(siz => siz.product.size === product.size)
//   // let sizeExist = state.cart.find(siz => siz.product.size === product.size)
//   console.log(exists)

//   // console.log(product)
//   // console.log(quantity)
  
//   // console.log(amount)
 

//   // if(exists && exists.size == size) {
//   //   // if(exists.product.size) {
      
      
//   //   //   console.log(exists.product.size)
//   //   // }
//   //   // exists.size += size
//   //   console.log(exists.size)

//   //   exists.quantity += quantity
//   //   exists.amount += amount 
    
//   //   return
//   // }

//   if(exists && exists.size === size) {
//     // if(sizeExist) {
//     // console.log(sizeExist.size)
//     exists.quantity += quantity
//     exists.amount += amount 
//     return
//     //   // console.log(exists.size)
//     // }
    
//   }



//   // if(exists) {
//   //   exists.quantity += quantity
//   //   exists.amount += amount 
//   //   return
//   // } 
//   // else if(exists.size === size) {
//   //   exists.quantity += quantity
//   //   exists.amount += amount 
//   //   return
//   // }
//   //   if(exists.size === size) {

//   // }
//   state.cart.push({product, quantity, size, amount})
// },