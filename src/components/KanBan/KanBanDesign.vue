<template>
  <!--<div class="layui-container anyone-kanban">
    <div class="layui-col-md3 layui-text">
      <div class="layui-col-md12 pool-discription">
        任务池
      </div>
        <Card v-for="card in cards.tasks" :data="card" :key="card.describe"></Card>
    </div>
    <div class="layui-col-md3 layui-text">
      <div class="layui-col-md12 pool-discription">
        开发中
      </div>
      <Card v-for="card in cards.doing" :data="card" :key="card.describe"></Card>
    </div>
    <div class="layui-col-md3 layui-text">
      <div class="layui-col-md12 pool-discription">
        测试中
      </div>
      <Card v-for="card in cards.testing" :data="card" :key="card.describe"></Card>
    </div>
    <div class="layui-col-md3 layui-text">
      <div class="layui-col-md12 pool-discription">
        完成
      </div>
      <Card v-for="card in cards.done" :data="card" :key="card.describe"></Card>
    </div>
  </div>-->
  <div class="layui-container anyone-kanban layui-col-md12">
    <table class="layui-text" style="width: 100%;height: 100%">
      <thead>
      <tr>
        <th width="33.33%">需求池</th>
        <th width="33.33%">工作池</th>
        <th width="33.33%">设计历史</th>
      </tr>
      </thead>
      <tr>
        <td valign="top">
          <Card v-for="card in cards.tasks" :pool-type="1" :data="card" :key="card.describe"></Card>
        </td>
        <td valign="top">
          <Card v-for="card in cards.doing" :pool-type="2" :data="card" :key="card.describe"></Card>
          <div class="card-caozuo-KanBanDesign">
            <button class="layui-btn">将选中合为一个设计</button>
          </div>
        </td>
        <td valign="top">
          <Card v-for="card in cards.testing" :pool-type="3" :data="card" :key="card.describe"></Card>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Card from '@/components/KanBan/Card'
import {data} from '@/assets/data'
export default {
  name: 'KanBanDesign',
  data () {
    return {
      cards: data.kanban
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
  .card-caozuo-KanBanDesign{
    position: fixed;
    bottom: 1rem;
    text-align: center;
    width: 25%;
  }
  .anyone-kanban{
    text-align: center;
    margin:0;
    width: 100%;
    min-height: 100%;
    height:100%;
  }
  thead th {
    font-size: 1.5rem;
    background-color: #fff;
    padding-top: 0.3rem;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    box-sizing: border-box;
    height: 2.4rem;
    border-top: 0.05rem #009688 solid;
    color: #009688;
  }
  td:nth-child(1) {
    border-left: 0.05rem #009688 solid ;
    border-right: 0.05rem #1E9FFF solid ;
  }
  td{
    text-align: left;
    valign: top;
    height: 100%;
    border-bottom: 0.05rem #009688 solid;
  }
  td:nth-child(2) {
    border-right: 0.05rem #FF5722 solid ;
  }
  td:nth-child(3) {
    border-right: 0.05rem #FFB800 solid ;
  }
  td:nth-child(4) {
    border-right: 0.05rem #009688 solid ;
  }
  thead th:nth-child(1) {
    border-left: 0.05rem #009688 solid ;
    border-right: 0.05rem #1E9FFF solid ;
  }
  thead th:nth-child(2) {
    border-right: 0.05rem #FF5722 solid ;
  }
  thead th:nth-child(3) {
    border-right: 0.05rem #FFB800 solid ;
  }
  thead th:nth-child(4) {
    border-right: 0.05rem #009688 solid ;
  }
</style>
