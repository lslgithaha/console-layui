<template>
    <div id="TaskStatus" style="height: 22rem"></div>
</template>

<script>
import {data} from '@/assets/data'
export default {
  name: 'TaskStatus',
  mounted () {
    this.drawPic()
  },
  updated () {
    this.drawPic()
  },
  methods: {
    drawPic () {
      let worktotal = this.$echarts.init(document.getElementById('TaskStatus'))
      worktotal.setOption(data.taskStatus)
    }
  }
}
</script>

<style scoped>

</style>
