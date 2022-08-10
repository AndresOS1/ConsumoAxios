import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from  'bootstrap-vue' 

// Importar archivos Bootstrap y BootstrapVue CSS (el orden es importante) 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/js/dist/carousel'
import 'bootstrap-vue/dist/bootstrap-vue'




createApp(App).use(store).use(router).mount('#app')
