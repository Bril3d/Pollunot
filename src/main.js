import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router.js';

const app = createApp(App);

app.use(router);
document.cookie = 'cookie1=value1; SameSite=Lax';
document.cookie = 'cookie2=value2; SameSite=None; Secure';
app.mount('#app')
