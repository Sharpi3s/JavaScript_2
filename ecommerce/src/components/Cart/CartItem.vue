<template>


  <div class="card mb-4 p-3">
          <div class="d-flex col-12">

            <div class="col-3">
              <img :src="(item.product.img)"
              class="img-fluid z-depth-0 imgProd">
            </div>

            <div class="prodDet col-7">
              <h6>{{ item.product.title }}</h6>
              <p><strong>${{ item.product.price }}</strong></p>
              <br>
              <p>Color: {{ item.product.color }}</p>
              <p>size: {{ item.size }}</p>
              <p>Quantity: {{ item.quantity }}</p>
            </div>

            <div class="d-flex flex-column justify-content-between align-items-end col-2">
              <button class="btn btn-danger px-3" @click="deleteOneCartItem(item, item.quantity, item.size)">X</button>
              <h5>${{ item.amount }}</h5>
            </div>
          
          </div>
        </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  data() {
    return {
      // total: this.item.product.price * this.item.quantity
      // product: this.item.product,
      // quantity: 0
    }
  },
  methods: {
    ...mapActions(['deleteOneCartItem'])
  },
   computed: {
    // ...mapGetters(['product'])
  },
  mounted() {
    // this.totalAmount(this.total)
  }

}
</script>

<style>
.imgProd {
  height: 10rem;
}
</style>