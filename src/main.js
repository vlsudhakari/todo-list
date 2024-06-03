import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import vuetify from './plugins/vuetify'; // Import the Vuetify plugin

import 'vuetify/styles'; // using css-loader is required
import '@mdi/font/css/materialdesignicons.css'; // css-loader is required
import './styles/variables.scss'; // global SCSS variables


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vuetify) // Use the Vuetify plugin


app.mount('#app')
