<template>

      <tr class="pointer pink-hover" @click="info">
        <!-- <th scope="row"></th> -->
        <td>{{ order.email }}</td>
        <td>{{ order._id }}</td>
        <td>${{ order.totalprice }}</td>

      </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['order'],
  data() {
    return {
      
    }
  },
  components: {
    
  },
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
  mounted() {
    
  },
  computed: {
    // ...mapGetters(['order'])
  }
}
</script>

<style>

</style>