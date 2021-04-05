<template>

  <div class="container mt-5 pdBody" > 

    <div class="mb-5" v-if="product">

      <div class="row">

        <div class="col-md-6 mb-4 mb-md-0">
          <div class="col-6 mb-0">
            <img class="card-img-top mb-3" :src="(product.img)" alt="Card image cap">
          </div>
        </div>

        <div class="col-md-6">
          <div class="d-flex justify-content-between ms-4 mb-4">
            <div>
              <p class="mb-2 text-muted text-uppercase small">{{ product.category }}</p>
              <h3>{{ product.title }}</h3>
            </div>
            <div class="d-flex align-items-center">
              <h3><span class="mr-1"><strong>${{ product.price }}</strong></span></h3>
            </div>
          </div>

          <div>
            <p class="ms-4"><strong>Color: </strong>{{ product.color }}</p>
            <p class="ms-4"><strong>Item Number: </strong>{{ product.itemNumber }}</p>
          </div>
          <hr class="mb-4 ms-4">
          
          <table class="table table-sm table-borderless">
            <tbody>
              <tr>
                <td class="pl-0 pb-0 w-25">Quantity</td>
                <td class="pb-0">Select size</td>
              </tr>

              <tr>
                <td class="pl-0">
                  <div class="def-number-input number-input safari_only mb-0">
                    <input class="quantity" min="0" name="quantity" type="number" v-model.number="quantity">
                  </div>
                </td>

                <td>
                  <div class="mt-1">
                    <div class="form-check form-check-inline pl-0" >
                      <input type="radio" class="form-check-input" id="small" value="Small" name="materialExampleRadios" v-model="size" >
  
                      <label class="form-check-label small text-uppercase card-link-secondary"
                        for="small">Small</label>
                    </div>

                    <div class="form-check form-check-inline pl-0">
                      <input type="radio" class="form-check-input" id="medium" value="Medium" name="materialExampleRadios" v-model="size" >

                      <label class="form-check-label small text-uppercase card-link-secondary"
                        for="medium">Medium</label>
                    </div>

                    <div class="form-check form-check-inline pl-0">
                      <input type="radio" class="form-check-input" id="large" value="Large" name="materialExampleRadios" v-model="size">

                      <label class="form-check-label small text-uppercase card-link-secondary"
                        for="large">Large</label>
                    </div>
                  </div>
                </td>
              </tr>   
            </tbody>

            <button type="button" class="btn btn-light btn-md ms-4 my-4" @click="total(); addToCart({product, quantity, size, amount});"><i class="fas fa-shopping-bag pr-2"></i> Add to cart</button>
          </table>

          <hr class="mb-4 ms-4">
          <p class="pt-1 ms-4">{{ product.description }}</p>
          
        </div>

      </div>

    </div>

  </div>
</template>

<script>


import { mapActions, mapGetters} from 'vuex'
export default {
  props: ['id'],
   data() {
    return {
      quantity: 1,
      size: 'Medium',
      amount: 0    
    }
    
  },
  methods: {
    ...mapActions(['getOneProduct', 'addToCart']),
    
    total() {
      // console.log(this.product.price * this.quantity)
      // console.log(this.product.price)
      // console.log(this.quantity)
      let amounts = this.product.price * this.quantity
      this.amount = amounts
      
    },
    addOneToCart() {
      // this.size = this.product.size
      // let oneProduct = {
      //   product: this.product._id,
      //   quantity: this.quantity,
      //   amount: this.amount,
      //   size: this.product.size
      // }
      // this.addToCart(oneProduct)


      // let select = document.querySelector('select')
      // this.size = this.product.size
      // if(select === ''){
        
        
      // } else {
      //   console.log('error')
      // }

      
    }
  },
  computed: {
    ...mapGetters(['product'])
  },
  // mounted() {
  //   this.getOneProduct(this.id)
  // },
  created() {
    this.getOneProduct(this.id)
    
    
  },
  mounted() {
    
  }
  
  
}
</script>

<style>
.pdBody {
  height: calc(100vh - 400px);
}
#size {
  padding: 0.1rem 0 0.1rem 0;
}
</style>