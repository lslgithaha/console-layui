<template>
  <div class="layui-row layui-row-main">
    <div class="">
    <div class="layui-side-scroll layui-bg-black">
      <ul class="layui-nav layui-nav-tree layui-inline"  lay-shrink="all" id="tree" lay-filter="tree">
        <li class="layui-nav-item" :class="openItem==='主页'?'layui-nav-itemed':''">
          <a href="javascript:;"><i class="layui-icon layui-icon-home"></i>主页</a>
          <dl class="layui-nav-child layui-nav-child-h">
            <dd><a href="javascript:;" @click="goto('indexganttchart')">甘特图</a></dd>
            <dd><a href="javascript:;">工作量统计</a></dd>
            <dd><a href="javascript:;">需求统计</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item" :class="openItem==='看板'?'layui-nav-itemed':''">
          <a href="javascript:;"><i class="layui-icon-table layui-icon"></i>任务看板</a>
          <dl class="layui-nav-child layui-nav-child-h">
            <dd><a href="javascript:;" @click="goto('kanban')">全局看板</a></dd>
            <dd><a href="javascript:;" @click="goto('kanbandemand')">需求看板</a></dd>
            <dd><a href="javascript:;" @click="goto('kanbandesign')">设计看板</a></dd>
            <dd><a href="javascript:;" @click="goto('kanbandevelop')">开发看板</a></dd>
            <dd><a href="javascript:;" @click="goto('kanbantest')">测试看板</a></dd>
            <dd><a href="javascript:;" @click="goto('kanbanaccept')">验收看板</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"  :class="openItem==='项目管理'?'layui-nav-itemed':''">
          <a href="javascript:;"><i class="layui-icon-template-1 layui-icon"></i>项目管理</a>
          <dl class="layui-nav-child layui-nav-child-h">
            <dd><a href="javascript:;" @click="goto('projectsurvey')">项目概览</a></dd>
            <dd><a href="javascript:;" @click="goto('projectpeoplemanage')">人员管理</a></dd>
            <dd><a href="javascript:;" @click="goto('projectfilemanage')">项目文档</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"  :class="openItem==='接口管理'?'layui-nav-itemed':''">
          <a href="javascript:;"><i class="layui-icon-about layui-icon"></i>接口管理</a>
          <dl class="layui-nav-child layui-nav-child-h">
            <dd><a href="javascript:;" @click="goto('InterfaceDevelop')">接口列表</a></dd>
            <dd><a href="javascript:;">自动测试</a></dd>
            <dd><a href="javascript:;">模拟返回</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"  :class="openItem==='测试管理'?'layui-nav-itemed':''">
          <a href="javascript:;"><i class="layui-icon-search layui-icon"></i>测试管理</a>
          <dl class="layui-nav-child layui-nav-child-h">
            <dd><a href="javascript:;">测试用例</a></dd>
            <dd><a href="javascript:;">接口</a></dd>
            <dd><a href="javascript:;">BUG</a></dd>
            <dd><a href="javascript:;">压力测试</a></dd>
            <dd><a href="javascript:;">边界测试</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item" :class="openItem==='应用'?'layui-nav-itemed':''">
          <a href="javascript:;"><i class="layui-icon-app layui-icon"></i>应用</a>
          <dl class="layui-nav-child layui-nav-child-h">
            <dd><a href="javascript:;">内容</a></dd>
            <dd><a href="javascript:;">社区</a></dd>
            <dd><a href="javascript:;">客户管理</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item" :class="openItem==='配置管理'?'layui-nav-itemed':''">
          <a href="javascript:;"><i class="layui-icon-align-center layui-icon"></i>配置管理</a>
          <dl class="layui-nav-child layui-nav-child-h">
            <dd><a href="javascript:;">线下配置</a></dd>
            <dd><a href="javascript:;">开发配置</a></dd>
            <dd><a href="javascript:;">测试配置</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item" :class="openItem==='控制台'?'layui-nav-itemed':''">
          <a href="javascript:;"><i class="layui-icon-console layui-icon"></i>控制台</a>
          <dl class="layui-nav-child layui-nav-child-h">
            <dd><a href="javascript:;">项目集成</a></dd>
            <dd><a href="javascript:;javascript:;">项目拓扑</a></dd>
            <dd><a href="javascript:;">服务器健康状况</a></dd>
          </dl>
        </li>
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon-engine layui-icon"></i>引擎</a></li>
        <li class="layui-nav-item"><a href="javascript:;"><i class="layui-icon layui-icon-auz"></i>安全</a></li>
      </ul>
      <div style="width: 1%;height: 10rem"></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerticalNavigationBar', // 左侧功能栏
  props: {
    openItem: String
  },
  data () {
    return {
    }
  },
  watch: {
    // openItem: {
    //   handler (val) {
    //     console.log(val)
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  mounted () {
    /* eslint-disable */
    layui.use('element')
    /* eslint-enable  */
  },
  beforeUpdate () {
    window.layui.use('element')
  },
  methods: {
    goto (path) {
      this.$router.push('/main/' + path)
    }
  }
}
</script>

<style scoped>
  /*.layui-row-main{*/
    /*position: fixed;*/
  /*}*/
  .layui-row-main > div{
    position:fixed;
    z-index: 1;
    width:16.666667%;
    height: 100%;
    overflow: hidden;
  }
  .layui-side-scroll{
    width:107%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .layui-nav-tree {
    width: 100%;
  }
  .layui-row-main{
    padding: 0rem;
    position: absolute;
    width: 100%;
    /*height: 100;*/
    top: 3rem;
    bottom: 0;
    left: 0;
  }
.layui-nav-item>a{
  font-size: 1rem;
}
.layui-nav-item i{
  font-size: 1.1rem;
  margin-right: 0.7rem;
  margin-left: 1rem;
}
.layui-nav-child-h a{
  font-size: 0.9rem;
  padding-left: 3rem;
}
</style>
