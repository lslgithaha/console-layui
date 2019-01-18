<template>
  <div class="layui-col-md12 card-father">
    <div class="layui-card">
      <div class="layui-card-header">
        <span v-if="data.priority == 1" class="layui-badge" @mouseover="showTips($event.currentTarget, '紧急程度')"
              @mouseout="closeTips">急</span>
        <span v-if="data.priority == 2" class="layui-badge" @mouseover="showTips($event.currentTarget, '紧急程度')"
              @mouseout="closeTips" style="background-color: #ca8622">中</span>
        <span v-if="data.priority == 3" class="layui-badge" @mouseover="showTips($event.currentTarget, '紧急程度')"
              @mouseout="closeTips" style="background-color: #91c7ae">低</span>
        <span v-if="data.isBug == 1" class="layui-badge">BUG</span>
        <span v-if="data.participant == 1" class="layui-badge-rim" @mouseover="showTips($event.currentTarget, '参与人员')"
              @mouseout="closeTips">前端</span>
        <span v-if="data.participant == 2" class="layui-badge-rim" @mouseover="showTips($event.currentTarget, '参与人员')"
              @mouseout="closeTips">后台</span>
        <span v-if="data.participant == 3" class="layui-badge-rim" @mouseover="showTips($event.currentTarget, '参与人员')"
              @mouseout="closeTips">前端/后台</span>
        <span class="layui-badge-rim" @mouseover="showTips($event.currentTarget, '工作量')" @mouseout="closeTips">{{data.workload}}</span>
        <div style="float: right" v-if="poolType == 1">
          <button @mouseover="showTips($event.currentTarget, '单击选择接受任务')" @mouseout="closeTips"
                  class="layui-btn layui-btn-primary doing-icon"><i class="layui-icon layui-icon-right"></i></button>
        </div>
        <div style="float: right" v-if="poolType == 2">
          <img @mouseover="showTips($event.currentTarget, '前端--开发A')" @mouseout="closeTips"
               src="../../assets/images/head.jpg" alt="开发人员" class="head-image">
          <img @mouseover="showTips($event.currentTarget, '后台--开发甲')" @mouseout="closeTips"
               src="../../assets/images/logo.jpg" alt="开发人员" class="head-image">
        </div>
        <div style="float: right" v-if="poolType == 3">
          <button @mouseover="showTips($event.currentTarget, '单击开始测试')"
                  @mouseout="closeTips" class="layui-btn layui-btn-primary doing-icon">
            <i class="layui-icon layui-icon-right"></i>
          </button>
        </div>
        <div style="float: right" v-if="poolType == 4">
          <button @mouseover="showTips($event.currentTarget, '出现BUG')"
                  @mouseout="closeTips" class="layui-btn layui-btn-primary doing-icon">
            <i class="layui-icon layui-icon-left"></i>
          </button>
          <button @mouseover="showTips($event.currentTarget, '测试通过')"
                  @mouseout="closeTips" class="layui-btn layui-btn-primary doing-icon">
            <i class="layui-icon layui-icon-ok"></i>
          </button>
            <img @mouseover="showTips($event.currentTarget, '测试--王老三')" @mouseout="closeTips"
                 src="../../assets/images/head.jpg" alt="测试人员" class="head-image">
        </div>
      </div>
      <div class="layui-card-body card-content">
        {{data.describe}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['data', 'pool-type'],
  mounted () {
    window.layui.use('layer')
    window.layui.use('element')
  },
  updated () {
    window.layui.use('layer')
    window.layui.element.init()
  },
  methods: {
    showTips (e, msg) {
      window.layui.layer.tips(msg, e, {
        tips: [1, '#5FB878']
      })
    },
    closeTips () {
      window.layui.layer.closeAll('tips')
    }
  }
}
</script>

<style scoped>
.card-father {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  text-align: left;
}
.doing-icon{
  height: 1.2rem;
  line-height: 1.2rem;
  padding: 0 0 0 0.01rem;
  font-size: 1rem;
}
.head-image{
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  border-radius: 50%
}
.card-content:hover{
  background-color: #f2f2f2;
}
</style>
