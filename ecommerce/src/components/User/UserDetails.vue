<template>
      <tr class="pointer pink-hover" @click="info">
        <!-- <th scope="row"></th> -->
        <td>{{ user.firstName }} {{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        <td>${{ user._id }}</td>

      </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['user'],
  methods: {
    ...mapActions(['getOneUser']),
    info() {
    // this.getOneOrder(this.order._id)
    this.getOneUser(this.user._id)
  }
  }

}
</script>

<style>

</style>