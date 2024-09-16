<template>
    <!-- 导航栏 -->
  <header class="HeadAssembly">
    <LogoAssembly></LogoAssembly>
    <MenuAssembly></MenuAssembly>
  </header>
</template>

<script>
    import LogoAssembly from '../pages/home/LogoAssembly'
    import MenuAssembly from '../pages/home/MenuAssembly'
    export default {
        name:'HeadAssembly',
        components:{LogoAssembly,MenuAssembly},
    }
</script>

<style scoped>
    .HeadAssembly{
        height: 67.71px;
        background-color: #fafafa;
        
    }
    .MenuAssembly{
        position: relative;
        top: 18px;
        right: 18px;
    }
</style>