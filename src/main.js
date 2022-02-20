import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MyHeader from "./components/MyHeader"

// axios.defaults.baseURL = "http://xzserver.applinzi.com"
axios.defaults.baseURL = "http://localhost:5500";
//设置所有请求地址开头都变成规定的暗号
axios.defaults.baseURL = "/api";
Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.component("my-header", MyHeader)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')