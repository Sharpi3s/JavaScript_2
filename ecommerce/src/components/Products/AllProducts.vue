<template>
    <section class="dark-grey-textr my-5">

        <h3 class="font-weight-bold text-left mb-5">Products</h3>
        <div class="d-flex justify-content-between col-6 sort">
          <p class="h6 mb-4" @click="bottoms">Bottoms</p>
          <p class="h6 mb-4" @click="dresses">Dresses</p>
          <p class="h6 mb-4" @click="tops">Tops</p>
          <p class="h6 mb-4" @click="all">See All Products</p>
        </div>

        <div class="card">
          <div class="card-body">
            <table class="table table-responsive-md mb-0">
              <thead>
                <tr>
                  <th class="col-1"></th>
                  <th>
                    <strong>Product nr</strong>
                  </th>
                  <th>
                    <strong>Title</strong>
                  </th>
                  <th>
                    <strong>Color</strong>
                  </th>
                  <th>
                    <strong>Category</strong>
                  </th>
                  <th>
                    <strong>Price</strong>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="align-middle" v-for="product in products" :key="product._id" :product="product">
                  <th class="align-left" scope="row"><img :src="(product.img)" class="imgSize"></th>
                  <td>{{ product.itemNumber }}</td>
                  <td>{{ product.title }}</td>
                  <td>{{ product.color }}</td>
                  <td>{{ product.category }}</td>
                  <td>$ {{ product.price }}</td>
                  <td>
                    <button class="btn btn-light px-3" @click="deleteOneProduct(product._id); reload();"><i class="fas fa-trash-alt fa-lg"></i></button>
                  </td>
                </tr>


              </tbody>
            </table>
          </div>
        </div>

      </section>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['getProducts', 'sortDresses', 'sortBottoms', 'sortTops', 'deleteOneProduct']),
    dresses() {     
      this.sortDresses()
    },
    tops() {
      this.sortTops()
    },
    bottoms() {
      this.sortBottoms()
    },
    all() {
      this.getProducts()
    },
    reload() {
       this.$router.go(this.$router.currentRoute)
    }
  },
  computed: {
    ...mapGetters(['products'])
  },
  mounted() {
    this.getProducts()
  },

}
</script>

<style>
.border-body {
  border: 2px solid #c38587f3;
}
.imgSize {
  height: 5rem;
}
.align-left {
  display: flex;

}
.sort p:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>