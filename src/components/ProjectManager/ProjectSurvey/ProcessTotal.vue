<template>
  <div class="">
    <div class="layui-row process-total">
      <div class="layui-card layui-col-md2">
        <div class="layui-card-header">时间进度</div>
        <div class="layui-card-body">
          <CircleProcess :color="color[0]" :process="process[1]"></CircleProcess>
        </div>
      </div>
      <div class="layui-card layui-col-md2">
        <div class="layui-card-header">计划工期完成比</div>
        <div class="layui-card-body">
          <CircleProcess :color="color[1]" :process="process[0]"></CircleProcess>
        </div>
      </div>
      <div class="layui-card layui-col-md2">
        <div class="layui-card-header">实际工期完成此</div>
        <div class="layui-card-body">
          <CircleProcess :color="color[2]" :process="process[2]"></CircleProcess>
        </div>
      </div>
      <div class="layui-card layui-col-md2">
        <div class="layui-card-header">任务计划完成比</div>
        <div class="layui-card-body">
          <CircleProcess :color="color[3]" :process="process[3]"></CircleProcess>
        </div>
      </div>
      <div class="layui-card layui-col-md2">
        <div class="layui-card-header">任务实际完成比</div>
        <div class="layui-card-body">
          <CircleProcess :color="color[0]" :process="process[4]"></CircleProcess>
        </div>
      </div>
      <div class="layui-card layui-col-md2">
        <div class="layui-card-header">任务BUG产生比</div>
        <div class="layui-card-body">
          <CircleProcess :color="color[4]" :process="process[5]"></CircleProcess>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CircleProcess from '@/components/common/CircleProcess'
export default {
  name: 'ProcessTotal',
  data () {
    return {
      process: [30.9, 9.8, 50.0, 36.5, 80, 99.0],
      color: ['#ffc850', '#69e4e4', '#5edd71', '#ff9a4f', '#FF0000']
    }
  },
  mounted () {
  },
  components: {
    CircleProcess
  }
}
</script>

<style scoped>
.layui-row{
    text-align: center;
}
.process-total > div > div{
  margin-left: 10%;
  width: 80%;
}
.layui-row > div{
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
</style>
