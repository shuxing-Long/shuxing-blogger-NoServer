<template>
    <!-- 首页内容 -->
  <div class="MainAssembly">
    <main class="content">
        <h1>零的学习笔记</h1>
        <p>Be_Yourself</p>
        <div>
            <a href="mailto:1733896149@qq.com" target="_blank" rel="noopener" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            &nbsp;
            <a href="https://github.com/shuxing-Long?tab=repositories/" target="_blank" rel="noopener" title="Github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
        </div>
    </main>
  </div>
</template>

<script>
    export default {
        name:'MainAssembly'
    }
</script>

<style scoped>
    .MainAssembly{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content{
        letter-spacing: .06em;
        font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",  Helvetica, Arial, sans-serif;
        line-height: 1.54;
        text-align: center;
    }
    .content h1{
        letter-spacing: .06em;
        margin: 0.67em 0;
        font-size: 2.625rem;
    }

    /* 图标 */
    .content div{
        margin: 10px;
    }
    .content div a{
        color: inherit;
    }
</style>