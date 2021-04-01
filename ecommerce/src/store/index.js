import Vue from 'vue'
import Vuex from 'vuex'
import Products from './moduels/Products/Products'
import Product from './moduels/Products/Product'
import Users from './moduels/users/Users'
import User from './moduels/users/User'
import Cart from './moduels/Carts/Cart'
import Orders from './moduels/Carts/Orders'
import Order from './moduels/Carts/Order'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Products,
    Product,
    Users,
    User,
    Cart,
    Orders,
    Order
  }
  })
