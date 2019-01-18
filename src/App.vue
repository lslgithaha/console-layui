<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /*font: 1rem Arial,Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
html{
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none;  /*webkit浏览器*/
  -ms-user-select: none;   /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
</style>
