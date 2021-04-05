<template>
  <div class="container mt-5">
    <div>
      <h2>ORDERS</h2>
      <p class="mb-5">Select one order for more details.</p>
    </div>
    
    <div class="d-flex justify-content-between mb-5">
      <div class="col-6">

       
          <div class="col-11">
            <label class="form-label">Search orders by users email</label>
            <div class="input-group mb-3">

              <input type="text" class="form-control" v-model="searchMail">
              <span class="input-group-text border-0" id="search-addon"><i class="fas fa-search"></i></span>               
            </div>
          </div>
         

        <div class="tableHeight" v-if="orders.length">
          <table class="table" >
            <thead>
              <tr>

                <th scope="col">Email</th>
                <th scope="col">Order Nr</th>
                <th scope="col">Amount</th>
                <th scope="col">Remove</th>

              </tr>
            </thead>
            
              <order-body v-for="order in filter" :key="order._id" :order="order" />
           
          </table>
         </div>

      </div>
      <div  class="col-4 me-5">
        <h4 class="mt-2 mb-4">Order details:</h4>
        <div class="orders pe-3">
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
  data() {
    return {
      searchMail: '',
      searchNr: '',
    }
  },
  methods: {
    ...mapActions(['getOrders']),

  },
  computed: {
    ...mapGetters(['orders']),
    filter() {

      return this.orders.filter(i => i.email.match(this.searchMail))
    }
  },
  mounted() {
    this.getOrders()
    console.log(this.orders)
  }
}
</script>

<style>
.pink-hover:hover {
  background-color: #FBF9FA !important;
}
 .tableHeight {
    max-height: calc(100vh - 400px);
    overflow-y: auto;
  }

</style>