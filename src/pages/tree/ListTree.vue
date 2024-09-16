<template>
    <!-- 树形列表 -->
  <div class="ListTree" >
    <!-- 用递归的方式打印列表 -->
    <ul>
        <!-- @mouseover.self中的self是限制事件只在自身上触发  -->
        <!-- 目录 -->
        <li v-for="(notes,index) in notesTree" 
            :key="notes.id" 
            :class="{subMenuBaColor: !notes.isActive}"
            class = "catalogli"
            @mouseover.self="handleMouseover(notes)"
            @mouseleave.self="leaveMouseover(notes)"
            @click.self="toggleSubMenu(notes)"
        >
        <!-- @blur.self="handleBlur($event,notes)"   -->
            <a href="#" >
                <span v-show="!notes.isEdit" 
                @click.self="toggleSubMenu(notes)"
                @mouseover.self="handleMouseover(notes)"
                @mouseleave.self="leaveMouseover(notes)"
                >{{ notes.name }}</span>
                <input v-show="notes.isEdit" 
                    type="text" 
                    :value="notes.name" 
                    ref="inputTitle"
                    class="inputEdit"
                    @keydown.enter="handleBlur($event,notes)"
                    >
            </a>
            <span  class="icon-container" v-show="hoverIndex == notes.id">
                <!-- 添加矢量图 -->
                <img src="@/assets/svg/新增.svg" alt="" 
                        width="22" 
                        height="20"
                        class="icon title-svg" 
                        @click.self="addleEdit(notes.id)">
                        <!-- 修改矢量图 -->
                <img src="@/assets/svg/修改.svg" alt="" 
                        width="22" 
                        height="20"
                        class="icon title-svg" 
                        @click.self="upDateleEdit(index,notes)">
                <!-- 删除矢量图 -->
                <img src="@/assets/svg/删除.svg" alt="" 
                    width="22" 
                    height="20"
                    class="icon title-svg" 
                    @click.self="delcatalog(index,notes)">
            </span>

            <!-- 笔记 -->
            <ul v-if="notes.isActive" 
       
                style="margin-left: 20px" 
                class="sub-menu" 
                >
                <!-- <TreeItem v-for="child in notes.childData" :key="child.id"  :notes="child" class="liChild"></TreeItem> -->
                <li v-for="child in notes.childData" :key="child.id" class="liChild"
                    @click.self="noteChange(child)"
                    @mouseover.self="handleMouseover(child)"
                    @mouseleave.self="leaveMouseover(child)"
                >
                    <a href="#">
                        <span 
                            @click.self="noteChange(child)"
                            @mouseover.self="handleMouseover(child)"
                            @mouseleave.self="leaveMouseover(child)"
                        >
                        {{ child.title }}
                        </span> <span> > </span> </a>
                    <span  class="icon-container" v-show="hoverIndex == child.id">
                        <!-- 删除矢量图 -->
                        <img src="@/assets/svg/删除.svg" alt="" 
                                width="22"     
                                height="20" 
                                class="icon title-svg" 
                                @click.self="delnodes(child)">
                    </span>
               
                </li>
            </ul>
        </li>
    </ul>
  </div>
</template>

<script>
    // import TreeItem from '@/pages/tree/TreeItem'
    import {mapActions,mapMutations,mapGetters } from 'vuex'
    export default {
        name:'ListTree',
        data() {
            return {
                // 右键数据
                menus:{
                    contextMenuVisible:false,
                    contextMenuTop:0,
                    contextMenuLeft:0,
                    menuItme:[
                        {id:'001',title:'新增'}
                    ],
                },
                // 鼠标悬浮在那个目录上的判断?
                hoverIndex: -1,
                
            }
        },
        // props:['notesTree'],
        mounted() {
            // console.log(this.notesTree)
            

        },
        created() {
            
        },
        // components:{TreeItem,},
        computed:{
            ...mapGetters('managenotesAbout',['notesTree']),
        },
        methods: {
            // 获取目录树数据
            ...mapActions('managenotesAbout',{selectAllNotes:'selectAllNotes',delCatalogAct:'delCatalog',alterCatalog:'alterCatalog'}),
            ...mapMutations('managenotesAbout',{ALTERNOTERDATA:'ALTERNOTERDATA'}),
            // 切换笔记
            ...mapActions('managenotesAbout',{alterNoteData:'alterNoteData',delNodes:'delNodes',selectAllNotes:'selectAllNotes'}),

            toggleSubMenu(valeu) {
                
                valeu.isActive = !valeu.isActive;
                // console.log(valeu.isActive)
            },
            handleTransitionEnd(valeu) {
                if (!valeu.isActive) {
                    // 动画结束后，隐藏子菜单
                    this.$nextTick(() => {
                        valeu.isActive = false;
                    });
                    // console.log(valeu.isActive)
                }
            },
			leaveMouseover(note) {
                console.log(note.id)
                if(!note.isEdit){
                    // console.log('leaveMouseover')
                    this.hoverIndex = -1;
                }
			},
            handleMouseover(note) {
                console.log(note.isEdit)
                if(!note.isEdit){
                    this.hoverIndex = note.id;
                }
            },
            // 编辑目录
            handleBlur(e,note){
                note.isEdit = false
                if(!e.target.value.trim()){
                    alert('不能为空!!!')
                    return
                }
                // console.log(e.target.value)
                note.name = e.target.value
                // 修改目录名称
                this.alterCatalog(note)
            },
            upDateleEdit(index,notes){
                // console.log('修改')
                notes.isEdit = true
                this.$nextTick(function(){
                    this.$refs.inputTitle[index].focus()
                })
            },
            // 删除目录事件
            delcatalog(index,notes){
                console.log('删除',index,notes)
                if(notes.childData.length > 0){
                    alert("存在笔记无法删除")
                }else{
                    this.delCatalogAct(notes.id)
                }
            },
            addleEdit(id)
            {
                // 添加笔记
                this.ALTERNOTERDATA({
                    "id":"",
                    "title":"",
                    "mdContext":"",
                    "catalogid":id
                })
            },
            noteChange(value){
                // 笔记切换
                console.log('TreeItem:',value)
                // this.$bus.$emit('treelItmChange',value)
                this.alterNoteData(value)
            },
            async delnodes(value)
            {
                // 删除笔记
                console.log(value)
                await this.delNodes(value)
                // 更新数据
                // await this.selectAllNotes()
            }
        },

    }
    
</script>

<style scoped>
    .ListTree{
        border-radius: 4px; 
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }
    .ListTree  li a{
        margin-left: 10px;
        height: 50px;
        font-size: 1.125rem;
        font: 22px monospace, monospace;
        color: black;
        font-weight: bold;
        line-height: 50px;
    }
    .ListTree  .liChild:hover{
        background-color: aliceblue;
    }
    .subMenuBaColor{
        background-color: rgb(244, 246, 248);
        
    }
    /* .title-svg{
        margin-right: 2px;
        margin-top: 16px;
        float: right;
    } */
    .inputEdit{
        width: 70%;
    }
    .icon-container {
        float: right;
        margin-right: 4px;
        transform: translateY(50%); /* 垂直居中 */ 
    }
    span{
      display: inline-block;
      max-width: 60%; /* 设置最大宽度，防止超出父元素 */
      white-space: nowrap; /* 防止换行 */
      overflow: hidden; /* 隐藏超出边界的内容 */
      text-overflow: ellipsis; /* 显示省略号 */
    }
</style>