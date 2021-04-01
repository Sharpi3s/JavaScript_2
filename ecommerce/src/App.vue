<template>
  <div>
    <navbar />
    <router-view/>
    <app-footer />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navigation/Navbar.vue'
import appFooter from './components/Navigation/Footer.vue'
export default {
  components: {
    Navbar,
    appFooter
  },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.btn-purple {
  background-color: #7E57C2;
}
</style>
