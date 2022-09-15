import {createRouter, createWebHashHistory} from 'vue-router'

import Chart from '@/view/chart.vue'
import Editor from '@/view/editor.vue'
import Table from '@/view/table.vue'
import Temp from '@/view/temp.vue'

const routes = [
  { path: '/', component: Chart },
  { path: '/chart', component: Chart },
  { path: '/table', component: Table },
  { path: '/temp', component: Temp },
  { path: '/editor', component: Editor },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

