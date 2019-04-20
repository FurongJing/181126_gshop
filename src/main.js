/**
 * 入口js 创建Vue实例
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router' // 注册路由
import store from './store'
import './mock/mockSever' // 加载mockSever即可

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>

Vue.config.devtools = true
/* eslint-disable no-new */
new Vue({
    el: '#app',
    // components: {
    //     App
    // },
    // template: '<App/>'
    render: h => h(App),
    router, // 使用上vue-router
    store // 使用上vuex
})
