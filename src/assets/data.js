export const data = {
  mouth: [[{'dayNum': '30', 'mark': '0', 'notice': ''}, {'dayNum': '31', 'mark': '0', 'notice': ''}, {
    'dayNum': '1',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '2', 'mark': '0', 'notice': ''}, {'dayNum': '3', 'mark': '0', 'notice': ''}, {
    'dayNum': '4',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '5', 'mark': '0', 'notice': ''}], [{'dayNum': '6', 'mark': '0', 'notice': ''}, {
    'dayNum': '7',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '8', 'mark': '0', 'notice': ''}, {'dayNum': '9', 'mark': '0', 'notice': ''}, {
    'dayNum': '10',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '11', 'mark': '0', 'notice': ''}, {'dayNum': '12', 'mark': '1', 'notice': '项目上线哦'}], [{
    'dayNum': '13',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '14', 'mark': '0', 'notice': ''}, {'dayNum': '15', 'mark': '0', 'notice': ''}, {
    'dayNum': '16',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '17', 'mark': '0', 'notice': ''}, {'dayNum': '18', 'mark': '0', 'notice': ''}, {
    'dayNum': '19',
    'mark': '0',
    'notice': ''
  }], [{'dayNum': '20', 'mark': '2', 'notice': '新需求来了'}, {'dayNum': '21', 'mark': '0', 'notice': ''}, {
    'dayNum': '22',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '23', 'mark': '0', 'notice': ''}, {'dayNum': '24', 'mark': '2', 'notice': '干不下去了'}, {
    'dayNum': '25',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '26', 'mark': '0', 'notice': ''}], [{'dayNum': '27', 'mark': '2', 'notice': '好多好多活儿好多好多事儿好多好多活儿好多好多事儿好多好多活儿好多好多事儿'}, {
    'dayNum': '28',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '29', 'mark': '0', 'notice': ''}, {'dayNum': '30', 'mark': '0', 'notice': ''}, {
    'dayNum': '31',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '1', 'mark': '0', 'notice': ''}, {'dayNum': '2', 'mark': '0', 'notice': ''}], [{
    'dayNum': '3',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '4', 'mark': '0', 'notice': ''}, {'dayNum': '5', 'mark': '0', 'notice': ''}, {
    'dayNum': '6',
    'mark': '0',
    'notice': ''
  }, {'dayNum': '7', 'mark': '0', 'notice': ''}, {'dayNum': '8', 'mark': '0', 'notice': ''}, {
    'dayNum': '9',
    'mark': '0',
    'notice': ''
  }]],
  demand: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['项目经理', '需求分析', '交互/设计', '全栈开发', '分离开发-前端', '分离开发-前端', '测试', '运维']
    },
    color: ['#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    series: [
      {
        name: '成员分析',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {value: 2, name: '项目经理'},
          {value: 4, name: '需求分析'},
          {value: 4, name: '交互/设计'},
          {value: 3, name: '全栈开发'},
          {value: 3, name: '分离开发-前端'},
          {value: 7, name: '分离开发-后台'},
          {value: 3, name: '测试'},
          {value: 2, name: '运维'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  },
  workTotal: {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['新增', '开发', '测试', 'BUG', '完成']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    // color: ['#009bc1', '#68228B', '#f39d0a', '#dc3545', '#00a759'],
    color: ['#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
    series: [
      {
        name: '新增',
        type: 'bar',
        barWidth: 10,
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '开发',
        type: 'bar',
        barWidth: 10,
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '测试',
        type: 'bar',
        barWidth: 10,
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'BUG',
        type: 'bar',
        barWidth: 10,
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '完成',
        type: 'bar',
        barWidth: 10,
        data: [60, 72, 71, 74, 109, 130, 120]
      }
    ]
  },
  kanban: {
    tasks: [
      {
        describe: '删除XXXX，增加=======',
        priority: '1',
        participant: '1',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '修改这一步 完成哪一步',
        priority: '3',
        participant: '2',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '修改哈登录功能',
        priority: '2',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '一个大大的功能修改',
        priority: '3',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      }
    ],
    doing: [
      {
        describe: '删除XXXX，增加=======',
        priority: '1',
        participant: '1',
        isBug: '1',
        workload: '1.0'
      },
      {
        describe: '修改这一步 完成哪一步',
        priority: '3',
        participant: '2',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '修改哈登录功能',
        priority: '2',
        participant: '3',
        isBug: '1',
        workload: '1.0'
      },
      {
        describe: '一个大大的功能修改',
        priority: '3',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '删除XXXX，增加=======',
        priority: '1',
        participant: '1',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '修改这一步 完成哪一步',
        priority: '3',
        participant: '2',
        isBug: '1',
        workload: '1.0'
      },
      {
        describe: '修改哈登录功能',
        priority: '2',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '一个大大的功能修改',
        priority: '3',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      }
    ],
    testing: [
      {
        describe: '删除XXXX，增加=======',
        priority: '1',
        participant: '1',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '修改这一步 完成哪一步',
        priority: '3',
        participant: '2',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '修改哈登录功能',
        priority: '2',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '一个大大的功能修改',
        priority: '3',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      }
    ],
    done: [
      {
        describe: '删除XXXX，增加=======',
        priority: '1',
        participant: '1',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '修改这一步 完成哪一步',
        priority: '3',
        participant: '2',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '修改哈登录功能',
        priority: '2',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      },
      {
        describe: '一个大大的功能修改',
        priority: '3',
        participant: '3',
        isBug: '0',
        workload: '1.0'
      }
    ]
  },
  projectProcess: {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    color: ['#009bc1', '#68228B', '#f39d0a', '#dc3545', '#00a759'],
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: {formatter: '{value}%'},
        data: [{value: 50, name: '项目完成进度'}]
      }
    ]
  },
  taskBurnout: {
    title: {
      left: 'center',
      text: '任务燃尽图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '时间：{b0}<br />任务数量： {c0}'
    },
    xAxis: {
      type: 'category',
      data: ['11-2', '11-3', '11-4', '11-5', '11-6', '11-7', '11-8', '11-9', '11-10', '11-11', '11-12', '11-13']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [350, 330, 310, 350, 300, 290, 240, 200, 160, 130, 90, 80],
      type: 'line',
      smooth: true
    }]
  },
  personTatal: {
    title: {
      text: '本期需求分类统计',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['页面设计', '用户体验', '业务变更', '需求进化', 'BUG']
    },
    series: [
      {
        name: '完成任务数',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {value: 335, name: '页面设计'},
          {value: 310, name: '用户体验'},
          {value: 234, name: '业务变更'},
          {value: 135, name: '需求进化'},
          {value: 148, name: 'BUG'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  },
  taskStatus: {
    title: {
      text: '各阶段任务情况',
      subtext: '纯属虚构'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['已完成', '待完成', '丢弃']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        data: ['用户故事', '需求提取', '交互设计', '开发', '测试', '验收', '丢弃']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    color: ['#00a759', '#dc3545', '#c2c2c2'],
    series: [
      {
        name: '已完成',
        type: 'bar',
        data: [7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6]
      },
      {
        name: '待完成',
        type: 'bar',
        data: [9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 18.8]
      },
      {
        name: '丢弃',
        type: 'bar',
        data: [9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 18.8]
      }
    ]
  },
  PersonnelComposition: {
    title: {
      text: '人员构成',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['需求', '设计', '前端', '后台', '测试', '验收客户']
    },
    color: ['#009bc1', '#68228B', '#f39d0a', '#dc3545', '#00a759'],
    series: [
      {
        name: '完成任务数',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {value: 335, name: '需求'},
          {value: 310, name: '设计'},
          {value: 135, name: '前端'},
          {value: 135, name: '测试'},
          {value: 135, name: '后台'},
          {value: 148, name: '验收客户'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  },
  GanttChart: {
    title: {
      text: '项目XXX v1.00.26 甘特图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        let tar = params[1]
        let d = new Date('2018/10/28')
        d.setTime(d.getTime() + 1000 * 60 * 60 * 24 * params[0].data)
        let start = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        d.setTime(d.getTime() + 1000 * 60 * 60 * 24 * (tar.value))
        let end = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value + '<br/>' + '开始时间：' + start + '<br/>完成时间：' + end
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'category',
      splitLine: {show: false},
      data: ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七']
    },
    xAxis: {
      position: 'top',
      type: 'value',
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          let d = new Date('2018/10/28')
          d.setTime(d.getTime() + 1000 * 60 * 60 * 24 * value)
          return (d.getMonth() + 1) + '/' + d.getDate()
        }
      }
    },
    // color: ['#009bc1', '#68228B', '#f39d0a', '#dc3545', '#00a759'],
    color: ['#00a759'],
    series: [
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        barWidth: 30,
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [31, 23, 18, 11, 5, 3, 0]
      },
      {
        name: '任务天数',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [6, 8, 5, 7, 6, 2, 3]
      }
    ]
  },
  FileDir: [
    {
      'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d',
      'fileName': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d',
      'size': 0,
      'createTime': '2018-03-21 10:23:21',
      'isFolder': true,
      'fileList': [{
        'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d',
        'fileName': 'nginx-conf-1.0.0',
        'size': '0b',
        'createTime': '2018-03-21 10:23:21',
        'isFolder': true,
        'fileList': [{
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0',
          'fileName': 'lib',
          'size': '4.0kb',
          'createTime': '2018-03-21 10:23:21',
          'isFolder': true,
          'fileList': [{
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'application.yml',
            'size': '506b',
            'createTime': '2017-10-26 15:50:09',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'bksx-redis-v0.9.2.20170619.jar',
            'size': '8.95kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'commons-beanutils-1.9.3.jar',
            'size': '240.4kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'commons-collections-3.2.2.jar',
            'size': '574.55kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'commons-logging-1.2.jar',
            'size': '60.38kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'commons-pool2-2.4.2.jar',
            'size': '109.34kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'jedis-2.9.0.jar',
            'size': '540.78kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'nginx-conf-1.0.0.jar',
            'size': '1.8kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'nginx-conf-modify-1.0.0.jar',
            'size': '7.47kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'nginx-conf-redis-data-1.0.0.jar',
            'size': '3.57kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'slf4j-api-1.7.21.jar',
            'size': '40.11kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'slf4j-simple-1.7.21.jar',
            'size': '10.65kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0\\lib',
            'fileName': 'snakeyaml-1.18.jar',
            'size': '277.67kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }]
        }, {
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\nginx-conf-1.0.0',
          'fileName': 'nginx-conf-1.0.0.jar',
          'size': '1.8kb',
          'createTime': '2017-06-27 12:06:22',
          'isFolder': false
        }]
      }, {
        'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d',
        'fileName': '\u4e8c\u7ea7\u57df\u540d\u6587\u6863',
        'size': '4.0kb',
        'createTime': '2018-03-21 10:23:21',
        'isFolder': true,
        'fileList': [{
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863',
          'fileName': 'lib',
          'size': '4.0kb',
          'createTime': '2018-03-21 10:23:21',
          'isFolder': true,
          'fileList': [{
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'bksx-redis-v0.9.2.20170619.jar',
            'size': '8.95kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'commons-beanutils-1.9.3.jar',
            'size': '240.4kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'commons-collections-3.2.2.jar',
            'size': '574.55kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'commons-logging-1.2.jar',
            'size': '60.38kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'commons-pool2-2.4.2.jar',
            'size': '109.34kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'jedis-2.9.0.jar',
            'size': '540.78kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'nginx-conf-modify-1.0.0.jar',
            'size': '7.47kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'nginx-conf-redis-data-1.0.0.jar',
            'size': '3.57kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'slf4j-api-1.7.21.jar',
            'size': '40.11kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'slf4j-simple-1.7.21.jar',
            'size': '10.65kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }, {
            'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863\\lib',
            'fileName': 'snakeyaml-1.18.jar',
            'size': '277.67kb',
            'createTime': '2017-06-27 12:06:22',
            'isFolder': false
          }]
        }, {
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863',
          'fileName': 'application.yml',
          'size': '510b',
          'createTime': '2017-06-27 12:06:22',
          'isFolder': false
        }, {
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863',
          'fileName': 'linux\u4e0a\u4f7f\u7528nginx\u53cd\u5411\u4ee3\u7406\u4e8c\u7ea7\u57df\u540d\u6559\u7a0b.docx',
          'size': '84.62kb',
          'createTime': '2017-09-12 17:51:24',
          'isFolder': false
        }, {
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863',
          'fileName': 'nginx-conf-1.0.0.jar',
          'size': '1.8kb',
          'createTime': '2017-06-27 12:06:22',
          'isFolder': false
        }, {
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863',
          'fileName': 'nginx-conf-1.0.0.zip',
          'size': '1.62MB',
          'createTime': '2017-06-27 13:15:14',
          'isFolder': false
        }, {
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863',
          'fileName': 'NginxConfRefresh.java',
          'size': '2.88kb',
          'createTime': '2017-09-12 17:49:48',
          'isFolder': false
        }, {
          'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d\\\u4e8c\u7ea7\u57df\u540d\u6587\u6863',
          'fileName': 'README.md',
          'size': '3.62kb',
          'createTime': '2017-06-27 13:15:12',
          'isFolder': false
        }]
      }, {
        'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d',
        'fileName': '20170904-\u4e8c\u7ea7\u57df\u540d.txt',
        'size': '416b',
        'createTime': '2017-09-04 15:58:25',
        'isFolder': false
      }, {
        'dir': 'E:\\\u6280\u672f\u76f8\u5173\u8d44\u6599\\09-\u4e8c\u7ea7\u57df\u540d',
        'fileName': 'README.md',
        'size': '3.62kb',
        'createTime': '2017-06-27 13:15:12',
        'isFolder': false
      }]
    }
  ]
}
