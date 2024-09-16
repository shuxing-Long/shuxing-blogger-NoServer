<template>
    <!-- 管理笔记组件 -->
  <div class="ManageNotes">
    <ListTree></ListTree>
    <div class="md-content">
        <div class="md-title">
            <ul>
                <li>
                    <span>标题：</span>
                    <input type="text" v-model="noteData.title">
                </li>
                <li>
                    <label for="selectBox">目录：</label>
                    <input v-if="editing" 
                    v-model="catalogName" 
                    @input="handleInput" 
                    @keydown.enter="addcatalog(catalogName)"
                    ref="inputCatalogue"
                    >
                    <select v-else id="selectBox" name="selectBox" v-model="noteData.catalogid" @change="handleChange">
                        <option value="-1">请选择</option>
                        <option v-for="(catalog) in notesTree" :key="catalog.id" :value="catalog.id">{{catalog.name}}</option>
                    </select>
                    <div class="container" >
                        <!-- 添加矢量图 -->
                        <svg t="1691394746809" 
                        class="icon" 
                        viewBox="0 0 1024 1024" 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        p-id="2294" width="20" 
                        height="20"
                        @click="catalogEditAdd"
                        v-show="!editing"
                        ><path d="M990.016 862.016c0 70.4-57.6 128-128 128H161.984c-70.4 0-128-57.6-128-128V161.984c0-70.4 57.6-128 128-128h700.032c70.4 0 128 57.6 128 128v700.032z" fill="#FFFFFF" p-id="2295"></path><path d="M862.016 1022.016H161.984a160.192 160.192 0 0 1-160-160V161.984c0-88.192 71.808-160 160-160h700.032c88.256 0 160 71.808 160 160v700.032c0 88.256-71.744 160-160 160zM161.984 65.984c-52.928 0-96 43.072-96 96v700.032c0 52.928 43.072 96 96 96h700.032c52.928 0 96-43.072 96-96V161.984c0-52.928-43.072-96-96-96H161.984z" fill="#999999" p-id="2296"></path><path d="M245.824 448h532.352v128H245.824z" fill="#999999" p-id="2297"></path><path d="M448 245.76h128v532.416H448z" fill="#999999" p-id="2298"></path></svg>
                    </div>
                    <!-- <p>选中的选项的key值为：{{ selectedOption }}</p> -->
                </li>
            </ul>
        </div>
        <v-md-editor 
            v-model="noteData.mdContext" 
            :disabled-menus="[]"
            @save="save"
            @upload-image="handleUploadImage"
        ></v-md-editor>
    </div>
    
    
  </div>
</template>

<script>
    import ListTree from '@/pages/tree/ListTree'
    import {mapGetters,mapActions,mapState } from 'vuex'
    export default {
        name:'ManageNotes',
        data() {
            return {
                // markdown:'### 哈哈哈',
                // title:'',
                // selectedValue: '',
                catalogName: '', 
                editing: false,
            }
        },
        components:{
            ListTree,
        },
        computed:{
            ...mapState('managenotesAbout',['catalogs']),
            ...mapGetters('managenotesAbout',['notesTree','noteData']),
        },
        methods: {
            // 添加目录事件
            ...mapActions('managenotesAbout',{addcata:'addcata',saveNotes:'saveNotes',uploadimages:'uploadimages'}),
            // 查询目录事件
            ...mapActions('managenotesAbout',{selectcata:'selectAllCatalog',selectAllNotes:'selectAllNotes'}),
            

            // 保存md内容事件
            async save(value){
                // console.log('value',value)
                // console.log('catalogid',this.noteData.catalogid)
                await this.saveNotes({"id":this.noteData.id,"title":this.noteData.title,"catalogid":this.noteData.catalogid,"mdContext":value})
                // 初始化数据
                // await this.selectAllNotes()
                // console.log('render',render)
            },
            // 上传图片
            handleUploadImage(event, insertImage, files){
                // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
                console.log(files);
                console.log(insertImage);
                console.log(event);
                this.uploadimages(files);
            },
            handleInput() {
                // 处理输入框的input事件
                // 可以根据输入框的值动态过滤选项等操作
            },
            addcatalog(value) {
                // 回车添加目录事件
                this.editing = false
                console.log(value)
                // 传参
                this.addcata(value)
                // 获取新数据
                // this.selectcata()
                this.catalogName = ""
            },
            handleChange() {
                // 处理下拉框的change事件
                console.log('Selected value: ', this.selectedValue);
            },
            catalogEditAdd(){
                // 添加目录矢量图点击事件
                this.editing = true
                this.$nextTick(function(){
                    this.$refs.inputCatalogue.focus()
                })
            }
        },
        mounted() {
            // 绑定一个事件到事件总线上
            // this.$bus.$on('treelItmChange',(data)=>{
            //     console.log('子组件传过来的数据',data)
            //     this.markdown = data.mdContext
            //     this.title = data.title
            //     this.selectedValue = data.catalogid
            // })
            
        },
        created() {
            // 初始化数据
            this.selectAllNotes()
            // 获取新数据
            // this.selectcata()
            // console.log("页面渲染",this.catalogs)
        },
        beforeDestroy() {
            // 取消挂载
            // this.$bus.off("treelItmChange")
        },
    }
</script>

<style scoped>
    .ManageNotes{
        display: flex;
        margin-top: 10px;
        margin-left: 20px;
    }
    .ListTree{
        width: 22%;
    }
    .md-content{
        width: 100%;

    }
    .v-md-editor,.md-title {
        width: 96%;
        margin-left: 20px;
    }
    .md-title{
        height: 160px;
        margin-bottom: 10PX;
        border-radius: 4px; 
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
        text-align: left;
        font-size: 1.125rem;
        font: 22px monospace, monospace;
        color: black;
        font-weight: bold;
    }
    .md-title ul{
        line-height: 60px;
        margin-left: 10px;
    }
    .container  {
        margin-left: 8px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transform: translateY(6px);
    }
    .md-title ul select,
    .md-title ul input{
        width: 50%;
        height: 30px;
        border-radius: 4px;
        border-color: rgb(126, 125, 125) ;
        text-align: left;
        font-size: 1.125rem;
        font: 18px monospace, monospace;
        line-height: 60px;
        color: black;
        font-weight: bold;
    }
</style>