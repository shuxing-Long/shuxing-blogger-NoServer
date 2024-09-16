// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import MainAssembly from "../components/MainAssembly";
import ManageNotes from "../components/ManageNotes";
import SubjectAssembly from "../components/SubjectAssembly";
import ViewNotes from "../components/ViewNotes";

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

// 创建一个路由
export default new VueRouter({
    routes:[
        {
            name:'mainAssembly',
            path:'/mainAssembly',
            component:MainAssembly
        },
        {
            name:'manageNotes',
            path:'/manageNotes',
            component:ManageNotes
        },
        {
            name:'subjectAssembly',
            path:'/subjectAssembly',
            component:SubjectAssembly
        },
        {
            name:'viewNotes',
            path:'/viewNotes',
            component:ViewNotes,
            props($route){
                return {id:$route.query.id}
            }
        },
    ]
})