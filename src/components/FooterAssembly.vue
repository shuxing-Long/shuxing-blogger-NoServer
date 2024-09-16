<template>
  <footer class="FooterAssembly">
    <div class="footer_inner">
        <div class="footer_content">
            <span>© 2023 </span>
            <span><a href="https://shuxing-long.github.io/">Be_Yourslf </a></span>
            <span><a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener">CC BY-NC 4.0 </a></span>
            <span>
                <a href="https://shuxing-long.github.io/posts/index.xml" target="_blank" title="rss">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-rss"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                </a>
            </span>
        </div>
    </div>
    <div class="footer_inner">
        <div class="footer_content">
            <span>Technology by <a href="#">Vue2，NET Core </a></span>
            <span>Made with ❤ by <a href="https://github.com/shuxing-Long?tab=repositories" class="no-text-decoration">shuxing-Long</a></span>
        </div>
    </div>
    
  </footer>
</template>

<script>
    export default {
        name:'FooterAssembly',
    }
</script>

<style scoped>
    
    .footer_content{
        letter-spacing: .06em;
        /* --phoneWidth: (max-width: 684px);
        --tabletWidth: (max-width: 900px); */
        font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",  Helvetica, Arial, sans-serif;
        line-height: 1.54;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: "liga", "tnum", "case", "calt", "zero", "ss01", "locl";
        -webkit-text-size-adjust: 100%;
        text-align: center;
        box-sizing: inherit;
        flex-direction: column;
        font-size: 1rem;
        color: #999;
        
    }

    .footer_inner {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        /* line-height: 200px; */
    }
    .footer_content >*:not(:last-child)::after {
        /* 出去最后一个元素以外都加小圆点 */
        content: "•"; /* 这里使用的是中文输入法下的小圆点符号，你也可以使用其他合适的字符 */
        margin-right: 5px; /* 调整为你想要的间距值 */
    }
    .footer_content span a{
        color: inherit;
        text-decoration: underline;
    }

</style>