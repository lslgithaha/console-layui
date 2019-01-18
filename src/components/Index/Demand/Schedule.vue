<template>
  <div id="day" class="">
    <table class="schedule">
      <tr>
        <th width="15%">日</th>
        <th width="14%">一</th>
        <th width="14%">二</th>
        <th width="14%">三</th>
        <th width="14%">四</th>
        <th width="14%">五</th>
        <th width="15%">六</th>
      </tr>
      <tr v-for="(week,index) in dateMouth" :key="index">
        <td :class="day.mark == 1?'layui-bg-orange':''" v-for="(day,ind) in week" :key="index*10 + ind"
            @mouseover="notice($event.currentTarget,day.mark,day.notice)" @mouseout="noticeClose"
        @click="addNotice('', day.notice)">
          {{day.mark == 1?'今天':day.dayNum}}
          <span v-if="day.mark == 2" class="layui-badge-dot"></span>
          <span v-if="day.mark == 3" class="layui-badge-dot" style="background-color: #78BA32"></span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {data} from '@/assets/data'
export default {
  name: 'Schedule',
  mounted () {
    window.layui.use('layer')
  },
  updated () {
    window.layui.use('layer')
  },
  data () {
    return {
      dateMouth: data.mouth
    }
  },
  methods: {
    notice (e, mark, n) {
      if (n === '') {
        return
      }
      let c = {
        1: '#FFB800',
        2: '#FF5722',
        3: '#78BA32'
      }
      window.layui.layer.tips(n, e, {
        tips: [4, c[mark]]
      })
    },
    noticeClose () {
      window.layui.layer.closeAll('tips')
    },
    addNotice (day, notice) {
      window.layui.layer.prompt({title: '输入提醒事项', value: notice, maxlength: 100, formType: 2}, function (val, index) {
        console.log(val)
        window.layui.layer.close(index)
      })
    }
  }
}
</script>

<style scoped>
#day{
  width: 100%;
}
.schedule{
  border-width: 1px;
  border-style: solid;
  border-color: #e6e6e6;
  width: 100%;
  color: #666;
}
.schedule th{
  font-weight: 400;
  border-width: 1px;
  border-style: solid;
  line-height: 2.5rem;
  height: 2.5rem;
  border-color: #e6e6e6;
  background: #f2f2f2;
  text-align: center;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font: 1rem Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
}
.schedule td{
  border-width: 1px;
  border-style: solid;
  line-height: 2.2rem;
  height: 2.5rem;
  border-color: #e6e6e6;
  text-align: center;
}
.schedule td:hover{
  background-color: #dddddd;
}
.schedule td span{
  float: right;
  right: 0.6rem;
  top: 0.5rem;
}
</style>
