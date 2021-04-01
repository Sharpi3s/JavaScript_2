<template>
  <div v-if="order">
    <div class="mb-3">
      <h5>Order nr</h5>
      <p class="text-muted">{{ order._id }}</p>
    </div>
    <div class="mb-5">
      <h5>Products</h5>
      <details-order-products v-for="product in order.cart" :key="product._id" :product="product" />
    </div>
    
    <div class="mb-3">
      <h5 class="text-muted">Order date</h5>
      <p class="text-muted">{{ order.createdAt }}</p>
    </div>

    <div class="mb-3">
      <h5>Total amount</h5>
      <h5 class="text-muted">$ {{ order.totalprice }}</h5>
    </div>
        
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DetailsOrderProducts from './DetailsOrderProducts.vue'
export default {
  components: { DetailsOrderProducts },
  computed: {
    ...mapGetters(['order'])
  },
}
</script>

<style scoped>

</style>