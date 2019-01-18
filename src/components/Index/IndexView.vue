<template>
  <div>
    <div class="layui-col-md8">
      <div class="layui-col-md6">
        <div class="layui-card">
          <div class="layui-card-header">传送门</div>
          <div class="layui-card-body" style="height: 12rem">
              <Shortcut></Shortcut>
          </div>
        </div>
      </div>
      <div class="layui-col-md6">
        <WaitDo></WaitDo>
      </div>
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-header">本周工作统计</div>
          <div class="layui-card-body" style="height: 15rem">
            <WorkTotal></WorkTotal>
          </div>
        </div>
      </div>
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-header">成员统计</div>
          <div class="layui-card-body" style="height: 15rem">
            <Demand></Demand>
          </div>
        </div>
      </div>
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-header">Copy&copy;Right By Lsl</div>
          <div class="layui-card-body layui-text">
            X ICP证035897443号  XXXXX 备111324564987221号
          </div>
        </div>
      </div>
    </div>
    <div class="layui-col-md4">
      <div class="layui-card">
        <div class="layui-card-header">日程</div>
        <div class="layui-card-body">
          <div class="layui-form">
            <Schedule></Schedule>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-col-md4">
      <div class="layui-card">
        <div class="layui-card-header">最新动态</div>
        <div class="layui-card-body">
          <div class="layui-form">
            <News></News>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-col-md4">
      <div class="layui-card">
        <div class="layui-card-header">服务器状态</div>
        <div class="layui-card-body">
          <div class="layui-form">
            <ServerState></ServerState>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-col-md4">
      <div class="layui-card">
        <div class="layui-card-header">作者寄语</div>
        <div class="layui-card-body">
          <div class="layui-form">
            没想到说什么
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Demand from '@/components/Index/Demand/Demand'
import Schedule from '@/components/Index/Demand/Schedule'
import WaitDo from '@/components/Index/Demand/WaitDo'
import News from '@/components/Index/Demand/News'
import Shortcut from '@/components/Index/Demand/Shortcut'
import ServerState from '@/components/Index/Demand/ServerState'
import WorkTotal from '@/components/Index/Demand/WorkTotal'

export default {
  name: 'IndexView',
  components: {
    Shortcut,
    Demand,
    Schedule,
    WaitDo,
    News,
    ServerState,
    WorkTotal
  }
}
</script>

<style scoped>
/*.layui-col-md6{*/
  /*padding: 0.5rem 0.5rem 0.5rem 0.5rem;*/
/*}*/
.layui-card{
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
}
</style>
