<template>
  <!-- logo组件 -->
  <a class="LogoAssembly" href="#" @click="navigateToChildRoute">
      <span class="span-InputCharacter">></span>
      <span class="span-text"> 
       $ cd /Home/
      </span>
      <span class="LogoAssembly-flashing"></span>
    </a>
</template>

<script>
export default {
    nema:'LogoAssembly',
    methods:{
      navigateToChildRoute() {
        this.$router.push('/mainAssembly') 
      }
    }
}
</script>

<style scoped>
  .LogoAssembly{
    margin-left: 20px;
    line-height: 67.71px;
  }
  .span-text , 
  .span-InputCharacter{
    font-size: 1.125rem;
    font: 22px monospace, monospace;
    color: black;
    font-weight: bold;
  }

  /* 定义闪烁动画 */
  @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    /* 定义闪烁效果的div样式 */
    .LogoAssembly-flashing {
      animation: blink 1s infinite; /* 使用blink动画，并设置1秒的持续时间，无限循环 */
      background-color: #fe5186;
      width: 12px;
      height: 18px;
      display: inline-block;
      transform: translateY(2px);
      border-radius: 2px;
    }

    
</style>