<template>
  <!-- 文档组件 -->
  <div class="DocumentationAssembly">
    <div v-for="(documentation , id) in documentations" :key="id" class="posts-group">
      <div class="post-year">
        {{documentation.year}}
      </div>
      <ul class="posts-list">
        <li v-for="(value, index) in documentation.childData" 
        :key="index" class="post-item" 
        @click="navigateToChildRoute(value.id)"
        >
          
          <a href="#" class="post-interlinkage">
            <span class="post-title">{{value.title}}</span>
            <span class="post-day">{{value.month}}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- <div>滚轮页签</div> -->
  </div>
</template>

<script>
import {mapGetters,mapActions } from 'vuex'
    export default {
        name:'DocumentationAssembly',
        data() {
          return {
            
            // documentations:[
            //   {id:'001',year:'2022',currentPage: 1,
            //   childData:[{id:'001',title:'SQL理论',month:'jan 4'},{id:'002',title:'VUE',month:'jan 4'},{id:'003',title:'.NET_CORE',month:'jan 4'},]},
            //   {id:'002',year:'2023',currentPage: 1,
            //   childData:[{id:'001',title:'SQL理论',month:'jan 4'},{id:'002',title:'VUE',month:'jan 4'},{id:'003',title:'.NET_CORE',month:'jan 4'},{id:'001',title:'SQL理论',month:'jan 4'}]},
            // ]
          }
        },
        computed:{
            ...mapGetters('managenotesAbout',['documentations']),
        },
        methods:{
          // 查询目录事件
          ...mapActions('managenotesAbout',{alternotes:'alternotes'}),


          navigateToChildRoute(value){
            let newpage = this.$router.resolve({ 
                  path: '/viewNotes',
                  query:{
                      id:value
                  }   
            }) 
            console.log(value)
            const newWindow =window.open(newpage.href, '_blank');
            newWindow.focus() // 聚焦新标签页
          }
        }
    }
</script>

<style scoped>
  
  .posts-group{
    color: #222;
    display: flex;
    margin-bottom: 1.9em;
  }
  .post-year{
    letter-spacing: .06em;
    font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",  Helvetica, Arial, sans-serif;
    color: #222;
    font-feature-settings: "liga", "tnum", "case", "calt", "zero", "ss01", "locl";
    padding-top: 6px;
    margin-right: 1.8em;
    margin-left: 0.5em;
    font-size: 1.6em;
    opacity: .6;
  }

  .posts-list{
    --phoneWidth: (max-width: 684px);
    color: #222;
    flex-grow: 1;
  }
  .post-item{
    color: #222;
    border-bottom: 1px grey dashed;
  }
  .post-item a{
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 12px 0;
  }
  .post-title{
    letter-spacing: .06em;
    font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",  Helvetica, Arial, sans-serif;
    font-feature-settings: "liga", "tnum", "case", "calt", "zero", "ss01", "locl";
    -webkit-text-size-adjust: 100%;
    color: inherit;
    box-sizing: inherit;
    font-size: 1rem;
    margin: 5px 0 5px 0;
  }
  .post-day{
    letter-spacing: .06em;
    font-family: 'Inter UI', -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI",  Helvetica, Arial, sans-serif;
    font-feature-settings: "liga", "tnum", "case", "calt", "zero", "ss01", "locl";
    color: inherit;
    box-sizing: inherit;
    flex-shrink: 0;
    margin-left: 1em;
    opacity: .6;
    margin-right: 5%;
  }
</style>