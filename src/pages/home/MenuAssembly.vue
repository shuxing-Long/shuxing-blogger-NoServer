<template>
    <!-- 菜单组件 -->
  <div class="MenuAssembly">
    <a v-if="!svgHideStyles" class="MenuAssembly-img" @click="clickMenuShow">
       <!-- 菜单矢量图 -->
        <svg t="1689746654717" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2439" >
            <path d="M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z" fill="#575B66" p-id="2440">
            </path>
            <path d="M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z" fill="#575B66" p-id="2441"></path><path d="M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z" fill="#575B66" p-id="2442">
            </path>
        </svg>
    </a>

    <ul v-show="menuHideStyles" :class="MenuulClassName+ ` MenuAssembly-content`">
        <li v-for="(mensData , index) in mensDatas" :key="index" @click="navigateToChildRoute(mensData)">
           <a href="#">{{mensData}}</a> 
        </li>
        <li v-if="svgHideStyles">
            <img src="@/assets/分割线.png" alt="">
        </li>
    </ul>
  </div>

</template>

<script>
    // import {mapGetters,mapActions } from 'vuex'
    import {mapActions } from 'vuex'
    export default {
        name:'MenuAssembly',
        data() {
            return {
                mensDatas:['笔记','管理笔记','版本',],
                divClassW:0,
                svgHideStyles:true,
                menuHideStyles:true,
            }
        },
        created() {
            this.queryuser()
            // 初始化屏幕宽度
            this.divClassW = window.innerWidth
            // 监听屏幕尺寸变化
            window.addEventListener('resize',this.handleResize)
        },
        destroyed(){
            // 移除监听事件
            window.removeEventListener('resize',this.handleResize)
        },
        methods: {
            // 查询目录事件
            ...mapActions('initializeAbout',{queryuser:'queryuser'}),

            handleResize(){
                // 修改屏幕宽度
                this.divClassW = window.innerWidth
                this.svgHideStyles =this.divClassW < 768 ? false:true;
                this.menuHideStyles = this.svgHideStyles
            },
            clickMenuShow(){
                // 控制手机端ul菜单的显示
                this.menuHideStyles = !this.menuHideStyles
            },
            navigateToChildRoute(value) {
                if(value === '笔记'){
                    this.$router.push('/subjectAssembly') // 使用编程式路由将用户导航到'/child-route'路径
                }
                if(value === '管理笔记'){
                    this.$router.push('/manageNotes')
                }
            }
        },
        // 计算属性
        computed:{
            // ...mapGetters('initializeAbout',['mensDatas']),

            MenuulClassName(){
                // 根据屏幕宽度设置类名
                if (this.divClassW < 768) {
                    return 'small-screen';
                } else {
                    return 'large-screen';
                }
            }
        },
        

    }
</script>

<style scoped>
    .MenuAssembly{
        display: inline;
        /* line-height: 67.71; */
    }
    /* 菜单矢量图 */
    .MenuAssembly-img{
        /* background-color: aquamarine; */
        display:inline;
        width: 30px;
        height: 30px;
        /* position: relative; */
        /* top: -4px; */
        /* left: 100px; */
        float: right;
    }
    .MenuAssembly-img .icon
    {
        height: 30px;
    }
    
    /* 菜单内容样式(pc端样式) */
    .large-screen{
        float: right;
        /* background-color: aquamarine; */
    }
    .large-screen li{
        float: left;
        
        margin-left: 14px;
        
    }
    

    /* 菜单内容样式(手机端样式) */
    .small-screen{
        background-color: rgb(243, 247, 250);
        float: right;
        position: relative;
        top: 50px;
        left: 38px;
    }
    .MenuAssembly:hover .small-screen{
        display: block;
    }

    /* 菜单内容样式(两端公共样式) */
    .MenuAssembly-content li a{
        letter-spacing: .06em;
        font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",  Helvetica, Arial, sans-serif;
        line-height: 1.54;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: "liga", "tnum", "case", "calt", "zero", "ss01", "locl";
        -webkit-text-size-adjust: 100%;
        font-size: 20px;
        list-style: none;
        box-sizing: inherit;
        background-color: transparent;
        color: black;
        display: inline-block;
        text-decoration: none;
        margin-right: 0;
    }
    .MenuAssembly-content li img{
        height: 32px;
    }
    
</style>