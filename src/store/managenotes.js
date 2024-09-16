import { selectAllCatalog,selectNotesData,SelectNote } from '../service/getData'
import { addcatalog,saveNotesData,delnodes,delcatalog,alterCatalogName,uploadimg } from '../service/alterData'
import {MACKEY} from './initialize'
import Vue from 'vue'

// 管理笔记页面的公共函数和数据
export default {
    namespaced:true,
    actions:{
         // 添加目录
        async addcata(context, catalogName) {
            try {
                // 获取MACKEY
                var userid = window.localStorage.getItem(MACKEY);
                // 调用addcatalog函数并等待返回值
                var response =await addcatalog(catalogName, userid);
                // 打印返回的响应数据
                // console.log(response.msg);
                if(response.code>0){
                    context.commit("ADDCATA",response.data);
                }
                alert(response.msg);
                // alert(response.msg);
                // 在这里可以根据返回的数据进行进一步的处理
                // 例如，根据返回的数据更新state中的notesTree等
            
            } catch (error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
        },
        // 获取所有目录
        async selectAllCatalog(context){
            try{
                // 获取MACKEY
                var userid = window.localStorage.getItem(MACKEY);
                // 调用addcatalog函数并等待返回值
                var response = await selectAllCatalog(userid);
                context.commit('SELECTADDCATALOG',response.data)   
                // 打印返回的响应数据
                console.log(response.data);
                // alert(response.msg);
            } catch(error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
             
        },
        // 删除目录
        async delCatalog(context,id){
            try{
                // 获取MACKEY
                var userid = window.localStorage.getItem(MACKEY);
                // 调用addcatalog函数并等待返回值
                var response = await delcatalog(id,userid);
                if(response.code> 0){
                    context.commit("DELCATALOG",id)
                }
                // 打印返回的响应数据
                console.log(response);
                alert(response.msg);
            } catch(error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
        },
        // 修改目录名称
        async alterCatalog(context,vlaue){
            try{
                console.log("vlaue",vlaue)
                // 获取MACKEY
                var userid = window.localStorage.getItem(MACKEY);
                // 调用addcatalog函数并等待返回值
                var response = await alterCatalogName(vlaue["id"],userid,vlaue["name"]);
                // 打印返回的响应数据
                console.log(response);
                alert(response.msg);
            } catch(error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
        },
        // 获取目录树数据
        async selectAllNotes(context){
            try{
                // 获取MACKEY
                var userid = window.localStorage.getItem(MACKEY);
                // 调用addcatalog函数并等待返回值
                var response = await selectNotesData(userid);
                context.commit('SELECTALLNOTES',response.data)   
                // 打印返回的响应数据
                // console.log(response.data);
                // alert(response.msg);
            } catch(error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
        },
        // 修改当前选择的笔记
        alterNoteData(context,data){
            context.commit('ALTERNOTERDATA',data)
        },
        // 保存笔记
        async saveNotes(context,notes){
            try {
                // 获取MACKEY
                var userid = window.localStorage.getItem(MACKEY);
                // 调用saveNotesData函数并等待返回值
                var response = null
                if(notes["title"] == "" || notes["mdContext"] == "" || notes["catalogid"] == "-1"){
                    alert("标题，内容或者目录错误")
                    return
                }   
                if(notes["id"]==""  ){
                    response =await saveNotesData(notes["id"],userid,MACKEY,notes["title"],notes["catalogid"],notes["mdContext"],'Note/CreateNote');
                    console.log('创建笔记的返回值',response.data)
                    await context.commit("ADDNPTES",response.data)
                }else{
                    response =await saveNotesData(notes["id"],userid,MACKEY,notes["title"],notes["catalogid"],notes["mdContext"],'Note/UpdateNote');
                }
                
                // 打印返回的响应数据
                // console.log(response.msg);
                alert(response.msg);
                
                // alert(response.msg);
                // 在这里可以根据返回的数据进行进一步的处理
                // 例如，根据返回的数据更新state中的notesTree等
            
            } catch (error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
        },
        // 删除笔记
         async delNodes(context,nodes){
            try{
                // 获取MACKEY
                var userid = window.localStorage.getItem(MACKEY);
                // 调用addcatalog函数并等待返回值
                var response = await delnodes(nodes.id,userid);
                // 打印返回的响应数据
                console.log(response);
                alert(response.msg);
                if(response.code>0){
                    await context.commit('DELNODES',nodes);
                }
            } catch(error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
        },
        // 切换浏览页面的笔记数据
        alternotes(context,nodes){
            console.log('nodes',nodes)
            context.commit('ALTERNOTES',nodes);
        },
        // 获取笔记
        async selectNote(context,id){
            try{
                // 获取MACKEY
                var userid = window.localStorage.getItem(MACKEY);
                // 调用addcatalog函数并等待返回值
                var response = await SelectNote(id,userid);
                // 打印返回的响应数据
                // console.log(response.data);
                if(response.code>0){
                    await context.commit('SELECTNOTES',response.data);
                }
                // alert(response.msg);
            } catch(error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
             
        },
        async uploadimages(context,file){
            try{

                // 调用addcatalog函数并等待返回值
                var response = await uploadimg(file);
                if(response.code>0){
                    context.commit("ADDIMAG",response.data)
                }
                alert(response.msg);
            } catch(error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
        }
    },
    mutations:{
        async SELECTADDCATALOG(state,vlaue){
            // console.log("更新数据:",vlaue)
            state.catalogs = vlaue
            state.documentations = vlaue[0].notesChildData
        },
        // 切换管理笔记页面的笔记
        ALTERNOTERDATA(state,vlaue){
            state.noteData = vlaue
            
        },
        async SELECTALLNOTES(state,vlaue){
            // console.log("更新数据:",vlaue)
            state.notesTree = vlaue
        },
        async DELNODES(state,vlaue){
            // 找到要删除的 `childData` 的索引
            const nodesindex = state.notesTree.findIndex(item => item.id === vlaue.catalogid);
            const childindex = state.notesTree[nodesindex].childData.findIndex(item => item.id === vlaue.id);
            //  确保找到了索引
            if (nodesindex !== -1) {
                // 使用 Vue.delete 或 splice 方法删除子项
                // 使用 Vue.delete 方法：
                Vue.delete(state.notesTree[nodesindex].childData, childindex);
            }
        },
        async DELCATALOG(state,vlaue){
            const nodesindex = state.notesTree.findIndex(item => item.id === vlaue);
            //  确保找到了索引
            if (nodesindex !== -1) {
                // 使用 Vue.delete 或 splice 方法删除子项
                // 使用 Vue.delete 方法：
                Vue.delete(state.notesTree, nodesindex);
            }
        },
        // 切换浏览页面的笔记数据
        ALTERNOTES(state,vlaue){
            state.documentations = vlaue
        },
        // 切换浏览页面的笔记数据
        async SELECTNOTES(state,vlaue){
            state.title = vlaue.title
            state.markdown = vlaue.markdown
            state.recordTime = vlaue.recordTime
        },
        async ADDNPTES(state,vlaue){
            // 保存成功后,在源数据上添加一行
            const nodesindex = state.notesTree.findIndex(item => item.id === vlaue.catalogid);
            state.notesTree[nodesindex].childData.push(vlaue)
            state.noteData = vlaue
        },
        // 添加图片
        async ADDIMAG(state,vlaue){
            state.noteData.mdContext += vlaue
        },
        async ADDCATA(state,vlaue){
            state.notesTree.push(vlaue)
        }

    },
    state:{
        notesTree:[
                    // {
                    //     id:'001',
                    //     name:'web前端',
                    //     isActive:true,
                    //     isEdit:false,
                    //     childData:[
                    //         {id:'001',title:'html问题1',catalogid:'001',mdContext:'## html问题1',childData:[]},
                    //         {id:'002',title:'html问题2',catalogid:'002',mdContext:'## html问题2',childData:[]},
                    //     ],
                        
                    // },
                    // {
                    //     id:'002',
                    //     name:'C#学习笔记',
                    //     isActive:false,
                    //     isEdit:false,
                    //     childData:[
                            
                    //     ],
                    // },
                    
        ],
        catalogs:[
            // {id:'001',name:'数学'},
            // {id:'002',name:'SQL数据库'},
            // {id:'003',name:'算法'},
        ],
        noteData:{
            "id":"",
            "title":"",
            "mdContext":"",
            "catalogid":-1
        },
        notesIndex:-1,
        documentations:[],
        title:'SQL理论',
        markdown:'### 文件结构',
        recordTime:'2023-7-22 17:10',
    },
    getters:{
        notesTree:state => {
            // 目录树数据
            return state.notesTree
        },
        catalogs:state => {
            // 目录数据
            return state.catalogs
        },
        noteData:state=>{
            // 笔记数据
            return state.noteData
        },
        documentations:state=>{
            // 浏览笔记树数据
            return state.documentations
        },
        title:state => {
            // 笔记标题数据
            return state.title
        },
        markdown:state=>{
            // 笔记内容数据
            return state.markdown
        },
        recordTime:state=>{
            // 笔记时间数据
            return state.recordTime
        }
    }
}