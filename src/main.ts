import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import { createPinia } from 'pinia'
// @ts-ignore
import { vuexStore } from './stores/vuex'

app.use(createPinia())
app.use(vuexStore)


app.mount('#app')
