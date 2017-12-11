<template>
  <div>
      <common-header bg="#409EFF" backShow=''>
        <span slot="title">我的</span>
      </common-header>
      
      <div>
          <input type="text" class="username" v-model="username">
          <input type="password" class="password" v-model="password">
          <button @click="login">登录</button>
      </div>



  </div>
</template>

<script>
import CommonHeader from '../common/Header'
import Axios from 'axios'
export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
  components: {
      CommonHeader
  },
  methods: {
      login () {
          Axios.get('http://localhost:3000/login?username=' + this.username + '&password=' + this.password)
          .then((res) => {
              console.log(res);
          })
      }
  }

}
</script>

<style>

</style>