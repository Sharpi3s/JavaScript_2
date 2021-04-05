import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetails from '../views/ProductDetails.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
import User from '../views/User'
import Users from '../views/Users'
import MyOrders from '../views/MyOrders'
import AllOrders from '../views/AllOrders'
import Products from '../views/Products'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newin',
    name: 'NewIn',
    component: () => import( '../views/NewIn.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import( '../views/Shop.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/product/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/myorder',
    name: 'MyOrder',
    component: () => import( '../views/MyOrder.vue')
  },
  {
    path: '/myorders',
    name: 'MyOrders',
    component: MyOrders,
  },
  {
    path: '/allorders',
    name: 'AllOrders',
    component: AllOrders
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      authurize: true
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      authurize: true
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    meta: {
      authurize: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const { authurize } = to.meta 
  const token = localStorage.getItem('token')

  if(authurize) {

    if(!token) {
      next({path: '/login', query: { redirect: to.fullPath }})
    } else {
      next()
    }
  }
  next()
})

export default router
