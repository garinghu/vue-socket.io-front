import Vue from 'vue'
import Router from 'vue-router'
import MyLogin from '@/components/my/MyLogin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyLogin',
      component: MyLogin
    }
  ]
})
