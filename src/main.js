import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

createApp(App).use(router).mount('#app')
