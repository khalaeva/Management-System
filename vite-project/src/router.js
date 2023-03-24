import { createRouter, createWebHistory } from 'vue-router';

import index from '@/views/index.vue'
import product from '@/views/Product.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/product:id',
            name: 'product',
            component: product
        }
    ]
})

export default router