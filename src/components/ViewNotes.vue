<template>
    <!-- 浏览笔记 -->
    <div class="ViewNotes">
        <!-- <HeadAssembly></HeadAssembly> -->
        <main class="ViewNotes-mb">
            <div class="title">
                <h1>{{title}}</h1>
                <div class="recordTime">
                    <img src="@/assets/svg/时间1.svg" alt="">
                    <span>{{recordTime}}</span>
                </div>
            </div>
            <div class="ViewNotes-content">
                <!-- 渲染成页面的部分 -->
                <v-md-editor :value="markdown" mode="preview"></v-md-editor>
            </div>
        </main>
        <!-- <FooterAssembly></FooterAssembly> -->
    </div>
</template>

<script>
    // import HeadAssembly from './HeadAssembly'
    // import FooterAssembly from './FooterAssembly'
    import {mapActions,mapGetters } from 'vuex'
    export default {
        name:'ViewNotes',
        data() {
            return {
                // title:'SQL理论',
                // markdown:'### 文件结构',
                // recordTime:'2023-7-22 17:10',
            }
        },
        // components:{HeadAssembly,FooterAssembly,},
        props:['id'],
        mounted() {
            // this.loadMarkdownFile();
        },
        computed:{
            ...mapGetters('managenotesAbout',['title','markdown','recordTime']),
        },
        methods: {
            // 查询目录事件
            ...mapActions('managenotesAbout',{selectNote:'selectNote'}),

            async loadMarkdownFile() {
                try {
                    // 读取md文件的内容  npm install raw-loader
                    // const response = await require(`raw-loader!${'@/assets/text1.md'}`);
                    // this.markdown = response.default;
                    // console.log(this.markdown)
                    // console.log(this.id)
                } catch (error) {
                    console.error('Failed to load markdown file:', error);
                }
            },
        },
        created() {
            this.selectNote(this.id);
        },
    }
</script>

<style scoped>
    .ViewNotes .HeadAssembly{
        width: 100%;
    }
    .ViewNotes{
        width: 100%;
        display: grid;
        place-items: center;
    }
    .ViewNotes-mb{
        width: 90%;
        margin-top: 20px;
        background-color: rgb(255, 253, 253);
        border-radius: 4px; 
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }
    .ViewNotes-mb .title{
        height: 80px;
        text-align: center;
        border-bottom: 1px solid black;
    }
    .ViewNotes-mb .recordTime{
        display: flex;
        align-items: center;
        justify-content: center;
        /* margin-left: 2%; */
        margin-top: 18px;
    }
    .ViewNotes-mb .recordTime img{
        width: 12px;
        margin-right: 4px;
    }
    .ViewNotes-mb .recordTime span{
        font-size: 10px;
    }
</style>