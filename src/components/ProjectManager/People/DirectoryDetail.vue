<template>
  <div class="layui-row files">
    <div class="one-file" v-for="(file,index) in fileList" :key="index" @click="openFile(file)">
      <div class="layui-col-md12">
        <img :src="file.isFolder ? getPicture('dir'):getPicture(file.fileName)" @mouseover="tipsFile($event.currentTarget,file)" @mouseout="closeFileTips">
      </div>
      <div class="layui-col-md12" style="padding-top: 0.2rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
        {{file.fileName}}
      </div>
    </div>
  </div>
</template>

<script>
import fileType from '@/assets/images/File/fileType'
export default {
  name: 'DirectoryDetail',
  data () {
    return {
      fileList: this.files
    }
  },
  watch: {
    nowDir (v) {
      if (v === 'null-dir') {
        this.fileList = []
        return
      }
      let dirs = v.split(',')
      this.fileList = this.files
      for (let i = 0; i < dirs.length; i++) {
        if (dirs[i] !== 'undefined') {
          this.fileList = this.fileList[dirs[i]].fileList
        }
      }
    }
  },
  mounted () {
    window.layui.use('layer')
  },
  props: ['files', 'nowDir'],
  methods: {
    getPicture (fileName) {
      return fileType(fileName)
    },
    tipsFile (e, file) {
      window.layui.layer.tips('文件名：' + file.fileName + '<br/>大小：' + file.size + '<br/>创建时间：' + file.createTime, e, {
        tips: [4, '#5FB878']
      })
    },
    closeFileTips () {
      window.layui.layer.closeAll('tips')
    },
    openFile (file) {
      if (file.isFolder) {
        this.fileList = file.fileList
      } else {
        window.layui.layer.msg('暂不支持打开此类型文件', {icon: 5, anim: 6})
      }
    }
  }
}
</script>

<style scoped>
  .files{
    padding: 0.4rem;
  }
  .one-file{
    padding: 0.3rem 0.3rem 0.3rem 0.3rem;
    text-align: center;
    font-size: 0.7rem;
    width: 4.0rem;
    height: 4.0rem;
    float: left;
    cursor: pointer;
  }
  .one-file:hover{
    background-color: #dddddd;
  }
  .one-file img{
    width: 2.8rem;
    height: auto;
  }
</style>
