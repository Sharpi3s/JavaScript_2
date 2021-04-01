<template>
  <div class="container register d-flex flex-column justify-content-center align-items-center">
    <div class="text-center mb-5 headlineReg col-6  shadow-2">
        <h2 class="text-white p-3">Register</h2>
    </div>
    <form class="col-6 p-3 shadow-1" @submit.prevent="onSubmit">
      <!-- 2 column grid layout with2text inputs for the first and last names -->
      
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

      <!-- Email input -->
      <div class="mb-4">
        <label class="form-label" for="email2">Email address</label>
        <input type="email" id="email2" class="form-control" v-model="user.email"/>
        
      </div>

      <!-- Password input -->
      <div class="mb-4">
        <label class="form-label" for="password2">Password</label>
        <input type="password" id="password2" class="form-control" v-model="user.password"/>
      </div>

      <div class="col-2 m-auto">
          <button type="submit" class="btn btn-purple btn-block mb-4 text-white">Sign up</button>
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
        }

      }
    },
            
}
</script>

<style>
.register {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh; */
  height: 70vh;
}
.headlineReg {
    background: linear-gradient(to right, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1));
    background: -webkit-linear-gradient(to right, rgba(102, 126, 234, 1), rgba(118, 75, 162, 1));
    margin-bottom: 0 !important;
}
</style>