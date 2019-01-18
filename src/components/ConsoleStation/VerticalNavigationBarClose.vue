<template>
  <div class="layui-row layui-row-main-close">
    <div class="">
      <div class="layui-side-scroll layui-bg-black"  @click="$emit('telescopic', false)">
        <ul class="layui-nav layui-nav-tree layui-inline" lay-filter="pic_nav">
          <li class="layui-nav-item layui-nav-itemed" @mouseout="liout" @mouseover="lihover($event.currentTarget)" @click="chooseItem($event.currentTarget)" v-for="item in items" :key="item.name">
            <a href="javascript:;"><i :class="'layui-icon ' + item.icon" :t="item.name"></i></a>
          </li>
        </ul>
        <div style="width: 1%;height: 10rem"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalNavigationBarClose', // 左侧功能栏
  data () {
    return {
      items: [
        {
          name: '主页',
          icon: 'layui-icon-home'
        },
        {
          name: '看板',
          icon: 'layui-icon-table'
        },
        {
          name: '项目管理',
          icon: 'layui-icon-template-1'
        },
        {
          name: '接口管理',
          icon: 'layui-icon-about'
        },
        {
          name: '测试管理',
          icon: 'layui-icon-search'
        },
        {
          name: '应用',
          icon: 'layui-icon-app'
        },
        {
          name: '配置管理',
          icon: 'layui-icon-align-center'
        },
        {
          name: '控制台',
          icon: 'layui-icon-console'
        },
        {
          name: '引擎',
          icon: 'layui-icon-engine'
        },
        {
          name: '安全',
          icon: 'layui-icon-auz'
        }
      ]
    }
  },
  mounted () {
    /* eslint-disable */
    this.init()
    /* eslint-enable  */
  },
  methods: {
    init () {
      window.layui.use(['element', 'layer'], function () {
        // let element = window.layui.element
        // let layer = window.layui.layer
        // element.on('nav(pic_nav)', function (elem) {
        //   // alert(elem.find('i').attr('t'))
        //   layer.tips(elem.find('i').attr('t'), elem, {
        //     time: 4000
        //   })
        //   // alert(elem.find('i').attr('t'))
        // })
      })
    },
    lihover (e) {
      let t = e.children[0].children[0].getAttribute('t')
      window.layui.layer.tips(t, e)
    },
    liout () {
      window.layui.layer.closeAll('tips')
    },
    chooseItem (e) {
      window.layui.layer.closeAll('tips')
      this.$emit('openOneItem', e.children[0].children[0].getAttribute('t'))
    }
  },
  updated () {
    this.init()
  }
}
</script>

<style scoped>
  .layui-row-main-close > div{
    position:fixed;
    z-index: 1;
    width:4%;
    height: 100%;
    overflow: hidden;
  }
  .layui-side-scroll{
    width:130%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .layui-nav-tree {
    width: 100%;
  }
  /*.layui-nav-child-h dd:hover{*/
    /*background-color: #009688;*/
  /*}*/
  .layui-row-main-close{
    padding: 0rem;
    position: absolute;
    width: 100%;
    /*height: 100;*/
    top: 3rem;
    bottom: 0;
    left: 0;
  }
  /*.layui-side-scroll::-webkit-scrollbar {*/
  /*display: none;*/
  /*}*/
  .layui-row-main-close a{
    font-size: 1rem;
    padding: 0 0 0 0;
  }
  .layui-row-main-close i{
    font-size: 1.1rem;
    margin-right: 0.7rem;
    margin-left: 1rem;
  }
  .layui-nav-child-h a{
    font-size: 0.9rem;
    padding-left: 3rem;
  }
</style>
