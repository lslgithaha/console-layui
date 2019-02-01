<template>
  <small></small>
</template>

<script>
export default {
  name: 'Drag',
  methods: {
    drag (body) { // 传需要拖动的主体
      let father = body.parentNode
      let startX = body.offsetLeft
      let startY = body.offsetTop
      /* 鼠标的移动事件 */
      document.onmousemove = function (ele) {
        let e = ele || window.event
        startX = e.movementX + startX
        startY = e.movementY + startY
        /* 对于大的DIV四个边界的判断 */
        if (startX < 0) { // 左边
          startX = 0
        }
        if (startX + body.offsetWidth > father.offsetWidth) { // 右边
          startX = father.offsetWidth - body.offsetWidth
        }
        if (startY < 0) { // 上边
          startY = 0
        }
        if (startY + body.offsetHeight > father.offsetHeight) { // 下边
          startY = father.offsetHeight - body.offsetHeight
        }
        // 移动
        body.style.left = startX * 100 / father.offsetWidth + '%'
        body.style.top = startY * 100 / father.offsetHeight + '%'
      }
      /* 鼠标的抬起事件,终止拖动 */
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>

<style scoped>

</style>
