<template>
  <div class="container my-5">
    <h1>My Profile</h1>
    <div class="d-flex justify-content-between">
      
      <div class="my-5 p-4 shadow-3 col-5">
        <edit-user v-show="closeThis" @close="closeUser" />
        <div class="mb-4 d-flex justify-content-between">
          <h3>My Details</h3>
          <h6 class="edit" @click="showUser">edit</h6>
        </div>
        <div class="mt-3">
          <h5 class="text-muted">Email</h5>
          <h4>{{ oneUser.email }}</h4>
        </div>
        <div class="mt-3">
          <h5 class="text-muted">First Name</h5>
          <h4>{{ oneUser.firstName }}</h4>
        </div>
        <div class="mt-3">
          <h5 class="text-muted">Last Name</h5>
          <h4>{{ oneUser.lastName }}</h4>
        </div>
        <div class="my-3">
          <h5 class="text-muted">Member since</h5>
          <h4>{{ oneUser.created }}</h4>
        </div>

      </div>
      <div class="my-5 p-4 shadow-3 col-5">
        <h3 class="mb-4">Personal Offers</h3>
        <div class="bg-pink p-4 text-center mb-3">
          <h4 class="text-white">Get extra  points for shopping more environment friendly </h4>
        </div>
        <div class="bg-pink p-4 text-center my-4">
          <h4 class="text-white">3 for 2 on tops</h4> 
          <p class="text-white">20 April - 20 May 2021</p>
        </div>
        <div class="bg-pink p-4 text-center">
          <h4 class="text-white"> 526 points</h4> 
          <p class="text-white">474 points left for next bonus check</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EditUser from '../components/User/EditUser'
export default {
    components: { 
      EditUser
  },
  data() {
    return {
      closeThis: false
    }
  },
  computed: {
    ...mapGetters(['users', 'oneUser'])
  },
  methods: {
    showUser() {
      this.closeThis = true
    },
    closeUser() {
      this.closeThis = false
      this.error = ''
    }
    
  }
}
</script>

<style>
.edit {
  cursor: pointer;
  text-decoration: underline;
}
</style>