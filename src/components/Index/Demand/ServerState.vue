<template>
  <div>
    CPU：
    <div class="layui-progress layui-progress-big" lay-showpercent="true">
      <div class="layui-progress-bar" lay-percent="20%"></div>
    </div>
    <br/>
    内存：
    <div class="layui-progress layui-progress-big" lay-showpercent="true">
      <div class="layui-progress-bar layui-bg-orange" lay-percent="70%"></div>
    </div>
    <br/>
    磁盘：
    <div class="layui-progress layui-progress-big" lay-showpercent="true">
      <div class="layui-progress-bar layui-bg-red" lay-percent="90%"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServerState',
  mounted () {
    window.layui.use('element')
  },
  updated () {
    window.layui.use('element', function () {
      window.layui.element.init()
    })
  }
}
</script>

<style scoped>

</style>
