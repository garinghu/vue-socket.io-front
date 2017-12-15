import Vue from 'vue'
import Router from 'vue-router'
import MyLogin from '@/components/my/MyLogin.vue'
import MyRegist from '@/components/my/MyRegist.vue'
import User from '@/components/user/User.vue'
import Friends from '@/components/friends/Friends.vue'
import Type from '@/components/type/Type.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyLogin',
      component: MyLogin
    },
    {
      path: '/regist',
      name: 'MyRegist',
      component: MyRegist
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/type',
      name: 'Type',
      component: Type
    }
  ]
})
