<template>
  <div class="layui-tab layui-text">
    <ul class="layui-tab-title">
      <li class="layui-this">接口基本信息</li>
      <li>接口参数</li>
      <li>接口执行</li>
      <li>接口返回值</li>
    </ul>
    <div class="layui-tab-content">
      <div class="layui-tab-item layui-show">
        <form class="layui-form" action="">
          <div class="layui-form-item">
            <label class="layui-form-label">接口名</label>
            <div class="layui-input-block">
              <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="请输入接口名" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">简介</label>
            <div class="layui-input-block">
              <input type="text" name="username" lay-verify="required" placeholder="请输入备注" autocomplete="off" class="layui-input">
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">状态</label>
            <div class="layui-input-block">
              <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" lay-text="启用|弃用">
            </div>
          </div>
          <div class="layui-form-item">
            <label class="layui-form-label">单选框</label>
            <div class="layui-input-block">
              <input type="radio" name="sex" value="GET" title="GET" checked="">
              <input type="radio" name="sex" value="POST" title="POST">
              <input type="radio" name="sex" value="PUT" title="PUT">
              <input type="radio" name="sex" value="PATCH" title="PATCH">
              <input type="radio" name="sex" value="DEL" title="DEL">
              <input type="radio" name="sex" value="OPT" title="OPTIONS" disabled="">
              <input type="radio" name="sex" value="HEAD" title="HEAD" disabled="">
              <input type="radio" name="sex" value="TRACE" title="TRACE" disabled="">
              <input type="radio" name="sex" value="CONNECT" title="CONNECT" disabled="">
            </div>
          </div>
          <div class="layui-form-item">
            <div class="layui-input-block">
              <button class="layui-btn" lay-submit="" lay-filter="demo1">保存</button>
              <button type="reset" class="layui-btn layui-btn-primary">清空</button>
            </div>
          </div>
        </form>
      </div>
      <div class="layui-tab-item">内容2</div>
      <div class="layui-tab-item">内容3</div>
      <div class="layui-tab-item">内容4</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Restful',
  mounted () {
    window.layui.use(['form', 'layedit', 'laydate'])
  }
}
</script>

<style scoped>

</style>
