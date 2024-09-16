import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'
// 引入md文件编辑器
import VMdEditor from '@kangc/v-md-editor';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';


//引入store
import store from './store'

Vue.config.productionTip = false


VMdEditor.use(createKatexPlugin());
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

Vue.use(VMdEditor);
// 引用插件
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router,
  store:store,
  beforeCreate(){
		// 安全全局事件总线
		Vue.prototype.$bus = this
	},
}).$mount('#app')
