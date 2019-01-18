<template>
  <div class="layui-col-md12">
    <div class="layui-col-md3 shortcat" v-for="i in 12" :key="i">
      <div class="shortcat-li">
        <i class="layui-icon layui-icon-loading-1 layui-anim layui-anim-rotate layui-anim-loop"></i>
        <p>功能{{i}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shortcut',
  mounted () {
    window.layui.use('element', function () {
      // let element = window.layui.element
    })
  },
  updated () {
    window.layui.use('element')
  }
}
</script>

<style scoped>
.shortcat{
  padding: 0.2rem;
}
.shortcat-li{
  background-color: #f2f2f2;
  text-align: center;
  height: 3.2rem;
  padding: 0.5rem 0 0 0;
  cursor: pointer;
}
.shortcat-li:hover{
  background-color: #e2e2e2;
}
.shortcat-li i{
  font-size: 1.8rem;
}
</style>
