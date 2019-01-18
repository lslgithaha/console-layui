<template>
  <div id="news">
    <table class="layui-table" lay-skin="nob">
      <colgroup>
        <col width="230">
        <col width="70">
      </colgroup>
      <tbody>
      <tr>
        <td>鸡蛋这么做，隔壁的小孩都馋哭了</td>
        <td>2分钟前</td>
      </tr>
      <tr>
        <td>刚刚提了新需求的产品被打了，都见红了</td>
        <td>3分钟前</td>
      </tr>
      <tr>
        <td>刚刚提了新需求的客户被打了</td>
        <td>4分钟前</td>
      </tr>
      <tr>
        <td>刚刚提了新需求的产品被打了，都见红了</td>
        <td>5分钟前</td>
      </tr>
      <tr>
        <td>刚刚提了新需求的客户被打了</td>
        <td>6分钟前</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style scoped>
#news td{
  font-size: 0.7rem;
}
</style>
