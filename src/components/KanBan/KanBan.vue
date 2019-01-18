<template>
  <div class="layui-container anyone-kanban layui-col-md12" style="overflow-x: scroll">
    <table class="layui-text" style="width: 200%;height: 100%">
      <thead>
      <tr>
        <th width="12.5%">客户故事</th>
        <th width="12.5%">需求</th>
        <th width="12.5%">设计</th>
        <th width="12.5%">开发</th>
        <th width="12.5%">测试</th>
        <th width="12.5%">验收</th>
        <th width="12.5%">完成</th>
        <th width="12.5%">丢弃</th>
      </tr>
      </thead>
      <tr>
        <td valign="top">
          <Card v-for="card in cards.tasks" :pool-type="1" :data="card" :key="card.describe"></Card>
        </td>
        <td valign="top">
          <Card v-for="card in cards.doing" :pool-type="2" :data="card" :key="card.describe"></Card>
        </td>
        <td valign="top">
          <Card v-for="card in cards.testing" :pool-type="3" :data="card" :key="card.describe"></Card>
        </td>
        <td valign="top">
          <Card v-for="card in cards.done" :pool-type="4" :data="card" :key="card.describe"></Card>
        </td>
        <td valign="top">
          <Card v-for="card in cards.done" :pool-type="4" :data="card" :key="card.describe"></Card>
        </td>
        <td valign="top">
          <Card v-for="card in cards.done" :pool-type="4" :data="card" :key="card.describe"></Card>
        </td>
        <td valign="top">
          <Card v-for="card in cards.done" :pool-type="4" :data="card" :key="card.describe"></Card>
        </td>
        <td valign="top">
          <Card v-for="card in cards.done" :pool-type="4" :data="card" :key="card.describe"></Card>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Card from '@/components/KanBan/Card'
import {data} from '@/assets/data'
export default {
  name: 'KanBan',
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
  border: 0.05rem #009688 solid;
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
  border: 0.05rem #009688 solid;
}
</style>
