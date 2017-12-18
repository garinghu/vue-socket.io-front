<template>
  <div>
    <common-header>
      <span slot="title">我的</span>
    </common-header>

    <div class="userinfo">
        <!-- <input  name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/> -->
        <img :src="head" alt="" class="photo">
        <div class="info">
          <div class="username">
            {{ name }}
          </div>
          <div>
            <span>账号：</span>
            <span>{{ username }}</span>
          </div>
        </div>
        <img src="../../assets/svg/next.svg" alt="" class="next" @click="toDetail">
    </div>
  </div>
   
</template>

<script>
import CommonHeader from '../common/Header'
import Axios from 'axios'
export default {
  data () {
    return {
      name: localStorage.getItem('name'),
      username: localStorage.getItem('username'),
      head: localStorage.getItem('head')
    }
  },
  components: {
      CommonHeader
  },
  methods: {
    update(e){
          let file = e.target.files[0];           
          let param = new FormData(); 
          param.append('picture',file,file.name);
          console.log(param.get('file'));
          let config = {
            headers:{'Content-Type':'multipart/form-data'}
          };  
          Axios.post('http://106.15.228.215:8080/Blog/admin/picture',param,config)
          .then(response=>{
            console.log(response.data);
          })        
    },
    toDetail () {
      this.$router.push({path:'/userinfo'})
    }
  }
}
</script>

<style scoped>
.userinfo{
  height: 2.5rem;
  background: #ffffff;
  position: relative;
}
.userinfo .photo{
  width: 2rem;
  height: 2rem;
  margin: 0.25rem 0 0 0.25rem;
  float: left;
}
.userinfo .info{
  height: 2rem;
  margin: 0.5rem 0 0 0.25rem;
  float:left;
}
.username{
  margin-bottom:0.3rem;
}
.next{
  position:absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}
</style>