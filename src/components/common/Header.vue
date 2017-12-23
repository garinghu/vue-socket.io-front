<template>
  <div>
     <div class="header" :style="{background:bg}">
        <div v-if="backShow" @click="goBack">
            <img src="../../assets/svg/back.svg" alt="" class="img">
        </div>
        <h2 class="title">
          <slot name="title">默认值</slot>
        </h2>
    </div>
    <div class="filter"></div>
  </div>
   
</template>

<script>
export default {
  props: ['bg', 'backShow','to'],
  data () {
      return {
          back: false
      }
  },
  methods: {
    goBack () {
      if(this.to){
          this.$router.push({path: this.to})
      }else{
        history.back()
      }
    }
  },
  mounted () {
      
  }
}
</script>

<style scoped>
.header{
  height:1rem;
  background: #409EFF;
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 1rem;
  z-index:100;
}
.title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.img{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.filter{
  width: 100%;
  height: 0;
  margin-bottom: 1rem;
}
</style>