<template>
  <div class="container my-5">
    <h1>My Profile</h1>
    <div class="d-flex justify-content-between">
      
      <div class="my-5 p-4 shadow-3 col-5">
        <div class="mb-4 d-flex justify-content-between">
          <h3>My Details</h3>
          <h6 class="edit">edit</h6>
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
        <div class="mt-3">
          <h5 class="text-muted">Member since</h5>
          <h4>{{ oneUser.created }}</h4>
        </div>
      </div>
      <div class="my-5 p-4 shadow-3 col-5">
        <h3 class="mb-4">Personal Offers</h3>
        <div class="bg-pink p-4 text-center mb-3">
          <h4 class="text-white">Get more points for shopping more environment friendly </h4>
        </div>
        <div class="bg-pink p-4 text-center">
          <h4 class="text-white">3 for 2 on tops </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['users', 'oneUser'])
  },
}
</script>

<style>
.edit {
  cursor: pointer;
  text-decoration: underline;
}
</style>