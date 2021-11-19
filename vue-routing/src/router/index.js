import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/main.css'

import Login from '@/components/Login'
import Root from '@/components/Root'
import UserAComp from '@/components/UserAComp'
import UserBComp from '@/components/UserBComp'
import UserInfo from '@/components/UserInfo'

// import { getUser, isAuthenticated } from '../service/auth/AuthService'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/', name: 'root', component: Root },
    { path: '/userinfo', name: 'userinfo', component: UserInfo },
    { path: '/usera', name: 'usera', component: UserAComp },
    { path: '/userb', name: 'userb', component: UserBComp }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (isAuthenticated()) {
//     to.params.user = getUser()
//     console.log('is_auth', to.params.user.username)
//   }
//   next()
// })

export default router
