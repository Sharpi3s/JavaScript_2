<template>

      <tr class="pointer pink-hover" @click="info">
        <!-- <th scope="row"></th> -->
        <td>{{ order.email }}</td>
        <td>{{ order._id }}</td>
        <td>${{ order.totalprice }}</td>
        <td class="d-flex justify-content-end">
          <button type="button" class="btn btn-gray btn-sm px-2 py-1" @click="deleteOne">
            <i class="fas fa-times"></i>
          </button>
        </td>
      </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['order'],
  methods: {
    ...mapActions(['deleteOneOrder', 'getOneOrder']),
    deleteOne() {
      
      this.deleteOneOrder(this.order._id)

      //Uppdaterar så man ser att ordern tagit bort. Hittar inget smidagare sätt....
      this.$router.go(this.$router.currentRoute)
    },
    info() {
      // this.getOneOrder(this.order._id)
      this.getOneOrder(this.order._id)
    }
  },
}
</script>

<style>
.pointer {
  cursor: pointer;
}
.btn-gray {
  background-color: #C7C6C6;
}
</style>