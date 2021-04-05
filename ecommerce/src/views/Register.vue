<template>
  <div class="container register d-flex flex-column justify-content-center align-items-center">
    
    <div class="text-center mb-5 headlineReg col-6  shadow-2">
        <h2 class="text-white p-3">Register</h2>
    </div>

    <form class="col-6 p-3 shadow-1" @submit.prevent="onSubmit">
      
      <div class="row mb-4">
        <div class="col">
          <div class="">
            <label class="form-label" for="firstName">First name</label>
            <input type="text" id="firstName" class="form-control" v-model="user.firstName"/>
            
          </div>
        </div>
        <div class="col">
          <div class="">
            <label class="form-label" for="LastName">Last name</label>
            <input type="text" id="lastName" class="form-control" v-model="user.lastName"/>
            
          </div>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label" for="email2">Email address</label>
        <input type="email" id="email2" class="form-control" v-model="user.email"/>  
      </div>

      <div class="mb-4">
        <label class="form-label" for="password2">Password</label>
        <input type="password" id="password2" class="form-control" v-model="user.password"/>
      </div>

      <div class="col-2 m-auto">
          <button type="submit" class="btn btn-pink btn-block mb-4">Sign up</button>
      </div>
      
    </form>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  
  data() {
      return {
          user: {
              firstName: '',
              lastName: '',
              email: '',
              paswword: '',
          }
      }
    },
    methods: {
      ...mapActions(['register']),
      onSubmit() {
        if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
          this.register(this.user)
          this.$router.push({ name: 'Home'});
        }

      }
    },
            
}
</script>

<style>
.register {
  height: 70vh;
}
.headlineReg {
  margin-bottom: 0 !important;
  background-color: #c38587f3;
}
</style>