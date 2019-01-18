<template>
  <div  ref="circleProcess" style="width: 100%;height: 100%;">
    <div :style="'position: relative;width: ' + borderSize * 9.95 + 'px;height : ' + borderSize * 10 + 'px;'">
      <div
        :style="'width: ' + borderSize * 5 + 'px;height: ' + borderSize * 10 + 'px;position: absolute;top:0;overflow: hidden;right:0;'">
        <div class="animal-right"
          :style="'width: ' + borderSize * 8 + 'px;height:' + borderSize * 8 +'px;border-radius: 50%;position: absolute;top:0;border-top:' + borderSize + 'px solid ' + color + ';border-right:' + borderSize
           + 'px solid ' + color +';border-bottom: ' + borderSize + 'px solid #dddddd; border-left:' + borderSize
            + 'px solid #dddddd;right:0;transform:rotate(' + rightDeg + 'deg);'"></div>
      </div>
      <div
        :style="'width: ' + borderSize * 5 + 'px;height: ' + borderSize * 10 + 'px;position: absolute;top:0;overflow: hidden;left:0;'">
        <div class="animal-left"
          :style="'width: ' + borderSize * 8 + 'px;height: ' + borderSize * 8 + 'px;border-radius: 50%;position: absolute;top:0;border-bottom:' + borderSize
            + 'px solid ' + color + ';border-left:' + borderSize + 'px solid ' + color + ';border-top:' + borderSize
             + 'px solid #dddddd;border-right:' + borderSize + 'px solid #dddddd;left:0;transform:rotate(' + leftDeg + 'deg);'"></div>
      </div>
      <div class="layui-text" :style="'text-align:center;line-height:' + borderSize * 10 + 'px;font-size:' + borderSize * 2 + 'px;'">
        {{pro}}<span :style="'color: ' + color + ';font-size:' + borderSize + 'px'">%</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CircleProcess',
  data () {
    return {
      color_: this.color,
      borderSize: 0,
      pro: 0
    }
  },
  props: ['color', 'process'],
  methods: {
  },
  mounted () {
    this.color_ = this.color
    if (this.color_ === undefined) {
      this.color_ = 'green'
    }
    let size = this.$refs.circleProcess.offsetWidth
    this.borderSize = size / 10
    let that = this
    let tmid = window.setTimeout(function () {
      if (that.process < 0 || that.process > 100.0) {
        that.pro = 100.0
      } else {
        that.pro = that.process
      }
      window.clearTimeout(tmid)
    }, 50)
  },
  computed: {
    rightDeg: function () {
      if (this.pro < 50.0) {
        return -135 + 3.6 * this.pro
      } else {
        return 45
      }
    },
    leftDeg: function () {
      if (this.pro <= 50.0) {
        return -135
      } else {
        return -135 + 3.6 * (this.pro - 50.0)
      }
    }
  }
}
</script>

<style scoped>
.animal-left{
  animation: circle_left 3s linear 1;
  -webkit-animation: circle_left 3s linear 1;
  -moz-animation: circle_left 3s linear 1;
  -o-animation: circle_left 3s linear 1;
  transition: transform 0.7s linear;
}
.animal-right{
  animation: circle_right 3s linear 1;
  -webkit-animation: circle_right 3s linear 1;
  -moz-animation: circle_right 3s linear 1;
  -o-animation: circle_right 3s linear 1;
  transition: transform 0.7s linear;
}
</style>
