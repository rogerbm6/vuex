import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index.js'

//import './assets/main.css'

createApp(App).use(Vuex).use(store).mount('#app')
