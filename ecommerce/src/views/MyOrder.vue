<template>
  <div class="container mt-5" v-if="lastOrder">
   <div class="col-8 m-auto my-5">
      <!-- <div class="mb-5">
        <h1>ORDER CONFIRMATION</h1>
        <h5 class="text-muted">Order Number: {{ lastOrder._id }}</h5>
      </div> -->
    <div class="my-5 text-center">
      <h2>Thanks for your order!</h2>
      <h5>This is your confirmation email. We'll be in touch soon to let you <br>know when your order has been shipped. Below is your order info.</h5>
    </div>
    <hr>
    <div class="d-flex justify-content-between col-8 py-4">
      <div>
        <div>
          <p class="text-muted">Order number</p>
          <p><strong>{{ lastOrder._id }}</strong></p>
        </div>
        <div>
          <p class="text-muted">Order date</p>
          <p><strong>{{ lastOrder.createdAt }}</strong></p>
        </div>
        <div>
          <p class="text-muted">Delivery method</p>
          <p><strong>Standard pick up location</strong> </p>
        </div>
      </div>
      <div>
        <div>
          <p class="text-muted">Name</p>
          <p><strong>{{ oneUser.firstName }} {{ oneUser.lastName }}</strong></p>
        </div>
        <div>
          <p class="text-muted">Email</p>
          <p><strong>{{ oneUser.email }}</strong></p>
        </div>
      </div>
    </div>
    <hr>
    <div class="my-5">
       <h5>Details:</h5>
        <table class="table table-hover border mb-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              
              <th scope="col">Item Nr</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <my-order-products v-for="product in lastOrder.cart" :key="product._id" :product="product" />
          </tbody>
        </table>

        <hr>
        <div class="pt-3 d-flex flex-column align-items-end">
          
          <div class="col-4 ">
            <div class="d-flex justify-content-between">
              <h6 class="text-muted">Products total</h6>
              <h6 class="text-muted">$ {{ lastOrder.totalprice }}</h6>
            </div>
            <div class="d-flex justify-content-between">
              <h6 class="text-muted">Delivery</h6>
              <h6 class="text-muted">$ {{ delivery }}</h6>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
              <h4>TOTAL</h4>
              <h4>$ {{ lastOrder.totalprice  }}</h4>
            </div>
          </div>
        </div>

    

    </div> 
   </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MyOrderProducts from '../components/Orders/MyOrderProducts.vue'
export default {
  components: { MyOrderProducts },
  // props: ['id'],
  data() {
    return {
      // order: this.newOrder
      // order: this.last_element
      // last: this.last
      delivery: 6,
      // thisUser: this.user
    }
  },
  computed: {
    ...mapGetters(['newOrder', 'orders', 'lastOrder', 'oneUser']),
 
  }, 

  methods: {
    ...mapActions(['getOneOrder', 'getOrders', 'getLastOrder', 'getOneUser', 'checkUser']),
    amount() {
      
      let total = this.lastOrder.totalprice

      if(total > 50) {
        
        // let noDelivery = this.lastOrder.totalprice - this.delivery
        
        // this.lastOrder.totalprice = noDelivery
        this.delivery = 0
        // console.log(noDelivery)
        // console.log( this.lastOrder.totalprice)
      } else {
        total = total + this.delivery
      }
      

     
    }
    

  },
  beforeCreate() {
    
  },
  async created() {
    // this.checkUser()
    await this.getLastOrder() 
    this.amount()
  },
  mounted() {

    this.$forceUpdate();
   
  }
}
</script>

<style>

</style>



