<template>
  <div>

    <div class="bg-dark" >
      <div class="container d-flex justify-content-center text-white top p-1">
        <p class="mt-2">Free shipping on orders over $50</p>
        <p class="mx-4 mt-2">|</p>
        <p class="mt-2">Always free returns</p>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-brand logo">
        <router-link id="logoLink" to="/">
          <img id="logo1" src="@/assets/images/logo_rose_b.png" alt="">
        </router-link>
      </div>

      <div class="container relative">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation" >

          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/newin">New in</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop">Shop</router-link>
            </li>
          </ul>
        </div>

        <div class="navbar-nav">
          <div class="nav-item dropdown mx-3">
            <a
              class="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user fa-lg" ></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <div id="userLogOut" v-if="loggedIn">
                    <router-link to="/users" class="dropdown-item" v-if="this.oneUser.admin">
                      <p class="text-dark" >Users</p>
                    </router-link>
                    <router-link to="/user" class="dropdown-item" v-else>
                      <p class="text-dark" >My profile</p>
                    </router-link>

                    <router-link to="/allorders" class="dropdown-item" v-if="this.oneUser.admin">
                      <p class="text-dark" >All Orders</p>
                    </router-link>
                    <router-link to="/products" class="dropdown-item" v-if="this.oneUser.admin">
                      <p class="text-dark" >Products</p>
                    </router-link>
                    <router-link to="/myorders" class="dropdown-item" v-else>
                      <p class="text-dark" >My Orders</p>
                    </router-link>
                    <li class="dropdown-item">
                      <button class="btn btn-pink btn-block" @click.stop="logout">Sign Out</button>
                    </li>
                </div>


                <div id="userLogIn" class="dropdown-item-text" v-else>
                  <!-- v-else -->
                  <form class="mt-3" @submit.prevent="onSubmit">
                    <h4 class="text-center">Sign in</h4>

                    <div class="mb-4">
                      <label class="form-label" for="email">Email address</label>
                      <input type="email" id="email" class="form-control" v-model="email"/>
                    </div>

                    <div class=" mb-4">
                      <label class="form-label" for="password">Password</label>
                      <input type="password" id="password" class="form-control" v-model="password"/>
                      
                    </div>
                    <button type="submit" class="btn btn-pink btn-block mb-4" >Sign in</button>

                    <div class="text-center">
                      <small class="error"></small>
                      <small class="error"> {{errorLoggin}} </small>
                      <p>Not a member? <router-link class="RegLink" to="/register">Register</router-link></p>
                    </div>
                  </form>
                </div>


              </li>
            </ul>
          </div>


        
          <div class="nav-item dropdown mx-3">
            <a
              class="nav-link dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-shopping-bag fa-lg"></i>
              <span class="badge rounded-pill badge-notification bg-danger" v-show="cartItemCount">{{ cartItemCount }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <div class="length" v-show="cartItemCount">
                    <div class="heightNavCart">
                    <li class="dropdown-item border-bottom mb-2 " v-for="(item, index) in cart" :key="index" :item="item">
                      
                      <div class="d-flex my-3">
                        <img class="navItemCart me-2" :src="(item.product.img)" alt="">
                        <div class="d-flex justify-content-between col border-botten">
                            <div>
                              <p><strong>{{ item.product.title }}</strong></p>
                              <p><strong>$ {{ item.product.price }}</strong></p>
                              <p>Color: {{ item.product.color }}</p>
                              <p>Size: {{ item.size }}</p>
                              <p>Quantity: {{ item.quantity }}</p>
                              <p>Total price: $ {{ item.amount }}</p>
                              
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
                      
                    </li>
                    </div>
                    <li class="p-3">
                      <div class="d-flex justify-content-end px-2 mb-3">
                        <p class="h5 me-4">Total:</p>
                        <p class="h5">${{ cartPriceTotal }}</p>
                      </div>
                      <button class="btn btn-dark btn-block text-white" @click="$router.push('/cart')">Go to cart</button>
                    </li>
                </div>

                <div class="dropdown-item-text length" v-show="!cartItemCount">
                    <li class="dropdown-item">
                      <p>Your cart is empty! </p>
                      <button class="btn btn-dark btn-block text-white" @click="$router.push('/cart')">Go to cart</button>
                    </li>
                </div>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['getUsers', 'login', 'logout', 'addToCart', 'deleteOneCartItem', 'addItem', 'subItem']),
    onSubmit() {

      let error = document.querySelector('.error')
        if(this.email !== '' && this.password !== '') {
          
          let user = {
            email: this.email,
            password: this.password
          }

          let route = this.$route.query.redirect
          this.login({user, route})
          error.innerText = ''
          this.email = ''
          this.password = ''
        } 
        else {
          console.log('error')
          error.innerText = 'Email or password cannot be empty'
        }   
    },

  },
   
  computed: {
    ...mapGetters(['cartItemCount', 'cart', 'loggedIn', 'errorLoggin', 'oneUser', 'cartPriceTotal'])
  },
}
</script>

<style>
#userLogIn {
  width: 20rem;
}
.length {
  width: 26rem;
  max-height: 35rem;
}
.error {
  color: rgb(196, 0, 0);
}
#logo1 {
  height: 2rem;
}
.logo {
  height: 3rem;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
}
.navbar-nav {
  z-index: 2;
}
.nav-link {
  z-index: 5;
}
.heightNavCart {
  max-height: 27rem;
  overflow-y: auto;
}
.top p {
  font-size: 0.7rem;
}
.navItemCart {
  height: 8.2rem;
}

</style>