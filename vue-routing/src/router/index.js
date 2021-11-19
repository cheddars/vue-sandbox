import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/main.css'

import Login from '@/components/Login'
import Root from '@/components/Root'
import UserAComp from '@/components/UserAComp'
import UserBComp from '@/components/UserBComp'
import UserInfo from '@/components/UserInfo'

import { isAuthenticated } from '../service/auth/AuthService'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', component: Login },
    { path: '/', name: 'root', component: Root, meta: { reqAuth : true }},
    { path: '/userinfo', name: 'userinfo', component: UserInfo, meta: { reqAuth: true } },
    { path: '/usera', name: 'usera', component: UserAComp, meta: { reqAuth: true, type : 'typeA' } },
    { path: '/userb', name: 'userb', component: UserBComp, meta: { reqAuth: true, type : 'typeB' } }
  ]
})

router.beforeEach((to, from, next) => {
  console.log("check route", to)
  console.log("is authenticated() :", isAuthenticated() === true)
  const role = 'typeA'

  if (to.matched.some(record => record.meta.reqAuth)) {
    console.log("require auth")
    if (!isAuthenticated()) {
      console.log("not logined")
      next({name : 'login'})
    } else {
      console.log("logined")

      if(to.matched.some(record => { return (!record.meta.type || record.meta.type == role) })){
        console.log("allowed", role)
        next()        
      }else{
        console.log("not allowed", role)
        next({name : 'root' })
      }
    }
  } else {
    next() // 반드시 next()를 호출하십시오!
  }
})

export default router
