<template>
  <div class="containt">
      <common-header bg="#409EFF" backShow=''>
        <span slot="title">登录</span>
      </common-header>
      
      <div class="container">
          <transition name="fade">
              <img src="../../assets/svg/login.svg" alt="" v-show="index">
          </transition>
              
         
          <input type="text" class="username" v-model="username" placeholder="请输入用户名">
          <br>
          <input type="password" class="password" v-model="password"  placeholder="请输入密码">
          <br>
          <div class="error">{{ errorText }}</div>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="toRegist" class="toregist">我还未注册</el-button>
      </div>
      

      


  </div>
</template>

<script>
import CommonHeader from '../common/Header'
import Axios from 'axios'
export default {
    data () {
        return {
            errorText:'',
            username: '',
            password: '',
            index: false,
            alert:true
        }
    },
  components: {
      CommonHeader
  },
  mounted () {
     this.index = true;
  },
  methods: {
      login () {
          
          if(this.username==false || this.password==false){
              this.errorText = '请输入用户名或密码'
          }else{
              this.errorText = ''
               Axios.post('http://localhost:3000/login',{
              username: this.username,
              password: this.password
                })
                .then((res) => {
                    if(res.data != '密码错误' && res.data != '账号不存在'){
                        console.log(res);
                        localStorage.setItem('userid',res.data.Id);
                         localStorage.setItem('username',res.data.username);
                         localStorage.setItem('name',res.data.name);
                         localStorage.setItem('signature',res.data.signature);
                         localStorage.setItem('head',res.data.head);
                         console.log(localStorage.getItem('username'));
                         this.$router.push({path:'/user'})
                    }else if(res.data == '密码错误'){
                        this.errorText = '密码错误'
                    }else{
                        this.errorText = '账号不存在'
                    }
                })
          }
         
      },
      toRegist () {
          this.$router.push({path:'/regist'})
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
.toregist{
    margin:0 auto;
    margin-top: 0.5rem;
}
.error{
    color:#F56C6C;
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
}
input{
    background:none;
}
</style>