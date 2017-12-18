<template>
  <div>
    <common-header backShow='1' to='/user'>
      <span slot="title">个人信息</span>
    </common-header>

    <div class="userinfo">
        <ul>
            <li class="photo">
                <div class="title">头像</div>
                <div class="img" :style="note"></div>
                <img src="../../assets/svg/next.svg" alt="" class="next" @click="changeImg">
            </li>
            <li>
                <div class="title">昵称</div>
                <div class="content">{{ name }}</div>
                <img src="../../assets/svg/next.svg" alt="" class="next" @click="changeName">
            </li>
            <li>
                <div class="title">账号</div>
                <div class="content">{{ username }}</div>
            </li>
            <li>
                <div class="title">我的二维码</div>
                <div class="content">还没有</div>
            </li>
        </ul>

        <div class="signature">
            <div class="title"  @click="changeSign">个性签名
                <img src="../../assets/svg/next.svg" alt="" class="next">
            </div>
            <div class="content">
                {{ signature }}
            </div>
        </div>
    </div>
  </div>
   
</template>

<script>
import CommonHeader from '../common/Header'
import Axios from 'axios'
export default {
    data () {
        return {
            imgUrl:localStorage.getItem('head'),
            name: localStorage.getItem('name'),
            username: localStorage.getItem('username'),
            signature: localStorage.getItem('signature'),
            note: {
                backgroundImage: "url("+localStorage.getItem('head') + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },
        }
    },
    components: {
        CommonHeader
    },
    methods: {
        changeName () {
             this.$router.push({path:'/changeinfo',query: { change: 'name' }})
        },
        changeSign () {
             this.$router.push({path:'/changeinfo',query: { change: 'sign' }})
        },
        changeImg () {
             this.$router.push({path:'/changeinfo',query: { change: 'img' }})
        }
    }
}
</script>

<style scoped>
.userinfo ul{
    list-style: none;
}
.userinfo li{
    width: 100%;
    height: 1rem;
    line-height:1rem;
    background: #ffffff;
    border-bottom:1px solid #DCDFE6;
    position: relative;
}
.userinfo li .title{
    float: left;
    margin-left: 0.5rem;
    color:#303133;
}
.userinfo li .content{
    float: right;
    margin-right: 1rem;
}
.userinfo .photo{
    height: 2rem;
    line-height:2rem;
}
.userinfo .photo .img{
    width: 1.8rem;
    height: 1.8rem;
    position:absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
}
.signature{
    width: 100%;
    background: #ffffff;
    margin-top: 1rem;
}
.signature .title{
    padding-left: 0.5rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom:1px solid #DCDFE6;
    color:#303133;
    position: relative;
}
.signature .content{
    padding-left: 0.5rem;
    height: 3rem;
}
.next{
    position: absolute;
    right: 0;
    width: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
}
</style>