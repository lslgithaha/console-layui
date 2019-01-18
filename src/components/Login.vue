<template>
  <div class="login">
    <div class="layui-form" lay-filter="login_form">
      <div class="layui-form-item">
        <label class="layui-form-label">用户：</label>
        <div class="layui-input-block">
          <input type="text" name="username" required  lay-verify="phone" autocomplete="off" placeholder="请输入手机号" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码：</label>
        <div class="layui-input-block">
          <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit="" lay-filter="login">登录</button>
          <button class="layui-btn layui-btn-warm">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  mounted () {
    window.layui.use(['form', 'layer'], function () {
      let form = window.layui.form
      // let layer = window.layui.layer
      form.on('submit(login)', function (data) {
        // layer.msg(JSON.stringify(data.field))
        // this.$router.push('/main')
        return false
      })
    })
  }
}
</script>

<style scoped>
.login{
  position: absolute;
  width: 20%;
  height: 20%;
  left: 38%;
  right: 42%;
  top: 35%;
  bottom: 45%;

}
</style>
