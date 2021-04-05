<template>
  <div class="d-flex justify-content-between mb-3" v-if="user">

    <div class="mt-5 col-12">

      <div class="d-flex justify-content-between">
        <div class="mb-4 ">
          <strong>Name:</strong>
          <p >{{ user.firstName }} {{ user.lastName }}</p>
        </div>
        <div class="mb-4 ">
          <strong>Email:</strong>
          <p>{{ user.email }}</p>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="mb-4">
          <strong>User id:</strong>
          <p> {{ user._id }}</p>
        </div>
        <div class="mb-4">
          <strong>Member since:</strong>
          <p> {{ user.created }}</p>
        </div>
      </div >

      <div>
        <button
        class="btn btn-pink dropdown-toggle mb-5"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        @click="getOrders"
        >
          Users Orders
        </button>

        <div class="collapse mt-3" id="collapseExample">
          <h4>Orders</h4>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Order Nr:</th>
                <th scope="col">Orderd:</th>
                <th scope="col">Total:</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
              <user-orders v-for="order in userOrder" :key="order._id" :order="order"/>   
          </table>
        </div>

      </div>
      <button class="btn btn-dark" @click="delUser">REMOVE USER</button>

    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserOrders from './UserOrders.vue'
export default {
  components: { UserOrders },
  computed: {
    ...mapGetters(['user','userOrder'])
  },
  methods: {
    ...mapActions(['findUserOrder', 'deleteOneUser']),
    getOrders() {
      this.findUserOrder(this.user._id)
    },
    delUser() {
      this.deleteOneUser(this.user._id)
      //Uppdaterar så man ser att ordern tagit bort. Hittar inget smidagare sätt....
      this.$router.go(this.$router.currentRoute)
    }

  },
}
</script>