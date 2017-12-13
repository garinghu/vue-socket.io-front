<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="view"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'  
    }
  },
  watch: {
　　　'$route' (to, from) {
        var fromStr = from.path;
        var toStr = to.path;
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
  bottom: 0;
  transition: all .4s;
}

.slide-left-enter, .slide-right-leave-active {  
  transform: translate(100%, 0);
}  
.slide-left-leave-active, .slide-right-enter {   
  transform: translate(-100%, 0);
}  
</style>
