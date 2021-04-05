<template>
  <div id="bg">
    <div id="UpdatePop" class="bg-light border rounded p-3">
      
      <form class="mt-3 col-10 m-auto" @submit.prevent="onSubmit">
        <div class="d-flex justify-content-between">
          <h5 class="mb-5">Edit your profile</h5>
          <p class="close" @click="$emit('close')"><i class="fas fa-times fa-md"></i></p>
        </div>
        
        <div class="mb-4">
          <label class="form-label" for="email2">First Name</label>
          <input type="text" id="firstName" class="form-control" v-model="user.firstName"/>
        </div>

        <div class="mb-4">
          <label class="form-label" for="email2">Laste Name</label>
          <input type="text" id="lastName" class="form-control" v-model="user.lastName"/>
        </div>

        <div class="mb-5">
          <label class="form-label" for="email2">Email address</label>
          <input type="email" id="email2" class="form-control" v-model="user.email"/>
        </div>


        <button type="submit" class="btn btn-pink btn-block mb-4" v-show="!userUpdated">Update</button>

        <div class="bg-pink text-white text-center p-2" v-show="userUpdated">
          <p>You account had been updated!  </p>
          <p>Your changes will be visible next time you sign in.</p>
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
      userUpdated: false,
      
      user: {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        }
    }
  },
  methods: {
    ...mapActions(['getUsers', 'login', 'updateUser']),
    onSubmit() {
            
        let _id = this.oneUser._id
        console.log(_id)
        this.updateUser(this.user)
        this.userUpdated = true
      
    },

  },
    
  computed: {
      ...mapGetters(['loggedIn', 'errorLoggin', 'oneUser'])
  },
  mounted() {
    this.user._id = this.oneUser._id
    this.user.firstName = this.oneUser.firstName
    this.user.lastName = this.oneUser.lastName
    this.user.email = this.oneUser.email

  }
  
}
</script>

<style>
.close {
  cursor: pointer;
}
#UpdatePop {
  position: absolute;
  left: 0; 
  right: 0; 
  top: 15rem;
  margin: auto;
  z-index: 5;
  min-height: 30rem;
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
</style>