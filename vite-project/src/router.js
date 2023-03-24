import { createRouter, createWebHistory } from 'vue-router';

import index from '@/views/index.vue'
import auth from '@/views/auth.vue'
import register from '@/views/register.vue'

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
        },
        {
            path: '/register',
            name: 'register',
            component: register
        }
    ]
})

export default router