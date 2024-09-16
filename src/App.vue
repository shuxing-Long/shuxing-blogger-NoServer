<template>
  <div id="app">
    <!-- 导航栏 -->
    <HeadAssembly></HeadAssembly>
    <!-- 主体内容 -->
    <!-- <MainAssembly></MainAssembly> -->
    <router-view></router-view>
    <!-- 底部 -->
    <FooterAssembly></FooterAssembly>
  </div>
</template>

<script>
  import HeadAssembly from './components/HeadAssembly'
  import FooterAssembly from './components/FooterAssembly'

  export default {
    name: 'App',
    components: {
      HeadAssembly,
      // SubjectAssembly,
      // MainAssembly,
      // ManageNotes,
      FooterAssembly,
      // ViewNotes,
    },
    mounted() {
      // 这个判断是解决打开新标签页的时候不重置到/mainAssembly
      if(this.$router.currentRoute.name !== 'viewNotes'){
        
        this.$router.push('/mainAssembly') // 使用编程式路由将用户导航到'/child-route'路径
      }
      
    },
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    
  }
  a{
      text-decoration: none;
      outline: none;
  }
  li{
      list-style: none;
  }
  #app{
    display: flex;
    flex-direction: column; /* 垂直方向布局 */
    height: 100vh;
    /* background-color: rgb(240, 245, 250); */
  }
  .FooterAssembly{
        height: 80px;
        /* background-color: aqua; */
        margin-top: 50px;
    }
    .MainAssembly , .ManageNotes{
      flex: 1; /* 自动占满剩余空间 */
    }
    
</style>
