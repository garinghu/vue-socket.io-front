<template>
  <div>
    <common-header bg="#303133" backShow='1'>
      <span slot="title">发表动态</span>
    </common-header>

    <div class="content">
        <textarea name="" id="" placeholder="发表新鲜事" v-model="content"></textarea>
    </div>

    <el-button type="success" @click="submit">点击发表</el-button>
  </div>   
</template>

<script>
import CommonHeader from '../common/Header'
import Axios from 'axios'
export default {
  data () {
      return {
          content: ''
      }
  },
  components: {
      CommonHeader
  },
  methods: {
      submit () {
          
          var timestamp=new Date().getTime();
          console.log(localStorage.getItem('userid'), this.content,timestamp)
            Axios.post('http://localhost:3000/addtype',{
              userid: localStorage.getItem('userid'),
              content: this.content,
              date: timestamp
                })
                .then((res) => {
                  if(res.data == '成功'){
                      this.$router.push({path:'/user'})
                  }
                })
      }
  }
}
</script>

<style scoped>
.content{
    padding: 0 0.5rem;
    background: #ffffff;
}
.content textarea{
    width: 100%;
    height: 30vh;
    border:none;
    resize: none;
    caret-color:#409EFF;
}
.el-button{
    width: 100%;
}
</style>