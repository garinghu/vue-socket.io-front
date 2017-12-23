<template>
  <div>
      <div class="footer">
        <div class="type" @click="toFriend">
          <img v-if="showFriend" src="../../assets/svg/friend.svg" alt="">
          <img v-if="!showFriend" src="../../assets/svg/friend-select.svg" alt="">
          <br>
          <span :class="{select:showFriend == false}">好友</span>
        </div>
        <div class="type" @click="toType">
          <img v-if="showType" src="../../assets/svg/type.svg" alt="">
          <img v-if="!showType" src="../../assets/svg/type-select.svg" alt="">
          <br>
          <span :class="{select:showType == false}">动态</span>
        </div>
        <div class="type" @click="toMy">
          <img v-if="showMy" src="../../assets/svg/my.svg" alt="">
          <img v-if="!showMy" src="../../assets/svg/my-select.svg" alt="">
          <br>
          <span :class="{select:showMy == false}">我的</span>
        </div>
      </div>
      <div class="filter"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showFriend: true,
      showType: true,
      showMy: false
    }
  },
  methods: {
   toFriend () {
     this.showFriend = false;
     this.showType = true;
     this.showMy = true;
     this.$router.push({path:'/friends'})
   },
   toType () {
     this.showFriend = true;
     this.showType = false;
     this.showMy = true;
     this.$router.push({path:'/type'})
   },
   toMy () {
     this.showFriend = true;
     this.showType = true;
     this.showMy = false;
     this.$router.push({path:'/user'})
   }
  }
}
</script>

<style scoped>
.footer{
  width: 100%;
  height: 1.2rem;
  position:fixed;
  bottom: 0;
  background: #fff;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #DCDFE6;
  color:#606266;
  overflow: hidden;
}
.footer>div{
  flex:1;
  text-align: center;
}
.footer>div img{
  width: 0.6rem;
  border:none;
}
.select{
  color:#409EFF;
}
.filter{
  width: 100%;
  height: 0;
  margin-top: 1.5rem;
}
</style>