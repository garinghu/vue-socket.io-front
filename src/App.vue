<template>
  <div id="app" :style="note">
    <transition :name="transitionName"
    v-on:enter="enter">
      <router-view class="view"/>
    </transition>
    <transition name="fold">
      <common-footer v-if="showFooter" class="example"></common-footer>
    </transition>
  </div>
</template>

<script>
import CommonFooter from './components/common/Footer'
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left',
      showFooter: true,
      note:{}
    }
  },
  components: {
    CommonFooter
  },
  methods: {
    enter () {
      this.note = {overflow: 'hidden'}
    }
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
        if(toStr == '/' || toStr == '/regist' || toStr == '/userinfo' || toStr == '/changeinfo' || toStr == '/addtype'){
          this.showFooter = false
        }else{
          this.showFooter = true
        }
        if(toStr == '/changeinfo' || toStr == '/addtype'){
          this.transitionName = 'slide-top'
        }else if(fromStr == '/changeinfo'|| fromStr == '/addtype'){
          this.transitionName = 'slide-bottom'
        }else if(fromStr.indexOf(toStr)) {
　　　　　　　this.transitionName = 'slide-left'
　　　　 }else{
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
 position: absolute;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
overflow-x: hidden;
 background: #ebeef5;
 color:#606266;
}
.view{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1.5rem;
  transition: all .4s ease-in-out;
  overflow: hidden;
  background: #ebeef5;
}

.slide-left-enter, .slide-right-leave-active {  
  transform: translate(100%, 0);
}  
.slide-left-leave-active, .slide-right-enter {   
  transform: translate(-100%, 0);
}

.slide-top-enter-active, .slide-top-leave-active {
    transform: translate(0,0);
}
.slide-top-enter, .slide-top-leave {
    transform: translate(0, 100%);
}

.slide-bottom-enter-active, .slide-bottom-leave-active {
    transform: translate(0,0);
}
.slide-bottom-enter, .slide-bottom-leave {
    transform: translate(0, -100%);
}




.example {
    transition: all .4s;
}
.fold-enter-active, .fold-leave-active {
    opacity: 1;
}
.fold-enter, .fold-leave-active {
    opacity: 0;
}
</style>
