<template>
  <div style="width: 100%;height: 100%">
      <div class="layui-col-md7">
        <PeopleList></PeopleList>
      </div>
      <div class="layui-col-md5">
        <PeopleDetail></PeopleDetail>
      </div>
  </div>
</template>

<script>
import PeopleList from '@/components/ProjectManager/People/PeopleList'
import PeopleDetail from '@/components/ProjectManager/People/PeopleDetail'
export default {
  name: 'PeopleManage',
  components: {
    PeopleList,
    PeopleDetail
  }
}
</script>

<style scoped>
  .layui-col-md5,.layui-col-md7{
    min-height: 100%;
    background-color: #ffffff;
    border: 0.05rem solid #dddddd;
  }
</style>
