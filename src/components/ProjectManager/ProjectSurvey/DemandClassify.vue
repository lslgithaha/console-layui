<template>
  <div id="DemandClassify" style="height: 22rem"></div>
</template>

<script>
import {data} from '@/assets/data'
export default {
  name: 'DemandClassify',
  mounted () {
    this.drawPic()
  },
  updated () {
    this.drawPic()
  },
  methods: {
    drawPic () {
      let worktotal = this.$echarts.init(document.getElementById('DemandClassify'))
      worktotal.setOption(data.personTatal)
    }
  }
}
</script>

<style scoped>

</style>
