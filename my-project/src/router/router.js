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
import vBuyers from "@/components/menu/buyers/v-buyers.vue"
import vBuyersForm from "@/components/menu/buyers/v-buyers-form.vue"
import vProductsPosting from "@/components/menu/products/v-products-posting.vue"
import vProductsPostingForm from "@/components/menu/products/v-product-posting-form.vue";

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
                    component: vProducts,

                },
                {
                    path: 'addProduct',
                    component: vProductForm
                },
                {
                    path: 'productPosting',
                    component: vProductsPosting,
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
                    path: ':storageName',
                    component: vTillForm
                },
                {
                    path: 'buyers',
                    component: vBuyers
                },
                {
                    path: 'addBuyers',
                    component: vBuyersForm
                },
                {
                    path: 'productPosting/:postingToStorage',
                    component: vProductsPostingForm
                }
            ]
        },
        
    ]
})

export default router;