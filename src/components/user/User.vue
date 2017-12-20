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


    <div class="mytype">
      <div class="title">我的动态 <img src="../../assets/svg/add.svg" alt="" @click="toAddType"></div>
      <ul class="type-list">
        <li v-for="(item, index) in myTypeList" :key="item.Id">


          <div class="user">
            <img :src="head" alt="" class="photo">
            <div class="type-info">
              <div class="username">
                {{ name }}
              </div>
              <div>
                <span>{{ item.date }}</span>
              </div>
            </div>
          </div>

          <div class="content">
            <span>{{ item.content }}</span>
          </div>

          <div class="exchange">
            <img src="../../assets/svg/commit.svg" alt="">
            <img src="../../assets/svg/good.svg" alt="">
          </div>

          <div class="goods">
            <img src="../../assets/svg/goods.svg" alt="">
            <span>我，又是我，还是我</span>
          </div>

          <div class="commit">
            <input type="text" placeholder="评论">
          </div>

        </li>
      </ul>
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
      head: localStorage.getItem('head'),
      myTypeList: [],
    }
  },
  components: {
      CommonHeader
  },
  mounted () {
     Axios.post('http://localhost:3000/mytype',{
              username: localStorage.getItem('username'),
              userid:localStorage.getItem('userid')
                })
                .then((res) => {
                  this.myTypeList = res.data.reverse();
                  for(var x in this.myTypeList){
                    this.myTypeList[x].date = this.formatDate(this.myTypeList[x].date);
                  }
                })
  },
  methods: {
     formatDate(now)   {     
      var timestamp = new Date(parseInt(now));
      var y = timestamp.getFullYear(),
        m = timestamp.getMonth() + 1,
        d = timestamp.getDate();
      return y + '-' + m + '-'  + d; 
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
            console.log(response.data);
          })        
    },
    toDetail () {
      this.$router.push({path:'/userinfo'})
    },
    toAddType () {
      this.$router.push({path:'/addtype'})
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
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

.mytype .title{
  width: 100%;
  background: #ffffff;
  height: 1rem;
  text-align: center;
  margin-top: 1rem;
  color:#303133;
  line-height: 1rem;
  position: relative;
}
.mytype .title img{
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}
.type-list li{
  width: 100%;
  background: #ffffff;
  margin-top: 0.2rem;

}
.type-list li .user{
  width: 100%;
  height: 1rem;
}
.type-list li .user img{
  width: 0.8rem;
  height: 0.8rem;
  border-radius:50%;
  margin-top: 0.1rem;
  margin-left: 0.5rem;
  float:left;
}
.type-list li .user .type-info{
  float: left;
  margin-left: 0.2rem;
  color:#67C23A;
}
.type-list li .user .type-info  .username{
  margin: 0;
}
.type-list li .content{
  padding:0 0.5rem;
  background: #ffffff;
}
.exchange{
  padding-right: 0.5rem;
  height: 1rem;
  line-height: 1rem;
  background: #ffffff;
  border-bottom:1px solid #ebeef5;
}
.exchange img{
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.2rem;
  margin-left: 0.5rem;
  float:right;
}
.goods{
  padding: 0 0.5rem;
  background: #ffffff;
  overflow: hidden;
  color:#303133;
}
.goods img{
  /* margin-top: 0.1rem; */
  vertical-align: middle;
}
.commit{
  padding:0.2rem 0.5rem;
  height: 1rem;
  background: #ffffff;
}
.commit input{
  width: 100%;
  border:none;
  border:1px solid #ebeef5;
  height: 0.6rem;
}
</style>