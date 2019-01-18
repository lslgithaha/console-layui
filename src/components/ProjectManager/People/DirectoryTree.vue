<template>
  <ul class="lsl-dir-tree" >
      <li v-for="(item, i) in data" :key="i">
        <img v-if="item.isFolder && item.fileList !== undefined"
             @click="item.isFolder && item.fileList !== undefined?clickTreeNode($event.currentTarget, index + ',' + i, false):''"
             src="../../../assets/images/File/open.png" class="tree-open"/>
        <a href="javascript:;" @click="item.isFolder?clickTreeNode($event.currentTarget, item.fileList !== undefined?index + ',' + i:'null-dir', true):''">
          <img :src="item.isFolder ? getPicture('dir'):getPicture(item.fileName)" :class="item.isFolder ? 'tree-dir' : 'tree-file'">
          <cite :class="item.isFolder ? 'tree-dir-cite' : 'tree-file-cite'">{{item.fileName}}</cite>
        </a>
        <DirectoryTree @listenClickOneDir="listenClickOneDir" v-if="item.fileList !== undefined" :data="item.fileList" :index="index + ',' + i"></DirectoryTree>
      </li>
    </ul>
</template>

<script>
import fileType from '@/assets/images/File/fileType'
export default {
  name: 'DirectoryTree',
  props: ['data', 'index'],
  methods: {
    getPicture (fileName) {
      return fileType(fileName)
    },
    clickTreeNode (e, i, flag) {
      if (flag) { // 点击的文件夹 打开不展开
        this.$emit('listenClickOneDir', i)
        return
      }
      if (i === 'null-dir') { // 空文件夹 不需要旋转
        return
      }
      e = e.parentNode
      if (e.children[0].classList.contains('tree-open-staus')) { // 关闭
        e.children[0].classList.remove('tree-open-staus')
        e.children[2].classList.remove('tree-open-staus-a')
      } else { // 关闭
        e.children[0].classList.add('tree-open-staus')
        e.children[2].classList.add('tree-open-staus-a')
      }
    },
    listenClickOneDir (i) {
      this.$emit('listenClickOneDir', i)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  ul {
    min-width: 100%;
    list-style: none;
  }
  .tree-open-staus-a {
    display: block;
  }
  ul li ul {
    min-width: 100%;
    display: none;
  }
  .tree-open{
    width: 0.7rem;
    height: 0.7rem;
    transition: transform 0.3s linear;
  }
  .tree-open-staus{
    -moz-transform:rotate(90deg);
    -webkit-transform:rotate(90deg);
  }
  .lsl-dir-tree {
    line-height: 1.4rem;
  }

  .lsl-dir-tree li {
    padding-left: 1.2rem;
    min-height: 100%;
    min-width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .lsl-dir-tree li i {
    color: #333;
    font-size: 1.2rem;
    -moz-user-select: none;
  }

  .lsl-dir-tree li a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    height: 1.5rem;
    *display: inline;
    *zoom: 1;
    width: auto;
    cursor: pointer
  }
  .lsl-dir-tree li a:hover{
    font-size: 0.9rem;
  }
  .tree-file-cite {
    font-size: 0.8rem;
    margin-left: 0.2rem;
    color: #6c757d;
  }

  .tree-dir-cite {
    font-size: 0.9rem;
    margin-left: 0.2rem;
    color: #343a40;
  }
  .lsl-dir-tree .tree-dir {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: -0.25rem;
  }
  .lsl-dir-tree .tree-file {
    width: 0.9rem;
    height: 0.9rem;
    margin-top: -0.25rem;
  }
</style>
