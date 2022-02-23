import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MyHeader from "./components/MyHeader"

// axios.defaults.baseURL = "http://xzserver.applinzi.com"
axios.defaults.baseURL = "http://localhost:5500";
//设置所有请求地址开头都变成规定的暗号
axios.defaults.baseURL = "/api";
Vue.prototype.axios = axios;

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.component("my-header", MyHeader)
Vue.component('my-button', {
    inherit: false,
    template: `<el-button v-bind="$attrs" @click="handleClick"><slot></slot></el-button>`,
    data() {
        return {
            timeStamp: 0
        }
    },
    props: {
        timeGap: {
            type: Number,
            default: function() {
                return 2000
            }
        }
    },
    methods: {
        handleClick() {
            let t = new Date();
            if (t - this.timeStamp > this.timeGap) {
                this.$emit('click');
            } else {
                this.$message.closeAll();
                this.$message.warning('操作太频繁');
            }
            this.timeStamp = t;
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')