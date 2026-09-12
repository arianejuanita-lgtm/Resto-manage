import './assets/main.css'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import { useRoute,useRouter } from 'vue-router';
import { createApp } from 'vue'
import App from './App.vue'
import Oder from './components/oder.vue';
import Home from './home.vue';

const routes =[
 { path: '/', component: Home },
  { path: '/oder', component: Oder },
{}
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
