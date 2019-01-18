import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import IndexView from '@/components/Index/IndexView'
import KanBan from '@/components/KanBan/KanBan'
import KanBanDemand from '@/components/KanBan/KanBanDemand'
import KanBanDesign from '@/components/KanBan/KanBanDesign'
import KanBanDevelop from '@/components/KanBan/KanBanDevelop'
import KanBanTest from '@/components/KanBan/KanBanTest'
import KanBanAccept from '@/components/KanBan/KanBanAccept'
import ProjectSurvey from '@/components/ProjectManager/ProjectSurvey'
import PeopleManage from '@/components/ProjectManager/PeopleManage'
import FileManage from '@/components/ProjectManager/FileManage'
import GanttChart from '@/components/Index/GanttChart'
import InterfaceDevelop from '@/components/InterfaceManage/InterfaceDevelop'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'IndexView',
          component: IndexView
        },
        {
          path: 'indexganttchart',
          name: 'GanttChart',
          component: GanttChart
        },
        {
          path: 'projectpeoplemanage',
          name: 'PeopleManage',
          component: PeopleManage
        },
        {
          path: 'InterfaceDevelop',
          name: 'InterfaceDevelop',
          component: InterfaceDevelop
        },
        {
          path: 'projectfilemanage',
          name: 'FileManage',
          component: FileManage
        },
        {
          path: 'kanban',
          name: 'KanBan',
          component: KanBan
        },
        {
          path: 'kanbandemand',
          name: 'KanBanDemand',
          component: KanBanDemand
        },
        {
          path: 'kanbandesign',
          name: 'KanBanDesign',
          component: KanBanDesign
        },
        {
          path: 'kanbandevelop',
          name: 'KanBanDevelop',
          component: KanBanDevelop
        },
        {
          path: 'kanbantest',
          name: 'KanBanTest',
          component: KanBanTest
        },
        {
          path: 'kanbanaccept',
          name: 'KanBanAccept',
          component: KanBanAccept
        },
        {
          path: 'projectsurvey',
          name: 'ProjectSurvey',
          component: ProjectSurvey
        }
      ]
    }
  ]
})
