// 该文件用于创建Vuex中最核心的store

// 引入Vue
import Vue from "vue";
// 引入Vuex
import Vuex from 'vuex'

import initializeOptions from './initialize'
import managenotesOptions from './managenotes'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        initializeAbout:initializeOptions,
        managenotesAbout:managenotesOptions,
    }
})