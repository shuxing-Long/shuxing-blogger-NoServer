<template>
    <!-- 目录组件 -->
  <div class="DirectoryAssembly">
    <div class="DirectoryAssembly-title">
        <h2>目录</h2>
    </div>
    
    <ul class="DirectoryAssembly-context">
        <li v-for="(catalog) in catalogs" 
        :key="catalog.id"
        @click="switchcata(catalog)"
        >
            <a href="#">
                {{catalog.catalogName}} 
                <span> > </span>
            </a>
            
        </li>
    </ul>
  </div>
</template>

<script>
    import {mapGetters,mapActions } from 'vuex'
    export default {
        name:'DirectoryAssembly',
        data() {
            return {
                directorys:['算法','.net core','sql数据库','算法','.net core','sql数据库'],
            }
        },
        computed:{
            ...mapGetters('managenotesAbout',['catalogs']),
        },
        methods:{
            // 查询目录事件
            ...mapActions('managenotesAbout',{selectcata:'selectAllCatalog',alternotes:'alternotes'}),

            // 切换目录
            switchcata(catalog){
                console.log(catalog)
                this.alternotes(catalog.notesChildData)
            },
        },
        created() {
            // 获取新数据
            this.selectcata()
            // console.log("页面渲染",this.catalogs)
        },
    }
</script>

<style scoped>
    
    /* 标题 */
    .DirectoryAssembly-title{
        height: 50px;
        text-align: center;
        border-bottom: 1px solid black;
        font-size: 1.125rem;
        font: 22px monospace, monospace;
        line-height: 50px;
        color: black;
        font-weight: bold;
    }
    /* 目录选项 */
    .DirectoryAssembly-context li a{
        height: 50px;
        margin-left: 16px;
        font-size: 1.125rem;
        font: 22px monospace, monospace;
        color: black;
        font-weight: bold;
        line-height: 50px;
    }
    .DirectoryAssembly-context li:hover{
        background-color: rgb(235, 245, 245);
    }
    .DirectoryAssembly-context span{
        margin-right: 5px;
        float: right;
    }
</style>