<template>
  <div class="d-flex">
    <aside class="col-2 ">
   
       <div class=" p-5 mt-5">
        <p class="h5 mb-4" @click="bottoms">Bottoms</p>
        <p class="h5 mb-4" @click="dresses">Dresses</p>
        <p class="h5 mb-4" @click="tops">Tops</p>
        <p class="h5 mb-4" @click="all">See All Products</p>

       </div>
      
    </aside>

   <div class="col-8 my-5">
    

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      
      <product-card v-for="product in products" :key="product._id" :product="product"/>
  
    </div>
   </div>
    
  </div>
</template>

<script>

import ProductCard from '../components/Products/ProductCard'

import {mapActions, mapGetters} from 'vuex'
// import {mapGetters} from 'vuex'


export default {
  components: {
    ProductCard
    
  },
  methods: {
    ...mapActions(['getProducts', 'sortDresses', 'sortBottoms', 'sortTops']),
    async dresses() {
      await this.sortDresses()
      this.reverse()
    },
    async tops() {
      await this.sortTops()
      this.reverse()
    },
    async bottoms() {
      await this.sortBottoms()
      this.reverse()
    },
    async all() {
      await this.getProducts()
      this.reverse()
    },
    reverse() {
      let reverse = this.products
      return reverse.reverse()
    }

  },
  computed: {
    ...mapGetters(['products'])
  },
  async mounted() {
    await this.getProducts()
    this.reverse()
  }
}
</script>

<style scoped>
  p:hover {
    text-decoration: underline;
    cursor: pointer;
  }
</style>