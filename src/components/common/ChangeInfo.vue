<template>
  <div>
    <common-header backShow='1' bg="#303133">
      <span slot="title">{{ title }}</span>
    </common-header>
    <div class="content" v-if="show">
        <input type="text" v-model="text">
        <div class="submit" @click="submit">完成</div>
    </div>

    <div class="img"  v-if="!show">
        <label for="file">点击上传图片</label>
        <br>
        <input id="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>
        <img :src="img" alt="">
        <br>
        <div class="submit" @click="submit">完成</div>
    </div>
    
    
  </div>
   
</template>

<script>
import CommonHeader from '../common/Header'
import Axios from 'axios'
export default {
    data () {
        return {
            title: '',
            text: '',
            img: '',
            show:true
        }
    },
    created () {
        if(this.$route.query.change == 'name'){
            this.title = '修改昵称';
            this.text = localStorage.getItem('name')
        }else if(this.$route.query.change == 'sign'){
            this.title = '修改个性签名';
            this.text = localStorage.getItem('signature')
        }else if(this.$route.query.change == 'img'){
            this.title = '修改头像';
            this.img = localStorage.getItem('head');
            this.show = false;
        }
    },
    methods: {
        submit () {
            if(this.$route.query.change == 'name'){
                 Axios.post('http://localhost:3000/changename',{
              username: localStorage.getItem('username'),
              name: this.text
                })
                .then((res) => {
                   localStorage.setItem('name',this.text);
                   this.$router.push({path:'/userinfo'})
                })
            }else if(this.$route.query.change == 'sign'){
                 Axios.post('http://localhost:3000/changesign',{
              username: localStorage.getItem('username'),
              sign: this.text
                })
                .then((res) => {
                   localStorage.setItem('signature',this.text);
                   this.$router.push({path:'/userinfo'})
                })
            }else if(this.$route.query.change == 'img'){
                  Axios.post('http://localhost:3000/changehead',{
              username: localStorage.getItem('username'),
              head: this.img
                })
                .then((res) => {
                   localStorage.setItem('head',this.img);
                   this.$router.push({path:'/userinfo'})
                })
            }
        },
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
              console.log(response)
            this.img = 'http://106.15.228.215:8080/Blog/' + response.data.data;
          })        
        }
    },
    components: {
        CommonHeader
    },
}
</script>

<style scoped>
.content{
    position: relative;
}
input{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border:none;
    color:#606266;
}
.submit{
    position: absolute;
    right: 0.2rem;
    top: 50%;
    transform: translateY(-50%);
    color:#67C23A;
}

.img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align:center;
    color:#67C23A;
}
.img img{
    width: 4rem;
}
#file{
    width: 0;
    height: 0;
}
</style>