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
      
        <p>Color: {{ item.product.color }}</p>
        <p>size: {{ item.size }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <h5>${{ item.amount }}</h5>
      </div>

      <div class="d-flex flex-column justify-content-between align-items-end">
        <button class="btn btn-light px-3" @click.stop="deleteOneCartItem(item, item.quantity, item.size)"><i class="fas fa-trash fa-lg"></i></button>
        <div class="btn-group">
          <button @click.stop="subItem(item, item.size)" class="btn btn-light py-1"><i class="fas fa-minus"></i></button>
          <button @click.stop="addItem(item, item.size)" class="btn btn-light py-1"><i class="fas fa-plus"></i></button>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  methods: {
    ...mapActions(['deleteOneCartItem', 'addItem', 'subItem'])
  },
}
</script>

<style>
.imgProd {
  height: 10rem;
}
</style>