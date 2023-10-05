import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {todoStore} from './stores/todoStore'

const app= createApp(App)
app.use(todoStore)

app.mount('#app')
