import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from '@/route/index'

import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css';

createApp(App)
    .use(route)
    .use(TDesign)
    .mount('#app')
