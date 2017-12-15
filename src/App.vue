<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="view"/>
    </transition>
    <common-footer v-if="showFooter" class="test"></common-footer>
  </div>
</template>

<script>
import CommonFooter from './components/common/Footer'
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left',
      showFooter: true  
    }
  },
  components: {
    CommonFooter
  },
  mounted () {
    if(this.$route.path == '/'){
      this.showFooter = false;
    }
  },
  watch: {
　　　'$route' (to, from) {
        
        var fromStr = from.path;
        var toStr = to.path;
        if(toStr == '/' || toStr == '/regist'){
          this.showFooter = false
        }else{
          this.showFooter = true
        }
　　　　　　if(fromStr.indexOf(toStr)) {
　　　　　　　　this.transitionName = 'slide-left'
　　　　　　} else {
　　　　　　   this.transitionName = 'slide-right'
　　　　　}
　　  }
  }
}
</script>

<style>
*{
  margin: 0;  
  padding: 0;
}
#app{
  width: 100%;
  height: 100%;
}
.view{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1.5rem;
  transition: all .4s;
  overflow: hidden;
}
/* .test{
  overflow: hidden;
  position: fixed;
  bottom: 0;
} */

.slide-left-enter, .slide-right-leave-active {  
  /* transform: translate(100%, 0); */
  left: 100%;
  opacity: 0;
}  
.slide-left-leave-active, .slide-right-enter {   
  /* transform: translate(-100%, 0); */
  right: 100%;
  opacity: 0;
}  
</style>
