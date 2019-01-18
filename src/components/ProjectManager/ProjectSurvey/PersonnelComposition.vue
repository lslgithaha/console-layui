<template>
  <div id="PersonnelComposition" style="height: 19rem"></div>
</template>

<script>
import {data} from '@/assets/data'
export default {
  name: 'PersonnelComposition',
  mounted () {
    this.drawPic()
  },
  updated () {
    this.drawPic()
  },
  methods: {
    drawPic () {
      let worktotal = this.$echarts.init(document.getElementById('PersonnelComposition'))
      worktotal.setOption(data.PersonnelComposition)
    }
  }
}
</script>

<style scoped>

</style>
