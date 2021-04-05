<template>
  <div class="container register d-flex flex-column justify-content-center align-items-center mt-5">
    <div class="mb-5 headlineAdd col-3">
        <h2 class=" p-3">Add New Product</h2>
    </div>
    <form class="col-6 p-3 mb-5 shadow-1" @submit.prevent="onSubmit">

      <div class="row mb-4">
        <div class="col-6">
          <div class="">
            <label class="form-label" for="title">Name</label>
            <input type="text" id="title" class="form-control" v-model="newProduct.title"/>
          </div>
        </div>

        <div class=" d-flex flex-column col-6">
          <label class="form-label" for="category">Category</label>
          <select name="category" id="category" class="form-label" v-model="newProduct.category">
            <option value="">--Please choose an option--</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Dresses">Dresses</option>
            <option value="Tops">Tops</option>
          </select>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col">
          <label class="form-label" for="color">Color</label>
          <input type="text" id="color" class="form-control" v-model="newProduct.color"/>
        </div>
        <div class="col">
          <label class="form-label" for="price">Price</label>
          <input type="number" id="price" class="form-control" v-model="newProduct.price"/>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label" for="description">Description</label>
        <textarea type="text" id="description" class="form-control" v-model="newProduct.description"></textarea>
      </div>

      <div class="mb-4">
        <label class="form-label" for="img">Image URL</label>
        <input type="text" id="img" class="form-control" v-model="newProduct.img"/>
      </div>

      <div class="col-2 m-auto">
          <button type="submit" class="btn btn-pink btn-block mb-4 text-white">Add!</button>
      </div>
      <p class="error success text-center"></p>

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  
  data() {
      return {
          newProduct: {
            title: '',
            description: '',
            price: '',
            color: '',
            img: '',
            category: ''
        }
      }
    },
    methods: {
      ...mapActions(['addProduct']),
      onSubmit() {
        let error = document.querySelector('.error')
        let success = document.querySelector('.success')

        if(this.newProduct.title !== '' && this.newProduct.description !== '' && this.newProduct.price !== '' && this.newProduct.color !== '' && this.newProduct.img !== '' && this.newProduct.category !== '') {
          this.addProduct(this.newProduct)
          this.newProduct.title = ''
          this.newProduct.description = '' 
          this.newProduct.price = '' 
          this.newProduct.color = '' 
          this.newProduct.img = '' 
          this.newProduct.category = ''

          error.innerText = ''
          success.innerText = 'Your product is now uploaded'
        }
        else {
          console.log('error')
          error.innerText = 'Fill in every field '
        }
        console.log(this.newProduct)
      },

    },

}
</script>

<style scoped>
.register {

  height: 70vh;
}
.headlineAdd {
  display: flex;
  border-bottom: 2px solid #c38587f3;
}
#category {
  padding: 0.3rem;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 3px;
}
.btn-pink:hover {
  color: #333 !important;
}
.success {
  color: black;
}

</style>