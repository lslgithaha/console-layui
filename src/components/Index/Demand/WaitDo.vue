<template>
  <div class="layui-card">
    <div class="layui-card-header">项目概览
      <span style="float: right" id="WaitCard">
              <span class="layui-badge-dot" style = "background-color: #999;"  @mouseover="transform('one', $event.currentTarget)"></span>
              <span class="layui-badge-dot" @mouseover="transform('two', $event.currentTarget)"></span>
            </span>
    </div>
    <div class="layui-card-body" style="height: 12rem">
      <div class="wait-to-do-father">
        <ul class="layui-row wait-to-do wait-to-do1" id="one">
          <li class="layui-col-xs5">
            <a>
              <h3>项目数</h3>
              <p><cite>2</cite></p>
            </a>
          </li>
          <li class="layui-col-xs5">
            <a>
              <h3>需求池</h3>
              <p>12</p>
            </a>
          </li>
          <li class="layui-col-xs5">
            <a>
              <h3>任务池</h3>
              <p><cite>99</cite></p>
            </a>
          </li>
          <li class="layui-col-xs5">
            <a>
              <h3>测试池</h3>
              <p><cite>20</cite></p>
            </a>
          </li>
        </ul>
        <ul class="layui-row wait-to-do wait-to-do2"  id="two">
          <li class="layui-col-xs5">
            <a>
              <h3>接口测试</h3>
              <p><cite>3</cite></p>
            </a>
          </li>
          <li class="layui-col-xs5">
            <a>
              <h3>内容检测</h3>
              <p>12</p>
            </a>
          </li>
          <li class="layui-col-xs5">
            <a>
              <h3>边界测试</h3>
              <p><cite>32</cite></p>
            </a>
          </li>
          <li class="layui-col-xs5">
            <a>
              <h3>代码审计</h3>
              <p><cite>32</cite></p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaitDo',
  data () {
    return {
      transform_status: 0
    }
  },
  mounted () {
    let that = this
    let x = window.setInterval(function () {
      try {
        if (that.transform_status === 1) {
          that.transform('one', document.getElementById('WaitCard').children[0])
          that.transform_status = 0
        } else if (that.transform_status === 0) {
          that.transform('two', document.getElementById('WaitCard').children[1])
          that.transform_status = 1
        } else {
          // console.log(that.transform_status)
        }
      } catch (e) {
        window.clearInterval(x)
        console.log('stop auto transform')
      }
    }, 10000)
  },
  methods: {
    transform (id, e) {
      this.transform_status = 2
      document.getElementById('WaitCard').children[0].style = ''
      document.getElementById('WaitCard').children[1].style = ''
      document.getElementsByClassName('wait-to-do')[0].style = 'transform: rotatey(180deg);'
      document.getElementsByClassName('wait-to-do')[1].style = 'transform: rotatey(-180deg);'
      document.getElementById(id).style = 'transform: rotatey(0deg);'
      e.style = 'background-color: #999;'
    }
  }
}
</script>

<style scoped>
#WaitCard > span{
  background-color: #e2e2e2;
  width: 12px;
  height: 12px;
}
/*#WaitCard > span:hover{*/
  /*background-color: #999;*/
/*}*/
.wait-to-do-father{
  width: 100%;
  height: 100%;
  -moz-perspective: 39rem;
  -webkit-perspective: 39rem;
  transform:perspective(39rem) rotatey(0deg);
  transform-style:preserve-3d
}
.wait-to-do1{
  position: absolute;
  backface-visibility: hidden;
  transition: all 0.7s linear;
}
.wait-to-do2{
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  transition: all 0.7s linear;
}
.wait-to-do{
  width: 100%;
}
.wait-to-do li{
  height: 5.2rem;
  background-color: #f2f2f2;
  margin-left: 6%;
  margin-top: 0.5rem;
  padding: 0.5rem 0 0 1rem;
  cursor: pointer;
}
.wait-to-do li:hover{
  background-color: #e2e2e2;
}
.wait-to-do li a h3{
  font-size: 1.2rem;
  color: #999;
}
.wait-to-do li a p{
  margin-top: 0.9rem;
  font-size: 2.2rem;
  color: #009688;
}
</style>
