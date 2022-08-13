import { createRouter, createWebHistory } from 'vue-router';


import TheMap from './UI/TheMap.vue';
import TheHeader from './UI/TheHeader.vue'

const router = createRouter({

  history: createWebHistory(),
  routes: [
    { path: '/', component: TheHeader },
    { path: '/map', component: TheMap }


  ]
});

export default router;