import Vue from 'vue'
import App from './App'

//全局注入w-loading组件
import wLoading from "@/components/w-loading.vue";
Vue.component('w-loading',wLoading)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
