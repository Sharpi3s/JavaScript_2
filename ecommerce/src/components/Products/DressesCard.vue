<template>
<div class="col">
  <div class="card text-dark">
    <!-- <img
      src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
      class="card-img-top"
      alt="..."/> -->
    <router-link :to="'/product/details/' + dress._id" class="bg-image hover-zoom">
      <img class="card-img-top" :src="(dress.img)" alt="Card image cap">
    </router-link>
    
    <!-- <div class="card-header">{{ product.category }}</div> -->
    <div class="card-body d-flex justify-content-between align-items-center">
      <h5 class="card-title">{{ dress.title }}</h5>
      <!-- <p class="card-text">{{ product.description }}</p> -->
      <h5><strong>${{ dress.price }}</strong></h5>
      <!-- <router-link :to="'/product/details/' + product._id" class="btn btn-dark">more ></router-link> -->
    </div>
    <div class="card-footer">
      <p>{{ dress.category }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['dress']
}
</script>

<style>

</style>