import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 路由对象
  {
    path:'/',
    // 重定向,
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    redirect:'/home/index',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: 'new',
        name: 'new',
        // 箭头函数
        component: () => import('../views/home/new.vue')
      },
      {
        path: 'bch-index',
        name: 'bch-index',
        // 箭头函数
        component: () => import('../views/home/bch-index.vue')
      },
      {
        path: 'index',
        name: 'index',
        // 箭头函数
        component: () => import('../views/home/index.vue')
      },
      {
        path: 'chat',
        name: 'Chat',
        // 箭头函数
        component: () => import('../views/home/Chat.vue')
      },
      {
        path: 'faxian',
        name: 'faxian',
        // 箭头函数
        component: () => import('../views/home/faxian.vue')
      },
      {
        path: 'order',
        name: 'Order',
        // 箭头函数
        component: () => import('../views/home/Order.vue')
      },
      {
        path: 'my',
        name: 'My',
        // 箭头函数
        component: () => import('../views/home/My.vue')
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    // 箭头函数
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
    // . router 文件夹目录
    // .. 上级目录 src
  },
  {
    path: '/myDetail',
    name: 'MyDetail',
    component: () => import('../views/myDetail/Index.vue'),
    children: [
      {
        path: 'address',
        // 箭头函数
        component: () => import('../views/myDetail/Address.vue')
      },
      {
        path: 'addressAdd',
        // 箭头函数
        component: () => import('../views/myDetail/AddressAdd.vue')
      },
    ],
  },
  {
    path: '/indexDetail',
    name: 'IndexDetail',
    component: () => import('../views/IndexDetail/Index.vue'),
    children: [
      {
        path: 'productList',
        // 箭头函数
        component: () => import('../views/IndexDetail/ProductList.vue')
      }
    ],
  },
  {
    path: '/my',
    name: 'my',
    component: () => import( '../views/my/Index.vue'),
    children:[
      {
        path: 'collection',
        name: 'collection',
        // 箭头函数
        component: () => import('../views/my/collection.vue')
      },
      {
        path: 'purse',
        name: 'purse',
        // 箭头函数
        component: () => import('../views/my/purse.vue')
      },
      {
        path: 'user',
        name: 'user',
        // 箭头函数
        component: () => import('../views/my/user.vue')
      },
      {
        path: 'neirong',
        name: 'neirong',
        // 箭头函数
        component: () => import('../views/my/neirong.vue')
      },
    ],
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import( '../views/shop/shop1.vue'),
    children:[
      // {
      //   path: 'shop1',
      //   name: 'shop1',
      //   // 箭头函数
      //   component: () => import('../views/shop/shop1.vue')
      // },
      {
        path: 'index',
        name: 'index',
        // 箭头函数
        component: () => import('../views/shop/Index.vue')
      },
      {
        path: 'order',
        name: 'Order',
        // 箭头函数
        component: () => import('../views/shop/Order.vue')
      },
      {
        path: 'my',
        name: 'My',
        // 箭头函数
        component: () => import('../views/shop/My.vue')
      },
    ],
  },



]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
