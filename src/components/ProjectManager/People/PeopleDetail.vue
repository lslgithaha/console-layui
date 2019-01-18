<template>
  <div id="PeopleDetail">
    <form class="layui-form" action="" lay-filter="PeopleDetail">
      <div class="layui-form-item">
        <label class="layui-form-label">工号：</label>
        <div class="layui-input-block">
          <input type="text" name="userid" lay-verify="required" autocomplete="off" placeholder="输入员工号" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">姓名：</label>
        <div class="layui-input-block">
          <input type="text" name="username" lay-verify="required" autocomplete="off" placeholder="姓名" class="layui-input" disabled>
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">照片：</label>
        <div class="layui-input-block">
          <img src="../../../assets/images/head.jpg" style="height: 10rem;width: 10rem"/>
        </div>
      </div>
      <div class="layui-form-item">
      <label class="layui-form-label">联系方式：</label>
      <div class="layui-input-block">
        <input type="text" name="phone" lay-verify="phone"  autocomplete="off" placeholder="联系方式" class="layui-input" disabled>
      </div>
    </div>

      <div class="layui-form-item">
        <label class="layui-form-label">性别：</label>
        <div class="layui-input-block">
          <input type="radio" name="sex" value="男" title="男" checked="" disabled>
          <input type="radio" name="sex" value="女" title="女" disabled>
        </div>
      </div>

      <div class="layui-form-item">
        <label class="layui-form-label">角色：</label>
        <div class="layui-input-block">
          <input type="checkbox" name="role[manager]" title="项目负责人">
          <input type="checkbox" name="role[demander]" title="需求">
          <input type="checkbox" name="role[interactive]" title="交互">
          <input type="checkbox" name="role[designer]" title="设计">
          <input type="checkbox" name="role[backstage]" title="后台">
          <input type="checkbox" name="role[frontend]" title="前端">
          <input type="checkbox" name="role[fullstack]" title="全栈">
          <input type="checkbox" name="role[test]" title="测试">
          <input type="checkbox" name="role[operation]" title="运维">
          <input type="checkbox" name="role[customer]" title="客户">
        </div>
      </div>

      <div class="layui-form-item layui-form-text">
        <label class="layui-form-label">备注：</label>
        <div class="layui-input-block">
          <textarea placeholder="请输入内容" class="layui-textarea" name="desc" readonly="readonly"></textarea>
        </div>
      </div>

      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit="" lay-filter="update">保存</button>
          <button class="layui-btn" lay-submit="" lay-filter="update">添加</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PeopleDetail',
  methods: {
    PeopleDetailInit () {
      window.layui.use(['form', 'layedit', 'laydate', 'upload'], function () {
        let form = window.layui.form
        form.on('submit(update)', function (data) {
          window.layui.layer.alert(JSON.stringify(data.field), {
            title: '最终的提交信息'
          })
          return false
        })
        form.val('PeopleDetail', {
          'username': '李声林',
          'phone': '189802153226',
          'role[backstage]': true, // 复选框选中状态,
          'sex': '男',
          'desc': '这个人。。。xXXXX'
        })
      })
    }
  },
  mounted () {
    this.PeopleDetailInit()
  }
}
</script>

<style scoped>
#PeopleDetail{
  padding: 2rem 2rem 2rem 2rem;
}
</style>
