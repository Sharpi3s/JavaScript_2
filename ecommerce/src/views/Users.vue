<template>
  <div class="container mt-5">
    <div class="d-flex" v-if="this.oneUser.admin">
      <div class="col-6 userBody">
        <h2>USERS</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">User id</th>
              </tr>
            </thead>
            <tbody>
              <user-details v-for="user in users" :key="user._id" :user="user" />
            </tbody>
          </table>
      </div>
      <div class="col-5 mt-3">
        <h4>User Details:</h4>
        <div>
          <user-admin />
        </div>
      </div>
    </div>
    <div v-else>
      <not-found />
    </div>
  </div>
</template>

<script>



import {mapActions, mapGetters} from 'vuex'
import NotFound from '../components/Error/NotFound.vue'
import UserAdmin from '../components/User/UserAdmin.vue'
import UserDetails from '../components/User/UserDetails.vue'
// import {mapGetters} from 'vuex'


export default {
  components: {
    UserDetails,
    UserAdmin,
    NotFound
   
    
  },
  methods: {
    ...mapActions(['getUsers']),

  },
  computed: {
    ...mapGetters(['users', 'oneUser'])
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style>
  .userBody {
    height: calc(100vh - 420px);
    overflow-y: auto;
    margin-bottom: 2rem;
    margin-right: 5rem;
  }
  
</style>