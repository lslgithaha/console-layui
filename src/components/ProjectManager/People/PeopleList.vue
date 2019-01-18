<template>
  <div class="PeopleList">
    <table class="layui-hide" id="PeopleList" lay-filter="PeopleList"></table>
    <div type="text/html" style="display: none" id="toolbarDemo">
      <div class="layui-btn-container">
        <button class="layui-btn layui-btn-sm" lay-event="getCheckData">获取选中行数据</button>
        <button class="layui-btn layui-btn-sm" lay-event="getCheckLength">获取选中数目</button>
        <button class="layui-btn layui-btn-sm" lay-event="isAll">验证是否全选</button>
      </div>
    </div>
    <div type="text/html" style="display: none" id="barDemo">
      <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
      <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PeopleList',
  data () {
    return {
      checkAll: false
    }
  },
  methods: {
    initPeopleList () {
      window.layui.use(['table', 'layer'], function () {
        let tb = window.layui.table
        let layer = window.layui.layer
        tb.render({
          elem: '#PeopleList',
          toolbar: '#toolbarDemo',
          title: '成员列表',
          data: [
            {
              name: '哈哈',
              sex: '男',
              phone: '1895452154565',
              summary: 'asdasdasda',
              power: '1,2,3'
            },
            {
              name: '哈哈',
              sex: '男',
              phone: '1895452154565',
              summary: 'asdadas湿答答',
              power: '1,2,3'
            },
            {
              name: '哈哈',
              sex: '男',
              phone: '1895452154565',
              summary: '安抚让他回家很干净奋斗过的',
              power: '1,2,3'
            }
          ],
          cols: [[
            {type: 'checkbox', fixed: 'left'},
            {field: 'name', title: '姓名', width: 80, edit: 'text'},
            {field: 'sex', title: '性别', width: 80},
            {field: 'phone', title: '联系方式', width: 155},
            {field: 'power', title: '角色', width: 150},
            {field: ' summary', title: '备注', width: 200},
            {fixed: 'right', title: '操作', toolbar: '#barDemo', width: 120}
          ]]
        })
        // 头工具栏事件
        tb.on('toolbar(PeopleList)', function (obj) {
          let checkStatus = tb.checkStatus(obj.config.id)
          switch (obj.event) {
            case 'getCheckData':
              let data = checkStatus.data
              layer.alert(JSON.stringify(data))
              break
            case 'getCheckLength':
              let d = checkStatus.data
              layer.msg('选中了：' + d.length + ' 个')
              break
            case 'isAll':
              layer.msg(checkStatus.isAll ? '全选' : '未全选')
              break
          }
        })

        // 监听行工具事件
        tb.on('tool(PeopleList)', function (obj) {
          var data = obj.data
          if (obj.event === 'del') {
            layer.confirm('真的删除行么', function (index) {
              obj.del()
              layer.close(index)
            })
          } else if (obj.event === 'edit') {
            layer.prompt({
              formType: 2,
              value: data.email
            }, function (value, index) {
              obj.update({
                email: value
              })
              layer.close(index)
            })
          }
        })
      })
    }
  },
  mounted () {
    this.initPeopleList()
  },
  updated () {
    console.log('0.000')
  }
}
</script>

<style scoped>
  .PeopleList{
    padding: 2rem 2rem 2rem 2rem;
  }
</style>
