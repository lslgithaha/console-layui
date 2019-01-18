<template>
  <div class="layui-container anyone-kanban layui-col-md12">
    <table class="layui-text" style="width: 100%;height: 100%">
      <thead>
      <tr>
        <th width="33.33%">我遇到的问题</th>
        <th width="33.33%">已解决的问题</th>
        <th width="33.33%">已确认的问题</th>
      </tr>
      </thead>
      <tr>
        <td valign="top">
          <Card v-for="card in cards.tasks" :pool-type="1" :data="card" :key="card.describe"></Card>
          <div class="card-caozuo">
            <button class="layui-btn">全部撤销</button>
            <button class="layui-btn">催一下</button>
          </div>
        </td>
        <td valign="top">
          <Card v-for="card in cards.doing" :pool-type="2" :data="card" :key="card.describe"></Card>
          <div class="card-caozuo">
            <button class="layui-btn">全部确认</button>
            <button class="layui-btn">确认选中</button>
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
  name: 'KanBanAccept',
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
  .card-caozuo{
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
