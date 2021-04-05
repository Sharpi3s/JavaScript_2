<template>
  <div class="col">
    <div class="card text-dark">

      <router-link :to="'/product/details/' + product._id" class="bg-image hover-zoom">
        <img class="card-img-top" :src="(product.img)" alt="Card image cap">
      </router-link>

      <div class="card-body d-flex justify-content-between align-items-center">
        <h5 class="card-title">{{ product.title }}</h5>
        <h5><strong>${{ product.price }}</strong></h5>
      </div>

      <div class="card-footer">
        <p>{{ product.category }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>
