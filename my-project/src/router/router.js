import { createRouter, createWebHistory} from "vue-router";
import vLogin from '../components/v-login.vue'
import vApp from '../components/v-app.vue';
import vAnalysis from '@/components/menu/analysis/v-analysis.vue'
import vProducts from '@/components/menu/products/v-products.vue'
import vStorages from '@/components/menu/storages/v-storages.vue'
import vTill from '@/components/menu/till/v-till.vue'
import vStorageForm from '@/components/menu/storages/v-storage-form.vue'
import vProductForm from '@/components/menu/products/v-product-form.vue'
import vTillForm from '@/components/menu/till/v-till-form.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/', 
            name: 'index', 
            component: vLogin,
        },
        {
            path: '/app',
            component: vApp,
            children: [
                {
                    path: 'analysis',
                    component: vAnalysis
                },
                {
                    path: 'products',
                    component: vProducts
                },
                {
                    path: 'storages',
                    component: vStorages,
                },
                {
                    path: 'till',
                    component: vTill
                },
                {
                    path: 'addStorage',
                    component: vStorageForm
                },
                {
                    path: 'addProduct',
                    component: vProductForm
                },
                {
                    path: 'addTill',
                    component: vTillForm
                }
            ]
        },
        
    ]
})

export default router;