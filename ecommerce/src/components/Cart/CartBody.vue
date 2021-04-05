<template>

  <div class="bg-light shoppingBag">
    <div class="container d-flex pt-5">

      <div class="col-8 p-4">
        <h2 class="mb-5">Shopping bag items</h2>

        <login-pop v-show="closeThis" @close="closePop"/>

        <div class="card-row pe-4">
          
          <div v-if="cart.length < 1">
            <h2 class="mb-4">YOUR SHOPPING BAG IS EMPTY!</h2>
            <p class="mb-3">The products you select will show up here.  </p>
           <div v-if="!loggedIn">
            <p>Are you a member? </p>
            <p class="SignIn" @click="showPop">Sign in</p>

           </div>
          </div>
          <cart-item v-for="(item, index) in cart" :key="index" :item="item"/>
        </div>
      </div>


      <div class="col-4 p-4 total">
        <h2 class="mb-5">Shopping bag total</h2>
        <div class="bg-white p-3">
          <div class="d-flex justify-content-between">
            <p>Order value</p>
            <p><strong>${{ cartPriceTotal }}</strong></p>
          </div>
          <div class="d-flex justify-content-between">
            <p>Delivery</p>
            <p><strong>$ {{ delivery }}</strong></p>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <h3>Total:</h3>
            <h3><strong>$ {{ cartPriceTotal + delivery }}</strong></h3>
            <!-- <h3><strong>$ {{ this.total }}</strong></h3> -->
          </div>
          <div class="mt-5 pb-2" v-if="loggedIn">
            <button class="btn btn-pink mb-3"  @click="send()">Place order</button>
            <p>{{ error }}</p>
          </div>

          <div class="mt-5  pb-2" v-if="!loggedIn">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <button class="btn btn-pink"  @click="send()">Place order</button>
                <p class="SignIn" @click="showPop">Sign in</p>
            </div>
            <p>{{ error }}</p>
          </div>
          
        </div>
      </div>
      
    </div>
    
  </div>

</template>

<script>
import CartItem from './CartItem.vue'
import LoginPop from '../User/LoginPop'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { 
    CartItem,
    LoginPop
  },
  data() {
    return {
      delivery: 6,
      success: false,
      error: '',
      closeThis: false
    }
  },
  methods: {
    ...mapActions(['addOrder', 'deleteCart', 'getOneOrder']),
    send() {
      if(!this.loggedIn) {
         this.error = 'You must sign in to place a order'
      }

      else {
        if(this.cart.length > 0) {
        console.log('Success')

        let data = {
          totalPrice: this.cartPriceTotal,
          cart: this.cart,
          user: this.oneUser,
        }
        
        this.addOrder(data)
        this.success = true
        this.deleteCart()
        this.$router.push({ name: 'MyOrder'});
        
        } else {
          console.log('Error')
          this.error = 'Ops! Your cart is empty.'
        }
      }

    },
    amount() {
      if(this.cartPriceTotal > 50) {
        this.delivery = 0
      } else {
        this.delivery = 6
      }
    },
    showPop() {
      this.closeThis = true
    },
    closePop() {
      this.closeThis = false
      this.error = ''
    }

  },
  computed: {
    ...mapGetters(['cart', 'cartPriceTotal', 'oneUser', 'newOrder', 'loggedIn'])
  },
  updated() {
    this.amount()
  },
  mounted() {
    this.amount()
  },
  destroyed() {
    this.$forceUpdate();
  }

}
</script>

<style>
  .imgProduct {
    height: 15rem;
  }

  p {
    margin-bottom: 0;
  }
  .total {
    height: 40vh;
  }
  .shoppingBag {
    min-height: calc(100vh - 350px);
  }
  .card-row {
    height: calc(100vh - 480px);
    overflow-y: auto;
    margin-bottom: 2rem;
  }
  .SignIn {
    cursor: pointer;
    text-decoration: underline;
  }

</style>