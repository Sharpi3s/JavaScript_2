<template>
   <div class="d-flex justify-content-between col-12 mb-3">
    <div class="col-2">
      <img :src="product.product.img" alt="">
    </div>
    <div class="d-flex justify-content-between col-10 align-items-center">
    <!-- <div class="d-flex justify-content-between align-items-between"> -->
      <p class="col-6">{{ product.product.title }}</p>
      <p>{{ product.quantity }}</p>
      <p> {{ product.size }}</p>
      <p>${{ product.amount }}</p>
    </div>

  </div>
</template>

<script>
export default {
  props: ['product'],

}
</script>

<style scoped>
img {
  height: 4rem;
}
</style>