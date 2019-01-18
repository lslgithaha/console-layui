<template>
  <div id="MissionBurnoutChart" style="height: 22rem"></div>
</template>

<script>
import {data} from '@/assets/data'
export default {
  name: 'MissionBurnoutChart',
  mounted () {
    this.drawPic()
  },
  updated () {
    this.drawPic()
  },
  methods: {
    drawPic () {
      let worktotal = this.$echarts.init(document.getElementById('MissionBurnoutChart'))
      worktotal.setOption(data.taskBurnout)
    }
  }
}
</script>

<style scoped>

</style>
