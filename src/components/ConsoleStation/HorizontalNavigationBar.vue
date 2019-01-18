<template>
  <div class="layui-row" id="head">
    <div id="head_left" class="layui-col-md2 layui-side">
      <div class="mylogo" lay-href="">
        <router-link to="/"><img src="../../assets/images/head.jpg" class="layui-nav-img"></router-link><span>控制台--李声林</span>
      </div>
    </div>
    <div id="head_left2" @click="telescopic_open" class="layui-side layui-col-md2" style="width: 4%;display: none">
      <div class="mylogo_1" lay-href="">
        <!--<i class="layui-icon layui-icon-face-smile-fine" style="font-size: 1.6rem"></i>-->
        <img src="../../assets/images/head.jpg" class="layui-nav-img">
      </div>
    </div>
    <div id="head_right" class="layui-col-md10 header-main-top">
      <ul class="layui-nav nav-banner-main-head">
        <li class="layui-nav-item">
          <a href="javascript:;" layadmin-event="message" title="侧边伸缩">
            <i v-if="close == false" class="layui-icon layui-icon-shrink-right" @click="telescopic_close"></i>
            <i v-if="close" class="layui-icon layui-icon-spread-left" @click="telescopic_open"></i>
          </a>
        </li>
      </ul>
      <!-- 隔断 -->
      <ul class="layui-nav nav-banner-main-head layui-layout-right" lay-filter="bar">
        <li class="layui-nav-item" >
          <a href="javascript:;" title="全屏切换" >
            <i v-if="FullScreen == false" @click="fullScreen" class="layui-icon layui-icon-screen-full" style="font-size: 1.3rem"></i>
            <i v-if="FullScreen" @click="exitFullScreen" class="layui-icon layui-icon-screen-restore" style="font-size: 1.3rem"></i>
          </a>
        </li>
        <li class="layui-nav-item" >
          <a href="javascript:;" event="message" title="信息通知">
            <i class="layui-icon layui-icon-notice" style="font-size: 1.3rem;float: left"></i>
            <span class="layui-badge-dot msg"></span>
          </a>
        </li>
        <li class="layui-nav-item" lay-unselect="">
          <a href="javascript:;"><img src="../../assets/images/logo.jpg" class="layui-nav-img"></a>
          <dl class="layui-nav-child">
            <dd><a href="javascript:;">修改信息</a></dd>
            <dd><a href="javascript:;">安全管理</a></dd>
            <dd><a href="javascript:;">退了</a></dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalNavigationBar', // 水平的导航栏
  props: {
    windowMin: Boolean
  },
  data () {
    return {
      FullScreen: false,
      close: false
    }
  },
  watch: {
    windowMin (v) {
      if (v) {
        this.telescopic_close()
      } else {
        this.telescopic_open()
      }
    }
  },
  mounted () {
    window.layui.use('element')
  },
  methods: {
    fullScreen () {
      let el = window.document.documentElement
      /* eslint-disable */
      let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen, wscript
      /* eslint-enable  */
      this.FullScreen = true
      if (typeof rfs !== 'undefined' && rfs) {
        rfs.call(el)
        return
      }
      if (typeof window.ActiveXObject !== 'undefined') {
        /* eslint-disable */
        wscript = new ActiveXObject('WScript.Shell')
        /* eslint-enable  */
        if (wscript) {
          wscript.SendKeys('{F11}')
        }
      }
    },
    exitFullScreen () {
      let el = window.document
      /* eslint-disable */
      let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen, wscript
      /* eslint-enable  */
      this.FullScreen = false
      if (typeof cfs !== 'undefined' && cfs) {
        cfs.call(el)
        return
      }
      if (typeof window.ActiveXObject !== 'undefined') {
        /* eslint-disable */
        wscript = new ActiveXObject('WScript.Shell')
        /* eslint-enable  */
        if (wscript != null) {
          wscript.SendKeys('{F11}')
        }
      }
    },
    telescopic_close () {
      this.close = true
      this.$emit('telescopic', this.close)
      document.getElementById('head_left').style.display = 'none'
      document.getElementById('head_left2').style.display = 'inherit'
      document.getElementById('head_right').style = 'width: 96%;'
    },
    telescopic_open () {
      window.layui.layer.closeAll('tips')
      this.close = false
      this.$emit('telescopic', this.close)
      document.getElementById('head_left').style.display = 'inherit'
      document.getElementById('head_left2').style.display = 'none'
      document.getElementById('head_right').style = ''
    }
  },
  updated () {
    /* eslint-disable */
    layui.element.init()
    /* eslint-enable  */
  }
}
</script>

<style scoped>
  #head{
    position: fixed;
    width: 100%;
    z-index: 1;
  }
  .nav-banner-main-head{
    background-color: #FFF;
    width: 15rem;
    margin-left: -1rem;
  }
  .nav-banner-main-head .layui-nav-item a {
    color: black;
  }
  .header-main-top{
    background-color: #FFF;
    border-bottom: none;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    box-sizing: border-box;
    height: 3rem;
  }
  .msg{
    margin-left: -0.5rem;
    margin-top: -0.8rem;
  }
  .mylogo{
    background-color: #2F4056 !important;
    color: rgba(255,255,255,.8);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    left: 0;
    top: 0;
    z-index: 1002;
    width: 100%;
    height: 3rem;
    padding: 0 1rem 0 2rem;
    box-sizing: border-box;
    overflow: hidden;
    font-weight: 300;
    background-repeat: no-repeat;
    background-position: center center;
    line-height: 3.01rem;
  }
  .mylogo_1{
    background-color: #2F4056 !important;
    color: rgba(255,255,255,.8);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
    left: 0;
    top: 0;
    z-index: 1002;
    width: 100%;
    height: 100%;
    padding: 0.2rem 0.8rem 0rem 0.8rem;
    overflow: hidden;
    font-weight: 300;
    background-repeat: no-repeat;
    background-position: center center;
    line-height: 3.01rem;
  }
  .layui-layout-admin .layui-header .layui-nav-bar{
    background-color: #20222A;
  }
  .nav-banner-main-head .layui-nav-item a:hover, .layui-nav .layui-this a{
    color: #0C0C0C;
  }
  .nav-banner-main-head .layui-nav-item{
    height: 3rem;
  }
  .nav-banner-main-head .layui-nav-more {
    color: #0C0C0C;
  }
  .layui-nav .layui-this:after, .layui-nav-bar .layui-nav-itemed:after {
    /*background-color: #393D49;*/
    height: 0.2rem;
    display: none;
  }
  .nav-banner-main-head i{
    font-size: 1.3rem;
  }
</style>
