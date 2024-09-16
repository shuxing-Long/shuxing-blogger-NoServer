<template>
    <li @click.self="noteChange(notes)"
        @mouseover.self="handleMouseover(notes)"
        @mouseleave.self="leaveMouseover(notes)"
    >
      <a href="#">{{ notes.title }}</a>
      <!-- 删除矢量图 -->
      <img src="@/assets/svg/删除.svg" alt="" 
            width="22"     
            height="20" 
            class="icon title-svg" 
            v-show="hoverIndex == notes.id"
            @click.self="delnodes(notes)">
      <!-- <ul v-if="notes.isActive " style="margin-left: 20px">
            <TreeItem 
            v-for="child in notes.childData" 
            :key="child.id"  
            :notes="child" 
            :class="{subMenuBaColor: !notes.isActive}" 
            ></TreeItem>
      </ul> -->
    </li>
  </template>

  <script>
    // import TreeItem from '@/pages/tree/TreeItem'
    import {mapActions } from 'vuex'
    export default {
        name: 'TreeItem',
        data() {
            return {
                hoverIndex: -1,
            }
        },
        props: ['notes'],
        components: {
            // TreeItem
        },
        mounted(){
            // console.log(this.notes)
        },
        
        methods: {
            // 切换笔记
            ...mapActions('managenotesAbout',{alterNoteData:'alterNoteData',delNodes:'delNodes',selectAllNotes:'selectAllNotes'}),


            noteChange(value){
                // 笔记切换
                console.log('TreeItem:',value)
                // this.$bus.$emit('treelItmChange',value)
                this.alterNoteData(value)
            },
            leaveMouseover(note) {
                console.log(note.id)
                if(!note.isEdit){
                    // console.log('leaveMouseover')
                    this.hoverIndex = -1;
                }
			},
            handleMouseover(note) {
                console.log(note.id)
                if(!note.isEdit){
                    this.hoverIndex = note.id;
                }
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