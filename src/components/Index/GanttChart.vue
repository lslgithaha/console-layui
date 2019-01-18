<template>
  <div id="GanttChart" style="height: 35rem;background-color: #C7EDCC"></div>
</template>

<script>
import {data} from '@/assets/data'
export default {
  name: 'GanttChart',
  mounted () {
    this.drawPic()
  },
  updated () {
    this.drawPic()
  },
  methods: {
    drawPic () {
      let worktotal = this.$echarts.init(document.getElementById('GanttChart'))
      worktotal.setOption(data.GanttChart)
    }
  }
}
</script>

<style scoped>

</style>
