<template>
  <div id="worktotal">
  </div>
</template>

<script>
import {data} from '@/assets/data'
export default {
  name: 'WorkTotal',
  mounted () {
    this.drawPic()
  },
  updated () {
    this.drawPic()
  },
  methods: {
    drawPic () {
      let worktotal = this.$echarts.init(document.getElementById('worktotal'))
      worktotal.setOption(data.workTotal)
    }
  }
}
</script>

<style scoped>
#worktotal{
  width: 100%;
  height: 100%;
}
</style>
