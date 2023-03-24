import { createRouter, createWebHistory } from 'vue-router';

import index from '@/views/index.vue'
import auth from '@/views/auth.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/auth',
            name: 'auth',
            component: auth
        }
    ]
})

export default router