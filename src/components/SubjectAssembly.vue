<template>
    <!-- 主体内容组件 -->
  <div class="SubjectAssembly">
    <DirectoryAssembly></DirectoryAssembly>
    <DocumentationAssembly></DocumentationAssembly>
  </div>
</template>

<script>
    import DirectoryAssembly from '../pages/home/DirectoryAssembly'
    import DocumentationAssembly from '../pages/home/DocumentationAssembly'

    export default {
        name:'SubjectAssembly',
        components:{
            DirectoryAssembly,
            DocumentationAssembly,
        }
    }
</script>

<style>
    .SubjectAssembly{
        margin-top: 20px;
    }
    /* 目录样式 */
    .DirectoryAssembly{
        width: 19%;
        background-color: rgb(255, 253, 253);
        border-radius: 4px; 
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        display: inline-block;
        float: left;
        margin-left: 60px;
    }
    /* 主体内容样式 */
    .DocumentationAssembly{
        width: 54%;
        background-color: rgb(255, 253, 253);
        border-radius: 4px; 
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        display: inline-block;
        margin-left: 20px;
    }
</style>