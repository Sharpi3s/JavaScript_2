<template>
  <div id="bg">
    <div id="SignPop" class="bg-light border rounded p-3">
      
      <form class="mt-3 col-10 m-auto" @submit.prevent="onSubmit">
        <div class="d-flex justify-content-between">
          <h5 class="mb-5">Sign In</h5>
          <p class="close" @click="$emit('close')"><i class="fas fa-times fa-md"></i></p>
          <!-- <p class="close" @click="close"><i class="fas fa-times fa-md"></i></p> -->
        </div>
        <div class="mb-4">
          <label class="form-label" for="email2">Email address</label>
          <input type="email" id="email2" class="form-control" v-model="email"/>
        </div>

        <div class=" mb-4">
          <label class="form-label" for="password2">Password</label>
          <input type="password" id="password2" class="form-control" v-model="password"/>
          
        </div>
        <button type="submit" class="btn btn-pink btn-block mb-4" >Sign in</button>

        <div class="text-center">
          <small class="error"> {{errorLoggin}} </small>
          <p>Not a member? <router-link class="RegLink" to="/register">Register</router-link></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['visible'],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions(['getUsers', 'login']),
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
            this.$emit('close')
        } 
        else {
          console.log('error')
          error.innerText = 'Email or password cannot be empty'
        }      
    },

  },
  computed: {
      ...mapGetters(['loggedIn', 'errorLoggin'])
  }
}
</script>

<style>
.close {
  cursor: pointer;
}
#SignPop {
  position: absolute;
  left: 0; 
  right: 0; 
  top: 15rem;
  margin: auto;
  z-index: 5;
  height: 30rem;
  width: 25rem;
}
#bg {
  position: absolute;
  left: 0; 
  right: 0; 
  top: 0;
  margin-left: auto; 
  margin-right: auto; 
  height: 120%;
  width: 100%;
  background-color: #333333d5;
  z-index: 3;
}
.RegLink {
  text-decoration: underline;
  color: #000;
}
.RegLink:hover {
  color: #c38587f3;
}
</style>