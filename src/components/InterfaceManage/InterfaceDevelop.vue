<template>
    <div class="layui-row layui-col-md12">
      <div class="InterfaceDevelop InterfaceDevelop-left">
        <form class="layui-form layui-form-pane" style="width: 95%;margin-left: 2.5%;margin-top: 0.3rem" action="">
          <div class="layui-form-item">
            <label class="layui-form-label">搜索</label>
            <div class="layui-input-block">
              <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="请输入关键字进行搜索" class="layui-input">
            </div>
          </div>
        </form>
        <ModelTree :data="FileDir"></ModelTree>
      </div>
      <div class="InterfaceDevelop InterfaceDevelop-right">
        <Restful></Restful>
      </div>
    </div>
</template>

<script>
import ModelTree from '@/components/InterfaceManage/ModelTree'
import Restful from '@/components/InterfaceManage/Restful'
export default {
  name: 'InterfaceDevelop',
  data () {
    return {
      FileDir: [
        {
          fileName: '登录注册模块',
          isFolder: true,
          fileList: [
            {
              fileName: '数据挖掘触发接口',
              type: 'get',
              isFolder: false
            },
            {
              fileName: '数据挖掘触发接口',
              type: 'post',
              isFolder: false
            },
            {
              fileName: '数据挖掘触发接口',
              type: 'get',
              isFolder: false
            }
          ]
        },
        {
          fileName: '购物车模块',
          isFolder: true,
          fileList: [
            {
              fileName: '数据挖掘触发接口',
              type: 'options',
              isFolder: false
            },
            {
              fileName: '数据挖掘触发接口',
              type: 'put',
              isFolder: false
            },
            {
              fileName: '数据挖掘触发接口',
              type: 'patch',
              isFolder: false
            }
          ]
        },
        {
          fileName: '数据挖掘模块',
          isFolder: true,
          fileList: [
            {
              fileName: '数据挖掘触发接口',
              type: 'delete',
              isFolder: false
            }
          ]
        }
      ]
    }
  },
  components: {
    ModelTree,
    Restful
  }
}
</script>

<style scoped>
.InterfaceDevelop{
  min-height: 100%;
  min-height: 40rem;
  background: #FdFdFd;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  box-shadow: 0 1px 2px 2px rgba(0,0,0,.05);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 0.5rem;
  float: left;
}
.InterfaceDevelop-left{
  width: 25%;
  margin-left: 0.5%;
}
.InterfaceDevelop-right{
  width: 72%;
  margin-left: 1.5%;
}
</style>
