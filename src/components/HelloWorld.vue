<template>
  <div class="layui-container layui-container-main">
    <HorizontalNavigationBar :windowMin="barClose" @telescopic="telescopic"></HorizontalNavigationBar>
    <VerticalNavigationBar v-if="barClose == false" :openItem="openItem"></VerticalNavigationBar>
    <VerticalNavigationBarClose v-if="barClose" @telescopic="telescopic" @openOneItem="openOneItem"></VerticalNavigationBarClose>
    <div id="main-container" class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HorizontalNavigationBar from './ConsoleStation/HorizontalNavigationBar'
import VerticalNavigationBarClose from './ConsoleStation/VerticalNavigationBarClose'
import VerticalNavigationBar from './ConsoleStation/VerticalNavigationBar'
export default {
  data () {
    return {
      barClose: false,
      openItem: '主页'
    }
  },
  components: {
    HorizontalNavigationBar,
    VerticalNavigationBar,
    VerticalNavigationBarClose
  },
  methods: {
    telescopic (b) {
      this.barClose = b
      if (b) {
        document.getElementById('main-container').style = 'width: 93.5%'
      } else {
        document.getElementById('main-container').style = ''
      }
    },
    openOneItem (i) {
      this.openItem = i
    }
  }
}
</script>
<style>
html, body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
.layui-container-main{
  width: 100%;
  padding: 0rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}
.main-container{
  padding: 0rem;
  position: absolute;
  width: 82%;
  /*height: 100;*/
  top: 3.5rem;
  bottom: 0;
  right: 1%;
}
</style>
