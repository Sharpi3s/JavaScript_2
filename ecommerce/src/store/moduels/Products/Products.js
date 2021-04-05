import axios from '@/axios'

export default {
  state: {
    products: [],
    sortedProducts: [],
    categorys: null,
    dresses: [],
    bottoms: [],
    tops: [],

  },
  getters: {
    products: state => state.products,
    dresses: state => state.dresses,
    bottoms: state => state.bottoms,
    tops: state => state.tops,
    sortedProducts: state => state.sortedProducts,
    categorys: state => state.categorys
  },
  mutations: {
    GET_PRODUCTS: (state, products) => {
        state.products = products
    },
    DRESSES: (state, dresses) => {
       state.dresses = dresses
    },
    DRESSES_P: (state, dresses) => {
       state.products = dresses
    },
    BOTTOMS: (state, bottoms) => {
        state.bottoms = bottoms
    },
    BOTTOMS_P: (state, bottoms) => {
        state.products = bottoms
    },
    TOPS: (state, tops) => {
        state.tops = tops
    },
    TOPS_P: (state, tops) => {
        state.products = tops  
    },
      

  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('/products')
      commit('GET_PRODUCTS', res.data)
    },
    sortDresses: async ({commit}, data) => {
      const res = await axios.get('/products')
      // const product = await res.data.sort(product => product.category)
      const dresses = await res.data.filter(x => x.category === 'Dresses')
      if(data === 'dresses') {
        commit('DRESSES', dresses)
      }
      else {
        commit('DRESSES_P', dresses)
      }
 
      
    },
    sortBottoms: async ({commit}, data) => {
      const res = await axios.get('/products')
 
      const bottoms = await res.data.filter(x => x.category === 'Bottoms')
      if(data === 'bottoms') {
        commit('BOTTOMS', bottoms)
      }
      else {
        commit('BOTTOMS_P', bottoms)
      }
      
    },
    sortTops: async ({commit}, data) => {
      const res = await axios.get('/products')

      const tops = await res.data.filter(x => x.category === 'Tops')
      if(data === 'tops') {
        commit('TOPS', tops)
      }
      else {
        commit('TOPS_P', tops)
      }
      
    }

   
  },

}