<template>
  <div class="layui-col-md12">
    <div class="layui-col-md3 dir-tree">
      <h2 class="lsl-tree-title">文件目录</h2>
      <DirectoryTree :data="FileDir" @listenClickOneDir="clickOneDir"></DirectoryTree>
    </div>
    <div class="layui-col-md9">
      <h2 class="lsl-tree-title">文件列表</h2>
      <DirectoryDetail :files="FileDir" :nowDir="dirStatus"></DirectoryDetail>
    </div>
  </div>
</template>

<script>
import DirectoryDetail from '@/components/ProjectManager/People/DirectoryDetail'
import DirectoryTree from '@/components/ProjectManager/People/DirectoryTree'
import {data} from '@/assets/data'
export default {
  name: 'FileManage',
  data () {
    return {
      FileDir: data.FileDir,
      dirStatus: ''
    }
  },
  methods: {
    clickOneDir (list) {
      this.dirStatus = list
    }
  },
  components: {
    DirectoryTree,
    DirectoryDetail
  }
}
</script>

<style scoped>
  .dir-tree{
    overflow: auto;
  }
  .layui-col-md3,.layui-col-md9,layui-col-md12{
    min-height: 40rem;
    max-height: 40rem;
    height: 100%;
    background-color: #ffffff;
    /*padding: 0.2rem;*/
  }
  .layui-col-md9{
    border: 0.05rem solid #dddddd;
  }
  .lsl-tree-title {
    line-height: 2rem;
    font-size: 1.3rem;
    background: #009688;
    color: #F0F0F0;
    text-align: center;
    margin-bottom: 1rem
  }
</style>
