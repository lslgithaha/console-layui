<template>
  <div id="totalDemandPool" :style="{width: '100%', height: '100%'}"></div>
</template>

<script>
import {data} from '@/assets/data'
export default {
  name: 'Demand',
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('totalDemandPool'))
      myChart.setOption(data.demand)
    }
  }
}
</script>

<style scoped>
</style>
