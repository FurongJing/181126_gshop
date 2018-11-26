/**
 * 入口js 创建Vue实例
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router' // 注册路由
/* eslint-disable no-new */
new Vue({
    el: '#app',
    // components: {
    //     App
    // },
    // template: '<App/>'
    render: h => h(App),
    router
})
