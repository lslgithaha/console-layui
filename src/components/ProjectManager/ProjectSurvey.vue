<template>
  <div id="ProjectSurvey">
    <ProcessTotal></ProcessTotal>
    <div class="layui-row">
      <div class="layui-col-md8 layui-card">
        <MissionBurnoutChart></MissionBurnoutChart>
      </div>
      <div class="layui-col-md4 layui-card">
        <DemandClassify></DemandClassify>
      </div>
    </div>
    <div class="layui-row">
      <div class="layui-col-md4 layui-card">
        <PersonnelComposition></PersonnelComposition>
      </div>
      <div class="layui-col-md8 layui-card">
        <TaskStatus></TaskStatus>
      </div>
    </div>
  </div>
</template>

<script>
import ProcessTotal from '@/components/ProjectManager/ProjectSurvey/ProcessTotal'
import MissionBurnoutChart from '@/components/ProjectManager/ProjectSurvey/MissionBurnoutChart'
import DemandClassify from '@/components/ProjectManager/ProjectSurvey/DemandClassify'
import TaskStatus from '@/components/ProjectManager/ProjectSurvey/TaskStatus'
import PersonnelComposition from '@/components/ProjectManager/ProjectSurvey/PersonnelComposition'
export default {
  name: 'ProjectSurvey',
  components: {
    ProcessTotal,
    MissionBurnoutChart,
    DemandClassify,
    TaskStatus,
    PersonnelComposition
  }
}
</script>

<style scoped>
#ProjectSurvey{
  width: 99.5%;
  height: 100%;
  margin-left: 0.5%;
}
#ProjectSurvey > div{
  margin-top: 0.8rem;
}
</style>
