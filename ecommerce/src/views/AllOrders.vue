<template>
  <div class="container mt-5 oBody">
    
    <div class="d-flex justify-content-between">
      
      <div class="col-6">
        <h2>ORDERS</h2>
          <table class="table">
            <thead>
              <tr>
                <!-- <th scope="col"></th> -->
                <th scope="col">Email</th>
                <th scope="col">Order Nr</th>
                <th scope="col">Amount</th>
                <!-- <th scope="col"></th> -->
              </tr>
            </thead>
            <tbody>
      
              <order-body v-for="order in orders" :key="order._id" :order="order" />
      
            </tbody>
          </table>

         
        
      </div>
      <div  class="col-4  me-5">
        <h4 class="mt-2 mb-4">Order details:</h4>
        <div class="orders">
          <order-details />
        </div>
          
      </div>
    </div>
     
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import OrderBody from '../components/Orders/OrderBody.vue'
import OrderDetails from '../components/Orders/orderDetails.vue'

export default {
  components: {
    OrderBody,
    OrderDetails

  },
  methods: {
    ...mapActions(['getOrders'])
  },
  computed: {
    ...mapGetters(['orders'])
  },
  mounted() {
    this.getOrders()
  }
}
</script>

<style>
.pink-hover:hover {
  background-color: #FBF9FA !important;
}
</style>