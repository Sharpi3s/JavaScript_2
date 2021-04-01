import axios from 'axios'

export default {
  state: {
    product: null,
    newProduct: null
    
  },
  getters: {
    product: state => state.product,
    newProduct: state => state.newProduct
  },
  mutations: {
    GET_A_PRODUCT: (state, product) => {
      state.product = product
    },
    DELETE_A_PRODUCT: (state, product) => {
      state.product = product
    },
    NEW_PRODUCT: (state, newProduct) => {
      state.newProduct = newProduct
    }
  },
  actions: {

    getOneProduct: async ({commit}, _id) => {
      const res = await axios.get('http://localhost:9999/api/products/' + _id)
      commit('GET_A_PRODUCT', res.data)
    }, 
    deleteOneProduct: async ({commit}, _id) => {
      const res = await axios.delete('http://localhost:9999/api/products/' + _id)
      commit('DELETE_A_PRODUCT', res.data)
    },
   
    addProduct: async ({commit}, data) => {
      const newProduct = {

        title: data.title,
        description: data.description,
        price: data.price,
        color: data.color,
        img: data.img,
        category: data.category
      }
      await axios.post('http://localhost:9999/api/products', newProduct)
      commit('NEW_PRODUCT', {newProduct})
    },
  },

}