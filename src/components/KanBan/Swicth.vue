<template>
  <div>
    <div v-if="self_status" class="project-switch">
      <div v-for="i in 10" :key="i">
        <button class="layui-btn layui-btn-primary" @mouseover="showSwicthTips($event.currentTarget, '单击可切换到项目' + i)"
                @click="switchProject"
                @mouseout="closeSwicthTips">
          <i class="layui-icon layui-icon-template"></i></button>
        <br/>
      </div>
      <button v-if="showAll" @mouseover="showSwicthTips($event.currentTarget, '单击显示所有人')" @mouseout="closeSwicthTips"
              @click="showAllTasks(false)"
              class="layui-btn layui-btn-primary"><i class="layui-icon layui-icon-rate"></i></button>

      <button v-if="showAll == false" @mouseover="showSwicthTips($event.currentTarget, '单击只显示我')"
              @mouseout="closeSwicthTips"
              @click="showAllTasks(true)"
              class="layui-btn layui-btn-primary"><i class="layui-icon layui-icon-rate-solid"></i></button><br/>
      <button @mouseover="showSwicthTips($event.currentTarget, '单击隐藏')"
              @mouseout="closeSwicthTips"
              @click="hidePeojects(false)"
              class="layui-btn layui-btn-primary"><i class="layui-icon layui-icon-next"></i></button>
    </div>
    <div v-if="self_status == false" class="project-switch-2">
      <button @mouseover="showSwicthTips($event.currentTarget, '单击展开')"
              @mouseout="closeSwicthTips"
              @click="hidePeojects(true)"
              class="layui-btn layui-btn-xs"><i class="layui-icon layui-icon-prev"></i></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swicth',
  data () {
    return {
      showAll: true,
      self_status: true
    }
  },
  mounted () {
    window.layui.use('layer')
  },
  methods: {
    switchProject () {
      // 00
    },
    showSwicthTips (e, msg) {
      window.layui.layer.tips(msg, e, {
        tips: [4, '#5FB878']
      })
    },
    closeSwicthTips () {
      window.layui.layer.closeAll('tips')
    },
    showAllTasks (b) {
      this.showAll = b
      // if (b) {
      // }
    },
    hidePeojects (b) {
      this.self_status = b
      // if (b) {
      // }
    }
  }
}
</script>

<style scoped>
  .project-switch-2{
    position: fixed;
    top: 70%;
    right: 0;
    bottom: 30%;
  }
  .project-switch{
    position: fixed;
    top: 30%;
    right: 0;
    bottom: 30%;
  }
  .project-switch button{
    margin-top: 0.1rem;
  }
</style>
