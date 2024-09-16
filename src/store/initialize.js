import { QueryUser} from '../service/getData'

// 初始化数据
export const MACKEY = '98-FA-9B-8C-CF-54';
export const USERCOER = window.localStorage.getItem(MACKEY);



export default {
    namespaced:true,
    actions:{
        // 判断用户
        async queryuser(context){
            try{
                // 调用addcatalog函数并等待返回值
                var response = await QueryUser(MACKEY);
                context.commit('QUERUSER',response.data)   
                // 打印返回的响应数据
                console.log(response.data);
                // alert(response.msg);
            } catch(error) {
                // 如果发生错误，可以在这里进行错误处理
                console.error('添加目录失败', error);
            }
             
        },
    },
    mutations:{
        async QUERUSER(state,vlaue){
            state.mensDatas = vlaue
        }
    },
    state:{
        mensDatas:[],
    },
    getters:{
        mensDatas:state=>{
            return state.mensDatas
        }
    }
}