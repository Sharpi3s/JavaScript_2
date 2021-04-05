<template>
  <tbody>
    <tr>
      <td>{{ order._id }}</td>
      <td>{{ order.createdAt }}</td>
      <td>$ {{ order.totalprice }}</td>
      <td class="d-flex justify-content-end"><button class="btn py-1 px-2" @click="deleteOne">X</button></td>
    </tr>
  </tbody>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['order'],
  methods: {
    ...mapActions(['deleteOneOrder']),
    deleteOne() { 
      this.deleteOneOrder(this.order._id)
      //Uppdaterar så man ser att ordern tagit bort. Hittar inget smidagare sätt....
      this.$router.go(this.$router.currentRoute)
    },
},
}
</script>
