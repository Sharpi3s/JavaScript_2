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
      
              <my-order-body v-for="order in userOrder" :key="order._id" :order="order" />
      
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
import MyOrderBody from '../components/Orders/MyOrderBody.vue'
import orderDetails from '../components/Orders/orderDetails'

export default {
  components: {
    MyOrderBody,
    orderDetails

  },
  methods: {
    ...mapActions(['getOrders', 'checkUser', 'findUserOrder', 'sortOrders']),
    test() {
     this.sortOrders()
      
    }
  },
  computed: {
    ...mapGetters(['orders', 'oneUser', 'userOrder'])
  },
  mounted() {
    // this.getOrders()
    //  this.getOrders()
    this.findUserOrder(this.oneUser._id)
    
  },
  
}
</script>

<style>
.oBody {
  min-height: calc(100vh - 320px);
}
.orders {
  height: calc(100vh - 300px);
  overflow-y: auto;
  margin-bottom: 2rem;
}

</style>