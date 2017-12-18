<template>
  <div class="containt">
      <common-header bg="#409EFF" backShow='1'>
        <span slot="title">注册</span>
      </common-header>
      
      <div class="container">
          <transition name="fade">
              <img src="../../assets/svg/login.svg" alt="" v-show="index">
          </transition>
              
         
          <input type="text" class="username" v-model="username" placeholder="请输入用户名">
          <br>
          <input type="password" class="password" v-model="password"  placeholder="请输入密码">
          <br>
          <input type="password" class="repassword" v-model="repassword"  placeholder="请确认密码">
          <br>
          <div class="error">{{ errText }}</div>
          <el-button type="primary" @click="regist">注册</el-button>
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
            password: '',
            repassword:'',
            errText:'',
            index: false
        }
    },
  components: {
      CommonHeader
  },
  mounted () {
     this.index = true;
  },
  methods: {
      regist () {
          if(this.username==false || this.password==false){
              this.errText = '请输入用户名或密码'
          }else if(this.password != this.repassword) {
              this.errText = '请验证密码'
          }else{
              Axios.post('http://localhost:3000/register',{
              username: this.username,
              password: this.password
                })
                .then((res) => {
                    if(res.data == '注册成功'){
                        console.log('成功')
                         localStorage.setItem('username',this.username);
                         this.$router.push({path:'/user'})
                    }else{
                        this.errText = '用户名已存在'
                    }
                })
          }
           
      }
  }

}
</script>

<style scoped>
.container{
    width: 80%;
    margin:0 auto;
    text-align: center;
}
img{
    margin-top: 3rem;
}
input{
    width: 100%;
    border:none;
    outline: none;
    border-bottom:1px solid #5A5E66;
    line-height: 1rem;
    margin-top: 0.5rem;
}
input[type="text"]{
    margin-top: 1rem;
}
button{
    width: 100%;
    height: 1rem;
    margin-top: 1rem;
}

.fade-enter-active, .fade-leave-active{
    opacity: 1;
    transition: 1s ease-in-out;
}
     
.fade-enter, .fade-leave-active{
    opacity: 0;
}
.error{
    color:#F56C6C;
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
}
input{
    background: none;
}
  
</style>