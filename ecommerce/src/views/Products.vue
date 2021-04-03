<template>
  <div class="container mt-5">
    <div v-if="this.oneUser.admin">
    <!-- <div v-if="this.oneUser.admin"> -->
      <div class="text-center">
        <div class="btn rounded-0 me-5" :class="allClasses" @click="change('AllProducts')">Products</div>
        <div class="btn rounded-0" :class="addClasses" @click="change('AddProduct')">Add Product</div>
      </div>
        <keep-alive>
          <component :is="comp" />
        </keep-alive>
    </div>

    <div v-else>
      <not-found />
      
    </div>
  </div>
</template>

<script>
import AllProducts from '../components/Products/AllProducts'
import AddProduct from '../components/Products/AddProduct'
import { mapGetters } from 'vuex'
import NotFound from '../components/Error/NotFound.vue'
  export default {
    components: {
      AllProducts,
      AddProduct,
      NotFound
    },
    data() {
      return {
        comp: 'AllProducts',
        all: true,
        add: false
      }
    },
    methods: {
      change(val) {
        this.comp = val
        if(val === 'AllProducts') {
          this.all = true
          this.add = false
        } else {
          this.all = false
          this.add = true
        }
      }
    },
    computed: {
      allClasses() {
        return {
          'btn-outline-pink': this.all,
          '': !this.all
        }
      },
      addClasses() {
        return {
          'btn-outline-pink': this.add,
          '': !this.add
        }
      },
      ...mapGetters(['oneUser', 'loggedIn'])
    },

  }
</script>

<style scoped>
  .btn {
    margin-bottom: -1px ;
    box-shadow: none;
  }
  .btn-outline-pink {
    border: none;
    border-bottom: 2px solid #c38587f3;
  }
  .btn-pink:hover {
    background-color: #c38587f3;
    color: white;
  }
</style>